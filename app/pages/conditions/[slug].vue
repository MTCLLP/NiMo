<script setup lang="ts">
import { useRoute } from 'vue-router';
import { conditionsData } from '~/data/conditions-content';
import { computed } from 'vue';

const route = useRoute();
const conditionSlug = route.params.slug as string;

const condition = computed(() => {
  return conditionsData.find(c => c.slug === conditionSlug);
});

// Setting meta tags dynamically based on the condition
useHead({
  title: condition.value ? `${condition.value.name} Treatment in Mumbai - Dr. Nihar Modi` : 'Condition Not Found',
  meta: [
    { 
      name: 'description', 
      content: condition.value ? condition.value.intro.substring(0, 150) + '...' : 'Explore orthopaedic conditions treated by Dr. Nihar Modi.'
    }
  ]
});
</script>

<template>
  <main>
    <template v-if="condition">
      <PageHeader 
        :title="condition.name" 
        :breadcrumbs="[
          { name: 'Home', path: '/' }, 
          { name: 'Conditions Treated', path: '/conditions' },
          { name: condition.name, path: `/conditions/${condition.slug}` }
        ]"
      />

      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-6 max-w-4xl">
          
          <div class="space-y-16">
            <!-- Introduction -->
            <div>
              <p class="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                {{ condition.intro }}
              </p>
            </div>

            <!-- Symptoms -->
            <div>
              <h2 class="text-3xl font-mirage text-primary pb-4">Common Symptoms</h2>
              <ul class="space-y-4">
                <li v-for="(sym, idx) in condition.symptoms" :key="idx" class="flex items-start gap-3 text-gray-700">
                  <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span class="leading-relaxed">{{ sym }}</span>
                </li>
              </ul>
            </div>

            <!-- Treatment Options -->
            <div>
              <h2 class="text-3xl font-mirage text-primary pb-4">Treatment Options</h2>
              <ul class="space-y-4">
                <li v-for="(trt, idx) in condition.treatments" :key="idx" class="flex items-start gap-3 text-gray-700">
                  <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span class="leading-relaxed">{{ trt }}</span>
                </li>
              </ul>
            </div>

            <!-- Diagnosis -->
            <div>
              <h2 class="text-3xl font-mirage text-primary pb-4">Diagnosis</h2>
              <p class="text-gray-700 leading-relaxed">{{ condition.diagnosis }}</p>
            </div>
            
            <!-- Management and Recovery -->
            <div>
              <h2 class="text-3xl font-mirage text-primary pb-4">Management & Recovery</h2>
              <p class="text-gray-700 leading-relaxed">{{ condition.management }}</p>
            </div>

            <!-- FAQs -->
            <div>
              <h2 class="text-3xl font-mirage text-primary pb-4">Frequently Asked Questions</h2>
              <div class="space-y-6">
                <div v-for="(faq, idx) in condition.faqs" :key="idx" class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h4 class="text-lg font-bold text-gray-900 mb-3">{{ faq.question }}</h4>
                  <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      <CtaSection force-show>
        <template #title>
          Need expert care for <br class="hidden md:block" /><span class="text-primary italic">{{ condition.name.toLowerCase() }}?</span>
        </template>
        <template #desc>
          Book an appointment today for an accurate diagnosis and a customized treatment plan to get you back to doing what you love.
        </template>
      </CtaSection>
    </template>
    
    <template v-else>
      <div class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 class="text-4xl font-mirage text-primary mb-4">Condition Not Found</h1>
        <p class="text-gray-600 mb-8">We could not find the information you are looking for.</p>
        <NuxtLink to="/conditions" class="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors">
          View All Conditions
        </NuxtLink>
      </div>
    </template>
  </main>
</template>
