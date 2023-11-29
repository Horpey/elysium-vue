<script lang="ts" setup>
import { ElyAlert } from '@horpey/elysium-vue'
</script>

<template>
  <ElyDocLayout>
    <div class="text-koromiko-700 mb-4 flex items-center gap-1.5 text-sm font-semibold">
      Components
    </div>
    <h1 class="font-headline text-5xl text-gray-900">
      Alert
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Notify users instantly with our versatile alert component. Seamlessly integrate notifications, warnings, and important messages into your user interface, enhancing user experience and communication within your application.
      </p>

      <div class="my-10">
        <ElyAlert class="mt-4">
          <template #title>
            <span>Alert</span>
          </template>
          <template #description>
            <span>This is an alert component.</span>
          </template>
        </ElyAlert>
      </div>
    </div>
  </ElyDocLayout>
</template>
