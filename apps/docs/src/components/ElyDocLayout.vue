<script setup lang="ts">

</script>

<template>
  <ElyLayout theme="light">
    <main class="min-h-screen">
      <div class="mx-auto h-full max-w-7xl items-center justify-between gap-3 px-4 pt-16 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
          <div class="lg:col-span-2">
            <ElySidebar />
          </div>

          <div class="lg:col-span-8">
            <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
              <div class="lg:col-span-8">
                <slot />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </ElyLayout>
</template>
