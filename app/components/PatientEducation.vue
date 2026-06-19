<script setup lang="ts">
import { ref } from 'vue'

const faqs = ref([
  {
    title: 'Is Frozen Shoulder reversible?',
    content: 'Vivamus mollis varius ante venenatis gravida. Nam finibus euismod nisi, scelerisque auctor lorem ornare eget. Duis gravida tortor ac efficitur ultricies. Duis vel luctus massa. Vestibulum non ipsum id lectus eleifend rutrum. Donec vehicula dolor nec odio consequat volutpat. Pellentesque faucibus, enim sit amet rutrum lobortis, massa nisl laoreet eros, vel semper purus neque nec neque.',
    open: true
  },
  { title: 'When does knee pain need surgery?', content: '', open: false },
  { title: 'Slip disc vs muscle spasm', content: '', open: false },
  { title: 'ACL tear recovery timeline', content: '', open: false },
  { title: 'How to prevent sports injuries', content: '', open: false },
  { title: 'Myths about arthritis', content: '', open: false },
  { title: 'When should fractures be operated?', content: '', open: false }
])
</script>

<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-8 max-w-4xl">
      <UiSectionTitle class="mb-16">
        Patient Education
      </UiSectionTitle>
      
      <UiAccordion :items="faqs" />
    </div>
  </section>
</template>
