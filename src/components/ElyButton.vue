<script setup lang="ts">
import type { ButtonHTMLAttributes, FunctionalComponent } from 'vue'
import { RouterLink } from 'vue-router'
import type { ElyButtonSizeKey, ElyButtonThemeKey } from '~/types/ElyButton'

interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  type?: 'button' | 'submit' | 'reset'
  theme?: ElyButtonThemeKey
  disabled?: boolean
  leftIcon?: FunctionalComponent
  rightIcon?: FunctionalComponent
  loading?: boolean
  size?: ElyButtonSizeKey
  to?: string
  href?: string
  target?: string
  onClick?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  to: undefined,
  href: undefined,
  target: undefined,
  rel: undefined,
  type: 'button',
  disabled: false,
  theme: 'PRIMARY',
  size: 'MEDIUM',
  onClick: () => {},
})

const isDisabled = computed(() => props.disabled || props.loading)

const buttonClass = computed(() => {
  const baseClass = 'border flex items-center space-x-2 px-5 py-2 text-xs font-light uppercase tracking-wider transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 shadow-btn'
  let themeClass = ''
  const sizeClass = ''

  switch (props.theme) {
    case 'PRIMARY':
      themeClass = 'border-transparent bg-koromiko-700 text-white focus:ring-koromiko-600'
      break
    case 'SECONDARY':
      themeClass = 'border-transparent bg-aquamarine-700 text-white focus:ring-aquamarine-600'
      break
    case 'TERTIARY':
      themeClass = 'border-transparent bg-codgray-300 text-white focus:ring-codgray-200'
      break
    case 'DESTRUCTIVE':
      themeClass = 'border-transparent bg-rose-700 text-white focus:ring-rose-600'
      break
  }

  const classes = [baseClass, themeClass, sizeClass]

  if (isDisabled.value)
    classes.push('cursor-not-allowed opacity-50')

  return classes.join(' ')
})
</script>

<template>
  <RouterLink
    v-if="to"
    :class="buttonClass"
    :disabled="disabled"
    :to="to"
  >
    <span><slot /></span>
  </RouterLink>

  <a
    v-else-if="href"
    :class="buttonClass"
    :disabled="disabled"
    :href="href"
    :target="target"
  >
    <span><slot /></span>
  </a>

  <button
    v-else
    :class="buttonClass"
    :disabled="disabled"
    @click="onClick"
  >
    <ElyLoader v-if="loading" />
    <span v-if="leftIcon">
      <component
        :is="leftIcon"
        :class="{
          'h-3 w-3': size === 'SMALL',
          'h-4 w-4': size === 'MEDIUM',
          'h-5 w-5': size === 'LARGE',
        }"
      />
    </span>
    <span><slot /></span>
    <span v-if="rightIcon">
      <component
        :is="rightIcon"
        :class="{
          'h-3 w-3': size === 'SMALL',
          'h-4 w-4': size === 'MEDIUM',
          'h-5 w-5': size === 'LARGE',
        }"
      />
    </span>
  </button>
</template>
