<script setup lang="ts">
import { ref, computed } from 'vue'
import { skills } from '@/data/skills'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const skillCategories = skills.reduce((categories, skill) => {
  if (!categories.includes(skill.category)) {
    categories.push(skill.category)
  }
  return categories
}, [] as string[])

const selectedCategory = ref('all')

const changeCategory = (category: string) => {
  if (selectedCategory.value === category) {
    selectedCategory.value = 'all'
    return
  }
  selectedCategory.value = category
}

const filteredSkills = computed(() => {
  if (selectedCategory.value === 'all') {
    return skills
  }
  return skills.filter((skill) => skill.category === selectedCategory.value)
})
</script>

<template>
  <section class="section">
    <div class="container mx-auto px-4 md:px-6">
      <SectionHeading title="My Skills" subtitle="Technologies and tools I have worked with" />

      <div class="flex flex-row gap-2 mb-6 justify-center">
        <button
          v-for="category in skillCategories"
          :key="category"
          @click="changeCategory(category)"
          class="px-3 py-1 rounded-full text-md font-medium bg-neutral-100 dark:bg-neutral-700 hover:bg-primary-600 dark:hover:bg-primary-400 text-neutral-700 dark:text-neutral-300 hover:text-white hover:dark:text-neutral-700 capitalize"
          :class="
            selectedCategory === category &&
            'bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-500 text-white dark:text-neutral-700 font-medium'
          "
        >
          {{ category.replace('-', ' ') }}
        </button>
      </div>

      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 appear-animation"
      >
        <div
          v-for="skill in filteredSkills"
          :key="skill.name"
          class="flex flex-col items-center p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div class="w-16 h-16 flex items-center justify-center mb-4">
            <img
              :src="`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-${skill.isPlain ? 'plain' : 'original'}${skill.wordmark ? '-wordmark' : ''}.svg`"
              :alt="skill.name"
              class="w-10 h-10 object-contain"
            />
          </div>
          <span class="text-neutral-800 dark:text-neutral-200 font-medium">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
