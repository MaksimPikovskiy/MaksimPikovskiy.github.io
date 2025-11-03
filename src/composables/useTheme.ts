import { ref, onMounted, watch } from 'vue'

export default function useTheme() {
  const isDark = ref(false)

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    isDark.value = savedTheme === 'dark' || (!savedTheme && systemPrefersDark)

    applyTheme()

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        isDark.value = e.matches
        applyTheme()
      }
    })
  })

  watch(isDark, () => {
    applyTheme()
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  })

  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleTheme,
  }
}
