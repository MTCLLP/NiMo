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

const isOverDarkBg = ref(false);
const fabContainer = ref<HTMLElement | null>(null);
let scrollTimeout = 0;

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

const checkBackground = () => {
  if (!fabContainer.value) return;
  const fabRect = fabContainer.value.getBoundingClientRect();

  let overDark = false;

  // 1. Check footer
  const footer = document.querySelector("footer");
  if (footer) {
    const footerRect = footer.getBoundingClientRect();
    // Overlaps if FAB bottom is below footer top and FAB top is above footer bottom
    if (fabRect.bottom > footerRect.top && fabRect.top < footerRect.bottom) {
      overDark = true;
    }
  }

  // 2. Check other known dark sections if any (by class or specific selectors)
  if (!overDark) {
    const darkSections = document.querySelectorAll(
      '.bg-primary, .bg-secondary, .bg-gray-900, .bg-black, [style*="#1b324c"]',
    );
    for (const section of Array.from(darkSections)) {
      const rect = section.getBoundingClientRect();
      if (fabRect.bottom > rect.top && fabRect.top < rect.bottom) {
        overDark = true;
        break;
      }
    }
  }

  isOverDarkBg.value = overDark;
};

const onScroll = () => {
  if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
  scrollTimeout = requestAnimationFrame(checkBackground);
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  // Initial check
  setTimeout(checkBackground, 100);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
});
</script>

<template>
  <div
    ref="fabContainer"
    class="fixed bottom-16 z-50 flex flex-col gap-4"
    :class="containerClass"
  >
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
          class="w-10 h-10 transition-all duration-300"
          :class="isOverDarkBg ? 'brightness-0 invert' : ''"
        />
      </div>
    </a>

    <!-- WhatsApp -->
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
          class="w-10 h-10 transition-all duration-300"
          :class="isOverDarkBg ? 'brightness-0 invert' : ''"
        />
      </div>
    </a>
  </div>
</template>
