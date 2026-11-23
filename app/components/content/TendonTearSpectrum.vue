<template>
  <div class="my-6 not-prose">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <!-- Stage 1 -->
      <div class="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs">
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Stage 1</span>
          <span class="text-[10px] text-gray-400">Normal</span>
        </div>
        <h6 class="text-xs font-bold text-gray-900 mb-1">Healthy Tendon</h6>
        <p class="text-[11px] text-gray-500 m-0 leading-relaxed">
          Dense, parallel Type I collagen bundles with rich cellular matrix and elastic recoil.
        </p>
      </div>

      <!-- Stage 2 -->
      <div class="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs">
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Stage 2</span>
          <span class="text-[10px] text-amber-600 font-semibold">Overuse</span>
        </div>
        <h6 class="text-xs font-bold text-gray-900 mb-1">Tendinopathy</h6>
        <p class="text-[11px] text-gray-500 m-0 leading-relaxed">
          Collagen disorganization, micro-fraying, and cellular swelling. Reversible with load management.
        </p>
      </div>

      <!-- Stage 3 -->
      <div class="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs">
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-50 px-2 py-0.5 rounded">Stage 3</span>
          <span class="text-[10px] text-orange-600 font-semibold">Structural</span>
        </div>
        <h6 class="text-xs font-bold text-gray-900 mb-1">Partial-Thickness Tear</h6>
        <p class="text-[11px] text-gray-500 m-0 leading-relaxed">
          Incomplete disruption of articular or bursal tendon fibers without complete through-and-through gap.
        </p>
      </div>

      <!-- Stage 4 -->
      <div class="bg-rose-50 rounded-xl p-3.5 border-2 border-rose-200 shadow-2xs">
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-2 py-0.5 rounded">Stage 4</span>
          <span class="text-[10px] text-rose-600 font-bold">Detached</span>
        </div>
        <h6 class="text-xs font-bold text-rose-950 mb-1">Full-Thickness Tear</h6>
        <p class="text-[11px] text-rose-900 m-0 leading-relaxed">
          Complete tendon avulsion off humeral footprint. Often requires arthroscopic suture anchor refixation.
        </p>
      </div>
    </div>
  </div>
</template>
