<script setup lang="ts">
import PhSparkleIcon from 'virtual:icons/ph/sparkle-duotone'
import { useMeta } from '~/composables/useMeta'

useMeta({
  title: 'Home',
})
</script>

<template>
  <ElyLayout>
    <div class="relative isolate">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </div>
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
          <h1 class="font-headline text-6xl font-bold tracking-tight text-white">
            Where Vue Meets the Future of <span class="text-aquamarine-primary">Sci-Fi Web</span> Components
          </h1>
          <p class="mt-3 text-white">
            Elysium UI enhances Vue 3 with stylish, forward-looking elements, delivering state-of-the-art web experiences.
          </p>

          <div class="mt-10 flex items-center justify-center gap-x-6">
            <ElyButton>
              Get Started
            </ElyButton>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-50rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </div>
    </div>
  </ElyLayout>
</template>
