<script setup lang="ts">
import { onMounted } from 'vue'
import HomeSection from '@/components/ui/HomeSection.vue'

const animateOnScroll = () => {
  const elements = document.querySelectorAll('.appear-animation')

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (elementTop < windowHeight * 0.9) {
      element.classList.add('active')
    }
  })
}

onMounted(() => {
  animateOnScroll()
  window.addEventListener('scroll', animateOnScroll)

  return () => {
    window.removeEventListener('scroll', animateOnScroll)
  }
})
</script>

<template>
  <div>
    <HomeSection />
  </div>
</template>
