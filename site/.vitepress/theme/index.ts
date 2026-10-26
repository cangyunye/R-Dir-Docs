// 扩展默认主题：加宽演示画廊页 + 截图点击看原图（灯箱）
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout),
  setup() {
    if (typeof document === "undefined") return;
    let box: HTMLDivElement | null = null;
    const close = () => box?.remove();
    document.addEventListener("click", (e) => {
      if (box) {
        // 灯箱打开时点任意处关闭
        close();
        return;
      }
      const img = (e.target as HTMLElement).closest?.(".vp-doc img") as HTMLImageElement | null;
      if (!img || !img.src.includes("/shots/")) return;
      e.preventDefault();
      box = document.createElement("div");
      box.className = "rdir-lightbox";
      const full = document.createElement("img");
      full.src = img.src;
      box.append(full);
      document.body.append(box);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  },
};
