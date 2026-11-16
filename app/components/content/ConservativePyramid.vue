<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Stepwise Clinical Hierarchy</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">The Conservative Orthopaedic Care Pyramid</h4>
      </div>
    </div>

    <!-- Tiered Pyramid Structure -->
    <div class="space-y-3 max-w-2xl mx-auto mb-6">
      <!-- Tier 5 (Apex): Surgery -->
      <div class="bg-rose-50 border-2 border-rose-200 rounded-xl p-4 text-center shadow-xs mx-16 sm:mx-28 transition-all hover:shadow-md">
        <div class="flex items-center justify-center gap-2 mb-1">
          <span class="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-full">Minority (&lt;10–15%)</span>
          <h5 class="text-sm sm:text-base font-bold text-rose-950 m-0">Tier 5: Surgery</h5>
        </div>
        <p class="text-xs text-rose-900 m-0 leading-relaxed">
          Reserved strictly for acute structural disruptions (locked meniscus, unstable ACL ruptures) or end-stage joint disease failing conservative care.
        </p>
      </div>

      <!-- Arrow down connector -->
      <div class="flex justify-center text-slate-300">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>

      <!-- Tier 4: Injections & Biologics -->
      <div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-4 text-center shadow-xs mx-12 sm:mx-20 transition-all hover:shadow-md">
        <div class="flex items-center justify-center gap-2 mb-1">
          <span class="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">Targeted Relief</span>
          <h5 class="text-sm sm:text-base font-bold text-amber-950 m-0">Tier 4: Injections &amp; Biologics (PRP / Viscosupplementation)</h5>
        </div>
        <p class="text-xs text-amber-900 m-0 leading-relaxed">
          Ultrasound-guided biological growth factors or hyaluronic acid lubrication to control chronic inflammation and stimulate local tissue recovery.
        </p>
      </div>

      <!-- Arrow down connector -->
      <div class="flex justify-center text-slate-300">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>

      <!-- Tier 3: Structured Physiotherapy -->
      <div class="bg-sky-50 border-2 border-sky-200 rounded-xl p-4 text-center shadow-xs mx-8 sm:mx-12 transition-all hover:shadow-md">
        <div class="flex items-center justify-center gap-2 mb-1">
          <span class="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded-full">Active Rehabilitation</span>
          <h5 class="text-sm sm:text-base font-bold text-sky-950 m-0">Tier 3: Structured Physiotherapy &amp; Kinetic Chain Training</h5>
        </div>
        <p class="text-xs text-sky-900 m-0 leading-relaxed">
          Muscle balance retraining, joint mobilisation, neuromuscular control, and core stabilization to offload vulnerable structures.
        </p>
      </div>

      <!-- Arrow down connector -->
      <div class="flex justify-center text-slate-300">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>

      <!-- Tier 2: Activity & Load Modification -->
      <div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-4 text-center shadow-xs mx-4 sm:mx-6 transition-all hover:shadow-md">
        <div class="flex items-center justify-center gap-2 mb-1">
          <span class="text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2.5 py-0.5 rounded-full">Load Management</span>
          <h5 class="text-sm sm:text-base font-bold text-indigo-950 m-0">Tier 2: Activity &amp; Mechanical Load Modification</h5>
        </div>
        <p class="text-xs text-indigo-900 m-0 leading-relaxed">
          Managing training volume, acute:chronic workload ratios, footwear, and movement mechanics to prevent overload.
        </p>
      </div>

      <!-- Arrow down connector -->
      <div class="flex justify-center text-slate-300">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>

      <!-- Tier 1 (Base): Education, Lifestyle & Analgesics -->
      <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4 text-center shadow-xs transition-all hover:shadow-md">
        <div class="flex items-center justify-center gap-2 mb-1">
          <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">Foundation (80–90% Success)</span>
          <h5 class="text-sm sm:text-base font-bold text-emerald-950 m-0">Tier 1: Patient Education, Lifestyle &amp; Targeted Analgesia</h5>
        </div>
        <p class="text-xs text-emerald-900 m-0 leading-relaxed">
          Understanding pathology, anti-inflammatory support, sleep, weight management, and ergonomic adjustments that form the foundation of recovery.
        </p>
      </div>
    </div>

    <!-- Clinical Footnote -->
    <div class="bg-white rounded-xl p-4 border border-slate-200 text-xs text-gray-600 flex items-start gap-2.5">
      <div class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
        ✓
      </div>
      <p class="m-0 leading-relaxed">
        <strong>Clinical Takeaway:</strong> Orthopaedic specialists operate on a stepped care philosophy. Between 80% and 90% of sports and joint conditions heal through Tiers 1–3 without surgical intervention.
      </p>
    </div>
  </div>
</template>
