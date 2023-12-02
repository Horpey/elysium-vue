<script setup lang="ts">
import { ElyInput } from '@horpey/elysium-vue'
import { useMeta } from '~/composables/useMeta'
import PhSparkleDuotoneIcon from 'virtual:icons/ph/sparkle-duotone'

const value = ref('')
useMeta({
  title: 'Input',
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
          V-model <span v-if="value" class="text-gray-500">- {{ value }}</span>
        </p>
        <div class="flex space-x-4">
          <ElyInput v-model="value" />
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Sizes
        </p>
        <div class="flex space-y-4 flex-col max-w-md">
          <ElyInput v-model="value" size="SMALL" placeholder="Search"/>
          <ElyInput v-model="value" size="MEDIUM" placeholder="Search"/>
          <ElyInput v-model="value" size="LARGE" placeholder="Search"/>
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
         Disabled
        </p>
        <div class="flex space-x-4">
          <ElyInput v-model="value" placeholder="Search" disabled/>
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
         Icon
        </p>
        <div class="flex space-x-4">
          <ElyInput v-model="value" placeholder="Search" input-class="w-full" :icon="PhSparkleDuotoneIcon" size="LARGE"/>
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
         Loading
        </p>
        <div class="flex space-x-4">
          <ElyInput v-model="value" placeholder="Search" size="LARGE" loading/>
        </div>

      </div>
    </div>
  </ElyDocLayout>
</template>
