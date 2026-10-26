<script setup lang="ts">
interface Affiliation {
  name: string
  location: string
  logo: string
  alt: string
}

const affiliations: Affiliation[] = [
  {
    name: 'Apollo Spectra Hospitals',
    location: 'Tardeo',
    logo: '/affiliations/apollo-spectra-hospitals-tardeo.png',
    alt: 'Apollo Spectra Hospitals, Tardeo - Dr. Nihar Modi Affiliation',
  },
  {
    name: 'Holy Family Hospital & Medical Research Center',
    location: 'Bandra',
    logo: '/affiliations/holy-family-hospital-and-medical-research-center-bandra.webp',
    alt: 'Holy Family Hospital and Medical Research Center, Bandra - Dr. Nihar Modi Affiliation',
  },
  {
    name: 'S. L. Raheja Hospital',
    location: 'Mahim',
    logo: '/affiliations/sl-raheja-hospital-mahim.svg',
    alt: 'S. L. Raheja Hospital (A Fortis Associate), Mahim - Dr. Nihar Modi Affiliation',
  },
]

// Repeat the affiliations 5 times so the track is comfortably wider than 4K viewports for seamless infinite looping
const repeatedAffiliations = [
  ...affiliations,
  ...affiliations,
  ...affiliations,
  ...affiliations,
  ...affiliations,
]
</script>

<template>
  <section
    class="w-full bg-slate-50/95 border-y border-slate-200/80 py-4 sm:py-6 overflow-hidden relative z-20 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]"
    aria-label="Hospital Affiliations"
  >
    <div class="container mx-auto px-4 sm:px-8">
      <div class="flex items-center gap-3 sm:gap-6">
        <!-- News Ticker Left Label -->
        <div class="flex-shrink-0 flex items-center gap-2 sm:gap-4 z-20">
          <div
            class="flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 bg-primary text-white rounded-xl shadow-xs"
          >
            <span class="relative flex h-2.5 w-2.5">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"
              ></span>
            </span>
            <span
              class="text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase font-sans whitespace-nowrap"
            >
              Affiliations
            </span>
          </div>
          <!-- Divider -->
          <div
            class="hidden md:block h-10 w-px bg-slate-300/80 flex-shrink-0"
          ></div>
        </div>

        <!-- Scrolling Ticker Track Container -->
        <div class="flex-1 overflow-hidden relative group">
          <!-- Gradient Masks for Smooth Fade -->
          <div
            class="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10"
          ></div>
          <div
            class="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-10"
          ></div>

          <!-- Infinite Marquee Track -->
          <div class="flex overflow-hidden">
            <!-- Track 1 -->
            <div
              class="animate-ticker flex items-center gap-5 sm:gap-7 pr-5 sm:pr-7 whitespace-nowrap min-w-full flex-shrink-0"
            >
              <div
                v-for="(item, idx) in repeatedAffiliations"
                :key="'track1-' + idx"
                class="inline-flex items-center gap-3.5 sm:gap-5 px-5 py-2.5 sm:px-6 sm:py-3 bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-primary/25 transition-all duration-300 group/card flex-shrink-0"
              >
                <img
                  :src="item.logo"
                  :alt="item.alt"
                  loading="lazy"
                  class="h-11 sm:h-14 md:h-16 w-auto max-w-[160px] sm:max-w-[210px] md:max-w-[240px] object-contain group-hover/card:scale-105 transition-transform duration-300"
                />
                <span
                  class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 bg-slate-100/90 px-2.5 py-1 rounded-lg border border-slate-200/70"
                >
                  <svg
                    class="w-3.5 h-3.5 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {{ item.location }}
                </span>
              </div>
            </div>

            <!-- Track 2 (Duplicate for Seamless Loop) -->
            <div
              class="animate-ticker flex items-center gap-5 sm:gap-7 pr-5 sm:pr-7 whitespace-nowrap min-w-full flex-shrink-0"
              aria-hidden="true"
            >
              <div
                v-for="(item, idx) in repeatedAffiliations"
                :key="'track2-' + idx"
                class="inline-flex items-center gap-3.5 sm:gap-5 px-5 py-2.5 sm:px-6 sm:py-3 bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-primary/25 transition-all duration-300 group/card flex-shrink-0"
              >
                <img
                  :src="item.logo"
                  :alt="item.alt"
                  loading="lazy"
                  class="h-11 sm:h-14 md:h-16 w-auto max-w-[160px] sm:max-w-[210px] md:max-w-[240px] object-contain group-hover/card:scale-105 transition-transform duration-300"
                />
                <span
                  class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 bg-slate-100/90 px-2.5 py-1 rounded-lg border border-slate-200/70"
                >
                  <svg
                    class="w-3.5 h-3.5 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {{ item.location }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-ticker {
  animation: ticker 38s linear infinite;
}

/* Pause animation on hover */
.group:hover .animate-ticker {
  animation-play-state: paused;
}

@keyframes ticker {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
