<script setup lang="ts">
interface Props {
  modelValue?: boolean
}

withDefaults(defineProps<Props>(), {
  modelValue: false,
})

const emit = defineEmits(['update:modelValue'])

function setIsOpen(value: boolean) {
  emit('update:modelValue', value)
}
</script>

<template>
  {{ modelValue }}
  <!-- <Dialog :open="modelValue" @close="setIsOpen">
    <DialogPanel>
      <DialogTitle>Deactivate account</DialogTitle>
      <DialogDescription>
        This will permanently deactivate your account
      </DialogDescription>

      <p>
        Are you sure you want to deactivate your account? All of your data will be
        permanently removed. This action cannot be undone.
      </p>

      <button @click="setIsOpen(false)">
        Deactivate
      </button>
      <button @click="setIsOpen(false)">
        Cancel
      </button>
    </DialogPanel>
  </Dialog> -->
</template>
