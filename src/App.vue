<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import HeaderComponent from './components/layout/HeaderComponent.vue'
import useTheme from './composables/useTheme'

const { isDark, toggleTheme } = useTheme()
provide('isDark', isDark)
provide('toggleTheme', toggleTheme)

const router = useRouter()
const isPageTransitioning = ref(false)

const handleRouteChange = () => {
  isPageTransitioning.value = true
  setTimeout(() => {
    isPageTransitioning.value = false
  }, 500)
}

onMounted(() => {
  router.beforeEach((to, from, next) => {
    if (to.path !== from.path) {
      handleRouteChange()
    }
    next()
  })
})
</script>

<template>
  <div class="app-wrapper" :class="{ dark: isDark }">
    <HeaderComponent />

    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
@import 'tailwindcss';

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main-content {
  flex: 1;
}

.dark {
  @apply bg-neutral-900 text-white;
}
</style>
