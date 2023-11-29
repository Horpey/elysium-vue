<script setup lang="ts">
import PhLightningIconFill from 'virtual:icons/ph/lightning-fill.svg'
import PhChargingStationIconFill from 'virtual:icons/ph/charging-station-fill.svg'
import PhMusicNotesPlusFill from 'virtual:icons/ph/music-notes-plus-fill.svg'
import { ElyButton } from '@horpey/elysium-vue'
import { useMeta } from '~/composables/useMeta'

useMeta({
  title: 'Button',
})
</script>

<template>
  <ElyDocLayout>
    <div class="mb-4 flex items-center gap-1.5 text-sm font-semibold text-koromiko-700">
      Components
    </div>
    <h1 class="font-headline text-5xl text-gray-900">
      Button
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Elevate user interaction effortlessly with our sleek and responsive button component, perfect for seamless calls to action in your application.
      </p>

      <div class="my-10 flex flex-col space-y-4">
        <div class="flex space-x-4">
          <ElyButton>
            Button
          </ElyButton>

          <ElyButton theme="SECONDARY">
            Button
          </ElyButton>

          <ElyButton theme="TERTIARY">
            Button
          </ElyButton>

          <ElyButton theme="DESTRUCTIVE">
            Button
          </ElyButton>
        </div>

        <div class="flex space-x-4">
          <ElyButton :disabled="true">
            Button
          </ElyButton>

          <ElyButton :disabled="true" theme="SECONDARY">
            Button
          </ElyButton>

          <ElyButton :disabled="true" theme="TERTIARY">
            Button
          </ElyButton>

          <ElyButton :disabled="true" theme="DESTRUCTIVE">
            Button
          </ElyButton>
        </div>

        <div class="flex space-x-4">
          <ElyButton :left-icon="PhLightningIconFill">
            Button
          </ElyButton>

          <ElyButton :left-icon="PhChargingStationIconFill" theme="SECONDARY">
            Button
          </ElyButton>

          <ElyButton :left-icon="PhMusicNotesPlusFill" theme="TERTIARY">
            Button
          </ElyButton>
        </div>
      </div>
    </div>
  </ElyDocLayout>
</template>
