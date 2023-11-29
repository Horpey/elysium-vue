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
    <h1 class="font-headline text-5xl text-gray-900">
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
        <ElyAlert title="Success!" message="You've successfully integrated Elysium Vue into your Vue 3 application!" />

        <p class="font-mono text-xs uppercase tracking-wider">
          Icon
        </p>
        <ElyAlert
          title="Success!" message="You've successfully integrated Elysium Vue into your Vue 3 application!"
          :icon="PhSparkleDuotoneIcon"
        />

        <p class="font-mono text-xs uppercase tracking-wider">
          Theme
        </p>
        <ElyAlert
          message="You've successfully integrated Elysium Vue into your Vue 3 application!"
          :icon="PhSparkleDuotoneIcon"
        />

        <ElyAlert
          theme="SECONDARY" message="You've successfully integrated Elysium Vue into your Vue 3 application!"
          :icon="PhSparkleDuotoneIcon"
        />

        <ElyAlert
          theme="TERTIARY" message="You've successfully integrated Elysium Vue into your Vue 3 application!"
          :icon="PhSparkleDuotoneIcon"
        />

        <ElyAlert
          theme="DESTRUCTIVE" message="You've successfully integrated Elysium Vue into your Vue 3 application!"
          :icon="PhSparkleDuotoneIcon"
        />
      </div>
    </div>
  </ElyDocLayout>
</template>
