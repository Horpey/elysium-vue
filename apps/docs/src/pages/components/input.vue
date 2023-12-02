<script setup lang="ts">
import { ElyLoader } from '@horpey/elysium-vue'
import { useMeta } from '~/composables/useMeta'

useMeta({
  title: 'Loader',
})
</script>

<template>
  <ElyDocLayout>
    <div class="text-koromiko-700 mb-4 flex items-center gap-1.5 text-sm font-semibold">
      Components
    </div>
    <h1 class="font-headline text-5xl text-gray-900">
      Input
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Elevate user interaction with our Input component. Effortlessly gather user input, enhance form elements, and provide a seamless data entry experience in your application.
      </p>

      <div class="my-10 flex flex-col space-y-4">
        <p class="font-mono text-xs uppercase tracking-wider">
          Sizes
        </p>
        <div class="flex space-x-4">
          <ElyLoader size="SMALL" />
        </div>
      </div>
    </div>
  </ElyDocLayout>
</template>
