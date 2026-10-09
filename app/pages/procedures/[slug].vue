<script setup lang="ts">
import { useRoute } from "vue-router";
import { proceduresData } from "~/data/procedures-content";
import { computed, ref } from "vue";

const route = useRoute();
const procedureSlug = route.params.slug as string;

const procedure = computed(() => {
  return proceduresData.find((p) => p.slug === procedureSlug);
});

// FAQ accordion state
const openFaqs = ref<Record<number, boolean>>({});
const toggleFaq = (idx: number) => {
  openFaqs.value[idx] = !openFaqs.value[idx];
};

// Calculate total sub-surgeries count
const totalProceduresCount = computed(() => {
  if (!procedure.value?.categories) return 0;
  return procedure.value.categories.reduce(
    (acc, cat) => acc + (cat.procedures?.length || 0),
    0,
  );
});

// Setting meta tags dynamically based on the procedure
useHead({
  title: procedure.value
    ? `${procedure.value.name} in Mumbai | Dr. Nihar Modi`
    : "Procedure Not Found | Dr. Nihar Modi",
  meta: [
    {
      name: "description",
      content: procedure.value
        ? `${procedure.value.intro.substring(0, 155)}...`
        : "Explore orthopaedic procedures performed by Dr. Nihar Modi in Mumbai.",
    },
  ],
});

// Schema.org structured data
if (procedure.value) {
  useSchemaOrg([
    defineWebPage({
      name: `${procedure.value.name} in Mumbai - Dr. Nihar Modi`,
      description: procedure.value.intro,
    }),
  ]);
}
</script>

