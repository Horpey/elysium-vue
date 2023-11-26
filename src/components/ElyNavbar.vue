<script setup lang="ts">
import ElyGithubIcon from 'virtual:icons/ph/github-logo.svg'
</script>

<template>
  <header class="sticky top-0 z-50 -mb-px h-12 border-b border-white/5 backdrop-blur">
    <div class="mx-auto flex h-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
      <div>
        <a href="/" class="font-mono text-koromiko-primary">elysium</a>
      </div>
      <ul class="flex items-center gap-x-8">
        <li class="relative">
          <a class="text-sm text-white" href="/getting-started">Documentation</a>
        </li>

        <li class="relative">
          <a class="text-sm text-white" href="/https://elysium.canny.io/" target="_blank">Road Map</a>
        </li>
      </ul>
      <div>
        <a class="text-white" href="https://github.com/Horpey/elysium-vue" target="_blank">
          <ElyGithubIcon class="inline-block h-5 w-5 text-white" />
        </a>
      </div>
    </div>
  </header>
</template>
