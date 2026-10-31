---
layout: home

hero:
  name: R-Dir
  text: 跨平台双栏文件管理器
  tagline: 基于 Tauri 2 + Rust + React 的资源管理器式文件管理工具——多标签 · 分屏 · QuickJump · 双引擎搜索 · 目录比对同步 · SFTP
  actions:
    - theme: brand
      text: 使用指南
      link: /guide
    - theme: alt
      text: 功能演示
      link: /shots
    - theme: alt
      text: 快捷键速查
      link: /keys
    - theme: alt
      text: 下载安装包
      link: https://github.com/cangyunye/R-Dir/releases

features:
  - icon: 🗂️
    title: 多标签页与分屏
    details: 彩色标签、拖拽排序、双击重命名；VSCode 式左右 / 上下 / 四宫格分屏，跨窗格拖拽（默认复制，Option/Alt 移动）。
  - icon: ⌨️
    title: QuickJump 快速定位
    details: 列表聚焦时键入即弹出 fzf 式模糊匹配浮层，实时高亮、驱动列表滚动定位，回车直达。
  - icon: 🔍
    title: 双引擎搜索
    details: 文件名检索（fd 引擎，尊重 .gitignore）+ 内容搜索（行号 + 关键词高亮，自动跳过二进制 / 超大文件）。
  - icon: 🔁
    title: 比对与同步
    details: 一~三层目录差异比对、同步浏览联动导航、行级文本 diff（多编码）、Git Diff 直接渲染。
  - icon: 🌐
    title: 远程与分享
    details: SFTP 密码 / 密钥双认证 + 连接池；HTTP autoindex 目录；目录一键分享（token、二维码、断点续传）。
  - icon: ↩️
    title: 撤销与剪贴板互操作
    details: 复制 / 移动 / 重命名 / 删除全部可撤销重做；与系统剪贴板双向互通；同名冲突逐条裁决。
  - icon: 🖼️
    title: 预览与归档
    details: 预览抽屉原图 / GIF、图文浏览模式；右键压缩 zip / tar / tgz，右键解压全格式（GBK 文件名自动修正）。
  - icon: 🧩
    title: 插件化与自定义
    details: 内置 sftp / http / opener / terminal / cmdrun 插件可启停；快捷键全量自定义；会话恢复 + 标签收藏夹。
---

## 先睹为快

![R-Dir 主界面——多标签、彩色标签块、详情列表与状态栏](/shots/01-main-light.png)

主界面：多标签页（彩色色块）、地址栏面包屑、左侧快速访问 / 标签 / 磁盘 / SFTP 分组、lsd 风格详情列表。

![左右分屏——每个窗格独立路径与状态](/shots/07-split-row.png)

左右分屏：每个窗格独立拥有路径、历史、排序与选中状态，窗格头带独立面包屑路径条。

![内容搜索——R-Dir-L10n 语言包中检索「打开」，行号与关键词高亮](/shots/10-search-content.png)

内容搜索：递归检索当前目录，行号定位 + 关键词高亮，双击即可用系统程序打开。
