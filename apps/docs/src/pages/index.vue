<script setup lang="ts">
import PhSparkleIcon from 'virtual:icons/ph/sparkle-duotone'
import { useMeta } from '~/composables/useMeta'

useMeta({
  title: 'Home',
})
</script>

<template>
  <ElyLayout>
    <div class="absolute top-0 h-screen w-full overflow-hidden bg-[url('/images/rdne.jpg')] bg-cover bg-center">
      <div class="h-full w-full bg-koromiko-950/80" />
    </div>

    <div class="relative">
      <div class="mx-auto max-w-4xl py-32">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div
            class="flex items-center space-x-2 rounded-full border border-koromiko-primary bg-koromiko-900/50 px-3 py-0.5 text-xs leading-6 text-koromiko-primary"
          >
            <PhSparkleIcon class="h-3 w-3 text-koromiko-primary" />
            <span>Elevate Vue with Futuristic Sci-Fi Web Components.</span>
          </div>
        </div>

        <div class="text-center">
          <h1 class="font-headline text-7xl font-bold text-white">
            Where Vue Meets the Future of <br><span class="text-aquamarine-primary">Sci-Fi Web</span> Components
          </h1>
          <p class="mt-3 text-sm text-white">
            Elysium UI enhances Vue 3 with stylish, forward-looking elements, delivering state-of-the-art web experiences.
          </p>

          <div class="mt-10 flex items-center justify-center gap-x-6">
            <ElyButton to="/getting-started/installation" theme="SECONDARY">
              Get Started
            </ElyButton>
          </div>
        </div>
      </div>
    </div>
  </ElyLayout>
</template>
