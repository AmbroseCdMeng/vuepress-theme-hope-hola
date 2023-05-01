import { defineClientConfig } from "@vuepress/client";
import ChartJS from "F:/myblog/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.205_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "F:/myblog/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.205_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "F:/myblog/vuepress/node_modules/.pnpm/vuepress-shared@2.0.0-beta.205_vuepress@2.0.0-beta.61/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "F:/myblog/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.205_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "F:/myblog/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.205_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "F:/myblog/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.205_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "F:/myblog/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.205_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "F:/myblog/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.205_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "F:/myblog/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.205_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "F:/myblog/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.205_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "F:/myblog/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.205_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "F:/myblog/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.205_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import "F:/myblog/vuepress/node_modules/.pnpm/reveal.js@4.5.0/node_modules/reveal.js/dist/reveal.css";
import Presentation from "F:/myblog/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.205_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import Playground from "F:/myblog/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.205_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "F:/myblog/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.205_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "F:/myblog/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.205_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "F:/myblog/vuepress/node_modules/.pnpm/katex@0.16.6/node_modules/katex/dist/katex.min.css";
import "F:/myblog/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.205_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    app.component("VuePlayground", defineAsyncComponent(() => import("F:/myblog/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.205_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
    
  },
});
