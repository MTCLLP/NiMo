<script setup lang="ts">
import { ref, computed } from "vue";

const props = withDefaults(
  defineProps<{
    position?: "bottom-right" | "bottom-left";
  }>(),
  {
    position: "bottom-right",
  },
);

const isFabOpen = ref(false);

const containerClass = computed(() => {
  return props.position === "bottom-left"
    ? "left-8 items-start"
    : "right-8 items-end";
});

const tooltipClass = computed(() => {
  return props.position === "bottom-left"
    ? "-translate-x-4 group-hover:translate-x-0"
    : "translate-x-4 group-hover:translate-x-0";
});

const linkClass = computed(() => {
  return props.position === "bottom-left" ? "flex-row-reverse" : "";
});
</script>

<template>
  <div class="fixed bottom-16 z-50 flex flex-col gap-0" :class="containerClass">
    <!-- FAB Hamburger Toggle -->
    <button
      @click="isFabOpen = !isFabOpen"
      class="hover:scale-105 transition-transform z-10 cursor-pointer"
    >
      <img
        src="/icon-floating-hamburger-dr-nihar-modi.svg"
        alt="Menu"
        class="w-8 h-8 transition-transform duration-300"
        :class="isFabOpen ? 'rotate-180' : 'rotate-0'"
      />
    </button>

    <!-- Collapsible Menu Items (Calendar & Phone) -->
    <div
      class="flex flex-col gap-3 overflow-hidden transition-all duration-300"
      :class="[
        isFabOpen
          ? 'max-h-40 opacity-100'
          : 'max-h-0 opacity-0 pointer-events-none',
        props.position === 'bottom-left' ? 'items-start' : 'items-end',
      ]"
    >
      <!-- Calendar -->
      <!-- <a href="#" class="group flex items-center gap-3" :class="linkClass">
        <div
          class="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-medium text-gray-800 opacity-0 transition-all duration-300"
          :class="tooltipClass"
        >
          Book an appointment
        </div>
        <div class="hover:scale-105 transition-transform">
          <img
            src="/icon-calendar-dr-nihar-modi.svg"
            alt="Calendar"
            class="w-8 h-8"
          />
        </div>
      </a> -->

      <!-- Phone -->
      <a
        href="tel:+919833066702"
        class="group flex items-center gap-3"
        :class="linkClass"
      >
        <div
          class="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-medium text-gray-800 opacity-0 transition-all duration-300"
          :class="tooltipClass"
        >
          Get in touch
        </div>
        <div class="hover:scale-105 transition-transform">
          <img
            src="/icon-phone-dr-nihar-modi.svg"
            alt="Phone"
            class="w-8 h-8"
          />
        </div>
      </a>
    </div>

    <!-- Fixed WhatsApp Button -->
    <a
      href="https://wa.me/919833066702"
      class="group flex items-center gap-3"
      :class="linkClass"
    >
      <div
        class="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-medium text-gray-800 opacity-0 transition-all duration-300"
        :class="tooltipClass"
      >
        Chat with us
      </div>
      <div class="hover:scale-105 transition-transform">
        <img
          src="/icon-whatsapp-dr-nihar-modi.svg"
          alt="WhatsApp"
          class="w-8 h-8"
        />
      </div>
    </a>
  </div>
</template>
