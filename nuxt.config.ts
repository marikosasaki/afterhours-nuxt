// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css' }
      ],
      script: [
      ]
    },
    baseURL: '/afterhours-nuxt/'
  },
  devtools: { enabled: true },
  // 使用するscssファイルを指定
  // css: ["node_modules/normalize.css/normalize.css"],
  // Viteのビルドの際に、SCSSのパーシャルファイルを読み込むよう指定する今は使ってない
  css: ["normalize.css","@/assets/sass/style.scss","@/assets/sass/common.scss"],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData:['@import "@/assets/sass/common.scss";']
  //       },
  //     },
  //   },
  // },
})
