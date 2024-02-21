<script setup lang="ts">
import dialogPolyfill from 'dialog-polyfill'

interface Props {
  modelValue?: boolean
  preventClose?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  preventClose: false,
})

const emit = defineEmits(['update:modelValue'])

const dialog = ref<HTMLDialogElement | null>(null)

onMounted(() => {
  dialogPolyfill.registerDialog(dialog.value as HTMLDialogElement)
})

watchEffect(() => {
  if (dialog.value) {
    if (props.modelValue)
      dialog.value.showModal()
    else
      dialog.value.close()
  }
})

function onBackdropClick(e: MouseEvent) {
  if (props.preventClose)
    return

  if ((e.target as HTMLElement)?.tagName === 'DIALOG')
    emit('update:modelValue', false)
}
</script>

<template>
  <!-- TODO: Add transition to modal -->
  <dialog
    ref="dialog"
    class="fixed !mx-auto border border-x-0 border-b-4 border-koromiko-600 bg-white outline-none sm:max-w-lg"
    @click="onBackdropClick"
  >
    <div class="flex flex-col">
      <div v-if="$slots.header" class="border-b border-koromiko-200 p-3">
        <slot name="header" />
      </div>

      <div class="border-b border-koromiko-200 p-3 ">
        <slot />
      </div>

      <div v-if="$slots.footer" class="p-3">
        <slot name="footer" />
      </div>
    </div>

    <button
      class="absolute right-2 top-2 bg-koromiko-600 p-1"
      aria-label="Close"
      @click="emit('update:modelValue', false)"
    >
      <svg
        class="size-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </dialog>
</template>

<style scoped>
  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
