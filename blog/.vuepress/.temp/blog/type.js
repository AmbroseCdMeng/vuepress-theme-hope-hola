export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-4a1cd51d","v-2e073145","v-00f6f899","v-3a312da2","v-4da3f58a","v-ad705fac"]}},"star":{"/":{"path":"/star/","keys":["v-4a1cd51d","v-2e073145","v-00f6f899","v-3a312da2","v-4da3f58a","v-ad705fac"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-4a1cd51d","v-2e073145","v-00f6f899","v-3a312da2","v-4da3f58a","v-ad705fac"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

