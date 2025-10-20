<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

type Props = {
  /** 延迟（毫秒），用于做阶梯式出现 */
  delay?: number
  /** 初始向下偏移量（像素） */
  y?: number
  /** 触发阈值 */
  threshold?: number
}
const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  y: 16,
  threshold: 0.2,
})

const el = ref<HTMLElement | null>(null)
let io: IntersectionObserver | null = null

onMounted(() => {
  const node = el.value
  if (!node) return

  node.style.opacity = '0'
  node.style.transform = `translateY(${props.y}px)`
  node.style.transition = `opacity .7s ease, transform .7s ease`
  if (props.delay) node.style.transitionDelay = `${props.delay}ms`

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.style.opacity = '1'
          node.style.transform = 'translateY(0)'
          io?.unobserve(entry.target)
        }
      })
    },
    { threshold: props.threshold }
  )

  io.observe(node)
})

onBeforeUnmount(() => {
  if (io && el.value) io.unobserve(el.value)
  io = null
})
</script>

<template>
  <div ref="el" class="will-change-[opacity,transform]">
    <slot />
  </div>
</template>
