export const categoryMap = {"category":{"/":{"path":"/category/","map":{"内网渗透":{"path":"/category/%E5%86%85%E7%BD%91%E6%B8%97%E9%80%8F/","keys":["v-4a1cd51d","v-2e073145"]},"漏洞复现":{"path":"/category/%E6%BC%8F%E6%B4%9E%E5%A4%8D%E7%8E%B0/","keys":["v-00f6f899","v-3a312da2","v-4da3f58a"]},"护网行动":{"path":"/category/%E6%8A%A4%E7%BD%91%E8%A1%8C%E5%8A%A8/","keys":["v-ad705fac"]}}}},"tag":{"/":{"path":"/tag/","map":{"内网":{"path":"/tag/%E5%86%85%E7%BD%91/","keys":["v-4a1cd51d","v-2e073145"]},"工具":{"path":"/tag/%E5%B7%A5%E5%85%B7/","keys":["v-4a1cd51d","v-2e073145"]},"漏洞复现":{"path":"/tag/%E6%BC%8F%E6%B4%9E%E5%A4%8D%E7%8E%B0/","keys":["v-00f6f899","v-3a312da2","v-4da3f58a"]},"CVE":{"path":"/tag/cve/","keys":["v-00f6f899","v-3a312da2","v-4da3f58a"]},"护网":{"path":"/tag/%E6%8A%A4%E7%BD%91/","keys":["v-ad705fac"]},"蓝队":{"path":"/tag/%E8%93%9D%E9%98%9F/","keys":["v-ad705fac"]},"HVV":{"path":"/tag/hvv/","keys":["v-ad705fac"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


