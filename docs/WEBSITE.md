# MotorcycleName 官网维护

[文档索引](README.md) · [开发指南](DEVELOPMENT.md)

## 源码与发布产物

- 官网源码：[`website/`](../website/)，包含页面、推广脚本、robots 与 sitemap。
- 公开地址：https://ixiehao.github.io/MotorcycleName/
- 完整数据：`dist/motorcycle-names-database.json`。
- 预览生成器：`scripts/build_pages_preview.py`。
- 部署工作流：[`deploy-pages.yml`](../.github/workflows/deploy-pages.yml)。

`docs/` 仅放维护文档。权威数据与生成数据保留原位置，部署时组合到临时 `_site/`，不在 `website/` 复制一份手工维护的数据。

## 本地预览

以下命令从仓库根目录运行。先按[开发指南](DEVELOPMENT.md)确认生成数据存在并与源数据一致：

```sh
mkdir -p _site/data
cp -R website/. _site/
cp dist/motorcycle-names-database.json _site/data/motorcycle-names-database.json
python3 scripts/build_pages_preview.py dist/motorcycle-names-database.json _site/data/motorcycle-names-preview.json
python3 -m http.server 8000 --bind 127.0.0.1 --directory _site
```

打开 <http://127.0.0.1:8000/>。`_site/` 是可再生成的本地产物，不提交。直接服务 `website/` 时可能缺少本地数据；不能只依赖远程回退判断预览成功。复用预览目录前检查其中是否有旧页面遗留。

## 验证

```sh
node --check website/promotion.js
git diff --check
```

检查英语、简体中文、繁体中文、日语，品牌筛选、搜索、状态、清空条件和窄屏。确认预览 JSON 与完整 JSON 均返回成功，并抽查实际数据。站内脚本有内联部分，需同时检查页面浏览器控制台。

## 发布

Pages 使用 **GitHub Actions**。工作流监听官网、完整数据、预览生成器和自身配置；先复制 `website/`，再加入数据并上传 `_site/`。公开地址不增加 `website/`。

取得发布授权后推送；部署完成再回读官网、语言与搜索功能、数据请求、robots 和 sitemap。源码移动不需要重发数据库版本或更改数据许可。
