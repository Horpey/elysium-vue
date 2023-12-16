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
    <div class="text-koromiko-700 mb-4 flex items-center gap-1.5 text-sm font-semibold">
      Components
    </div>
    <h1 class="text-5xl font-bold uppercase tracking-wider text-gray-900">
      Button
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Elevate user interaction effortlessly with our sleek and responsive button component, perfect for seamless calls
        to action in your application.
      </p>

      <div class="my-10 flex flex-col space-y-4">
        <p class="font-mono text-xs uppercase tracking-wider">
          Sizes
        </p>
        <div class="flex items-start space-x-4">
          <ElyButton size="LARGE">
            Button
          </ElyButton>

          <ElyButton size="MEDIUM">
            Button
          </ElyButton>

          <ElyButton size="SMALL">
            Button
          </ElyButton>
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Theme
        </p>
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

        <p class="font-mono text-xs uppercase tracking-wider">
          Disabled
        </p>
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

        <p class="font-mono text-xs uppercase tracking-wider">
          Button Icons
        </p>
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

        <p class="font-mono text-xs uppercase tracking-wider">
          Loading
        </p>
        <div class="flex space-x-4">
          <ElyButton :loading="true">
            Button
          </ElyButton>

          <ElyButton :loading="true" theme="SECONDARY">
            Button
          </ElyButton>

          <ElyButton :loading="true" theme="TERTIARY">
            Button
          </ElyButton>

          <ElyButton :loading="true" theme="DESTRUCTIVE">
            Button
          </ElyButton>
        </div>
      </div>
    </div>
  </ElyDocLayout>
</template>
