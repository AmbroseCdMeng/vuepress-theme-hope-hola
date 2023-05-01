import { hopeTheme } from 'vuepress-theme-hope';
import { enNavbar, zhNavbar } from './navbar/index.js';
import { enSidebar, zhSidebar } from './sidebar/index.js';

export default hopeTheme({
  /* 主题基本配置 */
  hostname: 'https://mister-hope.github.io',
  author: {
    name: 'Hola Security',
  },
  favicon: '/logo.svg',
  iconAssets: 'iconfont',
  logo: '/logo.svg',
  // repo: 'vuepress-theme-hope/online-demo',
  docsDir: 'blog',

  /* 主题功能配置 */
  blog: {
    avatar: '/logo.svg',
    name: 'Hola Security',
    description: '网络安全从这里开始 ...',
    // intro: '/intro.html',
    sidebarDisplay: 'mobile',
    intro: '',
    medias: {
      Email: 'https://example.com',
      GitHub: 'https://example.com',
    },
    timeline: '假期中...',
    articlePerPage: 10,
    articleInfo: ["Author", "Original", "Date", "PageView", "Category", "Tag", "ReadingTime"],
  },
  encrypt: {
    // global:true,
    // admin:'7777',
    config: {
      '/demo/encrypt.html': ['1234'],
    },
  },

  /* 主题布局配置 */
  navbar: false,
  sidebar: false,
  footer: '',
  displayFooter: false,

  /* 主题外观配置 */


  /* 插件配置 */
  plugins: {
    blog: true,
    comment: {
      // @ts-ignore
      provider: 'Giscus',
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
},
  /* 主题行为选项 */
  {
    check: true,
    // 启用别名组件
    custom: true
  }
);
