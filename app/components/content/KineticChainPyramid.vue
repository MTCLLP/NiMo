<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Biomechanical Power Flow</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">The Overhead Athlete's Kinetic Chain Pyramid</h4>
      </div>
    </div>

    <!-- Tiered Stack Structure -->
    <div class="space-y-3 max-w-xl mx-auto mb-6">
      <!-- Tier 1 (Apex): Shoulder & Elbow -->
      <div class="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-center shadow-xs mx-12 sm:mx-20">
        <div class="flex items-center justify-center gap-2 mb-1">
          <span class="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-100 px-2 py-0.5 rounded">Top 20%</span>
          <h5 class="text-sm sm:text-base font-bold text-red-900 m-0">Shoulder & Elbow Joint</h5>
        </div>
        <p class="text-xs text-red-800 m-0 leading-relaxed">
          Final delivery & fine-motor ball guidance. Vulnerable to rotator cuff tears and SLAP lesions when lower tiers fail.
        </p>
      </div>

      <!-- Arrow down connector -->
      <div class="flex justify-center text-slate-300">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
      </div>

      <!-- Tier 2 (Middle): Scapular & Trunk -->
      <div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-4 text-center shadow-xs mx-6 sm:mx-10">
        <div class="flex items-center justify-center gap-2 mb-1">
          <span class="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">30% Transfer</span>
          <h5 class="text-sm sm:text-base font-bold text-indigo-900 m-0">Scapular Dynamics & Core/Trunk Rotation</h5>
        </div>
        <p class="text-xs text-indigo-800 m-0 leading-relaxed">
          Serratus anterior, lower trapezius & thoracic spine mobility channel torque from lower extremities upwards.
        </p>
      </div>

      <!-- Arrow down connector -->
      <div class="flex justify-center text-slate-300">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
      </div>

      <!-- Tier 3 (Base): Ground Reaction, Legs & Pelvis -->
      <div class="bg-primary/10 border-2 border-primary/30 rounded-xl p-4 text-center shadow-xs">
        <div class="flex items-center justify-center gap-2 mb-1">
          <span class="text-xs font-bold uppercase tracking-wider text-white bg-primary px-2 py-0.5 rounded">50% Power</span>
          <h5 class="text-sm sm:text-base font-bold text-primary m-0">Ground Reaction Force, Legs & Pelvic Hips</h5>
        </div>
        <p class="text-xs text-primary/90 m-0 leading-relaxed">
          The engine of velocity: ground drive, lead-leg block, gluteal power, and pelvic rotation generate half of throwing energy.
        </p>
      </div>
    </div>

    <!-- Clinical Takeaway note -->
    <div class="pt-4 border-t border-slate-200 text-xs text-gray-600 bg-white p-3.5 rounded-xl border border-slate-200">
      <strong class="text-gray-800">Clinical Pearl:</strong> A 20% deficit in hip or trunk force generation requires the shoulder to produce 34% more internal rotation torque to maintain equivalent ball velocity, directly setting up labral tears and rotator cuff tendinopathy.
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
// MDC Component for Overhead Kinetic Chain Pyramid
</script>
