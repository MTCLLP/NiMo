<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Training Load Monitoring</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">Acute to Chronic Workload Ratio (ACWR) Zones</h4>
      </div>
    </div>

    <!-- Visual Bar Representation -->
    <div class="mb-6 bg-white p-4 rounded-xl border border-slate-200">
      <div class="h-4 w-full rounded-full overflow-hidden flex shadow-inner mb-2">
        <div class="w-1/4 bg-amber-400" title="Under-Training (<0.8)"></div>
        <div class="w-2/4 bg-emerald-500" title="Sweet Spot (0.8 - 1.3)"></div>
        <div class="w-1/4 bg-red-500" title="Danger Zone (>1.5)"></div>
      </div>
      <div class="flex justify-between text-xs text-gray-500 px-1 font-medium">
        <span>0.0</span>
        <span class="text-amber-700">0.8</span>
        <span class="text-emerald-700 font-bold">1.0 (Optimal)</span>
        <span class="text-emerald-700">1.3</span>
        <span class="text-red-700 font-bold">1.5+ (High Risk)</span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Zone 1 -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">Ratio &lt; 0.8</span>
            <span class="text-xs text-amber-600 font-semibold">Under-Prepared</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-1.5">Under-Training Zone</h5>
          <p class="text-xs text-gray-600 leading-relaxed mb-3">
            Acute load is significantly lower than chronic fitness base. Leads to deconditioning and increased injury vulnerability when volume suddenly spikes.
          </p>
        </div>
        <div class="text-xs text-gray-500 pt-2 border-t border-slate-100">
          <strong>Action:</strong> Gradually build weekly volume; do not spike abruptly.
        </div>
      </div>

      <!-- Zone 2 -->
      <div class="bg-white rounded-xl p-5 border-2 border-emerald-400 shadow-xs flex flex-col justify-between bg-gradient-to-b from-white to-emerald-50/10">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">0.8 to 1.3</span>
            <span class="text-xs text-emerald-600 font-bold">Optimal</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-1.5">"The Sweet Spot"</h5>
          <p class="text-xs text-gray-600 leading-relaxed mb-3">
            Optimal training adaptations, fitness gains, and physiological tissue remodeling with the lowest relative sports injury rate.
          </p>
        </div>
        <div class="text-xs text-emerald-800 font-medium pt-2 border-t border-emerald-100 bg-emerald-50/60 p-2 rounded">
          <strong>Action:</strong> Maintain steady progressive overload (~5–10% weekly).
        </div>
      </div>

      <!-- Zone 3 -->
      <div class="bg-white rounded-xl p-5 border-2 border-red-300 shadow-xs flex flex-col justify-between bg-gradient-to-b from-white to-red-50/15">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-md">Ratio &gt; 1.5</span>
            <span class="text-xs text-red-600 font-bold">Danger Zone</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-1.5">Workload Spike</h5>
          <p class="text-xs text-gray-600 leading-relaxed mb-3">
            Fatigue rapidly outstrips structural tissue capacity. Soft-tissue breakdown risk (tendons, hamstrings, calf) spikes by 2 to 4 times.
          </p>
        </div>
        <div class="text-xs text-red-800 font-medium pt-2 border-t border-red-100 bg-red-50 p-2 rounded">
          <strong>Action:</strong> Introduce scheduled deload sessions and prioritize recovery.
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
// MDC Component for Acute to Chronic Workload Ratio (ACWR) Zones
</script>
