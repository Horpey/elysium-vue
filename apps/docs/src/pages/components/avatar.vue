<script setup lang="ts">
import { ElyLoader } from '@horpey/elysium-vue'
import { useMeta } from '~/composables/useMeta'

useMeta({
  title: 'Avatar',
})
</script>

<template>
  <ElyDocLayout>
    <div class="mb-4 flex items-center gap-1.5 text-sm font-semibold text-koromiko-700">
      Components
    </div>
    <h1 class="font-headline text-5xl text-gray-900">
      Avatar
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Add a personal touch to your user interface with our Avatar component. Seamlessly incorporate profile images
        or user icons for a visually engaging and personalized experience in your application.
      </p>

      <div class="my-10 flex flex-col space-y-4">
        <p class="font-mono text-xs uppercase tracking-wider">
          Default
        </p>
        <div class="flex space-x-4">
          <ElyLoader size="SMALL" />
        </div>
      </div>
    </div>
  </ElyDocLayout>
</template>
