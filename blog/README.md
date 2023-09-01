---
# 首页配置。参考： https://theme-hope.vuejs.press/zh/guide/layout/home.html
home: true
layout: BlogHome # 主题的几种布局。参考： https://theme-hope.vuejs.press/zh/guide/advanced/extend.html#%E7%BB%A7%E6%89%BF%E4%B8%BB%E9%A2%98
icon: home
title: Hola 网络安全 # 网站的 Title 标题
heroImage: /logo.svg # themes.ts 中的优先级貌似要高一些
heroText: Hola 网络安全 # Home 背景图片上的标题。使用了 BlogHero.vue 组件复写了原有组件，所以这里不生效，修改需要去 BlogHero.vue 中
tagline: 副标题
heroFullScreen: false # Home 背景图片全屏or半屏
# heroImageStyle: '' # 定制化背景图片样式
bgImage: /bgImage.png # Home 背景图片
# bgImageStyle: '' # 定制化 Logo 样式
actions: [{
  text: "重要的按钮",
  link: "https://mengchengdu.blog.csdn.net/",
  type: "default"
}]
highlights: [{
  title: "亮点",
  detail: "细节"
}] 
projects:
  # - icon: project
  #   name: 项目名称
  #   desc: 项目详细描述
  #   link: https://你的项目链接

  # - icon: link
  #   name: 链接名称
  #   desc: 链接详细描述
  #   link: https://链接地址

  # - icon: book
  #   name: 书籍名称
  #   desc: 书籍详细描述
  #   link: https://你的书籍链接

  # - icon: article
  #   name: 文章名称
  #   desc: 文章详细描述
  #   link: https://你的文章链接

  # - icon: friend
  #   name: 伙伴名称
  #   desc: 伙伴详细介绍
  #   link: https://你的伙伴链接

  # - icon: /logo.svg
  #   name: 自定义项目
  #   desc: 自定义详细介绍
  #   link: https://你的自定义链接

footer: <a href="http://beian.miit.gov.cn/">京ICP备2023011546号</a>
---

<!-- 这是一个博客主页的案例。

要使用此布局，你应该在页面前端设置 `layout: BlogHome` 和 `home: true`。

相关配置文档请见 [博客主页](https://theme-hope.vuejs.press/zh/guide/blog/home/)。 -->
