<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Evidence-Based Warm-Up Protocol</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">The FIFA 11+ Program Structure</h4>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Part 1 -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">Part 1</span>
            <span class="text-xs text-gray-400 font-medium">6–8 mins</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-1.5">Running & Dynamic Mobility</h5>
          <p class="text-xs text-gray-500 mb-3">Elevates core temperature and prepares dynamic range of motion.</p>
          <ul class="text-xs text-gray-600 space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <li class="flex items-start gap-1.5"><span class="text-blue-500 font-bold">•</span> Straight-line slow jogging with partner</li>
            <li class="flex items-start gap-1.5"><span class="text-blue-500 font-bold">•</span> Hip in / hip out groin mobility</li>
            <li class="flex items-start gap-1.5"><span class="text-blue-500 font-bold">•</span> Circling partner & shoulder contact</li>
            <li class="flex items-start gap-1.5"><span class="text-blue-500 font-bold">•</span> Controlled directional decelerations</li>
          </ul>
        </div>
      </div>

      <!-- Part 2 -->
      <div class="bg-white rounded-xl p-5 border-2 border-emerald-300 shadow-xs flex flex-col justify-between bg-gradient-to-b from-white to-emerald-50/10">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Part 2</span>
            <span class="text-xs text-emerald-600 font-bold">10–12 mins</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-1.5">Strength, Balance & Plyometrics</h5>
          <p class="text-xs text-gray-500 mb-3">Core stability, eccentric overload, and soft landing mechanics.</p>
          <ul class="text-xs text-gray-600 space-y-1.5 bg-emerald-50/60 p-3 rounded-lg border border-emerald-100">
            <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">•</span> The Plank & Side Planks for core rigidity</li>
            <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">•</span> <strong>Nordic Hamstring Curls</strong> (eccentric load)</li>
            <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">•</span> Single-leg balance with ball passing</li>
            <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">•</span> Box jumps & lateral hops with soft knees</li>
          </ul>
        </div>
      </div>

      <!-- Part 3 -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">Part 3</span>
            <span class="text-xs text-gray-400 font-medium">2–3 mins</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-1.5">High-Speed Agility Drills</h5>
          <p class="text-xs text-gray-500 mb-3">Primes the nervous system for match-intensity cutting and sprint decelerations.</p>
          <ul class="text-xs text-gray-600 space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <li class="flex items-start gap-1.5"><span class="text-amber-600 font-bold">•</span> High-speed pitch bounding</li>
            <li class="flex items-start gap-1.5"><span class="text-amber-600 font-bold">•</span> Plant-and-cut directional shifts at 80–90%</li>
            <li class="flex items-start gap-1.5"><span class="text-amber-600 font-bold">•</span> Explosive sprint-and-stop repetitions</li>
          </ul>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
// MDC Component for FIFA 11+ Warmup Structure
</script>
