<script lang="ts" setup>
import type { TextareaHTMLAttributes } from 'vue'
import type { ElyInputSizeKey } from '~/types/ElyInput'

interface Props extends /* @vue-ignore */ TextareaHTMLAttributes {
  name?: string
  modelValue?: string | number
  required?: boolean
  placeholder?: string
  disabled?: boolean
  inputClass?: string
  inputId?: string
  rows?: number
  size?: ElyInputSizeKey
  resize?: boolean
  onInput?: (event: Event) => void
  onBlur?: (event: Event) => void
  onChange?: (event: Event) => void
}

const props = withDefaults(defineProps<Props>(), {
  name: undefined,
  modelValue: undefined,
  required: false,
  placeholder: undefined,
  disabled: false,
  inputClass: undefined,
  inputId: undefined,
  rows: 3,
  resize: true,
  size: 'MEDIUM',
  onInput: () => { },
  onBlur: () => { },
  onChange: () => { },
})

const emit = defineEmits(['update:modelValue'])

const classes = computed(() => {
  const baseClass = 'border border-koromiko-600 shadow-sm focus:ring-1 focus:ring-koromiko-700 focus:border-koromiko-700 outline-none transition-all duration-200 ease-in-out w-full disabled:cursor-not-allowed disabled:opacity-75'

  let classString = baseClass
  let sizeClass = ''

  switch (props.size) {
    case 'SMALL':
      sizeClass = 'text-xs px-2 py-1'
      break
    case 'MEDIUM':
      sizeClass = 'text-sm px-3 py-2'
      break
    case 'LARGE':
      sizeClass = 'text-base px-4 py-3'
      break
  }

  if (props.class)
    classString += ` ${props.class}`

  if (props.inputClass)
    classString += ` ${props.inputClass}`

  if (sizeClass)
    classString += ` ${sizeClass}`

  if (props.resize)
    classString += ' resize'
  else classString += ' resize-none'

  return classString
})

function onInput(event: Event) {
  props.onInput(event)
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

function onBlur(event: Event) {
  props.onBlur(event)
}

function onChange(event: Event) {
  props.onChange(event)
}
</script>

<template>
  <span class="relative">
    <textarea
      :id="inputId"
      :value="modelValue"
      :name="name"
      :rows="rows"
      :required="required"
      :disabled="disabled"
      :placeholder="placeholder"
      v-bind="$attrs"
      :class="classes"
      @input="onInput"
      @blur="onBlur"
      @change="onChange"
    />
    <slot />
  </span>
</template>
