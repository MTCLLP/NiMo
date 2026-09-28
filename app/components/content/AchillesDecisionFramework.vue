<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Clinical Decision Guide</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">Acute Achilles Rupture: Treatment Pathways</h4>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Option A: Functional Non-Surgical -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">Option A</span>
            <span class="text-xs text-gray-400 font-medium">Non-Operative</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-2">Functional Bracing & Protected Loading</h5>
          <p class="text-xs text-gray-600 leading-relaxed mb-4">
            Rigid functional equinus boot with progressive heel wedges and early protected weight-bearing.
          </p>

          <div class="space-y-2 text-xs text-gray-600 mb-4">
            <div class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold">✓</span>
              <span><strong>No surgical risks:</strong> Zero wound infections or nerve complications.</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-amber-500 font-bold">!</span>
              <span><strong>Re-rupture risk:</strong> ~8% to 10% in active younger athletic populations.</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-blue-500 font-bold">•</span>
              <span><strong>Compliance:</strong> Requires strict adherence to wedge removal protocol.</span>
            </div>
          </div>
        </div>

        <div class="pt-3 border-t border-slate-100 text-xs bg-slate-50 p-2.5 rounded-lg">
          <strong class="text-gray-800">Ideal Candidates:</strong> Older or more sedentary individuals, patients with diabetes/smoking/vascular disease, or lower functional push-off demands.
        </div>
      </div>

      <!-- Option B: Minimally Invasive Surgery -->
      <div class="bg-white rounded-xl p-5 border-2 border-primary/40 shadow-xs flex flex-col justify-between hover:border-primary transition-all bg-gradient-to-b from-white to-primary/5">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-white bg-primary px-2.5 py-1 rounded-md">Option B</span>
            <span class="text-xs text-primary font-bold">Minimally Invasive</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-2">Percutaneous Tendon Repair (PARS)</h5>
          <p class="text-xs text-gray-600 leading-relaxed mb-4">
            High-strength bio-composite sutures passed through mini-incisions (2–3 cm) to anatomically re-anchor torn tendon ends.
          </p>

          <div class="space-y-2 text-xs text-gray-600 mb-4">
            <div class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold">✓</span>
              <span><strong>Lowest re-rupture rate:</strong> Drastically reduced to ~1% to 2%.</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold">✓</span>
              <span><strong>Push-off strength:</strong> Superior restoration of calf girth & explosive power.</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-primary font-bold">✓</span>
              <span><strong>Keyhole safety:</strong> Negligible wound complications compared to older open surgery.</span>
            </div>
          </div>
        </div>

        <div class="pt-3 border-t border-primary/20 text-xs bg-primary/10 p-2.5 rounded-lg text-primary">
          <strong>Ideal Candidates:</strong> Competitive athletes, high-demand workers, runners, and active adults seeking the lowest re-injury rate and maximum plantarflexion power.
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
// MDC Component for Achilles Acute Rupture Decision Framework
</script>
