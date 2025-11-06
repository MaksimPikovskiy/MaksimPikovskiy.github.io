<script setup lang="ts">
import { onMounted } from 'vue'
import { aboutMe, aboutHobbies } from '@/data/extra'
import { experience } from '@/data/experience'
import { education } from '@/data/education'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import IconBriefcase from '@/components/icons/IconBriefcase.vue'
import IconGradHat from '@/components/icons/IconGradHat.vue'

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
  <div class="pt-24">
    <section class="container mx-auto px-4 md:px-6 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="appear-animation">
          <h1 class="text-4xl font-bold text-neutral-900 dark:text-white mb-6">About Me</h1>
          <p
            v-for="(paragraph, index) in aboutMe"
            :key="index"
            class="text-xl text-neutral-600 dark:text-neutral-300 mb-6"
          >
            {{ paragraph }}
          </p>
        </div>
        <div class="hidden lg:block appear-animation">
          <div class="relative">
            <div
              class="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-xl blur-xl"
            />
            <img
              src="/images/aboutMe/DSC00153.JPG"
              alt="On computer since childhood"
              class="relative w-full h-auto rounded-xl"
            />
            <span class="text-sm italic ml-4">Started young, never stopped</span>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-neutral-50 dark:bg-neutral-900 py-16">
      <div class="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Professional Experience"
          subtitle="My journey in the tech industry"
        />

        <div class="max-w-3xl mx-auto">
          <div class="relative pl-8 border-l-2 border-primary-500 space-y-12">
            <div
              v-for="(job, index) in experience"
              :key="index"
              class="relative timeline-item appear-animation"
              :style="{ 'transition-delay': `${index * 0.1}s` }"
            >
              <div
                class="absolute -left-[56.5px] w-12 h-12 bg-white dark:bg-neutral-800 rounded-full border-4 border-primary-500 flex items-center justify-center"
              >
                <IconBriefcase class="h-6 w-6 text-primary-500" />
              </div>

              <div class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md ml-4">
                <span class="text-sm font-medium text-primary-600 dark:text-primary-400">
                  {{ job.period }}</span
                >
                <h3 class="text-xl font-semibold text-neutral-900 dark:text-white mt-1">
                  {{ job.position }}
                </h3>
                <h4 class="text-lg text-neutral-700 dark:text-neutral-300 mb-3">
                  {{ job.company }}
                </h4>
                <p
                  v-if="job.description.length === 1"
                  class="text-neutral-600 dark:text-neutral-400"
                >
                  {{ job.description }}
                </p>
                <ul
                  v-else
                  class="list-disc list-outside space-y-2 ml-4 text-neutral-600 dark:text-neutral-400"
                >
                  <li v-for="(point, index) in job.description" :key="`point-${index}`">
                    {{ point }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4 md:px-6">
        <SectionHeading title="Education" subtitle="My academic background" />

        <div class="max-w-3xl mx-auto">
          <div class="relative pl-8 border-l-2 border-blue-500 space-y-12">
            <div
              v-for="(ed, index) in education"
              :key="index"
              class="relative timeline-item-main appear-animation"
              :style="{ 'transition-delay': `${index * 0.1}s` }"
            >
              <div
                class="absolute -left-[56.5px] w-12 h-12 bg-white dark:bg-neutral-800 rounded-full border-4 border-blue-500 flex items-center justify-center"
              >
                <IconGradHat class="h-6 w-6 text-blue-500" />
              </div>

              <div class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md ml-4">
                <span class="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {{ ed.period }}</span
                >
                <div>
                  <a
                    v-if="ed.link.length"
                    :href="`${ed.link}`"
                    class="text-xl font-semibold text-neutral-900 dark:text-white mt-1 underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400"
                    >{{ ed.degree }} - <span class="text-lg"> {{ ed.major }} </span></a
                  >
                  <h3 v-else class="text-xl font-semibold text-neutral-900 dark:text-white mt-1">
                    {{ ed.degree }} - <span class="text-lg"> {{ ed.major }}</span>
                  </h3>
                </div>
                <h3 class="text-md font-medium text-neutral-800 dark:text-neutral-200 italic -mt-1">
                  Minor in {{ ed.minor }}
                </h3>
                <h4 class="text-lg text-neutral-700 dark:text-neutral-300 mb-3">
                  {{ ed.institution }}
                </h4>
                <p class="text-blue-600 dark:text-blue-400">GPA: {{ ed.grade }}</p>
                <p
                  v-if="ed.description.length === 1"
                  class="text-neutral-600 dark:text-neutral-400"
                >
                  {{ ed.description }}
                </p>
                <ul
                  v-else
                  class="list-disc list-outside space-y-2 ml-4 text-neutral-600 dark:text-neutral-400"
                >
                  <li v-for="(point, index) in ed.description" :key="`point-${index}`">
                    {{ point }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-neutral-50 dark:bg-neutral-900 py-16">
      <div class="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="When I Am Not Coding"
          subtitle="A glimpse into my personal interests and hobbies"
        />

        <div class="grid grid-cols md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div
            v-for="hobby in aboutHobbies"
            :key="hobby.title"
            class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md appear-animation"
          >
            <div
              class="h-12 w-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center mb-4"
            >
              <span v-html="hobby.icon" />
            </div>
            <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
              {{ hobby.title }}
            </h3>
            <p class="text-neutral-600 dark:text-neutral-400">{{ hobby.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-3xl mx-auto text-center appear-animation">
          <h2 class="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
            Interested in hiring me?
          </h2>
          <p class="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
            I am currently available for freelance work and open to new opportunities!
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <router-link to="/contact" class="cta-button"> Contact Me </router-link>
            <a
              href="/resume.pdf"
              class="cta-button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
