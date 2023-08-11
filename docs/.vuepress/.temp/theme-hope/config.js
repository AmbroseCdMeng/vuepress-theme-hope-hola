import { defineClientConfig } from "@vuepress/client";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "F:/myblog/vuepress/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.206_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { GlobalEncrypt, LocalEncrypt } from "F:/myblog/vuepress/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.206_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "F:/myblog/vuepress/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.206_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"
import Slide from "F:/myblog/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.206_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/SlidePage.js";

import "F:/myblog/vuepress/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.206_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // render icon for auto-catalog
    app.component("HopeIcon", HopeIcon);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,
    Slide,
  }
});