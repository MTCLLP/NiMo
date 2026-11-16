<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Diagnostic Framework</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">The Clinical Triad: Treat the Patient, Not the Scan</h4>
      </div>
    </div>

    <!-- 3 Pillars Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <!-- Pillar 1: Patient Symptoms -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">Pillar 1</span>
            <span class="text-xs text-gray-400">Subjective</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-2">Patient Symptoms</h5>
          <ul class="text-xs text-gray-600 space-y-2 m-0 p-0 list-none">
            <li class="flex items-start gap-1.5">
              <span class="text-primary font-bold">•</span>
              <span>True mechanical locking, catching, or giving way</span>
            </li>
            <li class="flex items-start gap-1.5">
              <span class="text-primary font-bold">•</span>
              <span>Load-dependent vs rest pain patterns</span>
            </li>
            <li class="flex items-start gap-1.5">
              <span class="text-primary font-bold">•</span>
              <span>Functional deficit in daily life or sports performance</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Pillar 2: Physical Examination -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[11px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-0.5 rounded">Pillar 2</span>
            <span class="text-xs text-gray-400">Objective</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-2">Hands-on Physical Exam</h5>
          <ul class="text-xs text-gray-600 space-y-2 m-0 p-0 list-none">
            <li class="flex items-start gap-1.5">
              <span class="text-secondary font-bold">•</span>
              <span>Palpable joint-line tenderness matching reported pain</span>
            </li>
            <li class="flex items-start gap-1.5">
              <span class="text-secondary font-bold">•</span>
              <span>Specialised provocative tests (Lachman, McMurray, Hawkins)</span>
            </li>
            <li class="flex items-start gap-1.5">
              <span class="text-secondary font-bold">•</span>
              <span>Active vs passive range of motion assessment</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Pillar 3: MRI Scan -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded">Pillar 3</span>
            <span class="text-xs text-gray-400">Correlation</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-2">MRI Imaging</h5>
          <ul class="text-xs text-gray-600 space-y-2 m-0 p-0 list-none">
            <li class="flex items-start gap-1.5">
              <span class="text-slate-500 font-bold">•</span>
              <span>Confirms structural disruption in symptomatic location</span>
            </li>
            <li class="flex items-start gap-1.5">
              <span class="text-slate-500 font-bold">•</span>
              <span>Filters out asymptomatic incidental tears common with age</span>
            </li>
            <li class="flex items-start gap-1.5">
              <span class="text-slate-500 font-bold">•</span>
              <span>Rules out bone marrow lesions and occult microfractures</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Takeaway -->
    <div class="bg-primary/5 rounded-xl p-3.5 border border-primary/20 text-xs text-primary flex items-center gap-2.5">
      <span class="text-base">💡</span>
      <span><strong>Diagnostic Rule:</strong> Surgical decisions require concordance across all 3 pillars. An MRI tear alone without clinical correlation does not indicate surgery.</span>
    </div>
  </div>
</template>
