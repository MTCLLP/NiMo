<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
  caption?: string;
}>();
</script>

<template>
  <div class="my-10 mx-auto max-w-sm rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 not-prose">
    <div class="relative w-full aspect-[9/16] bg-black">
      <iframe
        :src="`https://www.youtube-nocookie.com/embed/${id}?rel=0`"
        class="absolute inset-0 w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        loading="lazy"
        :title="title"
      ></iframe>
    </div>
    <div class="p-4 bg-white border-t border-slate-100 text-center">
      <div class="text-xs uppercase font-bold tracking-wider text-primary mb-1">
        Doctor's Video Insights
      </div>
      <p class="text-sm font-semibold text-gray-800 line-clamp-2">
        {{ title }}
      </p>
      <p v-if="caption" class="text-xs text-gray-500 mt-1">
        {{ caption }}
      </p>
    </div>
  </div>
</template>
