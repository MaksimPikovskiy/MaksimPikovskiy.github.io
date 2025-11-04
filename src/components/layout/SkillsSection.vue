<script setup lang="ts">
import { skills } from '@/data/skills'
import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <section class="section">
    <div class="container mx-auto px-4 md:px-6">
      <SectionHeading title="My Skills" subtitle="Technologies and tools I have worked with" />

      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 appear-animation"
      >
        <div
          v-for="skill in skills"
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
