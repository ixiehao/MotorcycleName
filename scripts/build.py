#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build.py — 合并 data/ 拆分数据,生成 dist/ 合并产物
==================================================

用法:
    python3 scripts/build.py [--out-dir dist]

说明:
    data/ 目录下的文件是唯一数据源(SSOT)。本脚本将它们合并为:
      - dist/motorcycle-names-database.json   机器可读版
      - dist/motorcycle-names-database.md     人类可读版(表格化)

    data/models/*.json 中每个文件为一组车型(通常按品牌),文件名不含
    cross_market.json。合并时会按 (brand, id) 排序,保证输出稳定,便于
    GitHub 上的 diff 审查。

许可: 本仓库整体采用 CC BY-SA 4.0;构建脚本额外可按 MIT 使用。
"""
import argparse
import glob
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT, "data")
MODELS_DIR = os.path.join(DATA_DIR, "models")

LANGS = ("en", "zh-CN", "zh-TW", "ja")
LANG_LABELS = {"en": "English", "zh-CN": "简体中文", "zh-TW": "繁體中文", "ja": "日本語"}


def load_json(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def collect_models():
    """读取 data/models/*.json(排除 cross_market.json),返回模型列表。"""
    models = []
    for fname in sorted(os.listdir(MODELS_DIR)):
        if not fname.endswith(".json") or fname == "cross_market.json":
            continue
        data = load_json(os.path.join(MODELS_DIR, fname))
        if isinstance(data, dict) and isinstance(data.get("models"), list):
            models.extend(data["models"])
        elif isinstance(data, list):
            models.extend(data)
    # 稳定排序,便于 diff
    models.sort(key=lambda m: (m.get("brand", ""), m.get("id", "")))
    return models


def apply_name_origins(models):
    """把人工核验的车名释义按稳定车型 ID 合并进数据库。"""
    by_id = {}
    paths = sorted(glob.glob(os.path.join(DATA_DIR, "name_origins*.json")))
    for path in paths:
        document = load_json(path)
        entries = document.get("models", []) if isinstance(document, dict) else []
        if not isinstance(entries, list):
            raise ValueError(f"车名释义文件必须包含 models 数组: {os.path.basename(path)}")
        for entry in entries:
            model_id = entry.get("id")
            if not model_id or model_id in by_id:
                raise ValueError(f"车名释义 ID 缺失或重复: {model_id} ({os.path.basename(path)})")
            by_id[model_id] = entry

    models_by_id = {model.get("id"): model for model in models}
    unknown_ids = sorted(set(by_id) - set(models_by_id))
    if unknown_ids:
        raise ValueError(f"车名释义引用了不存在的车型: {', '.join(unknown_ids)}")

    for model_id, entry in by_id.items():
        models_by_id[model_id]["name_origin"] = {
            key: value for key, value in entry.items() if key != "id"
        }
    return models


def coverage_counts(meta, n_models, n_brands, n_glossary, n_classes, n_cross):
    counts = dict(meta.get("coverage", {}))
    counts["brands"] = n_brands
    counts["models"] = n_models
    counts["cross_market_aliases"] = n_cross
    counts["motorcycle_classes"] = n_classes
    counts["glossary_terms"] = n_glossary
    return counts


def render_markdown(merged):
    """把合并后的数据渲染成 Markdown 表格文档。"""
    meta = merged["meta"]
    lines = []
    lines.append("# 多语言摩托车车名资料库(Multilingual Motorcycle Name Database)")
    lines.append("")
    lines.append(f"> 更新日期: {meta['updated']}<br>")
    lines.append(f"> 数据库版本: v{meta['database_version']}<br>")
    lines.append(f"> 许可证: {meta['license']}")
    lines.append("")
    lines.append("---")
    lines.append("")

    # 统计摘要
    cv = meta["coverage"]
    lines.append("## 0. 覆盖概览")
    lines.append("")
    lines.append(f"- 品牌: **{cv.get('brands', 0)}**")
    lines.append(f"- 车型: **{cv.get('models', 0)}**")
    lines.append(f"- 级别分类子类: **{cv.get('motorcycle_classes', 0)}**")
    lines.append(f"- 术语条目: **{cv.get('glossary_terms', 0)}**")
    lines.append(f"- 跨市场异名: **{cv.get('cross_market_aliases', 0)}**")
    lines.append(f"- 支持语言: {', '.join(meta.get('languages', []))}")
    lines.append("")
    lines.append("---")
    lines.append("")

    # 1. 级别分类 motorcycle_classes
    mc = merged["motorcycle_classes"]
    lines.append("## 1. 级别分类 (Motorcycle Classes / Categories)")
    lines.append("")

    sections = [
        ("排量分级 Displacement", "displacement_classes", ["id", "en", "zh-CN", "zh-TW", "ja", "standard"]),
        ("欧盟驾照 EU License", "eu_license_classes", ["id", "en", "zh-CN", "zh-TW", "ja", "standard"]),
        ("日本自動車区分 Japanese", "jp_categories", ["id", "en", "zh-CN", "zh-TW", "ja", "standard"]),
        ("车身形式 Body Style", "body_styles", ["id", "en", "zh-CN", "zh-TW", "ja", "examples"]),
        ("动力类型 Powertrain", "powertrain_types", ["id", "en", "zh-CN", "zh-TW", "ja", "note"]),
    ]
    for title, key, cols in sections:
        items = mc.get(key, [])
        if not items:
            continue
        lines.append(f"### 1.{sections.index((title,key,cols))+1} {title}")
        lines.append("")
        lines.append("| " + " | ".join(cols) + " |")
        lines.append("| " + " | ".join(["---"] * len(cols)) + " |")
        for it in items:
            row = []
            for c in cols:
                v = str(it.get(c, "")).replace("|", "\\|").replace("\n", " ")
                row.append(v)
            lines.append("| " + " | ".join(row) + " |")
        lines.append("")

    lines.append("---")
    lines.append("")

    # 2. 术语 Glossary
    gl = merged["glossary"]
    lines.append("## 2. 专业术语 (Glossary)")
    lines.append("")
    lines.append("共 {} 个分类,{} 条术语。".format(len(gl["categories"]), len(gl["terms"])))
    lines.append("")
    for cat in gl["categories"]:
        cid = cat["id"]
        lines.append(f"### 2.{cat['name']}")
        lines.append("")
        lines.append("| ID | English | 简体中文 | 繁體中文 | 日本語 | Abbr | 说明 |")
        lines.append("|----|---------|----------|----------|--------|------|------|")
        for t in gl["terms"]:
            if t["category"] != cid:
                continue
            nm = t["names"]
            note = t.get("note", "").replace("|", "\\|").replace("\n", " ")
            lines.append(
                f"| {t['id']} | {nm.get('en','')} | {nm.get('zh-CN','')} | {nm.get('zh-TW','')} | {nm.get('ja','')} | {t.get('abbr','')} | {note} |"
            )
        lines.append("")

    lines.append("---")
    lines.append("")

    # 3. 品牌 Brands
    brands = merged["brands"]
    lines.append("## 3. 品牌名录 (Brands)")
    lines.append("")
    # 按国家分组
    country_groups = {}
    for b in brands:
        country_groups.setdefault(b.get("country", "未知"), []).append(b)
    for country in sorted(country_groups.keys()):
        cbs = sorted(country_groups[country], key=lambda x: x["names"]["en"])
        lines.append(f"### 3.{country}")
        lines.append("")
        lines.append("| ID | English | 简体中文 | 繁體中文 | 日本語 | 备注 |")
        lines.append("|----|---------|----------|----------|--------|------|")
        for b in cbs:
            nm = b["names"]
            note = b.get("note", "").replace("|", "\\|").replace("\n", " ")
            lines.append(
                f"| {b['id']} | {nm.get('en','')} | {nm.get('zh-CN','')} | {nm.get('zh-TW','')} | {nm.get('ja','')} | {note} |"
            )
        lines.append("")

    lines.append("---")
    lines.append("")

    # 4. 车型 Models
    lines.append("## 4. 车型名录 (Models)")
    lines.append("")
    models = merged["models"]["list"]
    # 按品牌分组
    brand_groups = {}
    for m in models:
        brand_groups.setdefault(m.get("brand", "未知"), []).append(m)
    for brand in sorted(brand_groups.keys()):
        mds = sorted(brand_groups[brand], key=lambda x: x["id"])
        lines.append(f"### 4.{brand} ({len(mds)}款)")
        lines.append("")
        lines.append("| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |")
        lines.append("|----|---------|----------|----------|--------|------|------|------|------|----------|------|")
        for m in mds:
            nm = m["names"]
            note = m.get("note", "").replace("|", "\\|").replace("\n", " ")
            lines.append(
                f"| {m['id']} | {nm.get('en','')} | {nm.get('zh-CN','')} | {nm.get('zh-TW','')} | {nm.get('ja','')} | {m.get('segment','')} | {m.get('body_style','')} | {m.get('powertrain','')} | {m.get('status','')} | {m.get('years','')} | {note} |"
            )
        lines.append("")

    lines.append("---")
    lines.append("")

    # 5. 跨市场异名 Cross Market
    cm = merged["models"].get("cross_market", [])
    lines.append("## 5. 跨市场异名对照 (Cross-Market Aliases)")
    lines.append("")
    if cm:
        lines.append("| ID | English | 简体中文 | 繁體中文 | 日本語 | 别名/市场对照 |")
        lines.append("|----|---------|----------|----------|--------|---------------|")
        for c in cm:
            names = c.get("names", {})
            aliases = "; ".join([f"{k}:{v}" for k, v in c.get("aliases", {}).items()])
            lines.append(
                f"| {c.get('id','')} | {names.get('en', c.get('main',''))} | "
                f"{names.get('zh-CN', c.get('main',''))} | {names.get('zh-TW', c.get('main',''))} | "
                f"{names.get('ja', c.get('main',''))} | {aliases} |"
            )
    else:
        lines.append("(暂无数据)")
    lines.append("")

    lines.append("---")
    lines.append("")
    lines.append(f"*本文件由 scripts/build.py 生成,请勿手动编辑。修改请在 data/ 目录下进行。*")
    lines.append("")
    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(description="Merge data/ into dist/")
    parser.add_argument("--out-dir", default=os.path.join(ROOT, "dist"))
    args = parser.parse_args()

    meta = load_json(os.path.join(DATA_DIR, "meta.json"))
    motorcycle_classes = load_json(os.path.join(DATA_DIR, "motorcycle_classes.json"))
    glossary = load_json(os.path.join(DATA_DIR, "glossary.json"))
    brands = load_json(os.path.join(DATA_DIR, "brands.json"))
    cross_market = load_json(os.path.join(MODELS_DIR, "cross_market.json"))
    pending = load_json(os.path.join(DATA_DIR, "pending_verification.json"))
    models = apply_name_origins(collect_models())

    # 统计分类条目数
    n_classes = 0
    for section in motorcycle_classes.values():
        if isinstance(section, list):
            n_classes += len(section)

    meta["coverage"] = coverage_counts(
        meta,
        len(models),
        len(brands),
        len(glossary.get("terms", [])),
        n_classes,
        len(cross_market) if isinstance(cross_market, list) else 0,
    )
    meta["updated"] = meta.get("updated", "unknown")

    merged = {
        "schema_version": meta["schema_version"],
        "meta": meta,
        "motorcycle_classes": motorcycle_classes,
        "glossary": glossary,
        "brands": brands,
        "models": {
            "list": models,
            "cross_market": cross_market,
        },
        "pending_verification": pending,
    }

    os.makedirs(args.out_dir, exist_ok=True)
    json_path = os.path.join(args.out_dir, "motorcycle-names-database.json")
    md_path = os.path.join(args.out_dir, "motorcycle-names-database.md")

    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(merged, f, ensure_ascii=False, indent=2)
        f.write("\n")

    md = render_markdown(merged)
    with open(md_path, "w", encoding="utf-8") as f:
        f.write(md)

    print(f"[OK] Wrote {json_path} ({len(models)} models)")
    print(f"[OK] Wrote {md_path}")
    print(f"     - Brands: {len(brands)}")
    print(f"     - Models: {len(models)}")
    print(f"     - Classes entries: {n_classes}")
    print(f"     - Glossary terms: {len(glossary.get('terms',[]))}")
    print(f"     - Cross-market aliases: {len(cross_market) if isinstance(cross_market,list) else 0}")


if __name__ == "__main__":
    main()
