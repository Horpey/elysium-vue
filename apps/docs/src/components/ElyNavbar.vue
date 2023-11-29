<script setup lang="ts">
import PhGithubIcon from 'virtual:icons/ph/github-logo.svg'
import PhFlaskIconDuotone from 'virtual:icons/ph/flask-duotone.svg'

interface Props {
  theme?: 'dark' | 'light'
}

withDefaults(defineProps<Props>(), {
  theme: 'dark',
})
</script>

<template>
  <header
    class="sticky top-0 z-50 -mb-px h-12 border-b border-white/5 backdrop-blur" :class="{
      'shadow-bottom': theme === 'dark',
      'shadow-bottom-dark': theme === 'light',
    }"
  >
    <div class="mx-auto flex h-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
      <div>
        <RouterLink
          to="/" class="font-mono font-bold" :class="{
            'text-white': theme === 'dark',
            'text-black': theme === 'light',
          }"
        >
          <PhFlaskIconDuotone class="inline-block h-5 w-5" />
          <span class="ml-2">elysium</span>
        </RouterLink>
      </div>
      <ul class="flex items-center gap-x-8">
        <li class="relative">
          <RouterLink
            class="text-xs uppercase tracking-widest" :class="{
              'text-white': theme === 'dark',
              'text-black': theme === 'light',
            }" to="/getting-started"
          >
            Documentation
          </RouterLink>
        </li>

        <li class="relative">
          <a
            class="text-xs uppercase tracking-widest" :class="{
              'text-white': theme === 'dark',
              'text-black': theme === 'light',
            }" href="https://elysium.canny.io/" target="_blank"
          >Road Map</a>
        </li>
      </ul>
      <div>
        <a
          :class="{
            'text-white': theme === 'dark',
            'text-black': theme === 'light',
          }" href="https://github.com/Horpey/elysium-vue" target="_blank"
        >
          <PhGithubIcon class="inline-block h-5 w-5" />
        </a>
      </div>
    </div>
  </header>
</template>
