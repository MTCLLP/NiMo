<script setup lang="ts">
const areas = [
  {
    title: "Trauma Surgery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    img: "/specialities/trauma-surgery-dr-nihar-modi.webp",
  },
  {
    title: "Arthroscopy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    img: "/specialities/arthroscopy-dr-nihar-modi.webp",
  },
  {
    title: "Joint Replacement",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    img: "/specialities/joint-replacement-dr-nihar-modi.webp",
  },
  // Duplicated items inside the data to ensure we have enough width to scroll
  // You can add more unique items if you have them!
  {
    title: "Sports Medicine",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    img: "/specialities/sports-medicine-dr-nihar-modi.webp",
  },
];
</script>

<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-8">
      <h2
        class="text-4xl lg:text-5xl font-mirage text-primary text-center mb-16"
      >
        Specialised Area
      </h2>
    </div>

    <!-- Full Width Auto-Scrolling Carousel -->
    <div class="relative w-full flex overflow-hidden group">
      <!-- Track 1 -->
      <div
        class="animate-marquee flex gap-8 pr-8 whitespace-nowrap min-w-full flex-shrink-0"
      >
        <div
          v-for="(area, idx) in areas"
          :key="'t1-' + idx"
          class="w-[300px] md:w-[400px] flex-shrink-0 group/card border border-gray-100 rounded-xl overflow-hidden transition-all duration-300 bg-white cursor-pointer"
        >
          <div
            class="relative h-auto overflow-hidden flex items-center justify-center p-8"
          >
            <img
              :src="area.img"
              :alt="area.title"
              class="max-w-full max-h-full object-contain group-hover/card:scale-105 transition-transform duration-500"
            />
          </div>
          <div
            class="p-8 text-center border-t border-gray-50 whitespace-normal -mt-32"
          >
            <h3 class="text-xl font-mirage text-gray-800 mb-3">
              {{ area.title }}
            </h3>
            <p class="text-sm text-gray-500 leading-relaxed">{{ area.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Track 2 (Duplicate for seamless loop) -->
      <div
        class="animate-marquee flex gap-8 pr-8 whitespace-nowrap min-w-full flex-shrink-0"
      >
        <div
          v-for="(area, idx) in areas"
          :key="'t2-' + idx"
          class="w-[300px] md:w-[400px] flex-shrink-0 group/card border border-gray-100 rounded-xl overflow-hidden transition-all duration-300 bg-white cursor-pointer"
        >
          <div
            class="relative h-auto overflow-hidden flex items-center justify-center p-8"
          >
            <img
              :src="area.img"
              :alt="area.title"
              class="max-w-full max-h-full object-contain group-hover/card:scale-105 transition-transform duration-500"
            />
          </div>
          <div
            class="p-8 text-center border-t border-gray-50 whitespace-normal -mt-32"
          >
            <h3 class="text-xl font-mirage text-gray-800 mb-3">
              {{ area.title }}
            </h3>
            <p class="text-sm text-gray-500 leading-relaxed">{{ area.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-marquee {
  animation: marquee 20s linear infinite;
}

/* Pause animation on hover */
.group:hover .animate-marquee {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
