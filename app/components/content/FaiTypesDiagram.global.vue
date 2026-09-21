<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Anatomical Classification</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">Types of Femoroacetabular Impingement (FAI)</h4>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- 1. CAM -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">Type 1</span>
            <span class="text-xs text-gray-400 font-medium">Ball Abnormality</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-1.5">CAM Impingement</h5>
          <p class="text-xs text-gray-500 mb-3">Aspherical bone "bump" at the femoral head-neck junction.</p>
          <ul class="text-xs text-gray-600 space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <li class="flex items-start gap-1.5"><span class="text-blue-500 font-bold">•</span> <strong>Mechanism:</strong> Jamming of bump into socket rim during flexion</li>
            <li class="flex items-start gap-1.5"><span class="text-blue-500 font-bold">•</span> <strong>Cartilage impact:</strong> Shears labrum and articular cartilage</li>
            <li class="flex items-start gap-1.5"><span class="text-blue-500 font-bold">•</span> <strong>Demographics:</strong> Common in young male athletes (football, cricket)</li>
          </ul>
        </div>
      </div>

      <!-- 2. PINCER -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-indigo-400 hover:shadow-md transition-all">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">Type 2</span>
            <span class="text-xs text-gray-400 font-medium">Socket Abnormality</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-1.5">PINCER Impingement</h5>
          <p class="text-xs text-gray-500 mb-3">Excessive bony rim coverage of the acetabulum.</p>
          <ul class="text-xs text-gray-600 space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <li class="flex items-start gap-1.5"><span class="text-indigo-500 font-bold">•</span> <strong>Mechanism:</strong> Overhanging rim pinches labrum like a nutcracker</li>
            <li class="flex items-start gap-1.5"><span class="text-indigo-500 font-bold">•</span> <strong>Cartilage impact:</strong> Chondral wear focused along the socket rim</li>
            <li class="flex items-start gap-1.5"><span class="text-indigo-500 font-bold">•</span> <strong>Demographics:</strong> More frequently observed in active women & dancers</li>
          </ul>
        </div>
      </div>

      <!-- 3. MIXED -->
      <div class="bg-white rounded-xl p-5 border-2 border-primary/30 shadow-xs flex flex-col justify-between hover:border-primary hover:shadow-md transition-all bg-gradient-to-b from-white to-primary/5">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-white bg-primary px-2.5 py-1 rounded-md">Most Common</span>
            <span class="text-xs text-primary font-bold">>70-80% Cases</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-1.5">MIXED Impingement</h5>
          <p class="text-xs text-gray-500 mb-3">Both Cam and Pincer morphological features coexist.</p>
          <ul class="text-xs text-gray-600 space-y-1.5 bg-primary/10 p-3 rounded-lg border border-primary/20">
            <li class="flex items-start gap-1.5"><span class="text-primary font-bold">•</span> <strong>Mechanism:</strong> Simultaneous jamming and pinching of labrum</li>
            <li class="flex items-start gap-1.5"><span class="text-primary font-bold">•</span> <strong>Clinical relevance:</strong> Requires comprehensive 360° surgical assessment</li>
            <li class="flex items-start gap-1.5"><span class="text-primary font-bold">•</span> <strong>Treatment:</strong> Femoroplasty + acetabular rim trimming</li>
          </ul>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
// MDC Component for FAI Morphological Types
</script>
