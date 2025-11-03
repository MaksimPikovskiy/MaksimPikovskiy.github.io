<script setup lang="ts">
import { name, footerDescription, email, phone, location } from '@/data/extra'
import { socialLinks } from '@/data/socialLinks'
import { routes } from '@/data/routes'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-neutral-100 dark:bg-neutral-800 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <div class="text-xl font-semibold flex items-center space-x-2 mb-4">
            <span class="text-primary-600 dark:text-primary-400">&lt;</span>
            <span class="font-mono">{{ name }}</span>
            <span class="text-primary-600 dark:text-primary-400">/&gt;</span>
          </div>
          <p class="text-neutral-600 dark:text-neutral-300 mb-6">
            {{ footerDescription }}
          </p>
          <div class="flex space-x-4">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              :aria-label="link.name"
              class="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span v-html="link.icon" />
            </a>
          </div>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4 text-neutral-900 dark:text-white">Navigation</h3>
          <ul class="space-y-2">
            <li v-for="route in routes" :key="route.path">
              <router-link
                :to="route.path"
                class="text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors"
              >
                {{ route.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4 text-neutral-900 dark:text-white">Contact</h3>
          <ul class="space-y-2">
            <li class="flex items-start space-x-2">
              <a
                href="mailto:{{ email }}"
                class="text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors"
              >
                {{ email }}
              </a>
            </li>
            <li class="flex items-start space-x-2">
              <a
                href="tel:{{ phone }}"
                class="text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors"
                >{{ phone }}
              </a>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-neutral-600 dark:text-neutral-300">{{ location }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-neutral-200 dark:border-neutral-700 mt-12 pt-8 text-center">
        <p class="text-neutral-600 dark:text-neutral-400">
          &copy; {{ currentYear }} Maksim Pikovskiy. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
