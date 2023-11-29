<script setup lang="ts">
import { useMeta } from '~/composables/useMeta'

useMeta({
  title: 'Introduction',
})
</script>

<template>
  <ElyDocLayout>
    <div class="mb-4 flex items-center gap-1.5 text-sm font-semibold text-koromiko-700">
      Getting Started
    </div>
    <h1 class="font-headline text-5xl text-gray-900">
      Introduction
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Welcome to Elysium, the futuristic Vue 3 sci-fi UI Kit designed to elevate your web application's user interface to new dimensions. Elysium combines sleek design, advanced functionality, and a touch of the cosmos to bring a unique and immersive experience to your projects.
      </p>
    </div>
  </ElyDocLayout>
</template>
