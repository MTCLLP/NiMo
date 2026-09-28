<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Clinical Bedside Test</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">The Simmonds-Thompson Squeeze Test</h4>
      </div>
    </div>

    <!-- Test setup details -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs bg-white p-4 rounded-xl border border-slate-200/80">
      <div>
        <span class="font-bold text-gray-800 uppercase tracking-wide block mb-1">Patient Setup:</span>
        <p class="text-gray-600 m-0">Prone (face down) with feet dangling relaxed over the edge of the examination table.</p>
      </div>
      <div>
        <span class="font-bold text-gray-800 uppercase tracking-wide block mb-1">Examiner Action:</span>
        <p class="text-gray-600 m-0">Firmly squeezes the muscular mid-belly of the calf with one hand.</p>
      </div>
    </div>

    <!-- Normal vs Positive cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Normal (Intact) -->
      <div class="bg-white rounded-xl p-5 border-2 border-emerald-200 shadow-xs relative">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            Normal (Intact Tendon)
          </span>
          <span class="text-xs text-gray-400 font-medium">Negative Test</span>
        </div>
        <h5 class="text-base font-bold text-gray-900 mb-2">Foot Points Downward</h5>
        <p class="text-sm text-gray-600 leading-relaxed mb-3">
          Squeezing the calf pulls on an intact Achilles tendon, causing immediate <strong>passive plantarflexion</strong> of the ankle (toes point toward the floor).
        </p>
        <div class="text-xs text-emerald-800 bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-100 font-medium">
          Confirms mechanical continuity between the calf muscle belly and the calcaneus.
        </div>
      </div>

      <!-- Positive (Rupture) -->
      <div class="bg-white rounded-xl p-5 border-2 border-red-200 shadow-xs relative bg-gradient-to-b from-white to-red-50/20">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-md flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>
            Positive (Complete Rupture)
          </span>
          <span class="text-xs text-red-500 font-bold">Urgent Review</span>
        </div>
        <h5 class="text-base font-bold text-gray-900 mb-2">Foot Remains Motionless</h5>
        <p class="text-sm text-gray-600 leading-relaxed mb-3">
          Because the tendon fibers are completely severed, muscle compression is not transmitted to the foot. The foot <strong>hangs motionless or shows zero movement</strong>.
        </p>
        <div class="text-xs text-red-800 bg-red-50 p-2.5 rounded-lg border border-red-200 font-medium">
          <strong>Diagnostic Accuracy:</strong> ~96% sensitivity & 93% specificity for full-thickness Achilles rupture.
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
// MDC Component for Simmonds-Thompson Achilles Test
</script>
