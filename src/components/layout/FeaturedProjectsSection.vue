<script setup lang="ts">
import { projects } from '@/data/projects'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'

const featuredProjects = projects.filter((project) => project.isFeatured)
</script>

<template>
  <section class="section bg-neutral-50 dark:bg-neutral-900">
    <div class="container mx-auto px-4 md:px-6">
      <SectionHeading
        title="Featured Projects"
        subtitle="Here are some of my recent works that showcase my skills and experience"
      />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in featuredProjects"
          :key="project.id"
          class="appear-animation"
          :style="{ 'transition-delay': `${index * 0.1}s` }"
        >
          <ProjectCard :project="project" />
        </div>
      </div>

      <div class="mt-12 text-center appear-animation">
        <router-link to="/projects" class="cta-button"> View All Projects </router-link>
      </div>
    </div>
  </section>
</template>
