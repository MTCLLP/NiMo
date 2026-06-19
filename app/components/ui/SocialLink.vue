<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  platform: 'linkedin' | 'instagram' | 'youtube' | 'whatsapp'
  href: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline' | 'ghost'
}>(), {
  size: 'md',
  variant: 'solid'
})

const iconSrc = computed(() => {
  switch (props.platform) {
    case 'linkedin': return '/icon-linkedin-dr-nihar-modi.svg'
    case 'instagram': return '/icon-instagram-dr-nihar-modi.svg'
    case 'youtube': return '/icon-youtube-dr-nihar-modi.svg'
    case 'whatsapp': return '/icon-whatsapp-alt-dr-nihar-modi.svg'
    default: return ''
  }
})

const altText = computed(() => {
  return props.platform.charAt(0).toUpperCase() + props.platform.slice(1)
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm': return 'w-6 h-6 md:w-8 md:h-8'
    case 'lg': return 'w-10 h-10 md:w-12 md:h-12'
    case 'md':
    default: return 'w-8 h-8 md:w-10 md:h-10'
  }
})

const iconSizeClasses = computed(() => {
  switch (props.size) {
    case 'sm': return 'w-3 h-3 md:w-4 md:h-4'
    case 'lg': return 'w-5 h-5 md:w-6 md:h-6'
    case 'md':
    default: return 'w-4 h-4 md:w-5 md:h-5'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'outline': return 'border border-gray-300 hover:border-primary hover:bg-primary'
    case 'ghost': return 'hover:bg-accent/20'
    case 'solid':
    default: return 'bg-accent/20 hover:bg-primary'
  }
})
</script>

<template>
  <a 
    :href="href" 
    class="rounded-full flex items-center justify-center transition-colors group"
    :class="[sizeClasses, variantClasses]"
  >
    <img 
      :src="iconSrc" 
      :alt="altText" 
      class="transition-all" 
      :class="[iconSizeClasses, props.variant !== 'ghost' ? 'group-hover:brightness-0 group-hover:invert' : '']"
    />
  </a>
</template>
