<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FadeIn from '@/components/FadeIn.vue'

// 倒计时自动返回首页
const seconds = ref(6)

onMounted(() => {
  const timer = setInterval(() => {
    seconds.value -= 1
    if (seconds.value <= 0) {
      clearInterval(timer)
      navigateTo('/')
    }
  }, 1000)
})

useHead({
  title: '发送成功｜联系我们',
  meta: [{ name: 'robots', content: 'noindex' }],
})
</script>

<template>
  <section class="max-w-xl mx-auto px-4 sm:px-6 py-16 text-center">
    <FadeIn :y="24">
      <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-700 text-2xl">
        ✅
      </div>
    </FadeIn>

    <FadeIn :delay="120" :y="18">
      <h1 class="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight">
        已成功发送！
      </h1>
    </FadeIn>

    <FadeIn :delay="200">
      <p class="mt-3 text-gray-600">
        感谢你的留言，我们会尽快回复你。你可以继续浏览站点或返回首页。
      </p>
    </FadeIn>

    <FadeIn :delay="260">
      <div class="mt-6 flex flex-wrap gap-3 justify-center">
        <NuxtLink to="/" class="px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-black transition">
          返回首页
        </NuxtLink>
        <NuxtLink to="/services" class="px-5 py-3 rounded-xl bg-white border border-gray-300 hover:bg-gray-100 transition">
          查看服务
        </NuxtLink>
      </div>
    </FadeIn>

    <FadeIn :delay="320">
      <p class="mt-6 text-sm text-gray-500">
        将在 <strong>{{ seconds }}</strong> 秒后自动返回首页…
      </p>
    </FadeIn>
  </section>
</template>
