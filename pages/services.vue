<script setup lang="ts">
import FadeIn from '@/components/FadeIn.vue'
</script>

<template>
  <!-- 顶部标题与说明 -->
  <section class="max-w-screen-lg mx-auto px-4 sm:px-6 py-10 sm:py-14">
    <FadeIn :y="24">
      <h1 class="text-[28px] sm:text-[34px] md:text-[40px] font-extrabold tracking-tight leading-tight">
        我们的服务
      </h1>
    </FadeIn>
    <FadeIn :delay="120" :y="18">
      <p class="mt-3 text-gray-600 max-w-3xl leading-relaxed">
        围绕企业官网、内容站、会员系统与轻后端服务，提供从"设计 → 开发 → 上线 → 运营"的一体化解决方案。
      </p>
    </FadeIn>
  </section>

  <!-- 服务卡片网格 -->
  <section class="max-w-screen-lg mx-auto px-4 sm:px-6 pb-12 md:pb-16">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <FadeIn>
        <article class="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition">
          <h3 class="font-semibold text-lg">企业官网 / 品牌站</h3>
          <p class="mt-2 text-gray-600">SSR/SSG、SEO 友好、极致首屏体验，适合推广与获客。</p>
          <ul class="mt-3 text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>多语言与本地化</li>
            <li>可复用组件库</li>
            <li>自动化构建与部署</li>
          </ul>
        </article>
      </FadeIn>

      <FadeIn :delay="120">
        <article class="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition">
          <h3 class="font-semibold text-lg">会员与表单系统</h3>
          <p class="mt-2 text-gray-600">注册登录、权限、收集表单数据，连接业务流程。</p>
          <ul class="mt-3 text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>Firebase / Supabase 集成</li>
            <li>邮件通知 & 后台导出</li>
            <li>防刷与基础风控</li>
          </ul>
        </article>
      </FadeIn>

      <FadeIn :delay="240">
        <article class="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition">
          <h3 class="font-semibold text-lg">轻后端 & API 聚合</h3>
          <p class="mt-2 text-gray-600">把第三方 API（支付、短信、地图、AI）整合到你的网站里。</p>
          <ul class="mt-3 text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>Serverless / Edge Functions</li>
            <li>缓存与速率限制</li>
            <li>日志追踪与告警</li>
          </ul>
        </article>
      </FadeIn>

      <FadeIn :delay="360">
        <article class="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition">
          <h3 class="font-semibold text-lg">性能优化与 SEO</h3>
          <p class="mt-2 text-gray-600">LCP / CLS / TTFB 指标打磨，站点地图与结构化数据。</p>
          <ul class="mt-3 text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>图片与资源体积优化</li>
            <li>预渲染与静态输出</li>
            <li>搜索引擎友好结构</li>
          </ul>
        </article>
      </FadeIn>

      <FadeIn :delay="480">
        <article class="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition">
          <h3 class="font-semibold text-lg">数据分析与可视化</h3>
          <p class="mt-2 text-gray-600">埋点、看板、A/B 测试，帮助你做出数据驱动的决策。</p>
          <ul class="mt-3 text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>GA / Plausible / 自建方案</li>
            <li>转化漏斗与事件分析</li>
            <li>仪表盘与定时报表</li>
          </ul>
        </article>
      </FadeIn>

      <FadeIn :delay="600">
        <article class="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition">
          <h3 class="font-semibold text-lg">上线与运维</h3>
          <p class="mt-2 text-gray-600">Vercel / Netlify / GitHub Pages 一键发布与回滚。</p>
          <ul class="mt-3 text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>分支发布与预览环境</li>
            <li>SSL / DNS / 域名绑定</li>
            <li>健康检查与告警</li>
          </ul>
        </article>
      </FadeIn>
    </div>
  </section>

  <!-- 行动按钮 -->
  <section class="max-w-screen-lg mx-auto px-4 sm:px-6 pb-16">
    <FadeIn :y="18">
      <div class="rounded-2xl border border-gray-200 p-6 sm:p-8 bg-gray-50 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 class="text-lg sm:text-xl font-bold">准备好开始了吗？</h3>
          <p class="mt-1 text-gray-600">联系我们，聊聊你的需求，给出最快 48 小时的落地方案。</p>
        </div>
        <NuxtLink
          to="/contact"
          class="px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-black transition text-center"
        >
          联系我们
        </NuxtLink>
      </div>
    </FadeIn>
  </section>
</template>
