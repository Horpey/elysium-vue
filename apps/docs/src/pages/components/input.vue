<script setup lang="ts">
import { ElyInput } from '@horpey/elysium-vue'
import PhSparkleDuotoneIcon from 'virtual:icons/ph/sparkle-duotone'
import { useMeta } from '~/composables/useMeta'

const value = ref('')
useMeta({
  title: 'Input',
})
</script>

<template>
  <ElyDocLayout>
    <div class="mb-4 flex items-center gap-1.5 text-sm font-semibold text-koromiko-700">
      Components
    </div>
    <h1 class="text-5xl font-bold uppercase tracking-wider text-gray-900">
      Input
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Elevate user interaction with our Input component. Effortlessly gather user input, enhance form elements, and provide a seamless data entry experience in your application.
      </p>

      <div class="my-10 flex flex-col space-y-4">
        <p class="font-mono text-xs uppercase tracking-wider">
          V-model <span v-if="value" class="text-gray-500">- {{ value }}</span>
        </p>
        <div class="flex max-w-md flex-col">
          <ElyInput v-model="value" />
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Sizes
        </p>
        <div class="flex max-w-md flex-col space-y-4">
          <ElyInput v-model="value" size="SMALL" placeholder="Search" />
          <ElyInput v-model="value" size="MEDIUM" placeholder="Search" />
          <ElyInput v-model="value" size="LARGE" placeholder="Search" />
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Disabled
        </p>
        <div class="flex max-w-md flex-col">
          <ElyInput size="MEDIUM" placeholder="Search" disabled />
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Icon
        </p>
        <div class="flex max-w-md flex-col">
          <ElyInput size="MEDIUM" placeholder="Search" :icon="PhSparkleDuotoneIcon" />
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Loading
        </p>
        <div class="flex max-w-md">
          <div class="w-full space-x-4">
            <ElyInput v-model="value" placeholder="Search" size="LARGE" loading />
          </div>
        </div>
      </div>
    </div>
  </ElyDocLayout>
</template>
