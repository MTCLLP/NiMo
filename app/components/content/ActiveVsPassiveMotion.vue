<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Clinical Differentiator</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">The Cardinal Test: Active vs. Passive Range of Motion</h4>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
      <!-- Rotator Cuff Tear Card -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[11px] font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md">Rotator Cuff Tear</span>
            <span class="text-xs text-sky-600 font-semibold">Tendon / Motor Deficit</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-3">The "Broken Cable" Problem</h5>
          
          <div class="space-y-3 mb-4">
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-100">
              <div class="text-xs font-bold text-rose-700 uppercase mb-1">Active Motion (You Lift Arm)</div>
              <p class="text-xs text-gray-600 m-0 leading-relaxed">
                <strong>Limited &amp; Weak:</strong> Because the tendon is torn, you cannot generate active tension to raise your arm against gravity.
              </p>
            </div>

            <div class="p-3 rounded-lg bg-emerald-50/70 border border-emerald-100">
              <div class="text-xs font-bold text-emerald-800 uppercase mb-1">Passive Motion (Doctor Lifts Arm)</div>
              <p class="text-xs text-emerald-950 m-0 leading-relaxed">
                <strong>Full &amp; Free:</strong> The internal joint capsule is normal and supple. An examiner can easily lift and rotate your arm through its complete normal arc.
              </p>
            </div>
          </div>
        </div>
        <div class="text-xs text-slate-500 pt-3 border-t border-slate-100">
          <strong>Key Finding:</strong> Normal passive external rotation with painful/weak active lift.
        </div>
      </div>

      <!-- Frozen Shoulder Card -->
      <div class="bg-white rounded-xl p-5 border-2 border-amber-300 shadow-xs flex flex-col justify-between bg-gradient-to-b from-white to-amber-50/20">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md">Frozen Shoulder</span>
            <span class="text-xs text-amber-700 font-semibold">Capsular Mechanical Lock</span>
          </div>
          <h5 class="text-base font-bold text-gray-900 mb-3">The "Shrunken Container" Problem</h5>
          
          <div class="space-y-3 mb-4">
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-100">
              <div class="text-xs font-bold text-rose-700 uppercase mb-1">Active Motion (You Lift Arm)</div>
              <p class="text-xs text-gray-600 m-0 leading-relaxed">
                <strong>Severely Blocked:</strong> Arm physically stops at mid-elevation; severe mechanical resistance when reaching up or behind the back.
              </p>
            </div>

            <div class="p-3 rounded-lg bg-amber-50/70 border border-amber-200">
              <div class="text-xs font-bold text-amber-900 uppercase mb-1">Passive Motion (Doctor Lifts Arm)</div>
              <p class="text-xs text-amber-950 m-0 leading-relaxed">
                <strong>Firmly Blocked:</strong> The joint capsule is contracted and fibrosed. Even with muscles completely relaxed, the doctor cannot move the arm past the rigid block.
              </p>
            </div>
          </div>
        </div>
        <div class="text-xs text-amber-900 pt-3 border-t border-amber-200">
          <strong>Key Finding:</strong> External rotation restricted to &lt;30° with an abrupt mechanical end-feel.
        </div>
      </div>
    </div>
  </div>
</template>
