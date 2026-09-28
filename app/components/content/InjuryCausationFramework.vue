<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Epidemiological Model</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">The Van Mechelen Sports Injury Causation Model</h4>
      </div>
    </div>

    <!-- Two-column risk factors -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <!-- Intrinsic factors -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-md">Internal Factors</span>
          <span class="text-xs text-emerald-600 font-semibold">Modifiable</span>
        </div>
        <h5 class="text-base font-bold text-gray-900 mb-2">Intrinsic Risk Profile</h5>
        <ul class="text-xs text-gray-600 space-y-1.5">
          <li class="flex items-start gap-1.5"><span class="text-primary font-bold">•</span> Neuromuscular control & balance deficits</li>
          <li class="flex items-start gap-1.5"><span class="text-primary font-bold">•</span> Strength asymmetries (>10–15% limb deficit)</li>
          <li class="flex items-start gap-1.5"><span class="text-primary font-bold">•</span> History of prior unhealed ligament/muscle injury</li>
          <li class="flex items-start gap-1.5"><span class="text-primary font-bold">•</span> Systemic fatigue & sleep deprivation (<8 hrs)</li>
        </ul>
      </div>

      <!-- Extrinsic factors -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">External Factors</span>
          <span class="text-xs text-gray-400 font-medium">Environmental</span>
        </div>
        <h5 class="text-base font-bold text-gray-900 mb-2">Extrinsic Risk Triggers</h5>
        <ul class="text-xs text-gray-600 space-y-1.5">
          <li class="flex items-start gap-1.5"><span class="text-slate-500 font-bold">•</span> Playing surface quality (slippery turf, hard court)</li>
          <li class="flex items-start gap-1.5"><span class="text-slate-500 font-bold">•</span> Suboptimal footwear / lack of supportive orthotics</li>
          <li class="flex items-start gap-1.5"><span class="text-slate-500 font-bold">•</span> Sudden training volume or intensity spikes (>10%/wk)</li>
          <li class="flex items-start gap-1.5"><span class="text-slate-500 font-bold">•</span> High-contact collision rules & opponent play</li>
        </ul>
      </div>
    </div>

    <!-- Arrow down -->
    <div class="flex justify-center text-slate-300 my-1">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
    </div>

    <!-- Susceptible state box -->
    <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center mb-2">
      <span class="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">Cumulative Vulnerability</span>
      <p class="text-sm font-bold text-amber-900 m-0">Predisposed Athlete in a Susceptible State</p>
    </div>

    <!-- Arrow down -->
    <div class="flex justify-center text-slate-300 my-1">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
    </div>

    <!-- Inciting event + Injury -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="bg-white rounded-xl p-4 border border-slate-200 text-center">
        <span class="text-xs text-gray-400 font-bold uppercase block mb-1">Inciting Event</span>
        <p class="text-xs text-gray-700 m-0 font-medium">Awkward landing, sharp cutting pivot, or contact collision</p>
      </div>
      <div class="bg-red-50 rounded-xl p-4 border border-red-200 text-center">
        <span class="text-xs text-red-600 font-bold uppercase block mb-1">Outcome</span>
        <p class="text-xs text-red-900 m-0 font-bold">Acute or Overuse Injury Occurs</p>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
// MDC Component for Van Mechelen Injury Causation Framework
</script>
