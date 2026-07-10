<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const areas = [
  {
    title: "Knee Surgery",
    desc: "Advanced surgical treatments for knee pain, ligament injuries, and joint replacements to restore your mobility.",
    img: "/specialities/knee-surgery-dr-nihar-modi.png",
    hoverImg: "/specialities/knee-surgery-dr-nihar-modi.png",
  },
  {
    title: "Shoulder Surgery",
    desc: "Expert care for rotator cuff tears, dislocations, and shoulder arthritis to help you regain full range of motion.",
    img: "/specialities/shoulder-surgery-dr-nihar-modi.png",
    hoverImg: "/specialities/shoulder-surgery-dr-nihar-modi.png",
  },
  {
    title: "Elbow Surgery",
    desc: "Specialised treatments for tennis elbow, fractures, and ligament injuries to ensure optimal recovery and function.",
    img: "/specialities/elbow-surgery-dr-nihar-modi.png",
    hoverImg: "/specialities/elbow-surgery-dr-nihar-modi.png",
  },
];

const scrollContainer = ref<HTMLElement | null>(null);
let autoPlayInterval: ReturnType<typeof setInterval> | null = null;

const scrollNext = () => {
  if (!scrollContainer.value) return;
  const container = scrollContainer.value;

  // On desktop, it's a grid, so scrollWidth === clientWidth. Autoplay will safely do nothing.
  if (container.scrollWidth <= container.clientWidth) return;

  // If at the end, jump to start
  if (
    container.scrollLeft + container.clientWidth >=
    container.scrollWidth - 10
  ) {
    container.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    // Scroll by roughly one card width
    container.scrollBy({
      left: container.clientWidth * 0.8,
      behavior: "smooth",
    });
  }
};

const scrollPrev = () => {
  if (!scrollContainer.value) return;
  const container = scrollContainer.value;

  if (container.scrollWidth <= container.clientWidth) return;

  if (container.scrollLeft <= 10) {
    // Jump to end
    container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
  } else {
    container.scrollBy({
      left: -(container.clientWidth * 0.8),
      behavior: "smooth",
    });
  }
};

const startAutoPlay = () => {
  if (!autoPlayInterval) {
    autoPlayInterval = setInterval(scrollNext, 3500);
  }
};

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<template>
  <section class="py-12 md:py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-4 lg:px-8 max-w-6xl">
      <div class="mb-12 lg:mb-16 text-center md:text-left">
        <UiSectionTitle color="primary" class="mb-0">
          Specialised Area
        </UiSectionTitle>
      </div>
    </div>

    <div class="relative max-w-6xl mx-auto">
      <!-- Arrows (Visible on mobile where it is a carousel) -->
      <div
        class="md:hidden absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between z-20 pointer-events-none -mt-4"
      >
        <button
          @click="scrollPrev"
          class="w-10 h-10 rounded-full bg-white/90 backdrop-blur border border-gray-200 flex items-center justify-center text-gray-700 hover:text-primary hover:border-primary transition-colors shadow-lg pointer-events-auto"
        >
          <svg
            class="w-5 h-5"
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
        <button
          @click="scrollNext"
          class="w-10 h-10 rounded-full bg-white/90 backdrop-blur border border-gray-200 flex items-center justify-center text-gray-700 hover:text-primary hover:border-primary transition-colors shadow-lg pointer-events-auto"
        >
          <svg
            class="w-5 h-5"
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

      <div
        ref="scrollContainer"
        class="container mx-auto px-4 lg:px-8 flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-3 md:gap-8 hide-scrollbar scroll-smooth"
        @touchstart="stopAutoPlay"
        @touchend="startAutoPlay"
        @mouseenter="stopAutoPlay"
        @mouseleave="startAutoPlay"
      >
        <div
          v-for="(area, idx) in areas"
          :key="'t2-' + idx"
          class="snap-center shrink-0 w-[85vw] sm:w-[60vw] md:w-auto"
        >
          <UiHoverCard
            :title="area.title"
            :desc="area.desc"
            :img="area.img"
            :hoverImg="area.hoverImg"
            fluid
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
