<script setup lang="ts">
import type { ElyBadgeSizeKey, ElyBadgeThemeKey } from '~/types/ElyBadge'

interface Props {
  size?: ElyBadgeSizeKey
  theme?: ElyBadgeThemeKey
}

const props = withDefaults(defineProps<Props>(), {
  size: 'MEDIUM',
  theme: 'PRIMARY',
})

const classes = computed(() => {
  let themeClass = ''

  switch (props.theme) {
    case 'PRIMARY':
      themeClass = 'border-koromiko-700 bg-koromiko-800/10 text-koromiko-800'
      break
    case 'SECONDARY':
      themeClass = 'border-aquamarine-700 bg-aquamarine-800/10 text-aquamarine-800'
      break
    case 'TERTIARY':
      themeClass = 'border-codgray-300 bg-codgray-800/10 text-codgray-800'
      break
    case 'DESTRUCTIVE':
      themeClass = 'border-rose-700 bg-rose-800/10 text-rose-800'
      break
  }

  switch (props.size) {
    case 'SMALL':
      themeClass += ' px-2 py-0.5 text-xs'
      break
    case 'MEDIUM':
      themeClass += ' px-2 py-1 text-sm'
      break
    case 'LARGE':
      themeClass += ' px-3 py-1.5 text-base'
      break
  }

  return themeClass
})
</script>

<template>
  <span class="relative inline-block items-center border" :class="classes">
    <slot />
  </span>
</template>
