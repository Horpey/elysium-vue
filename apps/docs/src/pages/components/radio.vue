<script setup lang="ts">
import { ElyRadio } from '@horpey/elysium-vue'
import { useMeta } from '~/composables/useMeta'

const options = [
  { value: 'option_001', label: 'Option 001' },
  { value: 'option_002', label: 'Option 002' },
  { value: 'option_003', label: 'Option 003' },
]

const options_two = [
  { value: 'option_0011', label: 'Option 0011' },
  { value: 'option_0022', label: 'Option 0022' },
  { value: 'option_0033', label: 'Option 0033' },
]

const selected = ref('option_001')
const selected_two = ref('option_0011')

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
      Radio
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Streamline user choices with our Radio component. Effortlessly integrate single-choice options, providing an
        intuitive and visually appealing selection experience in your application.
      </p>

      <div class="my-10 flex flex-col space-y-4">
        <p class="font-mono text-xs uppercase tracking-wider">
          V-model <span v-if="selected" class="text-gray-500">- {{ selected }}</span>
        </p>
        <div class="flex max-w-md flex-col space-y-2">
          <ElyRadio
            v-for="option of options" :key="option.value" v-model="selected" :input-id="option.value"
            v-bind="option"
          >
            {{ option.label }}
          </ElyRadio>
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Disabled
        </p>
        <div class="flex max-w-md flex-col space-y-2">
          <ElyRadio
            v-for="option of options_two" :key="option.value" v-model="selected_two" :input-id="option.value" disabled
            v-bind="option"
          >
            {{ option.label }}
          </ElyRadio>
        </div>
      </div>
    </div>
  </ElyDocLayout>
</template>
