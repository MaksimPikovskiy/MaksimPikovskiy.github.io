<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  alignment?: 'left' | 'center' | 'right'
}>()
</script>

<template>
  <div
    class="mb-12"
    :class="{
      'text-left': alignment === 'left',
      'text-center': alignment === 'center' || !alignment,
      'text-right': alignment === 'right',
    }"
  >
    <h2 class="section-title">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="section-subtitle">
      {{ subtitle }}
    </p>
  </div>
</template>
