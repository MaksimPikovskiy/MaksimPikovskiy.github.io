<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { projects } from '@/data/projects'

const categories = computed(() => {
  const cats = new Set<string>()
  cats.add('All')
  projects.forEach((project) => {
    project.tags.forEach((tag) => cats.add(tag))
  })
  return Array.from(cats)
})

const selectedCategory = ref('All')

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects
  }
  return projects.filter((project) => project.tags.includes(selectedCategory.value))
})

const changeCategory = (category: string) => {
  selectedCategory.value = category
}
</script>

<template>
  <div class="pt-24">
    <div class="container mx-auto px-4 md:px-6 py-12">
      <SectionHeading
        title="My Projects"
        subtitle="A collection of my work over the years, showcasing my skills and experience"
      />

      <div class="flex flex-wrap justify-center gap-2 mb-12">
        <button
          v-for="category in categories"
          :key="category"
          @click="changeCategory(category)"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
          :class="
            selectedCategory === category &&
            'bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-500 text-white dark:text-neutral-700'
          "
        >
          {{ category }}
        </button>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        v-if="filteredProjects.length"
      >
        <div v-for="project in filteredProjects" :key="project.id">
          <ProjectCard :project="project" />
        </div>
      </div>

      <div v-else class="py-20 text-center">
        <p class="text-xl text-neutral-600 dark:text-neutral-400">
          No projects found in this category.
        </p>
        <button
          @click="changeCategory('All')"
          class="mt-4 px-4 py-2 rounded-lg text-sm font-medium bg-primary-600 dark:bg-primary-400 text-white dark:text-neutral-700 hover:bg-primary-700 dark:hover:bg-primary-500 transition-all"
        >
          View All Projects
        </button>
      </div>
    </div>
  </div>
</template>
