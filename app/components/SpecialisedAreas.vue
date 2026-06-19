<script setup lang="ts">
const areas = [
  {
    title: "Trauma Surgery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    img: "/specialities/trauma-surgery-dr-nihar-modi.webp",
    hoverImg: "/specialities/trauma-surgery-alt-dr-nihar-modi.png",
  },
  {
    title: "Arthroscopy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    img: "/specialities/arthroscopy-dr-nihar-modi.webp",
    hoverImg: "/specialities/arthroscopy-alt-dr-nihar-modi.png",
  },
  {
    title: "Joint Replacement",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    img: "/specialities/joint-replacement-dr-nihar-modi.webp",
    hoverImg: "/specialities/joint-replacement-alt-dr-nihar-modi.png",
  },
  // Duplicated items inside the data to ensure we have enough width to scroll
  // You can add more unique items if you have them!
  {
    title: "Sports Medicine",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    img: "/specialities/sports-medicine-dr-nihar-modi.webp",
    hoverImg: "/specialities/sports-medicine-alt-dr-nihar-modi.png",
  },
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
  </section>
</template>
