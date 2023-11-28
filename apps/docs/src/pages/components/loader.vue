<script setup lang="ts">
import { ElyLoader } from '@horpey/elysium-vue'

</script>

<template>
    <ElyDocLayout>
      <div class="mb-4 flex items-center gap-1.5 text-sm font-semibold text-koromiko-700">
        Components
      </div>
      <h1 class="font-headline text-5xl text-gray-900">
        Loader
      </h1>
  
      <div class="my-4">
        <p class="text-sm leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, expedita ipsam. A in id ducimus voluptatum, ea iste officia, assumenda omnis doloremque impedit quasi dolor accusantium obcaecati distinctio adipisci voluptatibus.
        </p>
  
        <div class="my-10">
         <ElyLoader />
        </div>
      </div>
    </ElyDocLayout>
  </template>
  