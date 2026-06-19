<script setup lang="ts">
import { computed } from 'vue'
import { NuxtLink } from '#components'

const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
  block?: boolean
}>()

const isLink = computed(() => !!props.to || !!props.href)

const Component = computed(() => {
  if (props.to) return NuxtLink
  if (props.href) return 'a'
  return 'button'
})

const baseClasses = "inline-flex items-center justify-center font-medium transition-colors rounded-full"

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm': return 'px-4 py-2 text-sm'
    case 'lg': return 'px-8 py-4 text-lg'
    case 'md':
    default: return 'px-6 py-3 text-base'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary': return 'bg-secondary text-primary hover:bg-white hover:text-primary'
    case 'outline': return 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
    case 'ghost': return 'text-primary hover:bg-accent'
    case 'primary':
    default: return 'bg-primary text-white hover:bg-primary/90'
  }
})

const widthClass = computed(() => props.block ? 'w-full' : '')
</script>

<template>
  <component 
    :is="Component"
    :to="to"
    :href="href"
    :class="[baseClasses, sizeClasses, variantClasses, widthClass]"
  >
    <slot />
  </component>
</template>
