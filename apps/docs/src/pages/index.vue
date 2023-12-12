<script setup lang="ts">
import PhSparkleIcon from 'virtual:icons/ph/sparkle-duotone'
import { ElyButton } from '@horpey/elysium-vue'
import { useMeta } from '~/composables/useMeta'

useMeta({
  title: 'Home',
})
</script>

<template>
  <ElyLayout>
    <div class="absolute top-0 h-screen w-full overflow-hidden bg-[url('/images/rdne.jpg')] bg-cover bg-center">
      <div class="bg-koromiko-950/80 h-full w-full" />
    </div>

    <div class="relative">
      <div class="mx-auto max-w-4xl py-32">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div
            class="border-koromiko-primary bg-koromiko-900/50 text-koromiko-primary flex items-center space-x-2 border px-3 py-0.5 text-xs leading-6"
          >
            <PhSparkleIcon class="text-koromiko-primary h-3 w-3" />
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
            <!-- to="/getting-started/installation" theme="SECONDARY" -->

            <ElyButton theme="SECONDARY">
              Get Started
            </ElyButton>
          </div>
        </div>
      </div>
    </div>
  </ElyLayout>
</template>
