# 功能演示截图

以下截图均来自 R-Dir v0.33.0（Windows），基于真实项目目录实拍。
各功能的键盘打开方式统一见 [快捷键速查](/keys)，画廊说明中以 ⌨️ 标注。

## 浏览与导航

![主界面总览：多标签页、面包屑地址栏、快速访问 / 标签 / 磁盘 / SFTP 分组、详情列表与状态栏](/shots/01-main-light.png)

主界面总览——资源管理器式三栏布局 + 底部状态栏 / 属性栏。⌨️ `Ctrl+L` 聚焦地址栏，`Ctrl+K` 命令面板直达一切。

![大图标视图：158 个项目仓库的图标墙](/shots/02-view-icons.png)

大图标视图——扩展名图标、自由摆放、虚拟滚动，大目录依然流畅。⌨️ `Alt+2`（`Alt+1` 回详情列表）。

![QuickJump：键入 paddle 即弹出模糊匹配浮层，实时高亮](/shots/03-quickjump.png)

QuickJump 快速定位——列表聚焦时键入即搜，fzf 式子序列匹配，回车定位 / 进入。

![地址栏补全下拉：输入 py，同时给出 Python 目录候选与 python / python3 命令候选](/shots/42-addressbar-suggest-py.png)

地址栏补全下拉——⌨️ `Ctrl+L` 聚焦后输入即弹：上半是**路径候选**（当前目录前缀匹配，回车进入），分隔线下是 **PATH 命令候选**（回车在当前目录开终端执行，Tab 只补全到输入框），↑↓ 选择。

![多标签页彩色色块：每个标签稳定取色](/shots/06-tabs-colored.png)

多标签页——彩色色块、拖拽排序、中键关闭、右键批量管理。⌨️ `Ctrl+T` 新建，`Ctrl+1…9` 跳转，`Ctrl+W` 关闭，`Ctrl+Shift+T` 恢复。

## 预览与浏览模式

![预览抽屉：选中图片按 Space 展开拉门，原图预览 + 适配缩放](/shots/04-preview-drawer.png)

预览抽屉——悬浮拉门不挤压布局，图片 / GIF / 文本 / PDF 可预览，底部属性栏实时跟进。⌨️ 选中文件按 `Space` 展开 / 收起。

![图文浏览模式：大图阅读 + 底部缩略图条](/shots/05-browse-mode.png)

图文浏览模式——Markdown / 图片即点即读，缩略图条快速切换，滚轮翻页。⌨️ `Ctrl+Shift+E`。

## 分屏

![左右分屏：左 PaddleOCR 右 Rust，窗格头独立路径条](/shots/07-split-row.png)

