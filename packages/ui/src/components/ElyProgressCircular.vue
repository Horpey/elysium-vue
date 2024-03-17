<script lang="ts" setup>
import type { ElyProgressThemeKey } from '~/types/ElyProgress'

// TODO: Add Validation for value and max props to ensure they are not negative numbers and not greater than the max value

interface Props {
  value: number
  max?: number | string[]
  theme?: ElyProgressThemeKey
}

const props = withDefaults(defineProps<Props>(), {
  value: 30,
  max: 100,
  theme: 'PRIMARY',
})

const containerClass = computed(() => `progress-ring progress-ring--medium relative `)
const svgClass = computed(() => {
  const themeClass = `progress-ring__svg progress-ring__svg--medium `

  return themeClass
})

const baseClass = computed(() => {
  switch (props.theme) {
    case 'PRIMARY':
      return 'stroke-koromiko-600'
    case 'SECONDARY':
      return 'stroke-aquamarine-600'
    case 'TERTIARY':
      return 'stroke-codgray-600'
    case 'DESTRUCTIVE':
      return 'stroke-rose-600'
  }
})

const progressClass = computed(() => {
  switch (props.theme) {
    case 'PRIMARY':
      return 'stroke-koromiko-700'
    case 'SECONDARY':
      return 'stroke-aquamarine-700'
    case 'TERTIARY':
      return 'stroke-codgray-700'
    case 'DESTRUCTIVE':
      return 'stroke-rose-700'
  }
})

const OFFSET = 251.2
const circleDasharray = `${OFFSET} ${OFFSET}` // Full circle
const circleDashoffset = computed(() => {
  if (Array.isArray(props.max))
    return OFFSET - (OFFSET * props.value) / (props.max.length - 1)

  if (props.max !== 100)
    return OFFSET - (OFFSET * props.value) / props.max

  const radius = 40
  const circumference = 2 * Math.PI * radius
  return `${circumference - (props.value / 100) * circumference}`
})

const countValue = computed(() => {
  if (Array.isArray(props.max))
    return props.max[props.value]

  return props.max === 100 ? `${props.value}%` : props.value
})
</script>

<template>
  <div :class="[containerClass]">
    <svg :class="svgClass" viewBox="0 0 100 100">
      <circle
        class="progress-ring__circle stroke-1" cx="50" cy="50" r="40" stroke-linecap="square"
        :class="baseClass"
      />

      <circle
        class="progress-ring__circle stroke-[5px]"
        :class="progressClass"
        :style="{ strokeDasharray: circleDasharray, strokeDashoffset: circleDashoffset }" cx="50" cy="50" r="40" stroke-linecap="square"
      />
    </svg>

    <div
      class="absolute top-0 flex size-full items-center justify-center stroke-none text-xs"
      :class="{
        'text-koromiko-700': props.theme === 'PRIMARY',
        'text-aquamarine-700': props.theme === 'SECONDARY',
        'text-codgray-700': props.theme === 'TERTIARY',
        'text-rose-700': props.theme === 'DESTRUCTIVE',

      }"
    >
      <span class="bg-white/60">{{ countValue }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.progress-ring {
  &--medium {
    @apply w-16 h-16;
  }
// TODO: Add small and large sizes
//   &--small {
//     @apply w-8 h-8;
//   }
//   &--large {
//      @apply w-16 h-16;
//   }

  &__svg {
    fill: none;
    stroke-width: 6;
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

  &__circle {
    transition: stroke-dashoffset 0.35s;
  }
}
</style>
