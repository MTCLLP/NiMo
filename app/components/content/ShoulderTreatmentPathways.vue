<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Clinical Treatment Roadmaps</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">Comparing Treatment Pathways: Frozen Shoulder vs. Rotator Cuff</h4>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
      <!-- Frozen Shoulder Roadmap -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">Capsular Contracture</span>
            <span class="text-xs text-amber-600 font-medium">Stepwise Protocol</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-3">Frozen Shoulder Pathway</h5>
          
          <ol class="text-xs text-gray-600 space-y-2.5 mb-4 p-0 list-none">
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
              <span><strong>Anti-Inflammatory Control:</strong> Intra-articular steroid injection during Stage 1 stops acute capsular inflammation.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
              <span><strong>Hydrodilatation:</strong> High-pressure saline capsular distension stretches tight adhesions under ultrasound.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
              <span><strong>Gentle Thawing Physiotherapy:</strong> Pain-free passive stretching introduced only once inflammation settles.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
              <span><strong>Arthroscopic Capsular Release:</strong> 30-minute keyhole procedure reserved for stiffness persisting past 6–9 months.</span>
            </li>
          </ol>
        </div>
      </div>

      <!-- Rotator Cuff Roadmap -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-md">Tendon Disruption</span>
            <span class="text-xs text-primary font-medium">Stepwise Protocol</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-3">Rotator Cuff Pathway</h5>
          
          <ol class="text-xs text-gray-600 space-y-2.5 mb-4 p-0 list-none">
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
              <span><strong>Relative Rest &amp; Load Management:</strong> Avoid overhead compression and high-shear arm positions.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
              <span><strong>Kinetic Chain Strengthening:</strong> Periscapular and serratus anterior activation to enlarge subacromial space.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
              <span><strong>Biological Support (PRP):</strong> Ultrasound-guided platelet-rich plasma to stimulate partial tear healing.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
              <span><strong>Arthroscopic Tendon Repair:</strong> Biocomposite suture anchor refixation for complete tears causing weakness.</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
