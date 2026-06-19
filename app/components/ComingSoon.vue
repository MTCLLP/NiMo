<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="min-h-[70vh] flex flex-col items-center justify-center text-center px-8 relative overflow-hidden bg-gradient-to-br from-white to-[#e6eff6]">
    <div class="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
      <div class="text-[400px] font-mirage text-primary leading-none">N</div>
    </div>
    
    <div class="relative z-10">
      <h1 class="text-4xl md:text-6xl font-mirage text-secondary mb-6">{{ title }}</h1>
      <p class="text-gray-500 max-w-lg mx-auto mb-10 text-lg">
        This page is currently under construction. We are working hard to bring you this content soon!
      </p>
      <NuxtLink to="/">
        <UiButton variant="primary">Return Home</UiButton>
      </NuxtLink>
    </div>
  </div>
</template>
