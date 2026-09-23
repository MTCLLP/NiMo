<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
  const tl = gsap.timeline();
  tl.fromTo(
    ".hero-text-line",
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
  )
    .fromTo(
      ".hero-image",
      { scale: 1.05, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
      "-=0.6",
    )
    .fromTo(
      ".glass-card",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.8",
    );
});
</script>

<template>
  <section class="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-8">
    <div class="container mx-auto">
      <!-- Main Box Container -->
      <div
        class="relative bg-slate-50 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-sm border border-slate-100"
      >
        <!-- Background Pattern/Gradient -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-slate-200/50 to-transparent pointer-events-none"
        ></div>

        <!-- Left Content -->
        <div
          class="relative z-10 flex-1 p-8 md:p-14 lg:p-20 flex flex-col justify-center"
        >
          <h1
            class="hero-text-line text-4xl sm:text-[4rem] lg:text-5xl font-mirage text-gray-900 leading-[1.1] mb-6"
          >
            Specialist
            <span class="text-primary italic font-light"
              >Orthopaedic Surgeon</span
            >
            in Mumbai
          </h1>

          <p
            class="hero-text-line text-lg md:text-xl text-gray-600 mb-10 max-w-xl font-light"
          >
            Helping You Move Better, Recover Faster, Live Stronger.
          </p>

          <div class="hero-text-line flex flex-wrap gap-4 mb-16">
            <UiButton
              to="/contact"
              variant="primary"
              size="lg"
              class="shadow-xl shadow-primary/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all"
            >
              Book an Appointment
            </UiButton>
            <UiButton
              to="/about"
              variant="outline"
              size="lg"
              class="hover:-translate-y-0.5 transition-all bg-white border-gray-200"
            >
              About Dr. Modi
            </UiButton>
          </div>

          <!-- Stats -->
          <div
            class="hero-text-line grid grid-cols-2 gap-y-8 gap-x-6 md:gap-x-12 mt-auto"
          >
            <div>
              <div class="text-3xl md:text-4xl font-mirage text-gray-900 mb-1">
                12+
              </div>
              <div
                class="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-semibold"
              >
                Years of Training
              </div>
            </div>
            <div>
              <div class="text-3xl md:text-4xl font-mirage text-gray-900 mb-1">
                1000+
              </div>
              <div
                class="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-semibold"
              >
                Surgeries Completed
              </div>
            </div>
            <div>
              <div class="text-3xl md:text-4xl font-mirage text-gray-900 mb-1">
                5000+
              </div>
              <div
                class="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-semibold"
              >
                Happy Patients
              </div>
            </div>
            <div>
              <div class="text-3xl md:text-4xl font-mirage text-gray-900 mb-1">
                6
              </div>
              <div
                class="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-semibold"
              >
                Attached Hospitals
              </div>
            </div>
          </div>
        </div>

        <!-- Right Image Column -->
        <div
          class="relative z-10 flex-1 min-h-[400px] lg:min-h-full flex items-end justify-center lg:justify-end pt-12 lg:pt-0 overflow-hidden"
        >
          <img
            src="/dr-nihar-modi-hero.png"
            alt="Dr. Nihar Modi - Top Orthopaedic Surgeon in Mumbai"
            class="hero-image object-contain h-[95%] max-h-[600px] lg:max-h-200 origin-bottom object-bottom relative z-10"
          />

          <!-- Glass Card for SEO -->
          <div
            class="glass-card absolute bottom-6 right-6 left-6 lg:left-auto lg:bottom-8 lg:right-12 z-20 p-6 md:p-8 rounded-[1.5rem] bg-[#1a1f2e]/70 backdrop-blur-xl border border-white/10 text-white max-w-md shadow-2xl"
          >
            <div
              class="text-xs uppercase tracking-widest text-blue-300 mb-3 font-semibold flex items-center gap-2"
            >
              <span class="w-2 h-2 rounded-full bg-blue-400"></span> Specialist
              Services
            </div>
            <h3 class="text-lg md:text-xl font-medium mb-3 leading-snug">
              Expert in Sports Medicine, Arthroscopy & Joint Replacement
            </h3>
            <p class="text-gray-300 text-sm font-light">
              Advanced minimally invasive treatments for knee, shoulder, and
              sports injuries in Mumbai.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
