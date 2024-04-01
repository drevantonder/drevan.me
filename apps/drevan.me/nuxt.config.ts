// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@nuxt/test-utils/module",
    "@nuxtjs/sanity",
  ],
  css: ["~/assets/main.css"],
  devtools: { enabled: true },
  colorMode: {
    classSuffix: "",
  },
  sanity: {
    projectId: "d78c8n0s",
  },
  vite: {
    optimizeDeps: {
      // sanity client dep
      include: [
        "@nuxtjs/sanity > @sanity/client > get-it > parse-headers",
        "@nuxtjs/sanity > @sanity/client > get-it > debug",
      ],
    },
  },
});
