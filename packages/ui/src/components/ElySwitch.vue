<script lang="ts" setup>
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

interface Props {
  name?: string
  value?: string | number | boolean
  modelValue?: boolean
  required?: boolean
  disabled?: boolean
  inputId?: string
  onClick?: (event: Event) => void
  onChange?: (event: Event) => void
}

const props = withDefaults(defineProps<Props>(), {
  inputId: 'checkbox',
  name: 'checkbox',
  modelValue: undefined,
  required: false,
  disabled: false,
  class: undefined,
  icon: undefined,
  onClick: () => { },
  onChange: () => { },
})

const emit = defineEmits(['update:modelValue'])

const enabled = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <SwitchGroup as="div" class="flex items-center">
    <Switch
      v-model="enabled"
      :disabled="disabled"
      class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-koromiko-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      :class="[enabled ? 'bg-koromiko-700' : 'bg-gray-200']"
    >
      <span
        aria-hidden="true"
        class="pointer-events-none inline-block size-5 bg-white shadow ring-0 transition duration-200 ease-in-out" :class="[enabled ? 'translate-x-5' : 'translate-x-0']"
      />
    </Switch>
    <SwitchLabel as="span" class="ml-3 cursor-pointer text-sm leading-6">
      <slot />
    </SwitchLabel>
  </SwitchGroup>
</template>
