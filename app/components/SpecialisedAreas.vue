<script setup lang="ts">
import { ref } from "vue";

const enableScrolling = ref(false);

const areas = [
  {
    title: "Knee Surgery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    img: "/specialities/knee-surgery-dr-nihar-modi.png",
    hoverImg: "/specialities/knee-surgery-dr-nihar-modi.png",
  },
  {
    title: "Shoulder Surgery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    img: "/specialities/shoulder-surgery-dr-nihar-modi.png",
    hoverImg: "/specialities/shoulder-surgery-dr-nihar-modi.png",
  },
  {
    title: "Elbow Surgery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    img: "/specialities/elbow-surgery-dr-nihar-modi.png",
    hoverImg: "/specialities/elbow-surgery-dr-nihar-modi.png",
  },
  // Duplicated items inside the data to ensure we have enough width to scroll
  // You can add more unique items if you have them!
  // {
  //   title: "Sports Medicine",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  //   img: "/specialities/sports-medicine-dr-nihar-modi.webp",
  //   hoverImg: "/specialities/sports-medicine-alt-dr-nihar-modi.png",
  // },
];
</script>

<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-8">
      <UiSectionTitle color="primary" class="mb-16">
        Specialised Area
      </UiSectionTitle>
    </div>

    <!-- Full Width Auto-Scrolling Carousel -->
    <template v-if="enableScrolling">
      <UiMarquee speed="20s">
        <UiHoverCard
          v-for="(area, idx) in areas"
          :key="'t1-' + idx"
          :title="area.title"
          :desc="area.desc"
          :img="area.img"
          :hoverImg="area.hoverImg"
        />
      </UiMarquee>
    </template>

    <div
      v-else
      class="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl"
    >
      <UiHoverCard
        v-for="(area, idx) in areas"
        :key="'t2-' + idx"
        :title="area.title"
        :desc="area.desc"
        :img="area.img"
        :hoverImg="area.hoverImg"
        fluid
      />
    </div>
  </section>
</template>
