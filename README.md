# R-Dir-Docs

[R-Dir](https://github.com/cangyunye/R-Dir)（跨平台文件管理器，Tauri 2 + Rust + React）的官方使用说明站点，基于 [VitePress](https://vitepress.dev) 构建，部署在 GitHub Pages：

**https://cangyunye.github.io/R-Dir-Docs/**

## 内容结构

- `site/index.md` — 首页：简介、特性网格、先睹为快
- `site/guide.md` — 使用指南（迁移自主仓库 `docs/user-guide.md`）
- `site/shots.md` — 功能演示截图画廊
- `site/public/shots/` — 演示截图（来自主仓库 `e2e-shots/demo-shots.mjs` 的产物）

## 本地开发

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # 产物 site/.vitepress/dist
pnpm preview
```

## 部署

推送到 `main` 即自动触发 `.github/workflows/pages.yml` 构建部署
（仓库 Settings → Pages → Source 需选「GitHub Actions」，一次性设置）。
