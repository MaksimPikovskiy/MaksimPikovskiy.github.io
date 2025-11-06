<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '@/data/projects'
import IconGitHub from '@/components/icons/IconGitHub.vue'
import IconRightArrow from '@/components/icons/IconRightArrow.vue'

const route = useRoute()
const router = useRouter()
const projectId = computed(() => route.params.id as string)

const project = computed(() => projects.find((p) => p.id === projectId.value))

watch(project, (value) => {
  if (!value) {
    router.push('/projects')
  }
})

const hasSource = computed(() => project.value?.sourceCode?.length)
const hasLive = computed(() => project.value?.liveUrl?.length)

const previousProject = computed(() => {
  if (!project.value) return null
  const currentIndex = projects.findIndex((p) => p.id === projectId.value)
  const previousIndex = (currentIndex - 1 + projects.length) % projects.length
  return projects[previousIndex]
})

const nextProject = computed(() => {
  if (!project.value) return null
  const currentIndex = projects.findIndex((p) => p.id === projectId.value)
  const nextIndex = (currentIndex + 1) % projects.length
  return projects[nextIndex]
})

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
  <div v-if="project" class="pt-24">
    <section class="container mx-auto px-4 md:px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <div class="mb-8 appear-animation">
          <div class="flex items-center space-x-2 mb-4">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
            >
              {{ tag }}
            </span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            {{ project.title }}
          </h1>
          <p class="text-xl text-neutral-600 dark:text-neutral-300">{{ project.description }}</p>
        </div>

        <div class="aspect-video rounded-xl overflow-hidden shadow-lg mb-12 appear-animation">
          <img
            :src="project.coverImage"
            :alt="project.title"
            class="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>

    <section class="bg-neutral-50 dark:bg-neutral-900 py-16">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="appear-animation">
              <h3 class="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                Role
              </h3>
              <p class="text-neutral-700 dark:text-neutral-300">{{ project.role }}</p>
            </div>

            <div class="appear-animation">
              <h3 class="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                Duration
              </h3>
              <p class="text-neutral-700 dark:text-neutral-300">{{ project.duration }}</p>
            </div>

            <div class="appear-animation">
              <h3 class="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                Technologies
              </h3>
              <p class="text-neutral-700 dark:text-neutral-300">
                {{ project.technologies.join(', ') }}
              </p>
            </div>
          </div>

          <div class="mt-8 prose prose-lg dark:prose-invert max-w-none appear-animation">
            <h2>Overview</h2>
            <p>{{ project.overview }}</p>

            <h2>The Challenge</h2>
            <p>{{ project.challenge }}</p>

            <h2>The Solution</h2>
            <p>{{ project.solution }}</p>

            <h2>Results</h2>
            <p>{{ project.results }}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div
              v-for="(image, index) in project.images"
              :key="index"
              class="rounded-xl overflow-hidden shadow-md appear-animation"
              :style="{ 'transition-delay': `${index * 0.1}s` }"
            >
              <img
                :src="image"
                :alt="`${project.title} image ${index + 1}`"
                class="w-full h-auto"
              />
            </div>
          </div>

          <div
            class="flex flex-col md:flex-row items-center justify-between gap-6 bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-md appear-animation"
          >
            <div>
              <h3 class="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                <span v-if="hasLive || hasSource">
                  Visit <span v-if="hasLive">the live project </span>
                  <span v-if="hasLive && hasSource">or its </span>
                  <span v-if="hasSource"><span v-if="!hasLive"> the </span> source code</span>
                </span>
                <span v-else>
                  The project is currently not hosted and does not have source code available
                </span>
              </h3>
              <p class="text-neutral-600 dark:text-neutral-400">
                <span v-if="hasLive || hasSource">
                  See the
                  <span v-if="hasLive"> final result in action </span>
                  <span v-if="hasLive && hasSource">or browse its </span>
                  <span v-if="hasSource">codebase</span>
                </span>
              </p>
            </div>
            <div class="flex space-x-2 items-center">
              <a
                v-if="hasSource"
                :href="project.sourceCode"
                target="_blank"
                rel="noopener noreferrer"
                class="source-code-button"
              >
                <IconGitHub class="mr-2" />
                Source Code
              </a>
              <a
                v-if="hasLive"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="cta-button"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 grid grid-cols-1 md:grid-cols-2 gap-2">
      <div v-if="previousProject" class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-10 appear-animation">
          <h2 class="text-2xl font-semibold text-neutral-900 dark:text-white">Previous Project</h2>
        </div>

        <router-link
          :to="`/projects/${previousProject.id}`"
          class="block max-w-2xl mx-auto group appear-animation"
        >
          <div class="relative rounded-xl overflow-hidden aspect-video shadow-lg">
            <img
              :src="previousProject.coverImage"
              :alt="previousProject.title"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6"
            >
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">{{ previousProject.title }}</h3>
                <div class="flex items-center text-white/80">
                  <span>View Project</span>
                  <IconRightArrow
                    class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div v-if="nextProject" class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-10 appear-animation">
          <h2 class="text-2xl font-semibold text-neutral-900 dark:text-white">Next Project</h2>
        </div>

        <router-link
          :to="`/projects/${nextProject.id}`"
          class="block max-w-2xl mx-auto group appear-animation"
        >
          <div class="relative rounded-xl overflow-hidden aspect-video shadow-lg">
            <img
              :src="nextProject.coverImage"
              :alt="nextProject.title"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6"
            >
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">{{ nextProject.title }}</h3>
                <div class="flex items-center text-white/80">
                  <span>View Project</span>
                  <IconRightArrow
                    class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>
