<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Rehabilitation Protocol</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">Rotator Cuff Repair: Phase-by-Phase Recovery Cascade</h4>
      </div>
    </div>

    <!-- 3-Phase Stepped Progression -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <!-- Phase 1 -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md">Phase 1</span>
            <span class="text-xs text-rose-600 font-semibold">Weeks 0–6</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-2">Maximum Protection (Passive Only)</h5>
          <ul class="text-xs text-gray-600 space-y-2 mb-4 p-0 list-none">
            <li class="flex items-start gap-2">
              <span class="text-rose-500 font-bold">•</span>
              <span><strong>24/7 Abduction Sling:</strong> Unloads the supraspinatus tendon repair footprint.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-rose-500 font-bold">•</span>
              <span><strong>Codman’s Pendulums:</strong> Passive gravity-assisted mobility without muscle firing.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-rose-500 font-bold">•</span>
              <span><strong>Elbow &amp; Wrist Motion:</strong> Prevents distal joint stiffness and edema.</span>
            </li>
          </ul>
        </div>
        <div class="pt-3 border-t border-slate-100 text-xs text-rose-900 bg-rose-50/50 p-2 rounded">
          <strong>Rule:</strong> Absolutely no active unassisted arm lifting.
        </div>
      </div>

      <!-- Phase 2 -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">Phase 2</span>
            <span class="text-xs text-amber-600 font-semibold">Weeks 7–12</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-2">Active-Assisted Range of Motion</h5>
          <ul class="text-xs text-gray-600 space-y-2 mb-4 p-0 list-none">
            <li class="flex items-start gap-2">
              <span class="text-amber-500 font-bold">•</span>
              <span><strong>Sling Weaning:</strong> Discontinue daytime sling use in safe environments.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-amber-500 font-bold">•</span>
              <span><strong>Overhead Pulley Work:</strong> Uninjured arm guides recovering arm overhead.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-amber-500 font-bold">•</span>
              <span><strong>Table &amp; Wall Slides:</strong> Gravity-eliminated active arm elevation.</span>
            </li>
          </ul>
        </div>
        <div class="pt-3 border-t border-slate-100 text-xs text-amber-900 bg-amber-50/50 p-2 rounded">
          <strong>Goal:</strong> Achieve 150°+ elevation without shoulder shrugging.
        </div>
      </div>

      <!-- Phase 3 -->
      <div class="bg-white rounded-xl p-5 border-2 border-emerald-400 shadow-xs flex flex-col justify-between bg-gradient-to-b from-white to-emerald-50/20">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">Phase 3</span>
            <span class="text-xs text-emerald-700 font-semibold">Weeks 13–20</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-2">Progressive Resistance &amp; Loading</h5>
          <ul class="text-xs text-gray-600 space-y-2 mb-4 p-0 list-none">
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold">•</span>
              <span><strong>Light Therabands:</strong> Internal and external rotation isometrics.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold">•</span>
              <span><strong>Scapular Stabilizers:</strong> Prone Y-T-W drills and serratus wall slides.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold">•</span>
              <span><strong>Kinetic Chain Integration:</strong> Core rotation and lower-body power transfer.</span>
            </li>
          </ul>
        </div>
        <div class="pt-3 border-t border-emerald-200 text-xs text-emerald-950 bg-emerald-50 p-2 rounded">
          <strong>Next Stage:</strong> Sport-specific throwing/lifting at 5–9 months.
        </div>
      </div>
    </div>
  </div>
</template>
