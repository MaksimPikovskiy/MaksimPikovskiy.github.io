<script setup lang="ts">
import { onMounted } from 'vue'
import HomeSection from '@/components/layout/HomeSection.vue'
import FeaturedProjectsSection from '@/components/layout/FeaturedProjectsSection.vue'
import SkillsSection from '@/components/layout/SkillsSection.vue'
import ContactSection from '@/components/layout/ContactSection.vue'

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
    <FeaturedProjectsSection />
    <SkillsSection />
    <ContactSection />
  </div>
</template>