左右分屏（`Ctrl+\`）——窗格间独立导航、跨窗格拖拽复制 / 移动。

![递归分割：L 形三窗格，比例拖拽可调](/shots/08-split-col.png)

递归分割（`Ctrl+J` 继续分）——上下 / 四宫格，每格都是完整窗格。

## 搜索

![文件名搜索：当前层过滤，可切 fd 递归检索](/shots/09-search-panel.png)

文件名搜索——当前层即时过滤，勾选后走 fd 引擎递归（尊重 .gitignore）。⌨️ `Ctrl+F`。

![内容搜索：递归 + 行号 + 关键词高亮](/shots/10-search-content.png)

内容搜索——正则 / 大小写开关，行号点击定位，自动跳过二进制与超大文件。⌨️ `Ctrl+Shift+F` 切内容搜索。

## 右键菜单与快捷面板

![文件右键菜单：打开方式 / 压缩 / 解压 / 标签 / 比较 / 终端全套入口](/shots/11-context-menu-file.png)

文件右键——打开方式、压缩 / 解压、复制路径、比较、标签、在此处打开终端。

![空白处右键：新建 / 粘贴 / 撤销重做 / 同步比对 / 属性（当前目录）](/shots/12-context-menu-blank.png)

空白右键——新建文件夹 / 文本文件、粘贴、撤销重做、目录分享与同步比对入口。

![命令面板：Ctrl+K 平铺全部动作与键位](/shots/13-command-palette.png)

命令面板——全部动作按分组平铺，键位提示 + 模糊搜索。⌨️ `Ctrl+K` / `Ctrl+Shift+P`。

![收藏夹：标签页布局快照，fzf 式搜索恢复（v0.33 新功能）](/shots/14-favorites-panel.png)

收藏夹——把整个标签页（含分屏树 / 各窗格路径 / 视图模式）存为命名收藏，随时搜索恢复。⌨️ `Ctrl+B` 打开面板。

## 设置与对话框

![设置：外观分区——主题三态、字体大小 / 字体族、预览栏开关](/shots/15-settings.png)

设置对话框——滑动页布局：外观 / 预览 / 快捷键 / 打开方式 / 常用工具 / 收藏夹 / 分享 / 插件。⌨️ `Ctrl+,`（`F1` 键位一览）。

![设置：快捷键一览与自定义录制](/shots/16-settings-shortcuts.png)

快捷键自定义——全量动作注册表，点「录制」改键、冲突检测、恢复默认。

![属性对话框：目录递归统计，数字老虎机式滚动](/shots/17-properties-dialog.png)

属性——文件夹递归统计（文件数 · 文件夹数 · 字节），删除确认同样带统计。

![删除确认：递归统计 + Ctrl+Z 可撤销提示](/shots/18-delete-confirm.png)

删除确认——统一确认框，展示目录内部递归统计，移入回收站可撤销。⌨️ `Delete`（`Shift+Delete` 永久删除，需确认）。

## 主题

![深色主题：蓝色品牌冷灰设计体系](/shots/19-dark-main.png)

深色 / 浅色 / 跟随系统三态主题——右上角一键切换，跟随系统时实时联动。⌨️ `Ctrl+Alt+T`。

## SFTP 远程访问

以两台真实内网机器为例：`kali@raspberrypi-kali`（192.168.31.100）与 `kube@ubuntu2604`，演示两种接入方式。

![侧边栏 + 按钮添加：SFTP 连接对话框填写主机 / 端口 / 用户名，密码 / 私钥双认证](/shots/20-sftp-add-dialog.png)

方式一：侧边栏「远程服务器」组的 **＋ 按钮** 添加——填显示名 / 分组 / 主机 / 端口 / 用户名，密码或私钥认证，可勾选记住密码（主密钥加密保存）。

![连接成功：raspberrypi-kali 绿点，远程家目录 /home/kali 正常浏览](/shots/21-sftp-kali-connected.png)

连接成功——侧边栏服务器亮绿点，远程家目录与本地一致的列表体验（字段 / 排序 / 权限）。

![地址栏输入 sftp://kube@ubuntu2604/——未保存的服务器直接从这里发起](/shots/22-sftp-addressbar-input.png)

方式二：**地址栏直输** `sftp://用户@主机:端口/路径`——无需预先保存，回车即发起连接。

![未知服务器自动弹出预填连接框：主机与用户名已按 URL 带入](/shots/23-sftp-prefilled-dialog.png)

地址栏接入未知服务器时自动弹出**预填连接框**（主机 / 用户名已按 URL 带入），补上显示名与分组即可。

![kube@ubuntu2604 连接成功：双分组侧边栏，远程 /home/kube 就绪](/shots/24-sftp-kube-connected.png)

两台服务器按分组（实验室 / 家用）管理，各自独立连接状态；远程目录浏览、上传下载、右键操作与本地一致。

## 标签页与侧边栏管理

![标签页右键菜单：关闭 / 收藏此标签页 / 重命名 / 移动到最右边](/shots/25-tab-context-menu.png)

标签页右键——关闭、关闭其他 / 右侧、**收藏此标签页**、重命名、移动到最右边；双击标签可重命名。

![点击收藏此标签页后：中央轻提示「已收藏」](/shots/26-favorite-tip.png)

收藏此标签页——把整个标签页（含分屏布局与各窗格路径）存为命名收藏，成功有中央轻提示。

![收藏夹面板：新收藏 gitstar 置顶，共 4 项](/shots/27-favorites-panel-saved.png)

收藏夹面板（`Ctrl+B`）——按名称与窗格路径模糊搜索，行内更新 / 重命名 / 删除。

![右键目录 → 添加到快捷访问：侧边栏出现自定义项 ClaudeCode](/shots/28-quick-access-added.png)

