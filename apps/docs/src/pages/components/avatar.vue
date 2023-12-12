<script setup lang="ts">
import { ElyAvatar } from '@horpey/elysium-vue'
import { useMeta } from '~/composables/useMeta'

useMeta({
  title: 'Avatar',
})
</script>

<template>
  <ElyDocLayout>
    <div class="text-koromiko-700 mb-4 flex items-center gap-1.5 text-sm font-semibold">
      Components
    </div>
    <h1 class="text-5xl font-bold uppercase tracking-wider text-gray-900">
      Avatar
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Add a personal touch to your user interface with our Avatar component. Seamlessly incorporate profile images
        or user icons for a visually engaging and personalized experience in your application.
      </p>

      <div class="my-10 flex flex-col space-y-4">
        <p class="font-mono text-xs uppercase tracking-wider">
          Default
        </p>
        <div class="flex space-x-4">
          <ElyAvatar
            class="mr-0"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar"
          />

          <ElyAvatar
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="avatar"
          />

          <ElyAvatar
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar"
          />
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Sizes
        </p>
        <div class="flex space-x-4">
          <ElyAvatar
            class="mr-0"
            size="SMALL"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar"
          />

          <ElyAvatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar"
          />

          <ElyAvatar
            size="LARGE"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar"
          />
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Chip
        </p>
        <div class="flex space-x-4">
          <ElyAvatar
            :chip="true"
            class="mr-0"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar"
          />

          <ElyAvatar
            :chip="true"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="avatar"
          />

          <ElyAvatar
            :chip="true"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar"
          />
        </div>

        <p class="font-mono text-xs uppercase tracking-wider">
          Alternate
        </p>
        <div class="flex space-x-4">
          <ElyAvatar class="mr-0" alt="John Doe" />

          <ElyAvatar alt="William Johnson" />

          <ElyAvatar alt="Andrew Hollander" />
        </div>
      </div>
    </div>
  </ElyDocLayout>
</template>
