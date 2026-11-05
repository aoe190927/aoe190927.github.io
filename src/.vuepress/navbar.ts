import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "プレイ記録", link: "/playlog/", icon: "gamepad" },
  { text: "イラスト", link: "/illust/", icon: "paintbrush" },
  { text: "写真", link: "/photo/", icon: "camera" },
  { text: "幻覚", link: "/yume/", icon: "hospital" },
]);
