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
    <h1 class="text-5xl font-bold uppercase tracking-wider text-gray-900">
      Introduction
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Welcome to Elysium, the futuristic Vue 3 sci-fi UI Kit designed to elevate your web application's user interface
        to new dimensions. Elysium combines sleek design, advanced functionality, and a touch of the cosmos to bring a
        unique and immersive experience to your projects.
      </p>

      <div class="my-7 max-w-full overflow-hidden">
        <div class="frame-container relative left-[-100%] w-[300%] pb-[56.25%] pt-6">
          <iframe
            class="absolute left-0 top-0 h-full w-full" height="400"
            src="https://www.youtube-nocookie.com/embed/9yTLUROkvTY?si=MwqTkxJCjF_w0Nuz&amp;controls=0&showinfo=0"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </ElyDocLayout>
</template>
