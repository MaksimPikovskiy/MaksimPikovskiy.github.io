<script setup lang="ts">
import type { Project } from '@/types/index'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div
    class="group bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
  >
    <router-link :to="`/projects/${project.id}`" class="block">
      <div class="aspect-video overflow-hidden">
        <img
          :src="project.coverImage"
          :alt="project.title"
          class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div class="p-6">
        <div class="flex items-center space-x-2 mb-4">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-center"
          >
            {{ tag }}
          </span>
        </div>
        <h3 class="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
          {{ project.title }}
        </h3>
        <p class="text-neutral-600 dark:text-neutral-300 mb-4">
          {{ project.description }}
        </p>
      </div>
    </router-link>
  </div>
</template>
