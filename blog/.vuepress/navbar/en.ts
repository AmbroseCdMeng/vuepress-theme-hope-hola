import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en",
  {
    text: "Web 安全基础",
    icon: "discover",
    prefix: "/en/internet/",
    children: [
      {
        text: "XSS 注入",
        icon: "discover",
        link: "/xss"
      }, {
        text: "SQL 注入",
        icon: "discover",
        link: "/sql"
      }, {
        text: "CSRF",
        icon: "discover",
        link: "/csrf"
      }, {
        text: "SSRF",
        icon: "discover",
        link: "/ssrf"
      }, {
        text: "XXE",
        icon: "discover",
        link: "/xxe"
      }, {
        text: "文件上传",
        icon: "discover",
        link: "/upload"
      }, {
        text: "文件包含",
        icon: "discover",
        link: "/include"
      }, {
        text: "反序列化",
        icon: "discover",
        link: "/deserialize"
      }, {
        text: "逻辑漏洞",
        icon: "discover",
        link: "/logic"
      },
    ]
  }, {
    text: "内网渗透",
    icon: "edit",
    prefix: "/en/intranet/",
    children: [
      {
        text: "信息收集",
        icon: "edit",
        link: "1"
      }, {
        text: "密码认证",
        icon: "edit",
        link: "1"
      }, {
        text: "横向移动",
        icon: "edit",
        link: "1"
      }
    ],
  }, {
    text: "SRC 实战",
    icon: "edit",
    prefix: "/en/src/",
    children: [
      {
        text: "信息收集",
        icon: "edit",
        link: "1"
      }
    ],
  },{
    text: "CTF",
    icon: "edit",
    prefix: "/en/ctf/",
    children: [
      {
        text: "信息收集",
        icon: "edit",
        link: "1"
      }
    ],
  },{
    text: "靶场",
    icon: "edit",
    prefix: "/en/target/",
    children: [
      {
        text: "信息收集",
        icon: "edit",
        link: "1"
      }
    ],
  },{
    text: "代码审计",
    icon: "edit",
    prefix: "/en/code/",
    children: [
      {
        text: "信息收集",
        icon: "edit",
        link: "1"
      }
    ],
  },{
    text: "溯源分析",
    icon: "edit",
    prefix: "/en/src/",
    children: [
      {
        text: "信息收集",
        icon: "edit",
        link: "1"
      }
    ],
  },{
    text: "面试经验",
    icon: "edit",
    prefix: "/en/src/",
    children: [
      {
        text: "信息收集",
        icon: "edit",
        link: "1"
      }
    ],
  },
]);
