<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".stat-item", {
    scrollTrigger: {
      trigger: ".stats-container",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  });
});
</script>

<template>
  <section class="py-12 md:py-24 bg-white relative stats-container">
    <div class="container mx-auto px-4 md:px-8">
      <div
        class="rounded-2xl shadow-xl overflow-hidden py-8 md:py-16"
        style="
          background: repeating-linear-gradient(
            135deg,
            #1b324c 0px,
            #1b324c 15px,
            #15273b 15px,
            #15273b 30px
          );
        "
      >
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 text-center"
        >
          <div class="py-4 md:py-0 stat-item">
            <div class="text-6xl font-mirage text-white mb-4">
              12<span class="text-6xl">+</span>
            </div>
            <div class="text-xl font-light text-white/80">
              Years of training
            </div>
          </div>

          <div class="py-4 md:py-0 stat-item">
            <div class="text-6xl font-mirage text-white mb-4">6</div>
            <div class="text-xl font-light text-white/80">
              Attached hospitals
            </div>
          </div>

          <div class="py-4 md:py-0 stat-item">
            <div class="text-6xl font-mirage text-white mb-4">35</div>
            <div class="text-xl font-light text-white/80">Surgical Assists</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
