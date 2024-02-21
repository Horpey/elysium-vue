<script setup lang="ts">
import { ElyButton, ElyModal } from '@horpey/elysium-vue'
import { useMeta } from '~/composables/useMeta'

useMeta({
  title: 'Modal',
})

const isOpen = ref(false)
const preventClose = ref(false)
</script>

<template>
  <ElyDocLayout>
    <div class="text-koromiko-700 mb-4 flex items-center gap-1.5 text-sm font-semibold">
      Components
    </div>
    <h1 class="text-5xl font-bold uppercase tracking-wider text-gray-900">
      Modal
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Enhance user interactions with our Modal component. Seamlessly integrate customizable pop-up windows for displaying important messages, gathering user input, or presenting additional content, ensuring a smooth and intuitive experience in your application.
      </p>

      <div class="my-10 flex flex-col space-y-4">
        <p class="font-mono text-xs uppercase tracking-wider">
          Usage
        </p>
        <div class="flex items-start space-x-4">
          <ElyButton size="SMALL" @click="isOpen = true; preventClose = false">
            Open Modal
          </ElyButton>
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Prevent Close
        </p>
        <div class="flex items-start space-x-4">
          <ElyButton size="SMALL" @click="isOpen = true; preventClose = true">
            Open Modal
          </ElyButton>
        </div>
      </div>
    </div>

    <ElyModal v-model="isOpen" :prevent-close="preventClose">
      <template #header>
        Modal Header
      </template>
      <p class="text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui
        eget nunc lacinia lacinia
      </p>
      <template #footer>
        <ElyButton size="SMALL" @click="isOpen = false">
          Close
        </ElyButton>
      </template>
    </ElyModal>
  </ElyDocLayout>
</template>
