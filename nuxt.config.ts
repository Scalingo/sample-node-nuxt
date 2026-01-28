export default defineNuxtConfig({
  compatibilityDate: '2026-01-15',
  telemetry: false,
  app: {
    head: {
      title: "sample-nuxt-scalingo",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ]
    }
  },

  components: true,

  devtools: { enabled: true },

  nitro: {
    preset: 'node-server',
  },
  
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000
  }
})
