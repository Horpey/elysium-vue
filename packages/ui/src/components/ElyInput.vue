<script lang="ts" setup>
import type { FunctionalComponent, InputHTMLAttributes } from 'vue'
import ElyLoader from '../components/ElyLoader.vue'
import type { ElyInputSizeKey } from '~/types/ElyInput'

interface Props extends /* @vue-ignore */ InputHTMLAttributes {
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  name?: string
  modelValue?: string | number
  required?: boolean
  placeholder?: string
  disabled?: boolean
  loading?: boolean
  inputClass?: string
  inputId?: string
  size?: ElyInputSizeKey
  icon?: FunctionalComponent
  onInput?: (event: Event) => void
  onBlur?: (event: Event) => void
  onChange?: (event: Event) => void
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  name: undefined,
  modelValue: undefined,
  required: false,
  placeholder: undefined,
  disabled: false,
  loading: false,
  inputClass: undefined,
  class: undefined,
  inputId: undefined,
  size: 'MEDIUM',
  icon: undefined,
  onInput: () => { },
  onBlur: () => { },
  onChange: () => { },
})

const emit = defineEmits(['update:modelValue'])

const slots = useSlots()

const input = ref<HTMLInputElement | null>(null)

const classes = computed(() => {
  const baseClass = 'border border-koromiko-600 shadow-sm focus:ring-1 focus:ring-koromiko-700 focus:border-koromiko-700 outline-none transition-all duration-200 ease-in-out w-full disabled:cursor-not-allowed disabled:bg-koromiko-800/10 disabled:text-koromiko-900'

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

  if (slots.icon) {
    switch (props.size) {
      case 'SMALL':
        sizeClass = 'text-xs px-2 py-1 pl-6'
        break
      case 'MEDIUM':
        sizeClass = 'text-sm px-3 py-2 pl-8'
        break
      case 'LARGE':
        sizeClass = 'text-base px-4 py-3 pl-10'
        break
    }
  }

  if (props.class)
    classString += ` ${props.class}`

  if (props.inputClass)
    classString += ` ${props.inputClass}`

  if (sizeClass)
    classString += ` ${sizeClass}`

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
    <input
      :id="inputId"
      ref="input"
      :class="classes"
      :name="name"
      :value="modelValue"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled || loading"
      v-bind="$attrs"
      @input="onInput"
      @blur="onBlur"
      @change="onChange"
    >

    <span
      v-if="$slots.icon"
      class="text-koromiko-600 pointer-events-none absolute inset-y-0 start-0 flex h-full items-center"
      :class="{
        'w-6 pl-1 [&>*]:h-2 [&>svg]:w-2': size === 'SMALL',
        'w-8 pl-2 [&>*]:h-4 [&>svg]:w-4': size === 'MEDIUM',
        'w-10 pl-3 [&>*]:h-6 [&>svg]:w-6': size === 'LARGE',
      }"
    >
      <slot name="icon" />
    </span>

    <ElyLoader
      v-if="loading" size="SMALL" class="absolute top-1" :class="{
        'right-2': size === 'SMALL',
        'right-3': size === 'MEDIUM',
        'right-4': size === 'LARGE',
      }"
    />
    <slot />
  </span>
</template>
