import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from 'vuepress';
import { hopeTheme } from "vuepress-theme-hope";
import theme from './theme.js';

const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  theme,
  // shouldPrefetch: false,
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue"
    ), 
  },
  plugins: [
    // commentPlugin({
    //   // 插件选项
    //   comment: true
    // }),
  ],
});
