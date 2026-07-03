<script setup lang="ts">
import { ref } from 'vue'

const faqs = ref([
  {
    title: "What is orthopaedic surgery?",
    content: "Orthopaedic surgery is a medical specialty that focuses on the diagnosis, treatment, rehabilitation, and prevention of diseases and injuries of the musculoskeletal system. This includes bones, joints, ligaments, tendons, muscles, and nerves.",
    open: true
  },
  {
    title: "When should I see an orthopaedic specialist?",
    content: "You should consider seeing an orthopaedic specialist if you experience chronic joint or bone pain, have suffered an injury like a fracture or torn ligament, or if you have limited mobility that affects your daily activities."
  },
  {
    title: "What should I expect during my first visit?",
    content: "During your first visit, Dr. Modi will conduct a comprehensive evaluation which includes taking a detailed medical history, performing a physical examination, and reviewing any previous X-rays or MRI scans. Depending on the findings, further tests may be ordered to develop a personalized treatment plan."
  },
  {
    title: "Do you offer non-surgical treatment options?",
    content: "Yes, surgery is often considered the last resort. We offer various non-surgical treatments including physical therapy, bracing, specialized injections (like PRP or corticosteroids), and medication to manage pain and promote healing."
  },
  {
    title: "What are the common procedures you perform?",
    content: "Dr. Modi specializes in joint replacement surgery (knee, hip, and shoulder), arthroscopy, trauma and fracture care, ligament reconstructions (like ACL repair), and treatments for sports injuries."
  },
  {
    title: "How long is the recovery period after surgery?",
    content: "The recovery period varies significantly depending on the type of procedure performed, your overall health, and your adherence to post-operative rehabilitation. We will provide a detailed timeline and support plan tailored to your specific surgery."
  }
])
</script>

<template>
  <main>
    <PageHeader
      title="Frequently Asked Questions"
      :breadcrumbs="[
        { name: 'Home', path: '/' },
        { name: 'FAQs', path: '/faqs' },
      ]"
    />
    <section class="py-24 bg-accent/20 min-h-screen">
      <div class="container mx-auto px-6 max-w-4xl">
        <div class="text-center mb-16">
          <UiSectionTitle>Have Questions?</UiSectionTitle>
          <p class="text-gray-500 mt-4">Find answers to some of the most common questions our patients ask.</p>
        </div>
        
        <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <UiAccordion :items="faqs" variant="bordered" />
        </div>
      </div>
    </section>
  </main>
</template>
