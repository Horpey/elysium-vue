<script setup lang="ts">
import { ElyTextarea } from '@horpey/elysium-vue'
import { useMeta } from '~/composables/useMeta'

const value = ref('')
useMeta({
  title: 'Textarea',
})
</script>

<template>
  <ElyDocLayout>
    <div class="mb-4 flex items-center gap-1.5 text-sm font-semibold text-koromiko-700">
      Components
    </div>
    <h1 class="text-5xl font-bold uppercase tracking-wider text-gray-900">
      Textarea
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Streamline text input with our Textarea component. Enhance user interactions by providing a versatile and resizable input field for longer content, making data entry a breeze in your application.
      </p>

      <div class="my-10 flex flex-col space-y-4">
        <p class="font-mono text-xs uppercase tracking-wider">
          V-model <span v-if="value" class="text-gray-500">- {{ value }}</span>
        </p>
        <div class="flex max-w-md flex-col">
          <ElyTextarea v-model="value" />
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Disabled
        </p>
        <div class="flex max-w-md flex-col">
          <ElyTextarea disabled />
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Rows
        </p>
        <div class="flex max-w-md flex-col">
          <ElyTextarea placeholder="Search..." :rows="5" :resize="false" />
        </div>
      </div>
    </div>
  </ElyDocLayout>
</template>
