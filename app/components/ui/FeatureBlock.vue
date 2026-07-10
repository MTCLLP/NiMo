<script setup lang="ts">
import { computed } from 'vue';
import { NuxtLink } from '#components';

const props = withDefaults(defineProps<{
  title: string;
  desc: string;
  icon: string;
  layout?: 'horizontal' | 'vertical';
  link?: string;
}>(), {
  layout: 'horizontal'
});

const Component = computed(() => props.link ? NuxtLink : 'div');

const layoutClass = computed(() => {
  return props.layout === 'vertical' 
    ? 'flex flex-col gap-4 items-start group' 
    : 'flex gap-6 items-start group';
});
</script>

<template>
  <component :is="Component" :to="link" :class="[layoutClass, link ? 'cursor-pointer block' : '']">
    <div class="w-16 h-16 flex-shrink-0 relative">
      <img
        :src="icon"
        :alt="title"
        class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
      />
    </div>
    <div class="flex-1">
      <h3 class="text-xl text-gray-800 font-medium mb-2">{{ title }}</h3>
      <p class="text-sm text-gray-500 leading-relaxed">{{ desc }}</p>
      <slot name="footer"></slot>
    </div>
  </component>
</template>
