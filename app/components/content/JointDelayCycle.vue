<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-amber-700 uppercase tracking-widest block">Clinical Progression Risk</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">The Cascade of Delaying End-Stage Joint Replacement</h4>
      </div>
    </div>

    <!-- Step-by-Step Cascade -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 relative">
      <!-- Step 1 -->
      <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[11px] font-bold text-slate-500 uppercase">Stage 1</span>
            <span class="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center">1</span>
          </div>
          <h5 class="text-sm font-bold text-gray-900 mb-1.5">Chronic Avoidance</h5>
          <p class="text-xs text-gray-600 m-0 leading-relaxed">
            Pain causes altered gait patterns and persistent limb offloading, progressing to angular joint deformities (bowing / varus deformity).
          </p>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[11px] font-bold text-amber-600 uppercase">Stage 2</span>
            <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center">2</span>
          </div>
          <h5 class="text-sm font-bold text-gray-900 mb-1.5">Muscle Wasting</h5>
          <p class="text-xs text-gray-600 m-0 leading-relaxed">
            Severe disuse atrophy of the quadriceps and gluteal musculature, weakening primary dynamic joint stabilizers.
          </p>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[11px] font-bold text-orange-600 uppercase">Stage 3</span>
            <span class="w-6 h-6 rounded-full bg-orange-100 text-orange-700 text-xs font-bold flex items-center justify-center">3</span>
          </div>
          <h5 class="text-sm font-bold text-gray-900 mb-1.5">Fixed Contracture</h5>
          <p class="text-xs text-gray-600 m-0 leading-relaxed">
            The posterior joint capsule shrinks and tightens, resulting in permanent inability to fully straighten or bend the knee.
          </p>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="bg-rose-50 rounded-xl p-4 border-2 border-rose-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[11px] font-bold text-rose-700 uppercase">Stage 4</span>
            <span class="w-6 h-6 rounded-full bg-rose-200 text-rose-800 text-xs font-bold flex items-center justify-center">4</span>
          </div>
          <h5 class="text-sm font-bold text-rose-950 mb-1.5">Compromised Surgery</h5>
          <p class="text-xs text-rose-900 m-0 leading-relaxed">
            Requires bone augmentation, constrained revision-style implants, and prolonged, challenging rehabilitation.
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom Takeaway -->
    <div class="bg-amber-50/60 rounded-xl p-3.5 border border-amber-200/80 text-xs text-amber-950 flex items-center gap-2.5">
      <span class="text-amber-700 text-base">⚠️</span>
      <span><strong>Key Principle:</strong> Joint replacement is timed for when conservative options fail, but <em>before</em> irreversible muscle wasting and fixed contractures set in.</span>
    </div>
  </div>
</template>
