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
          <div class="hero-text-line">Recover Faster, Live Stronger</div>
        </h1>

        <p
          class="hero-text-line text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto"
        >
          I am an Orthopaedic Surgeon with a special interest in sports
          injuries, arthroscopy, and joint replacement surgery. My approach
          combines evidence-based medicine with personalised care, ensuring that
          every treatment plan is tailored to the individual rather than just
          the diagnosis. Whether helping an athlete return to sport or enabling
          someone to move comfortably through everyday life, my goal is to
          restore function, relieve pain, and help patients regain confidence in
          their movement.
        </p>

        <div class="hero-text-line flex justify-center">
          <UiButton
            to="/contact"
            variant="primary"
            size="lg"
            class="group shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
          >
            <span class="flex items-center">
              Book an Appointment
              <svg
                class="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
          </UiButton>
        </div>
      </div>
    </div>
  </section>
</template>
