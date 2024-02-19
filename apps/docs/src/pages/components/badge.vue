<script setup lang="ts">
import { ElyBadge } from '@horpey/elysium-vue'
import { useMeta } from '~/composables/useMeta'

useMeta({
  title: 'Badge',
})
</script>

<template>
  <ElyDocLayout>
    <div class="mb-4 flex items-center gap-1.5 text-sm font-semibold text-koromiko-700">
      Components
    </div>
    <h1 class="text-5xl font-bold uppercase tracking-wider text-gray-900">
      Badge
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Highlight important information with our Badge component. Easily integrate visually striking badges to draw attention to key elements or signify status in your application.
      </p>

      <div class="my-10 flex flex-col space-y-4">
        <p class="font-mono text-xs uppercase tracking-wider">
          Default
        </p>
        <div class="flex space-x-4">
          <ElyBadge>Badge</ElyBadge>
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Theme
        </p>
        <div class="flex space-x-4">
          <ElyBadge>
            Badge
          </ElyBadge>
          <ElyBadge theme="SECONDARY">
            Badge
          </ElyBadge>

          <ElyBadge theme="TERTIARY">
            Badge
          </ElyBadge>

          <ElyBadge theme="DESTRUCTIVE">
            Badge
          </ElyBadge>
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Size
        </p>
        <div class="flex items-start space-x-2">
          <ElyBadge size="SMALL">
            Badge
          </ElyBadge>
          <ElyBadge size="MEDIUM">
            Badge
          </ElyBadge>
          <ElyBadge size="LARGE">
            Badge
          </ElyBadge>
        </div>
      </div>
    </div>
  </ElyDocLayout>
</template>
