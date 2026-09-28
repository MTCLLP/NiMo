<template>
  <div class="my-10 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <!-- Header -->
    <div class="flex items-center gap-3.5 mb-8 border-b border-slate-200 pb-5">
      <div class="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Clinical Flowchart</span>
        <h3 class="text-xl sm:text-2xl font-bold text-gray-900 m-0">The Spectrum of Achilles Tendon Disorders</h3>
      </div>
    </div>

    <!-- Flowchart Grid / Timeline -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
      <!-- Stage 1 -->
      <div class="flex flex-col h-full bg-white rounded-xl p-5 border border-slate-200 shadow-xs relative group hover:border-blue-400 hover:shadow-md transition-all">
        <div class="w-full h-1.5 bg-blue-500 rounded-full mb-4"></div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">Stage 1</span>
          <span class="text-xs text-gray-400 font-medium">Overuse</span>
        </div>
        <h4 class="text-base font-bold text-gray-900 mb-1.5">Midportion Tendinopathy</h4>
        <p class="text-xs text-gray-500 mb-3">2 to 6 cm above heel bone in the hypovascular watershed zone.</p>
        <div class="mt-auto pt-3 border-t border-slate-100 text-xs text-gray-600 space-y-1">
          <p class="font-medium text-gray-800">Key Features:</p>
          <p>• Morning stiffness</p>
          <p>• Nodular thickening</p>
          <p>• Post-exercise ache</p>
        </div>
        <!-- Arrow connector for desktop -->
        <div class="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-400 shadow-xs">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
        </div>
      </div>

      <!-- Stage 2 -->
      <div class="flex flex-col h-full bg-white rounded-xl p-5 border border-slate-200 shadow-xs relative group hover:border-indigo-400 hover:shadow-md transition-all">
        <div class="w-full h-1.5 bg-indigo-500 rounded-full mb-4"></div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">Stage 2</span>
          <span class="text-xs text-gray-400 font-medium">Bony Insertion</span>
        </div>
        <h4 class="text-base font-bold text-gray-900 mb-1.5">Insertional Tendinopathy</h4>
        <p class="text-xs text-gray-500 mb-3">At the direct calcaneal bone attachment point.</p>
        <div class="mt-auto pt-3 border-t border-slate-100 text-xs text-gray-600 space-y-1">
          <p class="font-medium text-gray-800">Key Features:</p>
          <p>• Retrocalcaneal spur</p>
          <p>• Haglund's deformity</p>
          <p>• Direct shoe pressure pain</p>
        </div>
        <!-- Arrow connector for desktop -->
        <div class="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-400 shadow-xs">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
        </div>
      </div>

      <!-- Stage 3 -->
      <div class="flex flex-col h-full bg-white rounded-xl p-5 border border-slate-200 shadow-xs relative group hover:border-amber-400 hover:shadow-md transition-all">
        <div class="w-full h-1.5 bg-amber-500 rounded-full mb-4"></div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded">Stage 3</span>
          <span class="text-xs text-gray-400 font-medium">Degeneration</span>
        </div>
        <h4 class="text-base font-bold text-gray-900 mb-1.5">Partial-Thickness Tears</h4>
        <p class="text-xs text-gray-500 mb-3">Internal collagen fiber disruption without total rupture.</p>
        <div class="mt-auto pt-3 border-t border-slate-100 text-xs text-gray-600 space-y-1">
          <p class="font-medium text-gray-800">Key Features:</p>
          <p>• Chronic microtrauma</p>
          <p>• Focal sharp twinges</p>
          <p>• Compromised strength</p>
        </div>
        <!-- Arrow connector for desktop -->
        <div class="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-400 shadow-xs">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
        </div>
      </div>

      <!-- Stage 4 -->
      <div class="flex flex-col h-full bg-white rounded-xl p-5 border border-red-200 shadow-xs relative group hover:border-red-400 hover:shadow-md transition-all bg-gradient-to-b from-white to-red-50/20">
        <div class="w-full h-1.5 bg-red-500 rounded-full mb-4"></div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2 py-0.5 rounded">Stage 4</span>
          <span class="text-xs text-red-600 font-semibold">Acute Emergency</span>
        </div>
        <h4 class="text-base font-bold text-gray-900 mb-1.5">Full-Thickness Rupture</h4>
        <p class="text-xs text-gray-500 mb-3">Complete mechanical failure & gap across the tendon.</p>
        <div class="mt-auto pt-3 border-t border-red-100 text-xs text-gray-600 space-y-1">
          <p class="font-medium text-red-800">Key Features:</p>
          <p>• Loud pop / kicked feeling</p>
          <p>• Palpable dent/gap</p>
          <p>• Loss of heel raise ability</p>
        </div>
      </div>
    </div>

    <!-- Bottom summary note -->
    <div class="mt-6 pt-4 border-t border-slate-200 flex items-start gap-2.5 text-xs text-gray-500">
      <svg class="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span><strong>Clinical Warning:</strong> Untreated midportion or insertional tendinopathy progressively weakens internal collagen architecture. Early load management and eccentric therapy prevent progression to partial or complete rupture.</span>
    </div>

    <!-- Slot if any content is placed inside -->
    <slot />
  </div>
</template>

<script setup lang="ts">
// MDC Component for Achilles tendon disorder spectrum flowchart
</script>
