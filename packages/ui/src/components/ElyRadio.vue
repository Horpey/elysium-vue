<script lang="ts" setup>
import type { InputHTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ InputHTMLAttributes {
  name?: string
  value?: string | number | boolean
  modelValue?: string | number | boolean
  required?: boolean
  disabled?: boolean
  inputId?: string
  onClick?: (event: Event) => void
  onChange?: (event: Event) => void
}

const props = withDefaults(defineProps<Props>(), {
  inputId: 'radio',
  name: 'radio',
  modelValue: undefined,
  required: false,
  disabled: false,
  class: undefined,
  onClick: () => { },
  onChange: () => { },
})

const emit = defineEmits(['update:modelValue'])

const toggle = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

function onChange(event: Event) {
  props.onChange(event)
  emit('update:modelValue', toggle.value)
}

function onClick(event: Event) {
  props.onClick(event)
}
</script>

<template>
  <div class="relative flex items-start">
    <div class="flex h-6 items-center">
      <input
        v-bind="$attrs"
        :id="inputId"
        v-model="toggle"
        :value="value"
        :name="name"
        type="radio"
        class="size-4 border-gray-300 text-koromiko-700 focus:ring-koromiko-700 disabled:cursor-not-allowed disabled:opacity-60"
        :disabled="disabled"
        :checked="checked"
        :required="required"
        @click="onClick"
        @change="onChange"
      >
    </div>
    <label :for="inputId" class="ml-3 text-sm leading-6">
      <slot />
    </label>
  </div>
</template>
