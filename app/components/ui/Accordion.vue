<script setup lang="ts">
import { ref, watch } from 'vue'

export interface AccordionItem {
  id?: string
  title: string
  content?: string
  open?: boolean
  icon?: string
}

const props = withDefaults(defineProps<{
  items: AccordionItem[]
  multiple?: boolean
  variant?: 'default' | 'minimal' | 'bordered'
}>(), {
  variant: 'default'
})

// Create a local reactive copy so we can toggle state freely
const localItems = ref([...props.items.map(item => ({ ...item }))])

watch(() => props.items, (newItems) => {
  localItems.value = [...newItems.map(item => ({ ...item }))]
}, { deep: true })

const toggle = (index: number) => {
  const item = localItems.value[index]
  if (!item) return

  const isCurrentlyOpen = item.open
  
  if (!props.multiple) {
    // If not multiple, close all others
    localItems.value.forEach((i, idx) => {
      if (idx !== index) i.open = false
    })
  }
  
  item.open = !isCurrentlyOpen
}

const getVariantClasses = (item: any) => {
  if (props.variant === 'minimal') {
    return [
      'border-b border-gray-200 last:border-b-0 rounded-none',
      item.open ? '' : ''
    ]
  }
  if (props.variant === 'bordered') {
    return [
      'border-2 rounded-lg transition-colors duration-300',
      item.open ? 'border-primary bg-gray-50/50' : 'border-gray-200 bg-white'
    ]
  }
  // Default
  return [
    'border rounded-lg overflow-hidden transition-all duration-300',
    item.open ? 'shadow-lg border-transparent' : 'border-gray-200'
  ]
}
</script>

<template>
  <div class="space-y-4 w-full">
    <div 
      v-for="(item, idx) in localItems" 
      :key="idx" 
      :class="getVariantClasses(item)"
    >
      <button 
        @click="toggle(idx)" 
        class="w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none cursor-pointer"
      >
        <div class="flex items-center gap-3 md:gap-4">
          <div v-if="item.icon" class="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-accent/20 text-primary" v-html="item.icon"></div>
          <slot name="item-title" :item="item" :index="idx">
            <span class="text-base md:text-lg font-medium text-gray-800" :class="{'text-xl md:text-3xl font-mirage': item.icon}">{{ item.title }}</span>
          </slot>
        </div>
        <svg 
          class="w-5 h-5 text-gray-400 transform transition-transform duration-300 flex-shrink-0 ml-3 md:ml-4" 
          :class="{'rotate-180': item.open}" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div v-show="item.open" class="px-4 pb-4 md:px-6 md:pb-6 text-gray-500 text-sm md:text-base leading-relaxed">
        <slot name="item-content" :item="item" :index="idx">
          <p v-if="item.content">{{ item.content }}</p>
          <p v-else>More information coming soon.</p>
        </slot>
      </div>
    </div>
  </div>
</template>
