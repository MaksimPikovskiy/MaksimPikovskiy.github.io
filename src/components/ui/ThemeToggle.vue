<script setup lang="ts">
import IconSun from '@/components/icons/IconSun.vue'
import IconMoon from '@/components/icons/IconMoon.vue'

defineProps<{
  isDark: boolean
}>()

const emit = defineEmits(['toggle'])

const toggleTheme = () => {
  emit('toggle')
}
</script>

<template>
  <button
    @click="toggleTheme"
    class="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
    aria-label="Toggle Theme"
  >
    <IconSun v-if="isDark" />
    <IconMoon v-else />
  </button>
</template>
