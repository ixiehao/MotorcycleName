# MotorcycleName 开发与数据维护

[文档索引](README.md) · [贡献指南](../CONTRIBUTING.md)

## 环境与目录

建议使用 Python 3.11；官网为原生 HTML / JavaScript，不需要 npm 构建。

- `data/`：品牌、车型、术语、分类与核验状态的权威数据。
- `scripts/`：校验、合并与官网预览数据生成脚本。
- `dist/`：已跟踪的生成 JSON / Markdown，供使用者直接下载。
- `website/`：官网源码；`assets/`：根 README 使用的展示资源。
- `docs/`：维护文档；`.github/workflows/`：Pages 部署。

## 维护顺序

先确认来源与多语言命名，再修改 `data/`，执行验证和构建，审查数据差异，最后预览官网。保留原有 ID、引用关系和核验状态；新增或修正名称应附可复核来源。

## 验证与构建

从仓库根目录运行：

```sh
python3 scripts/validate.py
python3 scripts/build.py
git diff -- dist
git diff --check
```

构建会更新 `dist/`；提交源数据时一起审查生成结果，不将已跟踪的分发数据误加入忽略规则。当前工作流只负责官网部署，不能将部署成功当作数据校验通过；发布前需完成上述本地校验。

## 官网与版本

官网从生成数据构建小型预览与完整检索数据，详见 [WEBSITE.md](WEBSITE.md)。数据修正同步 [CHANGELOG](../CHANGELOG.md)；只整理文档或官网目录时不虚增数据版本。使用与再分发以 [LICENSE](../LICENSE) 及[免责声明](../DISCLAIMER.md)为准。
