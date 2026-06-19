<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  align?: 'left' | 'center' | 'right'
  color?: 'primary' | 'gray' | 'white' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}>(), {
  size: 'lg'
})

const Component = computed(() => props.as || 'h2')

const colorClasses = computed(() => {
  switch (props.color) {
    case 'primary': return 'text-primary'
    case 'white': return 'text-white'
    case 'secondary': return 'text-secondary'
    case 'gray':
    default: return 'text-gray-800'
  }
})

const alignClasses = computed(() => {
  switch (props.align) {
    case 'left': return 'text-left'
    case 'right': return 'text-right'
    case 'center':
    default: return 'text-center'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm': return 'text-2xl lg:text-3xl'
    case 'md': return 'text-3xl lg:text-4xl'
    case 'lg':
    default: return 'text-4xl lg:text-5xl'
  }
})
</script>

<template>
  <component 
    :is="Component" 
    class="font-mirage"
    :class="[colorClasses, alignClasses, sizeClasses]"
  >
    <slot />
  </component>
</template>
