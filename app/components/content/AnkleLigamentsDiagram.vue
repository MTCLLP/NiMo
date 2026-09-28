<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Anatomical Architecture</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">The Lateral Ankle Ligament Complex</h4>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- ATFL -->
      <div class="bg-white rounded-xl p-5 border-2 border-red-200 shadow-xs flex flex-col justify-between hover:border-red-400 transition-all bg-gradient-to-b from-white to-red-50/10">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-md">Most Vulnerable</span>
            <span class="text-xs text-red-500 font-bold">Torn in 85%</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-1.5">ATFL</h5>
          <p class="text-xs font-medium text-gray-500 mb-2">Anterior Talofibular Ligament</p>
          <p class="text-xs text-gray-600 leading-relaxed mb-3">
            Runs from the anterior tip of the fibula to the neck of the talus. Tightens when toes point down (plantarflexion).
          </p>
        </div>
        <div class="pt-3 border-t border-slate-100 text-xs text-gray-600 bg-slate-50 p-2.5 rounded-lg">
          <strong>Primary Function:</strong> First line of defense against excessive ankle inversion and anterior subluxation of the talus.
        </div>
      </div>

      <!-- CFL -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-amber-400 transition-all">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">Grade 2 & 3</span>
            <span class="text-xs text-gray-400 font-medium">Secondary Restraint</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-1.5">CFL</h5>
          <p class="text-xs font-medium text-gray-500 mb-2">Calcaneofibular Ligament</p>
          <p class="text-xs text-gray-600 leading-relaxed mb-3">
            Runs vertically from the fibular tip down to the calcaneus (heel bone), crossing both the ankle and subtalar joints.
          </p>
        </div>
        <div class="pt-3 border-t border-slate-100 text-xs text-gray-600 bg-slate-50 p-2.5 rounded-lg">
          <strong>Primary Function:</strong> Stabilizes inversion when the ankle is neutral or dorsiflexed; prevents subtalar joint laxity.
        </div>
      </div>

      <!-- PTFL -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">Deep & Strongest</span>
            <span class="text-xs text-emerald-600 font-bold">Rarely Torn</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-1.5">PTFL</h5>
          <p class="text-xs font-medium text-gray-500 mb-2">Posterior Talofibular Ligament</p>
          <p class="text-xs text-gray-600 leading-relaxed mb-3">
            A thick, horizontal band situated deep at the back of the joint, connecting the fibular fossa to the posterior talus.
          </p>
        </div>
        <div class="pt-3 border-t border-slate-100 text-xs text-gray-600 bg-slate-50 p-2.5 rounded-lg">
          <strong>Primary Function:</strong> Strong posterior restraint against posterior displacement; only ruptured in frank dislocations.
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
// MDC Component for Ankle Ligament Anatomy
</script>
