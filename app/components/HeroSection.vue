<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
  const tl = gsap.timeline();
  tl.fromTo(
    ".watermark-n",
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 0.05, duration: 1.5, ease: "power2.out" },
  ).fromTo(
    ".hero-text-line",
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
    "-=1",
  );
});
</script>

<template>
  <section
    class="relative pt-32 md:pt-40 pb-16 md:pb-20 px-8 min-h-[300px] md:min-h-[800px] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
    style="background-image: url(&quot;/Main_banner.webp&quot;)"
  >
    <!-- Background Watermark -->
    <div
      class="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none watermark-n"
    >
      <div class="text-[400px] font-mirage text-primary leading-none">N</div>
    </div>

    <div
      class="container mx-auto relative z-10 flex flex-col items-center justify-center"
    >
      <!-- Left Content -->
      <div class="text-center w-full max-w-4xl">
        <h1
          class="text-2xl lg:text-5xl font-mirage text-secondary leading-tight mb-8"
        >
          <div class="hero-text-line">Helping You Move Better,</div>
          <div class="hero-text-line text-secondary/80 mt-2">
            Recover Faster, Live Stronger
          </div>
        </h1>

        <!-- <div class="hidden lg:block relative mt-16 w-80">
          <div
            class="bg-white p-4 rounded-lg shadow-xl shadow-blue-900/10 flex gap-4 items-center"
          >
            <div
              class="relative w-24 h-16 rounded overflow-hidden flex-shrink-0"
            >
              <img
                src="/home-banner-small-thumbnail-dr-nihar-modi.webp"
                alt="Video thumbnail"
                class="object-cover w-full h-full"
              />
              <button
                class="absolute inset-0 m-auto w-8 h-8 flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-full"
              >
                <img
                  src="/icon-play-dr-nihar-modi.svg"
                  alt="Play"
                  class="w-3 h-3 ml-1"
                />
              </button>
            </div>
            <p class="text-xs text-gray-600 leading-snug">
              Specialized care in fractures, joint pain, sports injuries,
              arthritis, and minimally invasive orthopaedic procedures.
            </p>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>
