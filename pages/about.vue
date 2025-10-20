<script setup lang="ts">
import FadeIn from '@/components/FadeIn.vue'
</script>

<template>
  <!-- 顶部介绍 -->
  <section class="max-w-screen-lg mx-auto px-4 sm:px-6 py-10 sm:py-14">
    <FadeIn :y="24">
      <h1 class="text-[28px] sm:text-[34px] md:text-[40px] font-extrabold tracking-tight leading-tight">
        关于我们
      </h1>
    </FadeIn>
    <FadeIn :delay="120" :y="18">
      <p class="mt-3 text-gray-600 max-w-3xl leading-relaxed">
        我们专注于用 <span class="font-semibold">Nuxt + AI</span> 构建现代网站与应用，追求加载快速、SEO 友好、移动端体验优先。
        从企业官网到会员系统，我们都能快速落地、持续迭代。
      </p>
    </FadeIn>
  </section>

  <!-- 图文两列（移动端上下排列） -->
  <section class="max-w-screen-lg mx-auto px-4 sm:px-6 pb-12 md:pb-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
      <FadeIn>
        <img
          src="/AI.jpg"
          alt="关于我们的团队与技术"
          class="w-full rounded-2xl shadow-md object-cover h-[220px] sm:h-[280px] md:h-[340px]"
          loading="lazy" decoding="async"
        />
      </FadeIn>

      <FadeIn :delay="120">
        <div>
          <h2 class="text-xl sm:text-2xl font-bold">我们的理念</h2>
          <p class="mt-3 text-gray-600 leading-relaxed">
            以用户为中心，以性能与可维护性为准绳。我们将组件化、自动化与数据驱动引入网站建设，让你的业务在早期就具备可扩展的技术基础。
          </p>

          <ul class="mt-5 space-y-2">
            <li class="flex items-start gap-2">
              <span class="mt-1.5 h-2 w-2 rounded-full bg-gray-900"></span>
              <span>移动端优先的交互与设计，确保每一次点击都顺手</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-1.5 h-2 w-2 rounded-full bg-gray-900"></span>
              <span>SSR/SSG 与良好 SEO 实践，获得更稳定的自然流量</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-1.5 h-2 w-2 rounded-full bg-gray-900"></span>
              <span>自动化部署与监控，保持迭代快速且可回滚</span>
            </li>
          </ul>
        </div>
      </FadeIn>
    </div>
  </section>

  <!-- 里程碑/优势 -->
  <section class="max-w-screen-lg mx-auto px-4 sm:px-6 pb-16">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <FadeIn>
        <div class="rounded-2xl border border-gray-200 p-5 sm:p-6 bg-white text-center">
          <div class="text-3xl font-extrabold">95%</div>
          <p class="mt-1 text-gray-600 text-sm">移动端满意度</p>
        </div>
      </FadeIn>
      <FadeIn :delay="100">
        <div class="rounded-2xl border border-gray-200 p-5 sm:p-6 bg-white text-center">
          <div class="text-3xl font-extrabold">+120</div>
          <p class="mt-1 text-gray-600 text-sm">组件与模板沉淀</p>
        </div>
      </FadeIn>
      <FadeIn :delay="200">
        <div class="rounded-2xl border border-gray-200 p-5 sm:p-6 bg-white text-center">
          <div class="text-3xl font-extrabold">~1.2s</div>
          <p class="mt-1 text-gray-600 text-sm">常规首屏渲染</p>
        </div>
      </FadeIn>
      <FadeIn :delay="300">
        <div class="rounded-2xl border border-gray-200 p-5 sm:p-6 bg-white text-center">
          <div class="text-3xl font-extrabold">24/7</div>
          <p class="mt-1 text-gray-600 text-sm">自动化监控与告警</p>
        </div>
      </FadeIn>
    </div>
  </section>
</template>
