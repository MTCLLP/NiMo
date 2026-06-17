<script setup lang="ts">
// Default layout
</script>

<template>
  <div class="min-h-screen bg-accent/20 font-sans text-gray-800 flex flex-col">
    <AppHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
