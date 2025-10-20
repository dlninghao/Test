<script setup lang="ts">
import FadeIn from '@/components/FadeIn.vue'
</script>

<template>
  <!-- 顶部 Banner（更友好的移动端高度与字号） -->
  <section class="relative">
    <img
      src="/AI.jpg" alt="AI Technology"
      class="w-full h-[260px] sm:h-[360px] md:h-[480px] object-cover brightness-75"
      loading="lazy" decoding="async"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

    <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
      <FadeIn :y="28">
        <h1 class="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold leading-tight mb-3 drop-shadow-lg">
          让我们用 AI 与 Nuxt 打造未来网站
        </h1>
      </FadeIn>

      <FadeIn :delay="140" :y="22">
        <p class="text-base sm:text-lg md:text-xl mb-5 max-w-[38rem] leading-relaxed drop-shadow-md">
          智能设计 · 高效开发 · 个性化体验
        </p>
      </FadeIn>

      <FadeIn :delay="260" :y="18">
        <div class="flex flex-wrap gap-3 justify-center">
          <NuxtLink
            to="/services"
            class="px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-black transition active:scale-[.98]"
          >
            查看服务
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="px-5 py-3 rounded-xl bg-white text-gray-900 hover:bg-gray-200 transition active:scale-[.98]"
          >
            联系我们
          </NuxtLink>
        </div>
      </FadeIn>
    </div>
  </section>

  <!-- 信息卡片（自适应列数与触控态） -->
  <section class="py-12 sm:py-14 md:py-16 max-w-screen-lg mx-auto px-4 sm:px-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8">
      <FadeIn>
        <div class="p-5 sm:p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition bg-white active:scale-[.99]">
          <h3 class="font-semibold text-lg">快速开发</h3>
          <p class="mt-2 text-gray-600">Nuxt + Tailwind，开箱即用，开发效率高。</p>
        </div>
      </FadeIn>

      <FadeIn :delay="140">
        <div class="p-5 sm:p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition bg-white active:scale-[.99]">
          <h3 class="font-semibold text-lg">SEO 友好</h3>
          <p class="mt-2 text-gray-600">可 SSR/SSG，适合企业官网与内容站点。</p>
        </div>
      </FadeIn>

      <FadeIn :delay="280">
        <div class="p-5 sm:p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition bg-white active:scale-[.99]">
          <h3 class="font-semibold text-lg">易部署</h3>
          <p class="mt-2 text-gray-600">Vercel / Netlify / GitHub Pages 一键上线。</p>
        </div>
      </FadeIn>
    </div>
  </section>
</template>
