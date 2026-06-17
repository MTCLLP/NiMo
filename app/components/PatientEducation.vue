<script setup lang="ts">
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'Is Frozen Shoulder reversible?',
    answer: 'Vivamus mollis varius ante venenatis gravida. Nam finibus euismod nisi, scelerisque auctor lorem ornare eget. Duis gravida tortor ac efficitur ultricies. Duis vel luctus massa. Vestibulum non ipsum id lectus eleifend rutrum. Donec vehicula dolor nec odio consequat volutpat. Pellentesque faucibus, enim sit amet rutrum lobortis, massa nisl laoreet eros, vel semper purus neque nec neque.',
    open: true
  },
  { question: 'When does knee pain need surgery?', answer: '', open: false },
  { question: 'Slip disc vs muscle spasm', answer: '', open: false },
  { question: 'ACL tear recovery timeline', answer: '', open: false },
  { question: 'How to prevent sports injuries', answer: '', open: false },
  { question: 'Myths about arthritis', answer: '', open: false },
  { question: 'When should fractures be operated?', answer: '', open: false }
])

const toggle = (index: number) => {
  faqs.value[index].open = !faqs.value[index].open
}
</script>

<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-8 max-w-4xl">
      <h2 class="text-4xl lg:text-5xl font-mirage text-gray-800 text-center mb-16">
        Patient Education
      </h2>
      
      <div class="space-y-4">
        <div v-for="(faq, idx) in faqs" :key="idx" class="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300" :class="{'shadow-lg border-transparent': faq.open}">
          <button @click="toggle(idx)" class="w-full flex items-center justify-between p-6 text-left focus:outline-none">
            <span class="text-lg font-medium text-gray-800">{{ faq.question }}</span>
            <svg class="w-5 h-5 text-gray-400 transform transition-transform duration-300" :class="{'rotate-180': faq.open}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          
          <div v-show="faq.open" class="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
            <p v-if="faq.answer">{{ faq.answer }}</p>
            <p v-else>More information coming soon.</p>
            
            <div class="mt-4 text-center">
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-1.5 rounded-full text-xs font-medium transition-colors">
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
