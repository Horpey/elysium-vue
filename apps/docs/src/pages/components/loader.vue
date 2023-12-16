<script setup lang="ts">
import { ElyLoader } from '@horpey/elysium-vue'
import { useMeta } from '~/composables/useMeta'

useMeta({
  title: 'Loader',
})
</script>

<template>
  <ElyDocLayout>
    <div class="mb-4 flex items-center gap-1.5 text-sm font-semibold text-koromiko-700">
      Components
    </div>
    <h1 class="text-5xl font-bold uppercase tracking-wider text-gray-900">
      Loader
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Effortlessly integrate our versatile loader component to enhance user experience by providing visual feedback
        during data loading or background processes, ensuring a smooth and engaging interface.
      </p>

      <div class="my-10 flex flex-col space-y-4">
        <p class="font-mono text-xs uppercase tracking-wider">
          Sizes
        </p>
        <div class="flex space-x-4">
          <ElyLoader size="SMALL" />

          <ElyLoader size="MEDIUM" />

          <ElyLoader size="LARGE" />
        </div>
      </div>
    </div>
  </ElyDocLayout>
</template>
