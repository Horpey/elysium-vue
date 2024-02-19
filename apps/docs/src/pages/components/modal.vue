<script setup lang="ts">
import { ElyButton, ElyModal } from '@horpey/elysium-vue'
import { useMeta } from '~/composables/useMeta'

useMeta({
  title: 'Modal',
})

const isOpen = ref(false)
</script>

<template>
  <ElyDocLayout>
    <div class="mb-4 flex items-center gap-1.5 text-sm font-semibold text-koromiko-700">
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
          <ElyButton size="SMALL" @click="isOpen = true">
            Open Modal
          </ElyButton>

          <ElyModal v-model="isOpen">
            <div class="p-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, nihil possimus nobis dolorem sed asperiores accusantium vel temporibus eveniet totam sapiente architecto quis provident maxime iure accusamus voluptas, alias itaque.
              </p>
            </div>
          </ElyModal>
        </div>
      </div>
    </div>
  </ElyDocLayout>
</template>
