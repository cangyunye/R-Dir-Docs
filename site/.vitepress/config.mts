import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "R-Dir 使用手册",
  description:
    "R-Dir——基于 Tauri 2 + Rust + React 的跨平台文件管理器：多标签分屏、QuickJump、双引擎搜索、目录比对同步、SFTP。功能演示与使用说明。",
  base: "/R-Dir-Docs/",
  head: [["link", { rel: "icon", type: "image/png", href: "/R-Dir-Docs/icon.png" }]],
  themeConfig: {
    logo: "/icon.png",
    siteTitle: "R-Dir",
    nav: [
      { text: "使用指南", link: "/guide" },
      { text: "功能演示", link: "/shots" },
      { text: "快捷键速查", link: "/keys" },
      { text: "下载", link: "https://github.com/cangyunye/R-Dir/releases" },
      { text: "GitHub", link: "https://github.com/cangyunye/R-Dir" },
    ],
    sidebar: [
      {
        text: "文档",
        items: [
          { text: "简介与亮点", link: "/" },
          { text: "使用指南", link: "/guide" },
          { text: "功能演示截图", link: "/shots" },
          { text: "快捷键速查", link: "/keys" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/cangyunye/R-Dir" }],
    outline: { level: [2, 3], label: "本页目录" },
    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "搜索文档", buttonAriaLabel: "搜索" },
          modal: {
            noResultsText: "没有结果",
            resetButtonTitle: "清除查询",
            footer: { selectText: "选择", navigateText: "切换", closeText: "关闭" },
          },
        },
      },
    },
    docFooter: { prev: "上一页", next: "下一页" },
    returnToTopLabel: "回到顶部",
    darkModeSwitchLabel: "外观",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});
