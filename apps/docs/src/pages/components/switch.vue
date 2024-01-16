<script setup lang="ts">
import { ElySwitch } from '@horpey/elysium-vue'
import { useMeta } from '~/composables/useMeta'

const value = ref(false)

useMeta({
  title: 'Radio',
})
</script>

<template>
  <ElyDocLayout>
    <div class="mb-4 flex items-center gap-1.5 text-sm font-semibold text-koromiko-700">
      Components
    </div>
    <h1 class="text-5xl font-bold uppercase tracking-wider text-gray-900">
      Switch
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Add a touch of interactivity with our Switch component. Seamlessly integrate toggle functionality for a clean and intuitive way to control settings and options in your application.
      </p>

      <div class="my-10 flex flex-col space-y-4">
        <p class="font-mono text-xs uppercase tracking-wider">
          V-model <span v-if="value" class="text-gray-500">- {{ value }}</span>
        </p>
        <div class="flex max-w-md flex-col space-y-2">
          <ElySwitch v-model="value">
            <span class="text-sm">Enable notifications</span>
          </ElySwitch>
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Disabled
        </p>
        <div class="flex max-w-md flex-col space-y-2">
          <ElySwitch v-model="value" disabled>
            <span class="text-sm">Enable notifications</span>
          </ElySwitch>
        </div>
      </div>
    </div>
  </ElyDocLayout>
</template>
