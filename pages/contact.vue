<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FadeIn from '@/components/FadeIn.vue'

// 动态生成回跳地址（自动根据当前网站域名）
const nextUrl = ref('')
onMounted(() => {
  nextUrl.value = `${window.location.origin}/thanks`
})
</script>

<template>
  <section class="max-w-xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
    <FadeIn :y="24">
      <h1 class="text-[28px] sm:text-[34px] md:text-[40px] font-extrabold tracking-tight leading-tight">
        联系我们
      </h1>
    </FadeIn>

    <FadeIn :delay="120">
      <p class="mt-3 text-gray-600 leading-relaxed">
        这是一个 <strong>演示表单</strong>，通过 <code>FormSubmit</code> 实现零后端邮件转发。  
        填写后点击发送，你会收到一封测试邮件。
      </p>
    </FadeIn>

    <FadeIn :delay="200">
      <!-- ⚠️ 把邮箱地址改成你自己的 -->
      <form
        action="https://formsubmit.co/dlninghao@gmail.com"
        method="POST"
        target="_blank"
        class="mt-8 space-y-4"
      >
        <!-- 隐藏字段：控制表单行为 -->
        <input type="hidden" name="_subject" value="网站新留言" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <!-- 成功后跳转到 /thanks 页面 -->
        <input type="hidden" name="_next" :value="nextUrl" />
        <!-- 蜜罐：机器人会误填，系统会忽略 -->
        <input type="text" name="_honey" class="hidden" tabindex="-1" autocomplete="off" />

        <!-- 表单字段 -->
        <div>
          <label class="block text-sm text-gray-700">名字</label>
          <input
            name="name"
            type="text"
            required
            class="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900"
            placeholder="你的名字"
          />
        </div>

        <div>
          <label class="block text-sm text-gray-700">邮箱</label>
          <input
            name="email"
            type="email"
            required
            class="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label class="block text-sm text-gray-700">留言</label>
          <textarea
            name="message"
            rows="4"
            class="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900"
            placeholder="想对我们说的话…"
          ></textarea>
        </div>

        <!-- 提交按钮 -->
        <button
          type="submit"
          class="px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-black active:scale-[.98] transition"
        >
          发送
        </button>

        <p class="text-xs text-gray-500">* 本页仅作演示，使用 FormSubmit 转发邮件。</p>
      </form>
    </FadeIn>
  </section>
</template>
