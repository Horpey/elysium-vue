<script setup lang="ts">
import PhSparkleIcon from 'virtual:icons/ph/sparkle-duotone'

const value = ref('')
const textareaValue = ref('')
const checkedValue = ref(false)
</script>

<template>
  <div
    class="mx-auto my-20 flex h-full max-w-7xl flex-col justify-between gap-3 space-y-4 border p-20 px-4 pt-16 sm:px-6 lg:px-8"
  >
    <div class="flex items-start space-x-2">
      <ElyButton href="https://google.com" target="_blank" theme="SECONDARY" :right-icon="PhSparkleIcon">
        Button
      </ElyButton>

      <ElyButton to="/getting-started/installation" theme="SECONDARY">
        Button
      </ElyButton>

      <ElyButton theme="SECONDARY" :right-icon="PhSparkleIcon">
        Button
      </ElyButton>

      <ElyButton theme="SECONDARY" size="SMALL">
        Button
      </ElyButton>

      <ElyButton theme="SECONDARY" size="SMALL" :loading="true">
        Button
      </ElyButton>

      <ElyButton theme="SECONDARY" size="SMALL" :right-icon="PhSparkleIcon" :left-icon="PhSparkleIcon">
        Button
      </ElyButton>

      <ElyButton theme="SECONDARY" size="LARGE" :right-icon="PhSparkleIcon" :left-icon="PhSparkleIcon" disabled>
        Button
      </ElyButton>
    </div>

    <ElyLoader size="LARGE" />

    <div class="flex flex-col space-y-3">
      <ElyAlert title="Success!" />

      <ElyAlert title="Success!" theme="DESTRUCTIVE" />

      <ElyAlert title="Success!" message="You've successfully integrated Elysium Vue into your Vue 3 application!" />

      <ElyAlert
        title="Success!" message="You've successfully integrated Elysium Vue into your Vue 3 application!"
        :icon="PhSparkleIcon"
      />
    </div>

    <div class="flex">
      <ElyAvatar src="" alt="John Doe" />

      <ElyAvatar src="" alt="John Doe" size="SMALL" />

      <ElyAvatar src="" alt="John Doe" :chip="true" />

      <ElyAvatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar"
      />

      <ElyAvatar
        size="LARGE"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar"
      />
    </div>

    <div>
      <div class="my-2">
        <span class="mr-2">{{ value }}</span>
        <ElyInput v-model="value" placeholder="Search..." />
      </div>

      <div class="my-2">
        <span class="mr-2">{{ value }}</span>
        <ElyInput v-model="value" :icon="PhSparkleIcon" placeholder="Search..." size="LARGE" loading />
      </div>
    </div>

    <div>
      <div class="my-2">
        <ElyTextarea v-model="textareaValue" size="SMALL" :rows="1" placeholder="Search..." />
        <ElyTextarea v-model="textareaValue" size="SMALL" placeholder="Search.dsfsf.." :autoresize="false" />

        <span class="mr-2">{{ textareaValue }}</span>
      </div>
    </div>

    <div>
      <div class="my-2">
        {{ checkedValue }}
        <ElyCheckbox v-model="checkedValue">
          Checkbox
        </ElyCheckbox>
      </div>
    </div>
  </div>
</template>
