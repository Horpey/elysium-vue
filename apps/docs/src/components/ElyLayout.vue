<script setup lang="ts">
interface Props {
  theme?: 'dark' | 'light'
}

defineProps<Props>()
</script>

<template>
  <ElyNavbar :theme="theme" />
  <slot />
</template>
