<script setup lang="ts"></script>

<template>
  <section class="py-16 md:py-24 relative overflow-hidden bg-white">
    <!-- Decorative background ambient glows -->
    <div
      class="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-accent/60 blur-3xl opacity-70 pointer-events-none"
    ></div>
    <div
      class="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl opacity-70 pointer-events-none"
    ></div>

    <div class="container mx-auto px-6 max-w-6xl relative z-10">
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
      >
        <!-- Text Column (7 Cols on Desktop) -->
        <div class="w-full order-2 lg:order-1 lg:col-span-7 flex flex-col">
          <!-- Eyebrow Pill -->
          <div class="inline-flex items-center gap-2 mb-4 w-fit">
            <span class="w-8 h-[2px] bg-secondary"></span>
            <span
              class="text-xs font-bold tracking-widest text-secondary uppercase"
            >
              Philosophy &amp; Patient Care
            </span>
          </div>

          <!-- Section Heading -->
          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-mirage text-gray-900 leading-[1.2] mb-6"
          >
            Moving with
            <span class="text-primary italic font-light">Confidence</span> &amp;
            <span class="text-secondary italic font-light">Independence</span>
          </h2>

          <!-- Featured Quote / Core Belief -->
          <div
            class="relative bg-gradient-to-r from-accent/80 via-slate-50 to-white rounded-2xl p-5 sm:p-6 border-l-4 border-primary border-y border-r border-slate-100 shadow-sm mb-6"
          >
            <p
              class="text-base sm:text-lg text-gray-800 leading-relaxed font-normal"
            >
              “Movement is more than just mobility; it is independence,
              confidence, and quality of life. As an Orthopaedic Surgeon, my
              goal is to help patients overcome pain, recover from injury, and
              return to the activities they enjoy most.”
            </p>
          </div>

          <!-- Detailed Narrative -->
          <div
            class="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base mb-8"
          >
            <p>
              I specialise in
              <strong
                >sports injuries, arthroscopy (keyhole surgery), and joint
                replacement</strong
              >, offering treatment precisely tailored to each individual's
              needs, activity level, and lifestyle. My approach combines the
              latest evidence-based techniques with compassionate,
              patient-centred care, ensuring you thoroughly understand your
              condition and remain actively involved at every step of your
              recovery.
            </p>
            <p>
              I firmly believe successful treatment isn't simply about
              performing surgery. It starts with an accurate diagnosis, open
              communication, and choosing the right path, whether that means
              rehabilitation, minimally invasive procedures, or surgery when
              truly necessary. I am committed to providing honest advice,
              meticulous surgical care, and lasting solutions.
            </p>
          </div>

          <!-- 3 Focus Pillars -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-2">
            <div
              class="p-4 rounded-xl bg-slate-50 border border-slate-100 transition-all hover:border-slate-200"
            >
              <div
                class="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2.5"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4
                class="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1"
              >
                Accurate Diagnosis
              </h4>
              <p class="text-xs text-gray-500 leading-snug">
                Honest assessment, prioritizing non-surgical care when possible.
              </p>
            </div>

            <div
              class="p-4 rounded-xl bg-slate-50 border border-slate-100 transition-all hover:border-slate-200"
            >
              <div
                class="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-2.5"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4
                class="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1"
              >
                Minimally Invasive
              </h4>
              <p class="text-xs text-gray-500 leading-snug">
                Keyhole arthroscopic surgery for quicker healing &amp; less
                pain.
              </p>
            </div>

            <div
              class="p-4 rounded-xl bg-slate-50 border border-slate-100 transition-all hover:border-slate-200"
            >
              <div
                class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-2.5"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h4
                class="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1"
              >
                Tailored Recovery
              </h4>
              <p class="text-xs text-gray-500 leading-snug">
                Comprehensive rehabilitation for athletes and active
                individuals.
              </p>
            </div>
          </div>

          <!-- Doctor Sign-off & CTAs -->
          <div
            class="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100"
          >
            <div>
              <div class="text-base font-bold text-gray-900 font-mirage">
                Dr. Nihar Modi
              </div>
              <div class="text-xs text-gray-500">
                M.S. Ortho | D.N.B. Ortho | MRCS (Eng) | AOA Fellow (Australia)
              </div>
            </div>
            <div class="flex items-center gap-3">
              <UiButton
                to="/contact"
                variant="primary"
                size="sm"
                class="shadow-sm"
              >
                Book Consultation
              </UiButton>
              <UiButton
                to="/procedures"
                variant="outline"
                size="sm"
                class="hover:-translate-y-0.5 transition-all"
              >
                Explore Procedures
              </UiButton>
            </div>
          </div>
        </div>

        <!-- Image Column (5 Cols on Desktop) -->
        <div
          class="w-full order-1 lg:order-2 lg:col-span-5 flex justify-center"
        >
          <div class="relative w-full max-w-[340px] sm:max-w-[380px]">
            <!-- Decorative Ambient Glow Behind Card -->
            <div
              class="absolute -inset-2 bg-gradient-to-tr from-secondary/20 via-primary/10 to-accent rounded-[2.5rem] blur-xl opacity-60 pointer-events-none"
            ></div>

            <!-- Card Showcase Frame -->
            <div
              class="relative rounded-3xl overflow-hidden pt-6 px-4 sm:px-6 pb-4 flex flex-col items-center"
            >
              <!-- Top Pill Badge -->
              <div
                class="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xs z-10"
              >
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span
                  class="text-[11px] font-bold text-gray-800 tracking-wide uppercase"
                >
                  Sports Orthopaedic Surgeon
                </span>
              </div>

              <!-- Doctor Portrait Image with Constrained Height -->
              <div class="relative w-full flex justify-center overflow-hidden">
                <img
                  src="/sports-orthopedic-surgeon-nihar-modi.png"
                  alt="Dr. Nihar Modi - Sports Orthopaedic Surgeon in Mumbai"
                  class="w-auto h-auto max-h-[380px] sm:max-h-[720px] object-contain object-bottom drop-shadow-md select-none pointer-events-none transition-transform duration-500 hover:scale-102"
                  width="631"
                  height="1254"
                  loading="eager"
                />
              </div>

              <!-- Overlaid/Nestled Credential Card at Bottom -->
              <div
                class="w-full bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 shadow-xs z-10"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div class="min-w-0">
                    <div
                      class="text-[11px] font-bold uppercase tracking-wider text-secondary"
                    >
                      International Fellowships
                    </div>
                    <div
                      class="text-xs font-semibold text-gray-900 leading-snug truncate sm:whitespace-normal"
                    >
                      Sydney (AOA, Australia) &amp; USA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
