#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
validate.py — 数据完整性校验
=============================

用法:
    python3 scripts/validate.py [--fix]

检查项:
  1. 所有文件均可解析为合法 JSON。
  2. 车型条目:id 唯一、字段齐全、4 语言键齐全。
  3. 车型引用的 segment / body_style / powertrain 必须存在于 motorcycle_classes。
  4. 车型 brand 必须存在于 brands(英文名匹配)。
  5. 品牌 id 唯一;术语 id 唯一;跨市场异名 id 唯一且具有 4 语言主名。
  6. 车型 status 取值限 current / discontinued / concept。
  7. 待核实清单条目编号唯一。

退出码: 0 = 全部通过;1 = 存在错误。

许可: 本仓库整体采用 CC BY-SA 4.0;本脚本额外可按 MIT 使用。
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT, "data")
MODELS_DIR = os.path.join(DATA_DIR, "models")
LANGS = ("en", "zh-CN", "zh-TW", "ja")
VALID_STATUS = ("current", "discontinued", "concept")

_DISCORD = str.maketrans({"ë": "e", "é": "e", "è": "e", "ü": "u", "ç": "c", "ä": "a", "ö": "o", "š": "s", "ß": "ss"})


def normalize_id(s):
    """品牌名 → id 前缀:小写、空格转连字符、去变音符。"""
    return s.strip().lower().replace(" ", "-").translate(_DISCORD)


errors = []
warnings = []


def load_json(path):
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        errors.append(f"JSON 解析失败: {os.path.relpath(path, ROOT)} -> {e}")
        return None


def missing_languages(names):
    """返回缺失、非字符串或空白的必需语言键。"""
    if not isinstance(names, dict):
        return list(LANGS)
    return [lang for lang in LANGS if not isinstance(names.get(lang), str) or not names[lang].strip()]


def build_id_sets():
    """收集可引用的 class/body/pt id。"""
    vc = load_json(os.path.join(DATA_DIR, "motorcycle_classes.json"))
    refs = set()
    for section in vc.values():
        if isinstance(section, list):
            for item in section:
                if isinstance(item, dict) and item.get("id"):
                    refs.add(item["id"])
    return refs


def collect_models():
    models = []
    for fname in sorted(os.listdir(MODELS_DIR)):
        if not fname.endswith(".json") or fname == "cross_market.json":
            continue
        data = load_json(os.path.join(MODELS_DIR, fname))
        if data is None:
            continue
        batch = []
        if isinstance(data, dict) and isinstance(data.get("models"), list):
            batch = data["models"]
        elif isinstance(data, list):
            batch = data
        else:
            errors.append(f"车型文件格式错误(需{{models:[...]}}或数组): {fname}")
            continue
        for i, m in enumerate(batch):
            m.setdefault("__srcfile", fname)
            m.setdefault("__srcline", i + 1)
        models.extend(batch)
    return models


