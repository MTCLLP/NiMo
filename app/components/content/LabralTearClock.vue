<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <!-- Header -->
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Anatomical Classification</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">The Glenoid Labrum "Clock Face" Tear Patterns</h4>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      <!-- SVG Clock Face Column -->
      <div class="lg:col-span-5 flex flex-col items-center justify-center p-4 sm:p-6 bg-white rounded-xl border border-slate-200 shadow-xs">
        <div class="w-full max-w-[280px] sm:max-w-[320px]">
          <svg viewBox="0 0 320 320" class="w-full h-auto drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
            <!-- Background circle / Outer Ring -->
            <circle cx="160" cy="160" r="105" fill="#f8fafc" stroke="#e2e8f0" stroke-width="14" />

            <!-- Anatomical Glenoid Fossa (Inner Socket) -->
            <ellipse cx="160" cy="160" rx="80" ry="86" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 3" />

            <!-- Superior SLAP Tear Arc (10:00 to 2:00) -->
            <!-- From 10:00 (79, 117.5) to 2:00 (241, 117.5) with R=95 around (160, 160) -->
            <path
              d="M 77.7 112.5 A 95 95 0 0 1 242.3 112.5"
              fill="none"
              stroke="#f59e0b"
              stroke-width="14"
              stroke-linecap="round"
            />

            <!-- Anterior Bankart Arc (3:00 to 6:00) -->
            <!-- From 3:00 (255, 160) to 6:00 (160, 255) with R=95 around (160, 160) -->
            <path
              d="M 255 160 A 95 95 0 0 1 160 255"
              fill="none"
              stroke="#e11d48"
              stroke-width="14"
              stroke-linecap="round"
            />

            <!-- Posterior Reverse Bankart Arc (6:00 to 9:00) -->
            <!-- From 6:00 (160, 255) to 9:00 (65, 160) with R=95 around (160, 160) -->
            <path
              d="M 160 255 A 95 95 0 0 1 65 160"
              fill="none"
              stroke="#4f46e5"
              stroke-width="14"
              stroke-linecap="round"
            />

            <!-- Biceps Tendon Anchor at 12:00 -->
            <path d="M 160 65 L 160 28" stroke="#d97706" stroke-width="6" stroke-linecap="round" />
            <circle cx="160" cy="28" r="4" fill="#d97706" />
            <text x="160" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#b45309">
              BICEPS TENDON
            </text>

            <!-- Center Text -->
            <text x="160" y="152" text-anchor="middle" font-size="12" font-weight="800" fill="#1e293b" letter-spacing="0.5">
              GLENOID
            </text>
            <text x="160" y="170" text-anchor="middle" font-size="11" font-weight="600" fill="#64748b" letter-spacing="1">
              SOCKET
            </text>

            <!-- Hour Numbers & Cardinal Directions -->
            <!-- 12:00 (Superior) -->
            <text x="160" y="82" text-anchor="middle" font-size="12" font-weight="800" fill="#b45309">12</text>
            <text x="160" y="94" text-anchor="middle" font-size="9" font-weight="600" fill="#92400e">SUPERIOR</text>

            <!-- 3:00 (Anterior / Front) -->
            <text x="240" y="164" text-anchor="middle" font-size="12" font-weight="800" fill="#be123c">3</text>
            <text x="285" y="156" text-anchor="middle" font-size="9" font-weight="700" fill="#be123c">ANTERIOR</text>
            <text x="285" y="168" text-anchor="middle" font-size="8" font-weight="500" fill="#9f1239">(Front)</text>

            <!-- 6:00 (Inferior) -->
            <text x="160" y="244" text-anchor="middle" font-size="12" font-weight="800" fill="#475569">6</text>
            <text x="160" y="280" text-anchor="middle" font-size="9" font-weight="700" fill="#475569">INFERIOR</text>
            <text x="160" y="292" text-anchor="middle" font-size="8" font-weight="500" fill="#64748b">(Bottom)</text>

            <!-- 9:00 (Posterior / Back) -->
            <text x="80" y="164" text-anchor="middle" font-size="12" font-weight="800" fill="#4338ca">9</text>
            <text x="35" y="156" text-anchor="middle" font-size="9" font-weight="700" fill="#4338ca">POSTERIOR</text>
            <text x="35" y="168" text-anchor="middle" font-size="8" font-weight="500" fill="#3730a3">(Back)</text>
          </svg>
        </div>
        <div class="mt-2 text-center">
          <span class="text-xs font-semibold text-slate-700 block">Right Shoulder (En-Face Arthroscopic View)</span>
          <span class="text-[11px] text-slate-400">Colored arcs represent anatomical tear zones</span>
        </div>
      </div>

      <!-- 3 Tear Descriptions Column -->
      <div class="lg:col-span-7 space-y-3.5">
        <!-- SLAP Tear Card -->
        <div class="bg-white rounded-xl p-4 sm:p-5 border-l-4 border-l-amber-500 border border-slate-200 shadow-xs">
          <div class="flex items-center justify-between mb-1.5 flex-wrap gap-2">
            <h5 class="text-sm sm:text-base font-bold text-gray-900 m-0 flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-amber-500 shrink-0"></span>
              SLAP Tears (10:00 to 2:00)
            </h5>
            <span class="text-[11px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
              Superior Labrum
            </span>
          </div>
          <p class="text-xs text-gray-600 m-0 leading-relaxed">
            Involves the attachment of the <strong>long head of the biceps tendon</strong>. Caused by high-velocity overhead throwing (late-cocking peel-back) in cricket and tennis, or falls on an outstretched hand. Causes deep clicking and loss of velocity.
          </p>
        </div>

        <!-- Bankart Lesion Card -->
        <div class="bg-white rounded-xl p-4 sm:p-5 border-l-4 border-l-rose-600 border border-slate-200 shadow-xs">
          <div class="flex items-center justify-between mb-1.5 flex-wrap gap-2">
            <h5 class="text-sm sm:text-base font-bold text-gray-900 m-0 flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-rose-600 shrink-0"></span>
              Bankart Lesions (3:00 to 6:00)
            </h5>
            <span class="text-[11px] font-bold text-rose-800 bg-rose-100 px-2.5 py-0.5 rounded-full">
              Anterior-Inferior Labrum
            </span>
          </div>
          <p class="text-xs text-gray-600 m-0 leading-relaxed">
            Occurs when the humeral head dislocates forward out of the socket, tearing the anterior labrum and <strong>inferior glenohumeral ligament (IGHL)</strong> off bone. Leaves the front of the joint unstable, with a high recurrence rate in young active patients.
          </p>
        </div>

        <!-- Posterior Labral Tear Card -->
        <div class="bg-white rounded-xl p-4 sm:p-5 border-l-4 border-l-indigo-600 border border-slate-200 shadow-xs">
          <div class="flex items-center justify-between mb-1.5 flex-wrap gap-2">
            <h5 class="text-sm sm:text-base font-bold text-gray-900 m-0 flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-indigo-600 shrink-0"></span>
              Posterior Labral Tears (6:00 to 9:00)
            </h5>
            <span class="text-[11px] font-bold text-indigo-800 bg-indigo-100 px-2.5 py-0.5 rounded-full">
              Reverse Bankart
            </span>
          </div>
          <p class="text-xs text-gray-600 m-0 leading-relaxed">
            Common in strength training (heavy bench press, dips) and collision athletes (football blocking). Produces a deep posterior ache and painful clicking during pressing motions rather than gross dislocation.
          </p>
        </div>
      </div>
    </div>

    <!-- Clinical Takeaway Footnote -->
    <div class="mt-6 bg-white rounded-xl p-3.5 border border-slate-200 text-xs text-slate-700 flex items-center gap-2.5">
      <span class="text-base text-primary">💡</span>
      <span>
        <strong>Surgical Precision:</strong> Identifying the exact clock-face tear coordinates on 3T MRI guides the precise angle and number of biocomposite suture anchors used during arthroscopic keyhole stabilization.
      </span>
    </div>
  </div>
</template>
