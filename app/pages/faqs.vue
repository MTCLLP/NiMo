<script setup lang="ts">
import { ref } from "vue";

const faqGroups = ref([
  {
    category: "Appointments & Consultation",
    items: [
      {
        title: "What should I bring to my first appointment?",
        content:
          "Please bring your complete medical file. Unlike in some countries where records are fully digitalized, in India, keeping your physical file handy is highly beneficial. Please bring:<ul class='list-disc pl-5 mt-2 space-y-1'><li>Any recent X-rays, MRI films, or blood test reports (especially Complete Blood Count, uric acid, or vitamin D3/B12 levels).</li><li>A list of all current medications, especially blood thinners (like aspirin) or diabetes and blood pressure medication.</li><li>Your Aadhaar card or any valid government ID for hospital registration.</li></ul>",
        open: true,
      },
      {
        title: "What should I expect during my first visit?",
        content:
          "During your first visit, Dr. Modi will conduct a comprehensive evaluation which includes taking a detailed medical history, performing a physical examination, and reviewing any previous X-rays or MRI scans. Depending on the findings, further tests may be ordered to develop a personalized treatment plan.",
      },
      {
        title: "Can I get a second opinion on my condition?",
        content:
          "Absolutely. Seeking a second opinion is a very common and respected practice in India, especially when considering major procedures like a knee or hip replacement. We encourage you to bring your existing reports; we will provide an honest, objective assessment of your condition and treatment options.",
      },
    ],
  },
  {
    category: "Non-Surgical & Lifestyle Management",
    items: [
      {
        title: "Will the doctor immediately recommend surgery?",
        content:
          "No. In our practice, surgery is only advised when absolutely necessary. We always explore non-surgical routes first. This includes targeted physiotherapy, lifestyle changes, weight management, and advanced pain-relief injections. For many conditions like early-stage osteoarthritis or back pain, surgery can be avoided entirely.",
      },
      {
        title: "Do you offer non-surgical treatment options?",
        content:
          "Yes, surgery is often considered the last resort. We offer various non-surgical treatments including physical therapy, bracing, specialized injections (like PRP or corticosteroids), and medication to manage pain and promote healing.",
      },
      {
        title:
          "Can I continue alternative treatments like Ayurveda or Yoga alongside your treatment?",
        content:
          "We fully support holistic wellness, and practices like gentle Yoga can be excellent for maintaining joint flexibility. However, please let us know if you are taking any Ayurvedic or herbal medicines, as some formulations can interact with modern orthopaedic medications or affect blood clotting before a procedure. We will help you integrate these safely.",
      },
    ],
  },
  {
    category: "Surgery & Hospital Stay",
    items: [
      {
        title: "What is orthopaedic surgery?",
        content:
          "Orthopaedic surgery is a medical specialty that focuses on the diagnosis, treatment, rehabilitation, and prevention of diseases and injuries of the musculoskeletal system. This includes bones, joints, ligaments, tendons, muscles, and nerves.",
      },
      {
        title: "When should I see an orthopaedic specialist?",
        content:
          "You should consider seeing an orthopaedic specialist if you experience chronic joint or bone pain, have suffered an injury like a fracture or torn ligament, or if you have limited mobility that affects your daily activities.",
      },
      {
        title: "What are the common procedures you perform?",
        content:
          "Dr. Modi specializes in joint replacement surgery (knee, hip, and shoulder), arthroscopy, trauma and fracture care, ligament reconstructions (like ACL repair), and treatments for sports injuries.",
      },
      {
        title:
          'What is the difference between open and "keyhole" (arthroscopic) surgery?',
        content:
          "<ul class='list-disc pl-5 space-y-2'><li><strong>Keyhole (Arthroscopic) Surgery:</strong> The surgeon makes tiny, buttonhole-sized incisions to insert a miniature camera and tools. This means minimal blood loss, less pain, and a very quick discharge (often within 24 to 48 hours). It is commonly used for knee ligament (ACL) tears or shoulder problems.</li><li><strong>Open Surgery:</strong> This requires a traditional incision to directly access the joint or bone. This method is standard and highly successful for complex fractures and total joint replacements (knee/hip).</li></ul>",
      },
      {
        title:
          "Will I need a permanent caretaker or helper at home after surgery?",
        content:
          "While you will need help with heavy household chores, cooking, and traveling for the first few weeks, modern orthopaedic surgeries are designed to get you independent quickly. Before you leave the hospital, our physiotherapist will train you to walk safely, use the washroom, and climb stairs independently using a walker or walking stick.",
      },
      {
        title: "How long is the recovery period after surgery?",
        content:
          "The recovery period varies significantly depending on the type of procedure performed, your overall health, and your adherence to post-operative rehabilitation. We will provide a detailed timeline and support plan tailored to your specific surgery.",
      },
      {
        title: "Can I use Indian-style toilets post-surgery?",
        content:
          "For the first few months following a knee or hip replacement, bending the joint deeply to use a traditional Indian toilet is generally not recommended as it puts excessive stress on the healing joint. We highly advise using a Western-style toilet or installing a temporary raised commode chair at home during your recovery period.",
      },
    ],
  },
]);
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
    <section class="py-12 md:py-24 bg-accent/20 min-h-screen">
      <div class="container mx-auto px-4 md:px-6 max-w-4xl">
        <div class="text-center mb-8 md:mb-16">
          <UiSectionTitle>Have Questions?</UiSectionTitle>
          <p class="text-gray-500 mt-4 text-sm md:text-base">
            Find answers to some of the most common questions our patients ask.
          </p>
        </div>

        <div
          v-for="group in faqGroups"
          :key="group.category"
          class="mb-8 md:mb-12 last:mb-0"
        >
          <div class="mb-4 md:mb-8 flex items-center gap-4">
            <span class="w-8 h-1 bg-primary rounded-full"></span>
            <h2 class="text-xl md:text-2xl font-semibold text-gray-800">
              {{ group.category }}
            </h2>
          </div>
          <div
            class="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100"
          >
            <UiAccordion :items="group.items" variant="bordered">
              <template #item-content="{ item }">
                <div
                  v-html="item.content"
                  class="text-gray-500 text-sm leading-relaxed"
                ></div>
              </template>
            </UiAccordion>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
