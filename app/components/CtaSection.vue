<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <section
    v-if="route.path !== '/contact'"
    class="py-24 relative overflow-hidden bg-white border-t border-gray-100"
  >
    <!-- Subtle Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-white via-accent/10 to-primary/5"></div>
    <div
      class="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_0%_0%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60 animate-[pulse_6s_ease-in-out_infinite]"
    ></div>
    <div
      class="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_100%_100%,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-60 animate-[pulse_8s_ease-in-out_infinite_alternate]"
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

      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <UiButton
          to="/contact"
          variant="primary"
          size="lg"
          class="group w-full sm:w-auto shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
        >
          <span class="flex items-center">
            Book Appointment
            <svg
              class="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
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
          </span>
        </UiButton>
        <UiButton
          href="tel:+919833066702"
          variant="outline"
          size="lg"
          class="group w-full sm:w-auto bg-white/70 backdrop-blur-md border-primary/30 hover:border-primary text-primary transition-all duration-300 hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/20"
        >
          <span class="flex items-center">
            <svg class="w-5 h-5 mr-2 transform transition-transform duration-300 group-hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            Call Now
          </span>
        </UiButton>
      </div>
    </div>
  </section>
</template>
