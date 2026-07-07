<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <section
    v-if="route.path !== '/contact'"
    class="py-24 relative overflow-hidden bg-white border-t border-gray-100"
  >
    <div class="absolute inset-0 bg-accent/20"></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"
    ></div>

    <div class="container mx-auto px-6 relative z-10 text-center max-w-4xl">
      <h2
        class="text-4xl md:text-5xl font-mirage text-gray-900 mb-6 leading-tight"
      >
        Ready to take the next step towards <br class="hidden md:block" /><span
          class="text-primary italic"
          >pain-free movement?</span
        >
      </h2>
      <p class="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
        Schedule a consultation with Dr. Nihar Modi today and get back to the
        life you love.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <UiButton
          to="/contact"
          variant="primary"
          size="lg"
          class="shadow-xl shadow-primary/20 group w-full sm:w-auto"
        >
          Book Appointment
          <svg
            class="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </UiButton>
        <UiButton
          href="tel:+919833066702"
          variant="outline"
          size="lg"
          class="w-full sm:w-auto bg-white/50 backdrop-blur-sm"
        >
          Call Now
        </UiButton>
      </div>
    </div>
  </section>
</template>
