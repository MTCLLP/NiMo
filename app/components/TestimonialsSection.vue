<script setup lang="ts">
import { ref, computed } from "vue";

import { testimonials } from "~/data/testimonials";

const activeIndex = ref(0);
const activeTestimonial = computed(() => testimonials[activeIndex.value]!);
const transitionName = ref("slide-next");

const next = () => {
  transitionName.value = "slide-next";
  activeIndex.value = (activeIndex.value + 1) % testimonials.length;
};

const prev = () => {
  transitionName.value = "slide-prev";
  activeIndex.value =
    (activeIndex.value - 1 + testimonials.length) % testimonials.length;
};

const goTo = (index: number) => {
  transitionName.value =
    index > activeIndex.value ? "slide-next" : "slide-prev";
  activeIndex.value = index;
};
</script>

<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-4 lg:px-8 text-center max-w-5xl">
      <UiSectionTitle class="mb-12 lg:mb-20">
        Patient Testimonials
      </UiSectionTitle>

      <div
        class="relative bg-white rounded-3xl p-6 md:p-10 lg:p-16 border border-gray-100 shadow-xl shadow-blue-900/5"
      >
        <!-- Quote Icon Background -->
        <div
          class="absolute top-4 left-6 lg:top-8 lg:left-12 text-[80px] lg:text-[140px] text-[#e0eaf3] font-asectica leading-none select-none z-0 opacity-50"
        >
          “
        </div>

        <div
          class="relative z-10 min-h-[450px] sm:min-h-[350px] lg:min-h-[280px] flex flex-col justify-center items-center"
        >
          <Transition :name="transitionName" mode="out-in">
            <div :key="activeIndex" class="w-full pt-8 lg:pt-0">
              <!-- Video Layout -->
              <div v-if="activeTestimonial.videoId" class="flex flex-col md:flex-row gap-8 md:gap-12 items-center text-left">
                <div class="w-full md:w-1/2 flex justify-center">
                  <div class="w-[260px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl relative bg-black">
                    <iframe
                      :src="`https://www.youtube-nocookie.com/embed/${activeTestimonial.videoId}?rel=0`"
                      class="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                      :title="activeTestimonial.title"
                    ></iframe>
                  </div>
                </div>
                <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                  <div class="flex text-blue-400 mb-6 gap-1">
                    <svg
                      v-for="i in activeTestimonial.rating"
                      :key="i"
                      class="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                  </div>
                  <p class="text-base lg:text-lg text-gray-600 leading-relaxed mb-8 italic">
                    "{{ activeTestimonial.text }}"
                  </p>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900">
                      {{ activeTestimonial.title }}
                    </h3>
                    <p v-if="activeTestimonial.subtitle" class="text-sm text-gray-500 mt-1">
                      {{ activeTestimonial.subtitle }}
                    </p>
                    <p class="text-xs text-gray-600 mt-2">
                      {{ activeTestimonial.date }}
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Text Only Layout -->
              <div v-else class="flex flex-col items-center">
                <div class="flex justify-center text-blue-400 mb-6 gap-1">
                  <svg
                    v-for="i in activeTestimonial.rating"
                    :key="i"
                    class="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                </div>
  
                <p class="text-base lg:text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto italic text-center">
                  "{{ activeTestimonial.text }}"
                </p>
  
                <div class="text-center">
                  <h3 class="text-xl font-semibold text-gray-900">
                    {{ activeTestimonial.title }}
                  </h3>
                  <p
                    v-if="activeTestimonial.subtitle"
                    class="text-sm text-gray-500 mt-1"
                  >
                    {{ activeTestimonial.subtitle }}
                  </p>
                  <p class="text-xs text-gray-600 mt-2">
                    {{ activeTestimonial.date }}
                  </p>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Controls -->
        <div
          class="flex items-center justify-center gap-4 sm:gap-6 mt-8 lg:mt-12 relative z-10"
        >
          <button
            aria-label="Previous testimonial"
            @click="prev"
            class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-x-1"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          <div class="flex items-center">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              @click="goTo(index)"
              class="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 focus:outline-none group cursor-pointer"
              :aria-label="`Go to testimonial ${index + 1}`"
            >
              <span
                class="rounded-full transition-all duration-300 h-2.5 sm:h-3"
                :class="
                  index === activeIndex
                    ? 'bg-primary w-6 sm:w-8'
                    : 'bg-gray-200 group-hover:bg-gray-300 w-2.5 sm:w-3'
                "
              ></span>
            </button>
          </div>

          <button
            aria-label="Next testimonial"
            @click="next"
            class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300 hover:shadow-lg hover:translate-x-1"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- View More Testimonials Button -->
      <div class="mt-12 sm:mt-16 text-center">
        <UiButton to="/testimonials" variant="outline" class="inline-flex justify-center items-center group">
          View More Testimonials
          <svg class="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </UiButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.4s ease;
}

.slide-next-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