自定义快捷访问——右键任意目录「添加到快捷访问」，常驻侧边栏（右键可改显示名 / 移除）。

![新增标签对话框：13 色色圈任选，命名「重要项目」](/shots/29-add-tag-dialog.png)

新增标签色圈——侧边栏「标签」组悬停 **＋**，选色圈 + 命名，即可用色圈标记任意文件（`tags://` 虚拟目录可按标签浏览）。

![重命名标签对话框：色圈高亮当前标签，改名「重点项目」](/shots/30-tag-rename-dialog.png)

重命名标签——右键标签「重命名…」，改显示名不影响已标记的文件；色圈展示全部标签便于对照。

![整理完成的侧边栏：内置 + 自定义快捷访问、预设 + 自定义标签、磁盘、SFTP 分组](/shots/31-sidebar-organized.png)

侧边栏全景——快速访问（内置 + 自定义）、Finder 风格彩色标签（预设 + 自定义）、磁盘 / 卷、SFTP 服务器分组，一屏尽览。

## 打开方式与常用应用

以本机实装应用为例：**VS Code**（F:\Program Files\Microsoft VS Code）、**Zed**（F:\Programs\Zed）、**Microsoft Edge**。

![文件右键菜单第一行：常用工具横排芯片（VC / ZE / ＋），点芯片直接用该应用打开文件或目录](/shots/32-quicktools-file-menu.png)

常用工具条——右键菜单第一行横排芯片（最多 10 个），文件 = 用该应用打开文件，目录 = 作为工作区打开当前目录。

![右键 .py → 打开方式展开：VS Code 关联，另有「选择其他应用…」](/shots/33-opener-submenu-py.png)

`.py` 关联 VS Code——「打开方式」点击展开，按扩展名列出关联应用；「选择其他应用…」选完即自动关联并立即打开。

![右键 .html → 打开方式展开：Microsoft Edge](/shots/34-opener-submenu-html.png)

`.html` 关联 Microsoft Edge——网页文件一键进浏览器。

![右键 .md → 打开方式展开：Zed](/shots/35-opener-submenu-md.png)

`.md` 关联 Zed——Markdown 交给顺手的编辑器；扩展名关联互不影响，每个应用可挂多个后缀。

![空白处右键：常用工具条同样在第一行，点芯片即用编辑器打开当前目录](/shots/36-blank-quicktools.png)

空白处右键——工具条芯片直接把**当前目录**作为工作区交给 Zed / VS Code，配合「在此处打开终端」一套连招。

![设置 → 常用工具：VS Code / Zed 已探测到，可排序、删改启动参数](/shots/37-settings-quicktools.png)

设置 → 常用工具——支持启动参数占位符 `{dir}` / `{path}` / `{name}` / `$pwd`，空 = 默认行为（终端类直接在当前目录开窗）。

![设置 → 打开方式：Edge(html/htm)、VS Code(py)、Zed(md) 三条扩展名关联](/shots/38-settings-openers.png)

设置 → 打开方式——扩展名关联管理：每个应用可挂多个后缀（`*` = 所有类型），与常用工具条互不影响。

## 本地 ↔ 远程文件比较

以本地 `F:\pantheon\Project\go-owl` 与远程 `kube@ubuntu2604:/home/kube/go-owl` 两份同一项目为例。

![连接 kube@ubuntu2604，浏览远程 /home/kube/go-owl 项目目录](/shots/39-sftp-goowl-listing.png)

远程项目目录——SFTP 连接后照常浏览 go-owl 源码树，字段 / 排序 / 权限与本地一致。

![右键远程 README.md → 比较 → 与另一文件比较…，填入本地路径](/shots/40-compare-pick-dialog.png)

与另一文件比较——右侧既可从窗格列表点选，也可直接输入本地 / `sftp://` / `http(s)://` 路径。

![文本比较窗口：本地 ↔ 远程 README.md，精确到 +1 −1 行差异，318 行相同自动折叠](/shots/41-text-diff-local-remote.png)

文本比较——行级 diff 左右对照：红 = 左侧删除、绿 = 右侧新增，相同段自动折叠，支持编码切换与「只看差异」。
