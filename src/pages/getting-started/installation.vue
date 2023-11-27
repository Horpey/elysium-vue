<script setup lang="ts">

</script>

<template>
  <ElyDocLayout>
    <div class="mb-4 flex items-center gap-1.5 text-sm font-semibold text-koromiko-700">
      Getting Started
    </div>
    <h1 class="font-headline text-5xl text-gray-900">
      Installation
    </h1>

    <div class="my-4">
      <p class="text-sm leading-relaxed">
        Getting started with Elysium is quick and easy. Follow these simple steps to integrate the futuristic Vue 3 sci-fi UI Kit into your project.
      </p>

      <h2 class="my-6 text-2xl font-semibold">
        Prerequisites
      </h2>

      <p class="text-sm leading-relaxed">
        Before you begin, ensure that you have the following prerequisites installed in your project:
      </p>
      <ul>
        <li class="my-2">
          <a
            class="text-sm text-koromiko-700 hover:text-koromiko-600" href="https://v3.vuejs.org/" target="_blank"
          >Vue 3</a>
        </li>
        <li class="my-2">
          <a
            class="text-sm text-koromiko-700 hover:text-koromiko-600" href="https://tailwindcss.com/" target="_blank"
          >Tailwind CSS</a>
        </li>
      </ul>

      <h2 class="my-6 text-2xl font-semibold">
        Install Elysium
      </h2>

      <p class="text-sm leading-relaxed">
        You can install Elysium UI Kit using your preferred package manager. Open your terminal and run the following command:
      </p>

      <ElyTerminal class="mt-4">
        <code class="text-xs text-koromiko-700">
          <span class="opacity-50"># With pnpm</span>
          <br>
          pnpm install elysium-ui
          <br>
          <span class="opacity-50"># With npm</span>
          <br>
          npm install elysium-ui
          <br>
          <span class="opacity-50"># With yarn</span>
          <br>
          yarn add elysium-ui
        </code>
      </ElyTerminal>
    </div>
  </ElyDocLayout>
</template>
