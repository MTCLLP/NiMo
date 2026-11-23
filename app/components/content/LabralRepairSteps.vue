<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Surgical Technique</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">Arthroscopic Labral Repair: 4 Precision Steps</h4>
      </div>
    </div>

    <!-- 4-Step Surgical Sequence -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <!-- Step 1 -->
      <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[11px] font-bold text-primary uppercase">Step 1</span>
            <span class="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">1</span>
          </div>
          <h5 class="text-sm font-bold text-gray-900 mb-1.5">Diagnostic 4K Scopy</h5>
          <p class="text-xs text-gray-600 m-0 leading-relaxed">
            High-definition arthroscope inspects 360° of the labral rim, assessing tissue quality, articular cartilage, and bone loss.
          </p>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[11px] font-bold text-secondary uppercase">Step 2</span>
            <span class="w-6 h-6 rounded-full bg-secondary/10 text-secondary text-xs font-bold flex items-center justify-center">2</span>
          </div>
          <h5 class="text-sm font-bold text-gray-900 mb-1.5">Tissue Mobilization</h5>
          <p class="text-xs text-gray-600 m-0 leading-relaxed">
            The scarred, retracted labrum is gently freed from the glenoid neck so it can be tensioned back to its anatomical position.
          </p>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[11px] font-bold text-amber-600 uppercase">Step 3</span>
            <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center">3</span>
          </div>
          <h5 class="text-sm font-bold text-gray-900 mb-1.5">Bleeding Bone Bed</h5>
          <p class="text-xs text-gray-600 m-0 leading-relaxed">
            A micro-burr decorticates the glenoid rim to expose vascular bone marrow, essential for biological fibrocartilage healing.
          </p>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-300 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[11px] font-bold text-emerald-800 uppercase">Step 4</span>
            <span class="w-6 h-6 rounded-full bg-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-center">4</span>
          </div>
          <h5 class="text-sm font-bold text-emerald-950 mb-1.5">Suture Anchor Fixation</h5>
          <p class="text-xs text-emerald-900 m-0 leading-relaxed">
            Tiny biocomposite knotless anchors lock the labrum firmly against bone, restoring the joint bumper and suction seal.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
