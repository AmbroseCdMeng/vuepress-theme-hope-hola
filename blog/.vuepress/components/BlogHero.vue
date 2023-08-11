<!-- .vuepress/components/BlogHero.vue -->
<script setup lang="ts">
import BlogHero from "vuepress-theme-hope/blog/components/BlogHero.js";
// import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";
</script>

<template>
  <BlogHero>
    <!-- <template #heroBg>
      <BingHeroBackground />
    </template> -->
    <template #heroInfo>
      <HitokotoBlogHero :text="'Hola 网络安全'" :alt="'Missing'"/>
    </template>
  </BlogHero>
</template>
