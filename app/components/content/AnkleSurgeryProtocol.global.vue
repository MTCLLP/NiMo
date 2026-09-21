<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Surgical Techniques</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">Modern Surgical Management for Chronic Instability</h4>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Step 1: Diagnostic Arthroscopy -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-md">Stage 1</span>
            <span class="text-xs text-gray-400 font-medium">Keyhole Inspection</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-2">Diagnostic Ankle Arthroscopy</h5>
          <p class="text-xs text-gray-600 leading-relaxed mb-3">
            A miniature 2.7 mm camera inspects the joint interior through tiny puncture incisions prior to ligament reconstruction.
          </p>
          <ul class="text-xs text-gray-600 space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <li class="flex items-start gap-1.5"><span class="text-primary font-bold">•</span> Removes inflamed synovitis & impinging soft tissue</li>
            <li class="flex items-start gap-1.5"><span class="text-primary font-bold">•</span> Excises bony spurs (osteophytes) blocking dorsiflexion</li>
            <li class="flex items-start gap-1.5"><span class="text-primary font-bold">•</span> Evaluates & repairs talar dome cartilage lesions (microfracture / grafting)</li>
          </ul>
        </div>
      </div>

      <!-- Step 2: Brostrom Gould -->
      <div class="bg-white rounded-xl p-5 border-2 border-secondary/40 shadow-xs flex flex-col justify-between bg-gradient-to-b from-white to-secondary/5">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-1 rounded-md">Stage 2</span>
            <span class="text-xs text-secondary font-bold">Gold Standard</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-2">Anatomic Broström-Gould Repair</h5>
          <p class="text-xs text-gray-600 leading-relaxed mb-3">
            Direct anatomic re-approximation and tightening of the torn ATFL and CFL back to the fibular footprint.
          </p>
          <ul class="text-xs text-gray-600 space-y-1.5 bg-secondary/10 p-3 rounded-lg border border-secondary/20">
            <li class="flex items-start gap-1.5"><span class="text-secondary font-bold">•</span> Reinforced with the local inferior extensor retinaculum</li>
            <li class="flex items-start gap-1.5"><span class="text-secondary font-bold">•</span> <strong>Optional InternalBrace™:</strong> High-strength suture tape augmentation protects the healing ligament</li>
            <li class="flex items-start gap-1.5"><span class="text-secondary font-bold">•</span> Permits accelerated, protected early weight-bearing for athletes</li>
          </ul>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
// MDC Component for Modern Ankle Surgery Protocol
</script>
