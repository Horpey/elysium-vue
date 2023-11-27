<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    title: 'Getting Started',
    slug: 'getting-started',
    children: [
      {
        title: 'Introduction',
        link: '/getting-started',
      },
      {
        title: 'Installation',
        link: '/getting-started/installation',
      },
    ],
  },
  {
    title: 'Components',
    slug: 'components',
    children: [
      {
        title: 'Alert',
        link: '/components/alert',
      },
      {
        title: 'Button',
        link: '/components/button',
      },
    ],
  },
])
</script>

<template>
  <aside class="sticky overflow-y-auto">
    <nav>
      <div v-for="(item, index) in items" :key="index" class="mb-6">
        <h5 class="mb-3 font-headline text-2xl text-koromiko-700">
          {{ item.title }}
        </h5>

        <ul class="space-y-3 border-l border-gray-200">
          <li v-for="(child, idx) in item.children" :key="idx">
            <RouterLink
              class="-ml-px block border-l border-transparent pl-4 text-xs hover:border-slate-400"
              :class="{
                'border-l-koromiko-700 text-koromiko-700 ': child.link === $route.path,
                'border-l-gray-200 text-gray-400 ': child.link !== $route.path,
              }"
              :to="child.link"
            >
              {{ child.title }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>
