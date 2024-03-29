<script setup lang="ts">
import type { ButtonHTMLAttributes, FunctionalComponent } from 'vue'
import { RouterLink } from 'vue-router'
import ElyLoader from './ElyLoader.vue'
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
  onClick: () => { },
})

const isDisabled = computed(() => props.disabled || props.loading)

const buttonClass = computed(() => {
  const baseClass = 'border font-light uppercase tracking-wider transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50'

  let themeClass = ''
  let sizeClass = ''

  switch (props.theme) {
    case 'PRIMARY':
      themeClass = 'border-transparent bg-koromiko-700 text-white focus:ring-koromiko-600 hover:bg-koromiko-600 hover:text-white'
      break
    case 'SECONDARY':
      themeClass = 'border-transparent bg-aquamarine-700 text-white focus:ring-aquamarine-600 hover:bg-aquamarine-600 hover:text-white'
      break
    case 'TERTIARY':
      themeClass = 'border-transparent bg-codgray-300 text-white focus:ring-codgray-200 hover:bg-codgray-50 hover:text-white'
      break
    case 'DESTRUCTIVE':
      themeClass = 'border-transparent bg-rose-700 text-white focus:ring-rose-600 hover:bg-rose-600 hover:text-white'
      break
  }

  switch (props.size) {
    case 'SMALL':
      sizeClass = 'text-xs px-3 py-1 h-8'
      break
    case 'MEDIUM':
      sizeClass = 'text-sm px-4 py-2'
      break
    case 'LARGE':
      sizeClass = 'text-base px-6 py-3'
      break
  }

  const classes = [baseClass, themeClass, sizeClass]

  if (isDisabled.value)
    classes.push('cursor-not-allowed opacity-50')

  return classes.join(' ')
})
</script>

<template>
  <RouterLink v-if="to" class="inline-block" :class="buttonClass" :disabled="disabled" :to="to">
    <span
      :class="{
        'flex items-center': loading || leftIcon || rightIcon,
        'space-x-1': size === 'SMALL' && (loading || leftIcon || rightIcon),
        'space-x-2': size === 'MEDIUM' || size === 'LARGE' && (loading || leftIcon || rightIcon),
      }"
    >
      <ElyLoader v-if="loading" :size="size" theme="LIGHT" />
      <span v-if="leftIcon">
        <component
          :is="leftIcon" :class="{
            'size-3': size === 'SMALL',
            'size-4': size === 'MEDIUM',
            'size-5': size === 'LARGE',
          }"
        />
      </span>
      <span>
        <slot />
      </span>
      <span v-if="rightIcon">
        <component
          :is="rightIcon" :class="{
            'size-3': size === 'SMALL',
            'size-4': size === 'MEDIUM',
            'size-5': size === 'LARGE',
          }"
        />
      </span>
    </span>
  </RouterLink>

  <a v-else-if="href" class="inline-block" :class="buttonClass" :disabled="disabled" :href="href" :target="target">
    <span
      :class="{
        'flex items-center': loading || leftIcon || rightIcon,
        'space-x-1': size === 'SMALL' && (loading || leftIcon || rightIcon),
        'space-x-2': size === 'MEDIUM' || size === 'LARGE' && (loading || leftIcon || rightIcon),
      }"
    >
      <ElyLoader v-if="loading" :size="size" theme="LIGHT" />
      <span v-if="leftIcon">
        <component
          :is="leftIcon" :class="{
            'size-3': size === 'SMALL',
            'size-4': size === 'MEDIUM',
            'size-5': size === 'LARGE',
          }"
        />
      </span>
      <span>
        <slot />
      </span>
      <span v-if="rightIcon">
        <component
          :is="rightIcon" :class="{
            'size-3': size === 'SMALL',
            'size-4': size === 'MEDIUM',
            'size-5': size === 'LARGE',
          }"
        />
      </span>
    </span>
  </a>

  <button v-else :class="buttonClass" :disabled="disabled" v-bind="$attrs" :type="type" @click="onClick">
    <span
      :class="{
        'flex items-center': loading || leftIcon || rightIcon,
        'space-x-1': size === 'SMALL' && (loading || leftIcon || rightIcon),
        'space-x-2': size === 'MEDIUM' || size === 'LARGE' && (loading || leftIcon || rightIcon),
      }"
    >
      <ElyLoader v-if="loading" :size="size" theme="LIGHT" />
      <span v-if="leftIcon">
        <component
          :is="leftIcon" :class="{
            'size-3': size === 'SMALL',
            'size-4': size === 'MEDIUM',
            'size-5': size === 'LARGE',
          }"
        />
      </span>
      <span>
        <slot />
      </span>
      <span v-if="rightIcon">
        <component
          :is="rightIcon" :class="{
            'size-3': size === 'SMALL',
            'size-4': size === 'MEDIUM',
            'size-5': size === 'LARGE',
          }"
        />
      </span>
    </span>
  </button>
</template>
