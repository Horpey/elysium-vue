<script setup lang="ts">
import { ElyProgressCircular } from '@horpey/elysium-vue'
import { useMeta } from '~/composables/useMeta'

useMeta({
  title: 'Progress Circular',
})
</script>

<template>
  <ElyDocLayout>
    <div class="mb-4 flex items-center gap-1.5 text-sm font-semibold text-koromiko-700">
      Components
    </div>
    <h1 class="text-5xl font-bold uppercase tracking-wider text-gray-900">
      Progress Circular
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Keep users informed of ongoing tasks with our Progress Circular component. Seamlessly integrate circular progress indicators to provide visual feedback on loading processes or task completion, enhancing user experience in your application.
      </p>

      <div class="my-10 flex flex-col space-y-4">
        <p class="font-mono text-xs uppercase tracking-wider">
          Default
        </p>
        <div>
          <ElyProgressCircular :value="70" />
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Max
        </p>
        <div>
          <ElyProgressCircular :value="4" :max="5" />
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Steps
        </p>
        <div>
          <ElyProgressCircular
            :value="2" :max="[
              'Waiting', 'Cloning...', 'Migrating...', 'Almost...', 'Deployed!',
            ]"
          />
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Animation
        </p>
        <div>
          <ElyProgressCircular animation />
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Theme
        </p>
        <div class="flex space-x-3">
          <ElyProgressCircular :value="24" theme="SECONDARY" />
          <ElyProgressCircular :value="95" theme="TERTIARY" />
          <ElyProgressCircular :value="10" theme="DESTRUCTIVE" />
        </div>
      </div>
    </div>
  </ElyDocLayout>
</template>
