<script setup lang="ts">
import { name, yearsOfXP, homeTitle, homeDescription } from '@/data/extra'
</script>

<template>
  <section class="section min-h-screen flex items-center relative overflow-hidden">
    <div class="container mx-auto px-4 md:px-6 py-20 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div class="appear-animation col-span-2">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white leading-tight mb-6"
          >
            Hi, I am <span class="text-primary-600 dark:text-primary-400"> {{ name }} </span>
            <div class="mt-2">{{ homeTitle }}</div>
          </h1>
          <p class="text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-lg">
            {{ homeDescription }}
          </p>
          <div class="flex flex-wrap gap-4">
            <router-link to="/projects" class="cta-button"> View Projects </router-link>
            <router-link to="/contact" class="cta-button-secondary"> Contact Me </router-link>
          </div>
        </div>
        <div class="hidden lg:flex justify-end appear-animation">
          <div class="relative w-full max-w-md aspect-square rounded-full">
            <img
              src="/images/avatar.jpg"
              :alt="name"
              class="absolute inset-0 w-full h-full object-cover rounded-full border-2 border-primary-600 dark:border-primary-400"
            />
            <span
              class="absolute right-6 bottom-12 bg-primary-600 dark:bg-primary-400 rounded-2xl px-3 py-1 font-bold text-md text-white dark:text-neutral-700 border-2 border-white dark:border-neutral-900"
              >{{ yearsOfXP }} <br />
              <span class="font-medium"> of experience </span></span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