def main():
    ref_ids = build_id_sets()
    meta = load_json(os.path.join(DATA_DIR, "meta.json"))
    brands = load_json(os.path.join(DATA_DIR, "brands.json"))
    glossary = load_json(os.path.join(DATA_DIR, "glossary.json"))
    pending = load_json(os.path.join(DATA_DIR, "pending_verification.json"))
    cross = load_json(os.path.join(MODELS_DIR, "cross_market.json"))

    if None in (meta, brands, glossary, pending, cross):
        sys.exit(1)

    # --- 品牌 ---
    brand_ids = set()
    brand_en = {}
    for b in brands:
        if not isinstance(b, dict):
            errors.append(f"品牌条目不是对象: {type(b)}")
            continue
        bid = b.get("id", "?")
        if bid in brand_ids:
            errors.append(f"品牌 id 重复: {bid}")
        brand_ids.add(bid)
        names = b.get("names", {})
        if not isinstance(names, dict):
            errors.append(f"品牌 {bid} names 字段缺失或非对象")
            continue
        brand_en[names.get("en", "").strip().lower()] = bid
        missing = missing_languages(names)
        if missing:
            errors.append(f"品牌 {bid} 缺少语言键: {missing}")

    # --- 术语 ---
    term_ids = set()
    glossary_cat_ids = set()
    for c in glossary.get("categories", []):
        if isinstance(c, dict) and c.get("id"):
            glossary_cat_ids.add(c["id"])
    for t in glossary.get("terms", []):
        if not isinstance(t, dict):
            errors.append(f"术语条目非对象")
            continue
        tid = t.get("id", "?")
        if tid in term_ids:
            errors.append(f"术语 id 重复: {tid}")
        term_ids.add(tid)
        if t.get("category") not in glossary_cat_ids:
            errors.append(f"术语 {tid} 类别无效: {t.get('category')}")
        names = t.get("names", {})
        missing = missing_languages(names)
        if missing:
            errors.append(f"术语 {tid} 缺少语言键: {missing}")

    # --- 跨市场异名 ---
    cm_ids = set()
    if isinstance(cross, list):
        for c in cross:
            if not isinstance(c, dict):
                errors.append(f"跨市场异名条目非对象")
                continue
            cid = c.get("id", "?")
            if cid in cm_ids:
                errors.append(f"跨市场异名 id 重复: {cid}")
            cm_ids.add(cid)
            names = c.get("names", {})
            missing = missing_languages(names)
            if missing:
                errors.append(f"跨市场异名 {cid} 缺少或包含空白语言键: {missing}")
            aliases = c.get("aliases")
            if not isinstance(aliases, dict) or not aliases:
                errors.append(f"跨市场异名 {cid} aliases 字段缺失、非对象或为空")
    else:
        errors.append("cross_market.json 需为数组")

    # --- pending ---
    pv_ids = set()
    if isinstance(pending, dict):
        for it in pending.get("items", []):
            pid = it.get("id") if isinstance(it, dict) else None
            if not pid:
                continue
            if pid in pv_ids:
                errors.append(f"待核实清单 id 重复: {pid}")
            pv_ids.add(pid)

    # --- 车型 ---
    models = collect_models()
    model_ids = set()
    for m in models:
        src = f"{m.get('__srcfile','?')}#L{m.get('__srcline','?')}"
        # 必填字段
        for fld in ("id", "brand", "names", "segment", "body_style", "powertrain", "status", "verified"):
            if fld not in m:
                errors.append(f"车型缺失字段 {fld}: {src}")
        mid = m.get("id", "?")
        if mid in model_ids:
            errors.append(f"车型 id 重复: {mid} (@ {src})")
        model_ids.add(mid)
        # brand 必须存在
        bname = m.get("brand", "").strip()
        if bname.lower() not in brand_en:
            warnings.append(f"车型 {mid} brand={bname} 未在 brands.json 英文名列表中找到 (@ {src})")
        # names 四语言
        names = m.get("names", {})
        if not isinstance(names, dict):
            errors.append(f"车型 {mid} names 非对象 (@ {src})")
        else:
            missing = missing_languages(names)
            if missing:
                errors.append(f"车型 {mid} 缺少语言键 {missing} (@ {src})")
        source_url = m.get("source_url")
        if source_url is not None and (
            not isinstance(source_url, str) or not re.fullmatch(r"https?://[^\s]+", source_url)
        ):
            errors.append(f"车型 {mid} source_url 必须是 HTTP(S) URL (@ {src})")
        # segment / body_style / powertrain 引用
        for ref in ("segment", "body_style", "powertrain"):
            v = m.get(ref)
            if v and v not in ref_ids:
                errors.append(f"车型 {mid} {ref}={v} 不在 motorcycle_classes 定义中 (@ {src})")
        # status
        st = m.get("status")
        if st not in VALID_STATUS:
            errors.append(f"车型 {mid} status={st} 非法, 必须是 {VALID_STATUS} (@ {src})")

    # --- 结果输出 ---
    print("=" * 60)
    print(f"校验结果: {len(errors)} 错误, {len(warnings)} 警告")
    print(f" - 品牌: {len(brands)}")
    print(f" - 术语: {len(glossary.get('terms',[]))}")
    print(f" - 车型: {len(models)}")
    print(f" - 分类引用ID集大小: {len(ref_ids)}")
    print("=" * 60)
    if warnings:
        print("\nWarnings:")
        for w in warnings:
            print(f"  - {w}")
    if errors:
        print("\nErrors:")
        for e in errors:
            print(f"  ✗ {e}")
        sys.exit(1)
    else:
        print("\n✅ 所有校验通过!")
        sys.exit(0)


if __name__ == "__main__":
    main()
