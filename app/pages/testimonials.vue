<script setup lang="ts">
import { ref } from 'vue'
import { testimonials } from '~/data/testimonials'

useHead({
  title: 'Testimonials - Dr. Nihar Modi'
});

const selectedTestimonial = ref<any>(null);

const truncateText = (text: string, length = 150) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};
</script>

<template>
  <main>
    <PageHeader 
      title="Testimonials" 
      :breadcrumbs="[{ name: 'Home', path: '/' }, { name: 'Testimonials', path: '/testimonials' }]"
    />
    
    <section class="py-24 bg-slate-50">
      <div class="container mx-auto px-4 lg:px-8 max-w-7xl">
        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="https://g.page/r/Cfjpiv-AzasWEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Write a Review
          </a>
          <a
            href="https://www.google.com/maps/place/Dr.+Nihar+Modi/@19.0556717,72.8321864,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c90040600f91:0x16abcd80ff8ae9f8!8m2!3d19.0556717!4d72.8321864!16s%2Fg%2F11whdlthql?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-8 py-3.5 bg-white text-gray-700 font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
          >
            View all Google Reviews
          </a>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="h-full flex flex-col bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-blue-900/5 relative overflow-hidden"
          >
            <!-- Quote Icon Background -->
            <div
              class="absolute -top-4 -left-4 text-[120px] text-[#e0eaf3] font-asectica leading-none select-none z-0 opacity-40"
            >
              “
            </div>

            <div class="relative z-10 flex flex-col h-full">
              <div class="flex text-blue-400 mb-6 gap-1">
                <svg
                  v-for="i in testimonial.rating"
                  :key="i"
                  class="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              </div>

              <p class="text-[15px] text-gray-600 leading-relaxed mb-8 italic flex-grow">
                "{{ truncateText(testimonial.text, 200) }}"
                <button
                  v-if="testimonial.text.length > 200"
                  @click="selectedTestimonial = testimonial"
                  class="text-primary font-medium ml-1 hover:underline text-sm"
                >
                  Read more
                </button>
              </p>

              <div class="mt-auto">
                <h3 class="text-lg font-semibold text-gray-900">
                  {{ testimonial.title }}
                </h3>
                <p
                  v-if="testimonial.subtitle"
                  class="text-sm text-gray-500 mt-1"
                >
                  {{ testimonial.subtitle }}
                </p>
                <p class="text-xs text-gray-400 mt-2">
                  {{ testimonial.date }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div
      v-if="selectedTestimonial"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div 
        class="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        @click="selectedTestimonial = null"
      ></div>
      <div class="relative bg-white rounded-3xl p-6 md:p-10 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          @click="selectedTestimonial = null"
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors p-2"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        
        <div class="flex text-blue-400 mb-6 gap-1">
          <svg
            v-for="i in selectedTestimonial.rating"
            :key="i"
            class="w-5 h-5 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div>

        <p class="text-base lg:text-lg text-gray-600 leading-relaxed mb-8 italic">
          "{{ selectedTestimonial.text }}"
        </p>

        <div>
          <h3 class="text-xl font-semibold text-gray-900">
            {{ selectedTestimonial.title }}
          </h3>
          <p
            v-if="selectedTestimonial.subtitle"
            class="text-sm text-gray-500 mt-1"
          >
            {{ selectedTestimonial.subtitle }}
          </p>
          <p class="text-sm text-gray-400 mt-2">
            {{ selectedTestimonial.date }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
