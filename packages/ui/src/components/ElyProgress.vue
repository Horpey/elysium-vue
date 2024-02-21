<script lang="ts" setup>
import type { ElyProgressThemeKey } from '~/types/ElyProgress'

interface Props {
  value: number
  max?: number | string[]
  animation?: boolean
  theme?: ElyProgressThemeKey
}

const props = withDefaults(defineProps<Props>(), {
  value: 30,
  max: 100,
  animation: false,
  theme: 'PRIMARY',
})

const countValue = computed(() => {
  if (Array.isArray(props.max))
    return props.max[props.value]

  return props.max === 100 ? `${props.value}%` : props.value
})

const classes = computed(() => {
  let themeClass = ''

  switch (props.theme) {
    case 'PRIMARY':
      themeClass = 'bg-koromiko-700'
      break
    case 'SECONDARY':
      themeClass = 'bg-aquamarine-700'
      break
    case 'TERTIARY':
      themeClass = 'bg-codgray-300'
      break
    case 'DESTRUCTIVE':
      themeClass = 'bg-rose-700'
      break
  }

  if (props.animation)
    themeClass += ' ely-progress-animation'

  return themeClass
})

const computedWidth = computed(() => {
  if (typeof props.max === 'number')
    return `${(props.value / props.max) * 100}%`

  else if (Array.isArray(props.max))
    return `${(props.value / (props.max.length - 1)) * 100}%`
})
</script>

<template>
  <div>
    <div class="flex justify-end">
      <span
        v-if="!animation"
        class="text-xs" :class="{
          'text-koromiko-700': props.theme === 'PRIMARY',
          'text-aquamarine-700': props.theme === 'SECONDARY',
          'text-codgray-700': props.theme === 'TERTIARY',
          'text-rose-700': props.theme === 'DESTRUCTIVE',
        }"
      >
        {{ countValue }}
      </span>
    </div>
    <div class="relative overflow-hidden">
      <div
        class="h-1 w-full"
        :class="{
          'bg-koromiko-800/10': props.theme === 'PRIMARY',
          'bg-aquamarine-800/10': props.theme === 'SECONDARY',
          'bg-codgray-800/10': props.theme === 'TERTIARY',
          'bg-rose-800/10': props.theme === 'DESTRUCTIVE',
        }"
      />
      <div class="absolute top-0 h-1" :class="classes" :style="{ width: computedWidth }" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.ely-progress-animation {
  animation: ely-progress 1.5s infinite;
}

@keyframes ely-progress {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}
</style>
