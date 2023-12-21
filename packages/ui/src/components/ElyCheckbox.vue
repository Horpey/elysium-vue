<script lang="ts" setup>
import type { FunctionalComponent, InputHTMLAttributes } from 'vue'
import type { ElyInputSizeKey } from '~/types/ElyInput'

interface Props extends /* @vue-ignore */ InputHTMLAttributes {
  name?: string
  modelValue?: boolean
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
  inputId: 'checkbox',
  name: 'checkbox',
  modelValue: undefined,
  required: false,
  placeholder: undefined,
  disabled: false,
  loading: false,
  inputClass: undefined,
  class: undefined,
  size: 'MEDIUM',
  icon: undefined,
  onInput: () => { },
  onBlur: () => { },
  onChange: () => { },
})

const emit = defineEmits(['update:modelValue'])

const input = ref<HTMLInputElement | null>(null)

const classes = computed(() => {
  const baseClass = ''

  let classString = baseClass

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
  <!-- <span class="flex space-x-2">
    <input
      :id="inputId"
      ref="input"
      :class="classes"
      :name="name"
      :value="modelValue"
      type="checkbox"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled || loading"
      v-bind="$attrs"
      @input="onInput"
      @blur="onBlur"
      @change="onChange"
    >
   
   <label
      :for="inputId"
      class="cursor-pointer flex items-center"
    >
      <span>
        <slot />
      </span>
    </label>
  </span> -->

  <div class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input  :value="modelValue" :id="inputId" :name="name" type="checkbox" class="h-4 w-4 border-gray-300 text-koromiko-700 focus:ring-koromiko-700" :disabled="disabled"/>
        </div>
        <label :for="inputId" class="ml-3 text-sm leading-6">
            <slot />
        </label>
      </div>
</template>
