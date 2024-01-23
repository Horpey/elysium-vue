<script setup lang="ts">
import type { ElyAlertThemeKey } from '~/types/ElyAlert'

interface Props {
  title?: string
  theme?: ElyAlertThemeKey
}

const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  theme: 'PRIMARY',
})

const classes = computed(() => {
  let themeClass = ''

  switch (props.theme) {
    case 'PRIMARY':
      themeClass = 'border-koromiko-700 bg-koromiko-800/10 text-koromiko-900'
      break
    case 'SECONDARY':
      themeClass = 'border-aquamarine-700 bg-aquamarine-800/10 text-aquamarine-900'
      break
    case 'TERTIARY':
      themeClass = 'border-codgray-300 bg-codgray-800/10 text-codgray-900'
      break
    case 'DESTRUCTIVE':
      themeClass = 'border-rose-700 bg-rose-800/10 text-rose-900'
      break
  }

  return themeClass
})
</script>

<template>
  <div class="clip-top-right relative border border-l-8 px-3 py-2" :class="classes">
    <span class="flex space-x-3 font-mono text-xs">
      <span
        v-if="$slots.icon"
        class="h-4 w-4" 
      >
      <slot name="icon" />
    </span>

      <div class="flex flex-col space-y-1">
        <span v-if="title" class="text-xs font-bold uppercase tracking-wider">
          {{ title }}
        </span>

        <span v-if="$slots">
          <slot />
        </span>
      </div>
    </span>
  </div>
</template>
