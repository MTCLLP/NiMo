<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = withDefaults(
  defineProps<{
    position?: "bottom-right" | "bottom-left";
  }>(),
  {
    position: "bottom-right",
  },
);

const fabContainer = ref<HTMLElement | null>(null);
const showScrollTop = ref(false);

const containerClass = computed(() => {
  return props.position === "bottom-left"
    ? "left-4 sm:left-6 md:left-8 items-start"
    : "right-4 sm:right-6 md:right-8 items-end";
});

const tooltipClass = computed(() => {
  return props.position === "bottom-left"
    ? "-translate-x-2 group-hover:translate-x-0"
    : "translate-x-2 group-hover:translate-x-0";
});

const linkClass = computed(() => {
  return props.position === "bottom-left" ? "flex-row-reverse" : "";
});

const onScroll = () => {
  showScrollTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <div
    ref="fabContainer"
    class="fixed bottom-6 sm:bottom-8 z-50 flex flex-col gap-3 sm:gap-3.5"
    :class="containerClass"
  >
    <!-- Phone -->
    <a
      href="tel:+919833066702"
      aria-label="Call Dr. Nihar Modi"
      class="group flex items-center gap-2.5"
      :class="linkClass"
    >
      <div
        class="hidden md:group-hover:block bg-white px-3.5 py-1.5 rounded-full shadow-lg text-xs font-semibold text-gray-800 transition-all duration-300 pointer-events-none whitespace-nowrap border border-slate-100"
        :class="tooltipClass"
      >
        Call +91 98330 66702
      </div>
      <div
        class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg shadow-black/15 border border-slate-200/80 flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer"
      >
        <img
          width="28"
          height="28"
          src="/icon-phone-dr-nihar-modi.svg"
          alt="Call"
          class="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:rotate-12"
        />
      </div>
    </a>

    <!-- WhatsApp -->
    <a
      href="https://wa.me/919833066702"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Dr. Nihar Modi on WhatsApp"
      class="group flex items-center gap-2.5"
      :class="linkClass"
    >
      <div
        class="hidden md:group-hover:block bg-white px-3.5 py-1.5 rounded-full shadow-lg text-xs font-semibold text-gray-800 transition-all duration-300 pointer-events-none whitespace-nowrap border border-slate-100"
        :class="tooltipClass"
      >
        Chat on WhatsApp
      </div>
      <div
        class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg shadow-black/15 border border-slate-200/80 flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer"
      >
        <img
          width="28"
          height="28"
          src="/icon-whatsapp-dr-nihar-modi.svg"
          alt="WhatsApp"
          class="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </a>

    <!-- Scroll to Top -->
    <button
      aria-label="Scroll back to top"
      @click="scrollToTop"
      class="group flex items-center gap-2.5 transition-opacity duration-300"
      :class="[linkClass, showScrollTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none']"
    >
      <div
        class="hidden md:group-hover:block bg-white px-3.5 py-1.5 rounded-full shadow-lg text-xs font-semibold text-gray-800 transition-all duration-300 pointer-events-none whitespace-nowrap border border-slate-100"
        :class="tooltipClass"
      >
        Back to top
      </div>
      <div
        class="hover:scale-110 transition-transform shadow-lg shadow-black/15 rounded-full w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-[#1b324c] text-white hover:bg-primary cursor-pointer border border-white/20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </div>
    </button>
  </div>
</template>
