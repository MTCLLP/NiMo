<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".intro-text-reveal", {
    scrollTrigger: {
      trigger: ".intro-section",
      start: "top 80%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });
});
</script>

<template>
  <section class="intro-section relative py-20 md:py-32 bg-white overflow-hidden">
    <div class="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
      
      <!-- Decorative Quote Icon -->
      <div class="absolute -top-10 -left-6 text-[180px] text-slate-50 font-mirage leading-none select-none z-0">
        “
      </div>

      <div class="flex flex-col md:flex-row gap-12 md:gap-24 items-start relative z-10">
        
        <!-- Left Heading -->
        <div class="w-full md:w-1/3 intro-text-reveal">
          <div class="inline-flex items-center gap-4 mb-6">
            <span class="w-12 h-[1px] bg-primary"></span>
            <span class="text-sm tracking-widest uppercase text-primary font-semibold">About Me</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-mirage text-gray-900 leading-[1.15]">
            My Philosophy <br/> <span class="italic font-light text-gray-400">& Approach</span>
          </h2>
        </div>

        <!-- Right Text -->
        <div class="w-full md:w-2/3">
          <p class="text-xl md:text-[1.65rem] text-gray-800 leading-[1.6] mb-8 font-light intro-text-reveal">
            I am an Orthopaedic Surgeon with a special interest in <span class="text-primary font-medium">sports injuries, arthroscopy, and joint replacement surgery.</span>
          </p>
          
          <div class="w-16 h-[2px] bg-slate-200 mb-8 intro-text-reveal"></div>
          
          <p class="text-lg text-gray-600 leading-relaxed mb-6 intro-text-reveal">
            My approach combines evidence-based medicine with personalised care, ensuring that every treatment plan is tailored to the individual rather than just the diagnosis.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed intro-text-reveal">
            Whether helping an athlete return to sport or enabling someone to move comfortably through everyday life, my goal is to restore function, relieve pain, and help patients regain confidence in their movement.
          </p>
          
          <div class="mt-12 intro-text-reveal flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary font-mirage text-xl">
              NM
            </div>
            <div>
              <div class="text-xl font-mirage text-gray-900">Dr. Nihar Modi</div>
              <div class="text-sm text-gray-500 tracking-wide uppercase">Orthopaedic & Sports Surgeon</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
