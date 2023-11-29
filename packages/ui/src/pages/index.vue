<script setup lang="ts">
import PhSparkleIcon from 'virtual:icons/ph/sparkle-duotone'
</script>

<template>
  <div
    class="mx-auto h-full max-w-7xl items-center justify-between gap-3 px-4 pt-16 sm:px-6 lg:px-8 border my-20 p-20 flex flex-col space-y-4">
    <div class="flex space-x-2 items-start">
      <ElyButton href="https://google.com" target="_blank" theme="SECONDARY" :right-icon="PhSparkleIcon">Button
      </ElyButton>

      <ElyButton to="/getting-started/installation" theme="SECONDARY">Button</ElyButton>

      <ElyButton theme="SECONDARY" :right-icon="PhSparkleIcon">Button</ElyButton>

      <ElyButton theme="SECONDARY" size="SMALL">Button</ElyButton>

      <ElyButton theme="SECONDARY" size="SMALL" :loading="true">Button</ElyButton>

      <ElyButton theme="SECONDARY" size="SMALL" :right-icon="PhSparkleIcon" :left-icon="PhSparkleIcon">Button</ElyButton>

      <ElyButton theme="SECONDARY" size="LARGE" :right-icon="PhSparkleIcon" :left-icon="PhSparkleIcon" disabled>Button
      </ElyButton>

    </div>

    <ElyLoader size="LARGE" />

    <div class="flex flex-col space-y-3">
      <ElyAlert title="Success!" />

      <ElyAlert title="Success!" theme="DESTRUCTIVE" />

      <ElyAlert title="Success!" message="You've successfully integrated Elysium Vue into your Vue 3 application!" />

      <ElyAlert title="Success!" message="You've successfully integrated Elysium Vue into your Vue 3 application!"
        :icon="PhSparkleIcon" />
    </div>

    <div>
      <ElyAvatar />
    </div>
  </div>
</template>
