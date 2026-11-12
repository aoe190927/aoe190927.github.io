import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "ja-JP",
  title: "世界一可愛い青江のお城",
  description: "三浦の個人サイト",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
   head: [
    ['meta', { name: 'robots', content: 'noindex' }],
  ],
});