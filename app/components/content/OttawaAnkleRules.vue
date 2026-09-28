<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Evidence-Based Triage Protocol</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">The Ottawa Ankle Rules: When Is an X-Ray Needed?</h4>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Ankle Series -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-md">Series 1</span>
            <span class="text-xs text-gray-400 font-medium">Ankle Joint</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-2">Ankle X-Ray Series Indicated If:</h5>
          <ul class="text-xs text-gray-600 space-y-2.5 mb-4">
            <li class="flex items-start gap-2">
              <span class="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
              <span>Bone tenderness along the <strong>posterior 6 cm or tip of the LATERAL malleolus</strong> (outer ankle bone).</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
              <span>Bone tenderness along the <strong>posterior 6 cm or tip of the MEDIAL malleolus</strong> (inner ankle bone).</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
              <span><strong>Inability to bear weight</strong> both immediately following the injury AND for 4 steps in the clinic.</span>
            </li>
          </ul>
        </div>
        <div class="pt-3 border-t border-slate-100 text-xs text-gray-500 bg-slate-50 p-2 rounded">
          Rules out fibular and tibial malleolar fractures.
        </div>
      </div>

      <!-- Foot Series -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-1 rounded-md">Series 2</span>
            <span class="text-xs text-gray-400 font-medium">Midfoot Bones</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-2">Foot X-Ray Series Indicated If:</h5>
          <ul class="text-xs text-gray-600 space-y-2.5 mb-4">
            <li class="flex items-start gap-2">
              <span class="w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
              <span>Bone tenderness at the <strong>base of the FIFTH METATARSAL</strong> (common site of avulsion or Jones fractures).</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
              <span>Bone tenderness over the <strong>NAVICULAR bone</strong> on the inner midfoot.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
              <span><strong>Inability to bear weight</strong> both immediately after injury AND for 4 complete steps during examination.</span>
            </li>
          </ul>
        </div>
        <div class="pt-3 border-t border-slate-100 text-xs text-gray-500 bg-slate-50 p-2 rounded">
          Prevents missed avulsion fractures of the midfoot.
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
// MDC Component for Ottawa Ankle Rules
</script>
