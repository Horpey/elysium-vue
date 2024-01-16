<script lang="ts" setup>
import { ElyAlert } from '@horpey/elysium-vue'
import PhSparkleDuotoneIcon from 'virtual:icons/ph/sparkle-duotone'
import { useMeta } from '~/composables/useMeta'

useMeta({
  title: 'Alert',
})
</script>

<template>
  <ElyDocLayout>
    <div class="mb-4 flex items-center gap-1.5 text-sm font-semibold text-koromiko-700">
      Components
    </div>
    <h1 class="text-5xl font-bold uppercase tracking-wider text-gray-900">
      Alert
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Notify users instantly with our versatile alert component. Seamlessly integrate notifications, warnings, and
        important messages into your user interface, enhancing user experience and communication within your application.
      </p>

      <div class="my-10 flex flex-col space-y-4">
        <p class="font-mono text-xs uppercase tracking-wider">
          Title
        </p>
        <ElyAlert title="Success!" />

        <p class="font-mono text-xs uppercase tracking-wider">
          Description
        </p>
        <ElyAlert title="Success!">
          <p>You've successfully integrated Elysium Vue into your<span class="font-bold"> Vue 3 application!</span></p>
        </ElyAlert>

        <p class="font-mono text-xs uppercase tracking-wider">
          Icon
        </p>
        <ElyAlert
          title="Success!"
          :icon="PhSparkleDuotoneIcon"
        >
          <p>You've successfully integrated Elysium Vue into your<span class="font-bold"> Vue 3 application!</span></p>
        </ElyAlert>

        <p class="font-mono text-xs uppercase tracking-wider">
          Theme
        </p>
        <ElyAlert
          :icon="PhSparkleDuotoneIcon"
        >
          <p>You've successfully integrated Elysium Vue into your<span class="font-bold"> Vue 3 application!</span></p>
        </ElyAlert>

        <ElyAlert
          theme="SECONDARY"
          :icon="PhSparkleDuotoneIcon"
        >
          <p>You've successfully integrated Elysium Vue into your<span class="font-bold"> Vue 3 application!</span></p>
        </ElyAlert>

        <ElyAlert
          theme="TERTIARY"
          :icon="PhSparkleDuotoneIcon"
        >
          <p>You've successfully integrated Elysium Vue into your<span class="font-bold"> Vue 3 application!</span></p>
        </ElyAlert>

        <ElyAlert
          theme="DESTRUCTIVE"
          :icon="PhSparkleDuotoneIcon"
        >
          <p>You've successfully integrated Elysium Vue into your<span class="font-bold"> Vue 3 application!</span></p>
        </ElyAlert>
      </div>
    </div>
  </ElyDocLayout>
</template>
