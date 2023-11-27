<script setup lang="ts">
interface Props {
  to?: string
  href?: string
  target?: string
  rel?: string
  type?: string
  disabled?: boolean
  onClick?: () => void
}

withDefaults(defineProps<Props>(), {
  to: undefined,
  href: undefined,
  target: undefined,
  rel: undefined,
  type: 'button',
  disabled: false,
  onClick: () => {},
})
</script>

<template>
  <RouterLink
    v-if="to"

    class="border px-5 py-3 text-xs font-light uppercase tracking-wider text-white shadow-btn transition-shadow duration-200 ease-in-out hover:shadow-none"
    :class="{
      'cursor-not-allowed opacity-50': disabled,
    }"
    :disabled="disabled"
    :to="to"
  >
    <slot />
  </RouterLink>

  <a
    v-else-if="href"
    class="border px-5 py-3 text-xs font-light uppercase tracking-wider text-white shadow-btn transition-shadow duration-200 ease-in-out hover:shadow-none"
    :class="{
      'cursor-not-allowed opacity-50': disabled,
    }"
    :disabled="disabled"
    :href="href"
    :target="target"
    :rel="rel"
    @click="onClick"
  >
    <slot />
  </a>

  <button
    v-else
    class="border px-5 py-3 text-xs font-light uppercase tracking-wider text-white shadow-btn transition-shadow duration-200 ease-in-out hover:shadow-none"
    :class="{
      'cursor-not-allowed opacity-50': disabled,
    }"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>
