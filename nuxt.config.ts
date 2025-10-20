// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // ✅ 关键：让 Vercel 构建为纯静态（不跑 Serverless Function）
  routeRules: {
    '/**': { prerender: true } // 全站 SSG 预渲染，避免 504 超时
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
