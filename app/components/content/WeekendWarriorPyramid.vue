<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Injury Risk Reduction</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">The 5-Pillar Weekend Warrior Prevention Pyramid</h4>
      </div>
    </div>

    <!-- Tiered Pyramid Structure -->
    <div class="space-y-3 max-w-2xl mx-auto mb-6">
      <!-- Pillar 5 (Apex): Recovery & Sleep -->
      <div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-3.5 text-center shadow-xs mx-16 sm:mx-28 transition-all hover:shadow-md">
        <div class="flex items-center justify-center gap-2 mb-1">
          <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-full">Pillar 5</span>
          <h5 class="text-sm font-bold text-indigo-950 m-0">Deep Sleep &amp; Hydration</h5>
        </div>
        <p class="text-xs text-indigo-900 m-0 leading-relaxed">
          Stage 3 non-REM slow-wave sleep drives biological collagen synthesis. Tendons are 70% water and fail when chronically dehydrated.
        </p>
      </div>

      <!-- Arrow down connector -->
      <div class="flex justify-center text-slate-300">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>

      <!-- Pillar 4: Turf & Footwear -->
      <div class="bg-sky-50 border-2 border-sky-200 rounded-xl p-3.5 text-center shadow-xs mx-12 sm:mx-20 transition-all hover:shadow-md">
        <div class="flex items-center justify-center gap-2 mb-1">
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full">Pillar 4</span>
          <h5 class="text-sm font-bold text-sky-950 m-0">Turf Shoes &amp; Footwear Periodization</h5>
        </div>
        <p class="text-xs text-sky-900 m-0 leading-relaxed">
          Use multi-studded rubber turf shoes (TF) on artificial 3G/4G pitches to prevent rotational cleat lock. Replace running shoes every 500–700 km.
        </p>
      </div>

      <!-- Arrow down connector -->
      <div class="flex justify-center text-slate-300">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>

      <!-- Pillar 3: Kinetic Chain & Core -->
      <div class="bg-teal-50 border-2 border-teal-200 rounded-xl p-3.5 text-center shadow-xs mx-8 sm:mx-12 transition-all hover:shadow-md">
        <div class="flex items-center justify-center gap-2 mb-1">
          <span class="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full">Pillar 3</span>
          <h5 class="text-sm font-bold text-teal-950 m-0">Kinetic Chain &amp; Gluteal Stability</h5>
        </div>
        <p class="text-xs text-teal-900 m-0 leading-relaxed">
          Strong hip abductors (gluteus medius) prevent knee collapse into dynamic valgus, protecting ACL and meniscus during cuts.
        </p>
      </div>

      <!-- Arrow down connector -->
      <div class="flex justify-center text-slate-300">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>

      <!-- Pillar 2: Dynamic Neuromuscular Warm-Ups -->
      <div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-3.5 text-center shadow-xs mx-4 sm:mx-6 transition-all hover:shadow-md">
        <div class="flex items-center justify-center gap-2 mb-1">
          <span class="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">Pillar 2</span>
          <h5 class="text-sm font-bold text-amber-950 m-0">Dynamic FIFA 11+ Warm-Up</h5>
        </div>
        <p class="text-xs text-amber-900 m-0 leading-relaxed">
          Replace cold static stretching with 10 mins of running drills, active mobility, and deceleration hops to prime neural reaction times.
        </p>
      </div>

      <!-- Arrow down connector -->
      <div class="flex justify-center text-slate-300">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>

      <!-- Pillar 1 (Base): Mid-Week Micro-Dosing -->
      <div class="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-4 text-center shadow-xs transition-all hover:shadow-md">
        <div class="flex items-center justify-center gap-2 mb-1">
          <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">Pillar 1 (Foundation)</span>
          <h5 class="text-sm sm:text-base font-bold text-emerald-950 m-0">"Micro-Dosing" Mid-Week Conditioning</h5>
        </div>
        <p class="text-xs text-emerald-900 m-0 leading-relaxed">
          15–20 mins of isometric wall sits, eccentric calf lowers, and theraband rows on Tuesday and Thursday. Flattens the dangerous weekend load spike curve!
        </p>
      </div>
    </div>
  </div>
</template>
