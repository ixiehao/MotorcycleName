# 更新日志 / Changelog

本项目遵循 [Keep a Changelog](https://keepachangelog.com/) 与 [语义化版本](https://semver.org/lang/zh-CN/)。

The format follows [Keep a Changelog](https://keepachangelog.com/) and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.1.1] — 2026-10-16

补充 2025、2026 中国摩博会已确认的新车：Honda CB500 SUPER FOUR、CBR500R FOUR，奔达吉普赛系列，以及张雪机车 600V 和 820RR-RC；同时修订张雪机车本届已发布车型的信息。P51 Concept 因公开规格尚不完整，列入待核验清单。新增/更新车型现可带 `source_url`，校验脚本会检查其为有效 HTTP(S) 地址。

Added verified 2025–2026 China International Motorcycle Trade Exhibition entries: Honda CB500 SUPER FOUR and CBR500R FOUR, Benda's Gypsy series, plus ZXMOTO's 600V and 820RR-RC; updated the exhibition information for already listed ZXMOTO models. P51 Concept is tracked as pending until complete public specifications are available. New or updated models can now carry a `source_url`, which validation checks as an HTTP(S) URL.

## [1.1.0] — 2026-08-29

跨市场异名条目现已具备英语、简体中文、繁体中文和日语主名，并由校验脚本强制检查；合并 Markdown 产物同步展示四种语言。

Cross-market alias entries now provide English, Simplified Chinese, Traditional Chinese, and Japanese primary names, enforced by validation and displayed in the merged Markdown output.

## [1.0.0] — 2026-08-10

首个版本：多语言摩托车车名资料库。

First release: Multilingual Motorcycle Name Database.

- 90 个品牌，覆盖 15 个国家与地区 / 90 brands across 15 countries/regions
- 1,585 款车型，四语言（英/简/繁/日）覆盖 / 1,585 models in four languages (EN/zh-CN/zh-TW/JA)
- 41 个分类、116 条术语、77 条跨市场异名 / 41 classes, 116 glossary terms, 77 cross-market aliases
- 中英双语文档（README、CONTRIBUTING、DISCLAIMER 等）/ Bilingual docs (README, CONTRIBUTING, DISCLAIMER, etc.)
- 采用 CC BY-SA 4.0 许可 / Licensed under CC BY-SA 4.0
