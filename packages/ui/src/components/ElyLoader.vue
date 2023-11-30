<script setup lang="ts">
import PhSpinnerGapIconBold from 'virtual:icons/ph/spinner-gap-bold'
import type { ElyLoaderSizeKey, ElyLoaderThemeKey } from '~/types/ElyLoader'

interface Props {
  size?: ElyLoaderSizeKey
  theme?: ElyLoaderThemeKey
}

const props = withDefaults(defineProps<Props>(), {
  size: 'MEDIUM',
  theme: 'DARK',
})

const classes = computed(() => {
  let sizeClass = ''
  let themeClass = ''

  switch (props.size) {
    case 'SMALL':
      sizeClass = 'h-4 w-4'
      break
    case 'MEDIUM':
      sizeClass = 'h-6 w-6'
      break
    case 'LARGE':
      sizeClass = 'h-8 w-8'
      break
  }

  switch (props.theme) {
    case 'LIGHT':
      themeClass = 'text-white'
      break
    case 'DARK':
      themeClass = 'text-koromiko-700'
      break
  }

  return `${sizeClass} ${themeClass}`
})
</script>

<template>
  <PhSpinnerGapIconBold class="animate-spin" :class="classes" />
</template>