<template>
  <main>
    <template v-if="procedure">
      <!-- Page Header -->
      <PageHeader
        :title="procedure.name"
        :breadcrumbs="[
          { name: 'Home', path: '/' },
          { name: 'Specialised Areas', path: '/procedures' },
          { name: procedure.name, path: `/procedures/${procedure.slug}` },
        ]"
      />

      <!-- Hero Subtitle & Quick Stats Bar -->
      <section class="bg-accent/20 border-b border-primary/10 py-6">
        <div
          class="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p
            class="text-base md:text-lg text-primary font-medium text-center md:text-left"
          >
            {{ procedure.tagline }}
          </p>
          <div
            class="flex items-center gap-4 text-xs md:text-sm font-medium text-gray-600 shrink-0"
          >
            <span
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-primary"
            >
              <svg
                class="w-4 h-4 text-primary"
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
              {{ procedure.categories.length }} Sub-Categories
            </span>
            <span
              v-if="totalProceduresCount > 0"
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-primary"
            >
              <svg
                class="w-4 h-4 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              {{ totalProceduresCount }} Procedures
            </span>
          </div>
        </div>
      </section>

      <!-- Main Body Content -->
      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-6 max-w-5xl space-y-16">
          <!-- Clinical Introduction -->
          <div>
            <h2 class="text-2xl md:text-3xl font-mirage text-primary mb-4">
              Overview & Clinical Philosophy
            </h2>
            <p
              class="text-base md:text-lg text-gray-700 leading-relaxed font-light"
            >
              {{ procedure.intro }}
            </p>
          </div>

          <!-- Indications for Surgery -->
          <div>
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl md:text-3xl font-mirage text-primary">
                Common Indications for Surgery
              </h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="(sym, idx) in procedure.symptoms"
                :key="idx"
                class="flex items-start gap-3 p-4 rounded-xl border border-gray-200 bg-white hover:border-primary/40 transition-colors shadow-sm"
              >
                <div
                  class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5"
                >
                  <svg
                    class="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span
                  class="text-gray-700 leading-relaxed text-sm md:text-base"
                  >{{ sym }}</span
                >
              </div>
            </div>
          </div>

          <!-- MASTER SUB-SURGERIES SECTION -->
          <div class="space-y-10">
            <div>
              <span
                class="text-xs uppercase tracking-widest font-bold text-primary block mb-1"
              >
                Surgical Portfolio
              </span>
              <h2 class="text-3xl md:text-4xl font-mirage text-primary">
                Surgical Procedures & Sub-Specialties
              </h2>
              <p class="text-gray-600 mt-2 text-base md:text-lg font-light">
                Explore our full surgical portfolio under {{ procedure.name }},
                detailed by clinical indications and surgical techniques.
              </p>
            </div>

            <!-- Categories List (Directly Open Without Accordion) -->
            <div class="space-y-10">
              <div v-for="(cat, cIdx) in procedure.categories" :key="cIdx">
                <!-- Category Header -->
                <div
                  class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-gray-200"
                >
                  <div class="flex items-center gap-3 md:gap-4">
                    <div
                      class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg shrink-0"
                    >
                      {{ cIdx + 1 }}
                    </div>
                    <div>
                      <h3 class="text-xl md:text-2xl font-mirage text-gray-900">
                        {{ cat.categoryName }}
                      </h3>
                      <p class="text-xs md:text-sm text-gray-500 font-light">
                        {{ cat.procedures.length }} specialized procedure{{
                          cat.procedures.length > 1 ? "s" : ""
                        }}
                      </p>
                    </div>
                  </div>
                  <span
                    class="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-white border border-gray-200 text-primary shadow-xs"
                  >
                    {{ cat.procedures.length }} Procedures
                  </span>
                </div>

                <!-- Category Description -->
                <p
                  class="text-sm md:text-base text-gray-600 mb-6 italic leading-relaxed"
                >
                  {{ cat.description }}
                </p>

                <!-- Procedures Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    v-for="(proc, pIdx) in cat.procedures"
                    :key="pIdx"
                    class="bg-white border border-gray-200/80 rounded-xl p-5 hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div class="flex items-start justify-between gap-2 mb-2">
                        <h4
                          class="text-base font-bold text-gray-900 leading-snug"
                        >
                          {{ proc.name }}
                        </h4>
                        <span
                          v-if="proc.technique"
                          class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-accent/20 text-primary shrink-0"
                        >
                          {{ proc.technique.split(" ")[0] }}
                        </span>
                      </div>
                      <p
                        v-if="proc.indication"
                        class="text-xs md:text-sm text-gray-600 mb-2 leading-relaxed"
                      >
                        <strong class="font-semibold text-gray-800"
                          >Indication:</strong
                        >
                        {{ proc.indication }}
                      </p>
                      <p
                        v-if="proc.technique"
                        class="text-xs md:text-sm text-gray-600 leading-relaxed"
                      >
                        <strong class="font-semibold text-gray-800"
                          >Technique:</strong
                        >
                        {{ proc.technique }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pre-operative Diagnostic Workup -->
          <div class="border-t border-gray-200 pt-12">
            <h2 class="text-2xl md:text-3xl font-mirage text-primary mb-4">
              Pre-Operative Evaluation & Diagnostics
            </h2>
            <div
              class="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm text-gray-700 leading-relaxed space-y-4"
            >
              <p>{{ procedure.diagnosis }}</p>
              <div
                class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100 text-sm"
              >
                <div class="flex items-center gap-2 text-gray-700 font-medium">
                  <div class="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                  High-Resolution 3T MRI
                </div>
                <div class="flex items-center gap-2 text-gray-700 font-medium">
                  <div class="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                  Dynamic Plain Radiographs
                </div>
                <div class="flex items-center gap-2 text-gray-700 font-medium">
                  <div class="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                  Targeted Clinical Provocation
                </div>
              </div>
            </div>
          </div>

          <!-- Recovery & Rehabilitation Roadmap -->
          <div class="border-t border-gray-200 pt-12">
            <h2 class="text-2xl md:text-3xl font-mirage text-primary mb-4">
              Recovery & Rehabilitation Roadmap
            </h2>
            <div class="leading-relaxed text-gray-700">
              <p class="text-base md:text-lg font-light leading-relaxed mb-4">
                {{ procedure.management }}
              </p>
              <div class="text-xs md:text-sm text-gray-500 italic">
                * Note: Every surgical recovery plan is personalized based on
                your specific tissue biology, repair strength, and occupational
                or athletic demands.
              </div>
            </div>
          </div>

          <!-- Frequently Asked Questions -->
          <div
            v-if="procedure.faqs && procedure.faqs.length"
            class="border-t border-gray-200 pt-12"
          >
            <h2 class="text-2xl md:text-3xl font-mirage text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <div class="space-y-4">
              <div
                v-for="(faq, fIdx) in procedure.faqs"
                :key="fIdx"
                class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition-colors"
                :class="{ 'border-primary/40': openFaqs[fIdx] }"
              >
                <button
                  @click="toggleFaq(fIdx)"
                  class="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer hover:bg-gray-50/50"
                >
                  <span
                    class="text-base md:text-lg font-bold text-gray-900 pr-4"
                  >
                    {{ faq.question }}
                  </span>
                  <svg
                    class="w-5 h-5 text-gray-400 transform transition-transform duration-300 shrink-0"
                    :class="{ 'rotate-180 text-primary': openFaqs[fIdx] }"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  v-show="openFaqs[fIdx]"
                  class="px-5 pb-5 pt-1 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-100"
                >
                  {{ faq.answer }}
                </div>
              </div>
            </div>
          </div>

          <!-- Contextual Internal Linking: Related Blog Articles & Conditions -->
          <div
            v-if="
              (procedure.relatedBlogs && procedure.relatedBlogs.length) ||
              (procedure.relatedConditions &&
                procedure.relatedConditions.length)
            "
            class="border-t border-gray-200 pt-12"
          >
            <h3 class="text-xl md:text-2xl font-mirage text-primary mb-6">
              Related Patient Education & Clinical Resources
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Related Articles -->
              <div
                v-if="procedure.relatedBlogs && procedure.relatedBlogs.length"
                class="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <h4
                  class="text-sm uppercase tracking-wider font-bold text-primary mb-4"
                >
                  Evidence-Based Blog Guides
                </h4>
                <ul class="space-y-3">
                  <li
                    v-for="(blog, bIdx) in procedure.relatedBlogs"
                    :key="bIdx"
                  >
                    <NuxtLink
                      :to="`/blog/${blog.slug}`"
                      class="text-sm md:text-base font-medium text-gray-800 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <svg
                        class="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span>{{ blog.title }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>

              <!-- Related Conditions -->
              <div
                v-if="
                  procedure.relatedConditions &&
                  procedure.relatedConditions.length
                "
                class="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <h4
                  class="text-sm uppercase tracking-wider font-bold text-primary mb-4"
                >
                  Associated Conditions Treated
                </h4>
                <ul class="space-y-3">
                  <li
                    v-for="(cond, cIdx) in procedure.relatedConditions"
                    :key="cIdx"
                  >
                    <NuxtLink
                      :to="`/conditions/${cond.slug}`"
                      class="text-sm md:text-base font-medium text-gray-800 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <svg
                        class="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span>{{ cond.title }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Conversion CTA Section -->
      <CtaSection force-show>
        <template #title>
          Consult Dr. Nihar Modi for <br class="hidden md:block" />
          <span class="text-primary italic"
            >{{ procedure.name }} in Mumbai</span
          >
        </template>
        <template #desc>
          Schedule an in-person diagnostic evaluation at our Bandra West or Khar
          West clinic to discuss personalized surgical and non-surgical
          treatment options.
        </template>
      </CtaSection>
    </template>

    <!-- 404 Fallback -->
    <template v-else>
      <div
        class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-24"
      >
        <h1 class="text-4xl font-mirage text-primary mb-4">
          Procedure Not Found
        </h1>
        <p class="text-gray-600 mb-8 max-w-md">
          We could not find the surgical procedure you requested. Please explore
          our full list of specialised areas.
        </p>
        <NuxtLink
          to="/procedures"
          class="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg"
        >
          View All Specialised Areas
        </NuxtLink>
      </div>
    </template>
  </main>
</template>
