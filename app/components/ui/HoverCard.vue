<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    title: string;
    desc: string;
    img: string;
    hoverImg: string;
    aspectRatio?: "square" | "portrait" | "landscape" | "auto";
    overlayColor?: string;
    fluid?: boolean;
  }>(),
  {
    aspectRatio: "auto",
    fluid: false,
  },
);

const aspectClass = computed(() => {
  switch (props.aspectRatio) {
    case "square":
      return "aspect-square";
    case "portrait":
      return "aspect-[3/4]";
    case "landscape":
      return "aspect-video";
    default:
      return "h-auto";
  }
});
</script>

<template>
  <div
    class="group/card border border-gray-100 rounded-xl overflow-hidden transition-all duration-300 bg-white cursor-pointer relative"
    :class="[
      !overlayColor ? 'hover-gradient-bg' : '',
      fluid ? 'w-full h-full' : 'w-[300px] md:w-[400px] flex-shrink-0',
    ]"
  >
    <!-- Optional Overlay -->
    <div
      v-if="overlayColor"
      class="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-0 pointer-events-none"
      :class="overlayColor"
    ></div>

    <div
      class="relative overflow-hidden flex items-center justify-center p-8 z-10"
      :class="aspectClass"
    >
      <div class="relative w-full h-full flex items-center justify-center">
        <img
          :src="img"
          :alt="title"
          class="max-w-full max-h-full object-contain group-hover/card:opacity-0 group-hover/card:scale-105 transition-all duration-500"
        />
        <img
          :src="hoverImg"
          :alt="title"
          class="absolute inset-0 m-auto max-w-full max-h-full object-contain opacity-0 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-500"
        />
      </div>
    </div>
    <div
      class="relative z-20 p-8 text-center whitespace-normal -mt-32 transition-colors duration-300"
    >
      <h3
        class="text-xl font-mirage text-gray-800 mb-3 transition-colors duration-300"
      >
        {{ title }}
      </h3>
      <p
        class="text-sm text-gray-500 leading-relaxed transition-colors duration-300"
      >
        {{ desc }}
      </p>
      <div class="text-right mt-3 block lg:hidden">
        <NuxtLink
          to="#"
          class="text-[#1DAAFF] font-medium text-sm hover:underline"
          >Know more</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .hover-gradient-bg:hover {
  background: repeating-linear-gradient(
    135deg,
    #1b324c 0px,
    #1b324c 15px,
    #15273b 15px,
    #15273b 30px
  );
} */
</style>
