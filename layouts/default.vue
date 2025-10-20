<script setup lang="ts">
const menu = [
  { label: '首页', to: '/' },
  { label: '关于我们', to: '/about' },
  { label: '服务', to: '/services' },
  { label: '联系', to: '/contact' },
]
const open = ref(false)
const toggle = () => (open.value = !open.value)
</script>

<template>
  <div class="min-h-screen text-gray-900 bg-white">
    <!-- 顶部导航（含安全区） -->
    <header
      class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm"
      style="padding-top: env(safe-area-inset-top);"
    >
      <div class="max-w-screen-lg mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2 font-extrabold tracking-tight text-lg">
          <img src="/logo.jpg" alt="" class="w-8 h-8 rounded hidden sm:block" />
          <span>My Nuxt Site</span>
        </NuxtLink>

        <!-- 桌面导航 -->
        <nav class="hidden md:flex gap-1">
          <NuxtLink
            v-for="item in menu" :key="item.to" :to="item.to"
            class="px-3 py-2 rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
            active-class="bg-gray-900 text-white hover:bg-gray-900"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- 移动端按钮：更大触控区（修正 aria-expanded 绑定为布尔值） -->
        <button
          class="md:hidden text-[26px] leading-none p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
          @click="toggle"
          aria-label="打开菜单"
          :aria-expanded="open"
          aria-controls="primary-menu"
        >
          ☰
        </button>
      </div>

      <!-- 移动端导航 -->
      <nav
        v-show="open"
        id="primary-menu"
        class="md:hidden border-t border-gray-200"
      >
        <div class="max-w-screen-lg mx-auto px-2 py-1 flex flex-col">
          <NuxtLink
            v-for="item in menu" :key="item.to" :to="item.to"
            class="px-4 py-3 text-base rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
            active-class="bg-gray-900 text-white hover:bg-gray-900"
            @click="open=false"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </nav>
    </header>

    <!-- 页面主体 -->
    <main class="max-w-screen-lg mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <slot />
    </main>

    <!-- 页脚（带分隔线） -->
    <footer class="max-w-screen-lg mx-auto px-4 sm:px-6 py-8 border-t border-gray-200 text-sm text-gray-500">
      © 2025 WN · Powered by Nuxt
    </footer>
  </div>
</template>
