<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Biomechanical Landing Screen</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">Jump Landing Mechanics: Safe vs High-Risk Alignment</h4>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Correct Landing Mechanics -->
      <div class="bg-white rounded-xl p-5 border-2 border-emerald-300 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Optimal</span>
            <span class="text-xs text-emerald-600 font-bold">Joint Protective</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-2">Neutral Knee Alignment</h5>
          <ul class="text-xs text-gray-600 space-y-2 mb-4">
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold text-sm">✓</span>
              <span><strong>Hips Level:</strong> Pelvis remains stable and square without trendelenburg drop.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold text-sm">✓</span>
              <span><strong>Knee Over Second Toe:</strong> Straight trajectory; no inward knee cave.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold text-sm">✓</span>
              <span><strong>Deep Flexion Landing:</strong> Hips and knees flex >30–45° upon contact.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold text-sm">✓</span>
              <span><strong>Impact Absorption:</strong> Glutes and quads absorb force; 40% lower ground reaction shock.</span>
            </li>
          </ul>
        </div>
        <div class="pt-3 border-t border-slate-100 text-xs text-emerald-800 bg-emerald-50 p-2 rounded">
          Preserves native ACL, meniscus, and patellofemoral cartilage.
        </div>
      </div>

      <!-- Dynamic Valgus Collapse -->
      <div class="bg-white rounded-xl p-5 border-2 border-red-300 shadow-xs flex flex-col justify-between bg-gradient-to-b from-white to-red-50/15">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-md">High-Risk Flaw</span>
            <span class="text-xs text-red-600 font-bold">ACL Tear Danger</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-2">Dynamic Valgus ("Kissing Knees")</h5>
          <ul class="text-xs text-gray-600 space-y-2 mb-4">
            <li class="flex items-start gap-2">
              <span class="text-red-500 font-bold text-sm">✕</span>
              <span><strong>Pelvic Drop:</strong> Weak gluteus medius allows contralateral hip to plunge.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-500 font-bold text-sm">✕</span>
              <span><strong>Inward Knee Collapse:</strong> Knees buckle inward toward the midline.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-500 font-bold text-sm">✕</span>
              <span><strong>Stiff / Straight Landing:</strong> Inadequate knee flexion (<20°); rigid joint shock.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-500 font-bold text-sm">✕</span>
              <span><strong>Foot Pronation:</strong> Excessive foot flat-slap twists tibia externally.</span>
            </li>
          </ul>
        </div>
        <div class="pt-3 border-t border-red-100 text-xs text-red-800 bg-red-50 p-2 rounded">
          Multiplies non-contact ACL rupture risk by up to 4 to 6 times.
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
// MDC Component for Dynamic Knee Valgus Comparison
</script>
