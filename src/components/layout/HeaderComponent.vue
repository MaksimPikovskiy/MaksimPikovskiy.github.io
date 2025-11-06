<script setup lang="ts">
import { inject, ref, onMounted, computed } from 'vue'
import { routes } from '@/data/routes'
import { name } from '@/data/extra'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
import IconMenu from '@/components/icons/IconMenu.vue'
import IconClose from '@/components/icons/IconClose.vue'

const isDark = inject('isDark', ref(false))
const toggleTheme = inject('toggleTheme', () => {})

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const headerClasses = computed(() => {
  return {
    'bg-white dark:bg-neutral-900': isScrolled.value,
    'bg-transparent': !isScrolled.value,
    'shadow-md': isScrolled.value,
  }
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const checkScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll()
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="headerClasses"
  >
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex items-center justify-between py-4">
        <router-link
          to="/"
          class="text-xl font-semibold flex items-center space-x-2"
          @click="closeMenu"
        >
          <span class="text-primary-600 dark:text-primary-400">&lt;</span>
          <span class="font-mono">{{ name }}</span>
          <span class="text-primary-600 dark:text-primary-400">/&gt;</span>
        </router-link>

        <nav class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
            class="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            active-class="text-primary-600 dark:text-primary-400 font-medium"
          >
            {{ route.name }}
          </router-link>

          <ThemeToggle @toggle="toggleTheme" :is-dark="isDark" />

          <a href="resume.pdf" target="_blank" rel="noopener noreferrer" class="cta-button">
            Resume
          </a>
        </nav>

        <button
          class="md:hidden flex items-center text-neutral-700 dark:text-neutral-300 focus:outline-none"
          @click="toggleMenu"
          aria-label="Toggle Menu"
        >
          <IconMenu v-if="!isMenuOpen" />
          <IconClose v-else />
        </button>
      </div>
    </div>

    <div
      v-if="isMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 shadow-md"
    >
      <nav class="container mx-auto px-4 py-6 flex flex-col space-y-4">
        <router-link
          v-for="route in routes"
          :key="route.path"
          :to="route.path"
          class="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2 px-4 block"
          active-class="text-primary-600 dark:text-primary-400 font-medium"
          @click="closeMenu"
        >
          {{ route.name }}
        </router-link>

        <div class="flex items-center justify-between py-2 px-4">
          <ThemeToggle @toggle="toggleTheme" :is-dark="isDark" />
          <a href="resume.pdf" target="_blank" rel="noopener noreferrer" class="cta-button">
            Resume
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>
