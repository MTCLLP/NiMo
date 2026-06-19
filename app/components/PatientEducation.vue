<script setup lang="ts">
import { ref } from 'vue'

const faqs = ref([
  {
    title: 'Is Frozen Shoulder reversible?',
    content: 'Yes, frozen shoulder is generally reversible. While it can take several months to fully resolve, guided physical therapy, anti-inflammatory medications, and sometimes joint injections can significantly speed up recovery and restore full range of motion.',
    open: true
  },
  { 
    title: 'When does knee pain need surgery?', 
    content: 'Knee surgery is typically considered when conservative treatments like physical therapy, medications, and injections no longer provide relief, or when there is severe structural damage such as an advanced arthritis or ligament rupture that impairs daily function.', 
    open: false 
  },
  { 
    title: 'Slip disc vs muscle spasm', 
    content: 'A muscle spasm typically causes localized tightness and sharp pain that improves with rest within a few days. A slip disc often involves nerve compression, causing radiating pain, numbness, or tingling down the leg (sciatica) that persists longer.', 
    open: false 
  },
  { 
    title: 'ACL tear recovery timeline', 
    content: 'Recovery from ACL reconstruction surgery usually takes 6 to 9 months. The first few weeks focus on reducing swelling and restoring range of motion. Sport-specific training typically starts around the 6-month mark under professional guidance.', 
    open: false 
  },
  { 
    title: 'How to prevent sports injuries', 
    content: 'Preventing sports injuries involves proper conditioning, warming up before activities, maintaining flexibility, and wearing appropriate protective gear. It is also crucial to avoid overtraining and listen to your body.', 
    open: false 
  },
  { 
    title: 'Myths about arthritis', 
    content: 'A common myth is that arthritis only affects the elderly, but it can occur at any age. Another misconception is that exercise worsens arthritis; in reality, low-impact exercise strengthens surrounding muscles and helps preserve joint function.', 
    open: false 
  },
  { 
    title: 'When should fractures be operated?', 
    content: 'Fractures usually require surgery if the bone fragments are significantly displaced, unstable, or involve a joint. Surgery involves using pins, plates, or screws to align and stabilize the bone for proper healing.', 
    open: false 
  }
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
