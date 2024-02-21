<script setup lang="ts">
import { ElyProgress } from '@horpey/elysium-vue'
import { useMeta } from '~/composables/useMeta'

useMeta({
  title: 'Progress',
})
</script>

<template>
  <ElyDocLayout>
    <div class="text-koromiko-700 mb-4 flex items-center gap-1.5 text-sm font-semibold">
      Components
    </div>
    <h1 class="text-5xl font-bold uppercase tracking-wider text-gray-900">
      Progress
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Keep users informed of ongoing tasks with our Progress component. Seamlessly integrate progress bars to provide visual feedback on loading processes or task completion, enhancing user experience in your application.
      </p>

      <div class="my-10 flex flex-col space-y-4">
        <p class="font-mono text-xs uppercase tracking-wider">
          Default
        </p>
        <div>
          <ElyProgress :value="70" />
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Max
        </p>
        <div>
          <ElyProgress :value="2" :max="5" />
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Steps
        </p>
        <div>
          <ElyProgress
            :value="3" :max="['Waiting to start', 'Cloning...', 'Migrating...', 'Deployed!']"
          />
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Animation
        </p>
        <div>
          <ElyProgress animation />
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Theme
        </p>
        <div class="flex flex-col space-y-3">
          <ElyProgress :value="24" theme="SECONDARY" />
          <ElyProgress :value="95" theme="TERTIARY" />
          <ElyProgress :value="10" theme="DESTRUCTIVE" />
        </div>
      </div>
    </div>
  </ElyDocLayout>
</template>
