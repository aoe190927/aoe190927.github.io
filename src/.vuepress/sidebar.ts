import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "プレイ記録",
      icon: "gamepad",
      prefix: "playlog/",
      link: "playlog/",
      children: "structure",
    },
    {
      text: "イラスト",
      icon: "paintbrush",
      prefix: "illust/",
      children: "structure",
    },
    {
      text: "写真",
      icon: "camera",
      prefix: "photo/",
      children: "structure",
    },
    {
      text: "幻覚",
      icon: "hospital",
      prefix: "posts/",
      link: "yume/",
      children: "structure",
    },
    "intro",
  ],
});
