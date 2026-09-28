<template>
  <div class="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm not-prose">
    <div class="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
      <div>
        <span class="text-xs font-bold text-secondary uppercase tracking-widest block">Clinical Treatment Protocol</span>
        <h4 class="text-lg sm:text-xl font-bold text-gray-900 m-0">FAI & Hip Labral Tear: Treatment Pathway</h4>
      </div>
    </div>

    <!-- Steps sequence -->
    <div class="space-y-4">
      <!-- Step 1 -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex items-start gap-4">
        <div class="w-8 h-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">1</div>
        <div class="flex-1">
          <div class="flex items-center justify-between flex-wrap gap-2 mb-1">
            <h5 class="text-base font-bold text-gray-900 m-0">Accurate Clinical & Radiographic Diagnosis</h5>
            <span class="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded">Initial Evaluation</span>
          </div>
          <p class="text-xs text-gray-600 m-0 leading-relaxed">
            Provocative impingement testing (FADIR & FABER), specialized dynamic pelvic radiographs (Dunn 45° view for alpha angle measurement), and high-resolution 3T MRI or MRA to confirm labral detachment.
          </p>
        </div>
      </div>

      <!-- Arrow down -->
      <div class="flex justify-center text-slate-300">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>

      <!-- Step 2 -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex items-start gap-4">
        <div class="w-8 h-8 rounded-full bg-secondary text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">2</div>
        <div class="flex-1">
          <div class="flex items-center justify-between flex-wrap gap-2 mb-1">
            <h5 class="text-base font-bold text-gray-900 m-0">6–12 Weeks Structured Non-Surgical Management</h5>
            <span class="text-xs font-semibold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded">First-Line Care</span>
          </div>
          <p class="text-xs text-gray-600 m-0 leading-relaxed">
            Personalized hip therapy focusing on deep core and gluteus medius stabilization, avoiding deep terminal flexion (squat modifications), and targeted ultrasound-guided injections if severe synovitis is present.
          </p>
        </div>
      </div>

      <!-- Arrow down split -->
      <div class="flex justify-center text-slate-300">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>

      <!-- Step 3 Decision Split -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
        <!-- Path A: Success -->
        <div class="bg-emerald-50/60 rounded-xl p-5 border border-emerald-200">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">✓</div>
            <h6 class="text-sm font-bold text-emerald-900 m-0">Symptoms Resolve</h6>
          </div>
          <p class="text-xs text-emerald-800 m-0 leading-relaxed">
            Pain-free sports-specific progression. Athlete continues maintenance hip abductor and kinetic chain conditioning before full return to competition.
          </p>
        </div>

        <!-- Path B: Arthroscopy -->
        <div class="bg-primary/5 rounded-xl p-5 border-2 border-primary/30">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">➜</div>
            <h6 class="text-sm font-bold text-primary m-0">Persistent Pain / Mechanical Catching</h6>
          </div>
          <p class="text-xs text-gray-700 m-0 leading-relaxed mb-2">
            <strong>Minimally Invasive Hip Arthroscopy:</strong>
          </p>
          <ul class="text-xs text-gray-600 space-y-1 m-0">
            <li>• <strong>Labral Repair:</strong> Refixation using bio-composite suture anchors</li>
            <li>• <strong>Femoroplasty:</strong> Precision reshaping of Cam bone prominence</li>
            <li>• <strong>Acetabuloplasty:</strong> Trimming of overhanging Pincer rim</li>
          </ul>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
// MDC Component for FAI Clinical Pathway Flowchart
</script>
