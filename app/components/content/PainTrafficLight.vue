<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Clinical Decision Framework</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">The Overuse Pain Traffic Light System</h4>
      </div>
    </div>

    <!-- 3 Traffic Light Tiers -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <!-- Green Light -->
      <div class="bg-emerald-50/70 rounded-xl p-5 border-2 border-emerald-300 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="w-4 h-4 rounded-full bg-emerald-500 shadow-xs"></span>
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-800">Green Light</span>
          </div>
          <h5 class="text-base font-bold text-emerald-950 mb-2">Safe to Continue</h5>
          <ul class="text-xs text-emerald-900 space-y-2 mb-4 p-0 list-none">
            <li class="flex items-start gap-1.5">
              <span class="font-bold">•</span>
              <span>Mild, diffuse muscle soreness (DOMS) 24–48 hrs post-game.</span>
            </li>
            <li class="flex items-start gap-1.5">
              <span class="font-bold">•</span>
              <span>Pain score &le; 2/10 that warms up completely after 5 minutes.</span>
            </li>
            <li class="flex items-start gap-1.5">
              <span class="font-bold">•</span>
              <span>Zero joint swelling, giving way, or sleep interruption.</span>
            </li>
          </ul>
        </div>
        <div class="text-[11px] font-semibold text-emerald-900 bg-emerald-100/80 p-2 rounded">
          <strong>Protocol:</strong> Maintain current volume; maintain hydration and sleep.
        </div>
      </div>

      <!-- Amber Light -->
      <div class="bg-amber-50/70 rounded-xl p-5 border-2 border-amber-300 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="w-4 h-4 rounded-full bg-amber-500 shadow-xs"></span>
            <span class="text-xs font-bold uppercase tracking-wider text-amber-800">Amber Light</span>
          </div>
          <h5 class="text-base font-bold text-amber-950 mb-2">Modify &amp; Deload Now</h5>
          <ul class="text-xs text-amber-900 space-y-2 mb-4 p-0 list-none">
            <li class="flex items-start gap-1.5">
              <span class="font-bold">•</span>
              <span>Morning tendon stiffness in heel/knee lasting 10+ minutes out of bed.</span>
            </li>
            <li class="flex items-start gap-1.5">
              <span class="font-bold">•</span>
              <span>Pain score 3/10 to 5/10 during play that alters your running gait.</span>
            </li>
            <li class="flex items-start gap-1.5">
              <span class="font-bold">•</span>
              <span>Discomfort that worsens the morning after high-intensity play.</span>
            </li>
          </ul>
        </div>
        <div class="text-[11px] font-semibold text-amber-950 bg-amber-100/80 p-2 rounded">
          <strong>Protocol:</strong> Cut weekend volume by 50%; add isometric holds; do not push through.
        </div>
      </div>

      <!-- Red Light -->
      <div class="bg-rose-50/70 rounded-xl p-5 border-2 border-rose-300 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="w-4 h-4 rounded-full bg-rose-500 shadow-xs"></span>
            <span class="text-xs font-bold uppercase tracking-wider text-rose-800">Red Light</span>
          </div>
          <h5 class="text-base font-bold text-rose-950 mb-2">Stop &amp; Consult Specialist</h5>
          <ul class="text-xs text-rose-900 space-y-2 mb-4 p-0 list-none">
            <li class="flex items-start gap-1.5">
              <span class="font-bold">•</span>
              <span>Any visible joint swelling or fluid effusion within 24 hours.</span>
            </li>
            <li class="flex items-start gap-1.5">
              <span class="font-bold">•</span>
              <span>Sharp "pop" followed by weakness, giving way, or limping.</span>
            </li>
            <li class="flex items-start gap-1.5">
              <span class="font-bold">•</span>
              <span>Point-specific bone tenderness (e.g., lower shin or metatarsal).</span>
            </li>
            <li class="flex items-start gap-1.5">
              <span class="font-bold">•</span>
              <span>Persistent nocturnal pain that disrupts normal sleep.</span>
            </li>
          </ul>
        </div>
        <div class="text-[11px] font-semibold text-rose-950 bg-rose-100/80 p-2 rounded">
          <strong>Protocol:</strong> Cease sport immediately; schedule clinical assessment &amp; MRI.
        </div>
      </div>
    </div>
  </div>
</template>
