<script setup lang="ts">
import { ElyCheckbox } from '@horpey/elysium-vue'
import { useMeta } from '~/composables/useMeta'

const value = ref(false)
useMeta({
  title: 'Checkbox',
})
</script>

<template>
  <ElyDocLayout>
    <div class="text-koromiko-700 mb-4 flex items-center gap-1.5 text-sm font-semibold">
      Components
    </div>
    <h1 class="text-5xl font-bold uppercase tracking-wider text-gray-900">
      Checkbox
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Bring user interactivity to the next level with our Checkbox component. Seamlessly integrate versatile options and selections, enhancing user control and engagement in your application."
      </p>

      <div class="my-10 flex flex-col space-y-4">
        <p class="font-mono text-xs uppercase tracking-wider">
          V-model <span v-if="value" class="text-gray-500">- {{ value }}</span>
        </p>
        <div class="flex max-w-md flex-col">
          <ElyCheckbox v-model="value">
            Label
          </ElyCheckbox>
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Disabled
        </p>
        <div class="flex max-w-md flex-col">
          <ElyCheckbox v-model="value" disabled>
            Label
          </ElyCheckbox>
        </div>
      </div>
    </div>
  </ElyDocLayout>
</template>
