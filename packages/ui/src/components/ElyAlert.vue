<template>
  <div class="mt-4 border border-l-8 border-koromiko-800 bg-koromiko-800/10 px-4 py-2">
    <span class="flex items-center space-x-3 font-mono text-xs text-koromiko-900">
      <span>❯</span>

      <span v-if="$slots.title" class="font-bold ">
        <slot name="title" />
      </span>
      <slot name="description" />
    </span>
  </div>
</template>
