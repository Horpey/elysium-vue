<script setup lang="ts">
import type { ElyAvatarSizeKey } from '~/types/ElyAvatar'

interface Props {
  src?: string
  alt: string
  size?: ElyAvatarSizeKey
  chip?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  src: '',
  alt: '',
  size: 'MEDIUM',
})

const classes = computed(() => {
  let sizeClass = ''

  switch (props.size) {
    case 'SMALL':
      sizeClass = 'h-6 w-6'
      break
    case 'MEDIUM':
      sizeClass = 'h-10 w-10'
      break
    case 'LARGE':
      sizeClass = 'h-16 w-16'
      break
  }

  return sizeClass
})
</script>

<template>
  <span
    class="relative m-2 inline-flex items-center justify-center border-koromiko-700 bg-koromiko-800/10 text-koromiko-700 ring-1 ring-koromiko-700 ring-offset-2"
    :class="classes"
  >
    <img v-if="src" :src="src" :alt="alt">

    <span v-else class="font-medium uppercase leading-none">{{
      alt
        .split(' ')
        .map((word) => word[0])
        .join('')
    }}</span>

    <span
      v-if="chip" class="absolute right-0 top-0 block -translate-y-1/2 translate-x-1/2 bg-green-400 ring-2 ring-white"
      :class="{
        'size-1.5': size === 'SMALL',
        'size-2': size === 'MEDIUM',
        'size-3': size === 'LARGE',
      }"
    />
  </span>
</template>
