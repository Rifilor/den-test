// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/style/main.scss"],
  devtools: { enabled: true },
  modules: [['@pinia/nuxt', {
    autoImports: ['defineStore']
  }], "@nuxtjs/i18n", "@nuxtjs/leaflet"],
  imports: {
    dirs: ['stores'],
  },
  i18n: {
    strategy: 'prefix_except_default',
    locales: ['en', 'ua'],
    defaultLocale: 'en',
    vueI18n: './i18n.config.js',
  },


})