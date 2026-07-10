<script setup lang="ts">
import { ref, computed } from "vue";

const testimonials = [
  {
    title: "Ganesh Kanse",
    subtitle: "",
    text: "I had been suffering from a frozen shoulder for months, experiencing terrible stiffness and constant aching. Dr Nihar Modi provided a comprehensive management plan that targeted the root cause of my pain. His expertise in advanced shoulder conditions and non-surgical interventions truly worked wonders for me. I felt deeply cared for as a patient, with all my questions answered thoroughly at every visit. Thanks to his dedication, the stiffness is completely gone, and I can move my arm freely again.",
    rating: 5,
    date: "07 July 2026",
  },
  {
    title: "Sushma Agarwal",
    subtitle: "",
    text: "Dr. Nihar treated me for a wrist injury, and I couldn't be happier with the care I received. He was knowledgeable, approachable and his advice was accurate. I appreciated his regular follow-ups and genuine concern for my recovery. I highly recommend him.",
    rating: 5,
    date: "03 July 2026",
  },
  {
    title: "Nipun Shah",
    subtitle: "",
    text: "Dr. Nihar performed a shoulder dislocation surgery for my mom and the results have been excellent. Even though I stay in Pune and my mom is in Mumbai, the entire experience was seamless and stress-free. From the first consultation to post-op care, Dr. Nihar and his team were extremely cooperative, responsive, and organized. By the time I reached Mumbai, everything was already perfectly handled — admission, tests, surgery, and recovery plan. He explained the procedure clearly, addressed all our concerns with patience, and his surgical skill is evident in my mom’s smooth recovery and restored mobility. We felt genuinely cared for throughout. Highly recommend Dr. Nihar to anyone looking for a skilled, empathetic orthopedic surgeon who ensures top-notch care even when family is managing things remotely. Thank you, doctor!",
    rating: 5,
    date: "29 June 2026",
  },
  {
    title: "Mridula Poddar",
    subtitle: "",
    text: "At the age of 70, I was naturally anxious after suffering a hairline fracture in my elbow. I am deeply grateful to Dr.Nihar Modi for the exceptional care and expertise shown during my treatment. The plaster was applied with remarkable precision, patience, and gentleness, making the entire experience comfortable and reassuring. I highly recommend Dr.Nihar to anyone looking for a skilled, compassionate, calm and dedicated orthopaedic specialist. Thank you for your excellent treatment and care during follow ups as well.",
    rating: 5,
    date: "28 June 2026",
  },
  {
    title: "Reshma Chitale",
    subtitle: "",
    text: "Excellent experience with one of the top sports orthopaedic surgeons Dr Nihar Modi, for chronic elbow pain. His conservative treatment approach, combined with precise diagnoses, saved me from unnecessary injections and surgery. Very professional, listens carefully, and gives practical advice.",
    rating: 5,
    date: "26 June 2026",
  },
  {
    title: "Jugantaraj Dan Roy",
    subtitle: "",
    text: "I had been suffering from a knee problem for nearly 2.5 years. It all started with what seemed like a minor ligament sprain. The ligament eventually healed, but the pain, swelling, and mechanical block in my knee never truly went away. After trying multiple treatments, I finally met Dr. Nihar Modi. Dr. Modi performed my synovectomy and successfully cleared the mechanical block in my knee. But what impressed me even more than the surgery was the way he treated me throughout the entire journey. I traveled from another state for the procedure, and from the very beginning he guided me on everything, when to come, what to do, what to avoid, and how to prepare. Even after the surgery, he continued to check on me and made sure I was comfortable until the very last moment. He was still helping me right up until I boarded my flight back home. It’s rare to find a doctor who combines skill, professionalism, and genuine care the way he does. He never made me feel like just another patient. If you’re looking for someone you can truly trust with your treatment, I wholeheartedly recommend Dr. Nihar Modi. He is genuinely one of the rare ones.",
    rating: 5,
    date: "06 July 2026",
  },

  {
    title: "Sudipta Dhruva",
    subtitle: "",
    text: "Dr.Nihar Modi is a very professional Doctor and knowledgeable in his field and the best part is he takes the time to explain the situations clearly to his patients and is genuinely caring. That has been my experience and I would recommend him without any reservation.",
    rating: 5,
    date: "05 Nov 2024",
  },
];

const activeIndex = ref(0);
const activeTestimonial = computed(() => testimonials[activeIndex.value]!);
const transitionName = ref("slide-next");

const next = () => {
  transitionName.value = "slide-next";
  activeIndex.value = (activeIndex.value + 1) % testimonials.length;
};

const prev = () => {
  transitionName.value = "slide-prev";
  activeIndex.value =
    (activeIndex.value - 1 + testimonials.length) % testimonials.length;
};

const goTo = (index: number) => {
  transitionName.value =
    index > activeIndex.value ? "slide-next" : "slide-prev";
  activeIndex.value = index;
};
</script>

<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-4 lg:px-8 text-center max-w-5xl">
      <UiSectionTitle class="mb-12 lg:mb-20">
        Patient Testimonials
      </UiSectionTitle>

      <div
        class="relative bg-white rounded-3xl p-6 md:p-10 lg:p-16 border border-gray-100 shadow-xl shadow-blue-900/5"
      >
        <!-- Quote Icon Background -->
        <div
          class="absolute top-4 left-6 lg:top-8 lg:left-12 text-[80px] lg:text-[140px] text-[#e0eaf3] font-asectica leading-none select-none z-0 opacity-50"
        >
          “
        </div>

        <div
          class="relative z-10 min-h-[450px] sm:min-h-[350px] lg:min-h-[280px] flex flex-col justify-center items-center"
        >
          <Transition :name="transitionName" mode="out-in">
            <div :key="activeIndex" class="w-full pt-8 lg:pt-0">
              <div class="flex justify-center text-blue-400 mb-6 gap-1">
                <svg
                  v-for="i in activeTestimonial.rating"
                  :key="i"
                  class="w-5 h-5 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              </div>

              <p
                class="text-base lg:text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto italic"
              >
                "{{ activeTestimonial.text }}"
              </p>

              <div>
                <h3 class="text-xl font-semibold text-gray-900">
                  {{ activeTestimonial.title }}
                </h3>
                <p
                  v-if="activeTestimonial.subtitle"
                  class="text-sm text-gray-500 mt-1"
                >
                  {{ activeTestimonial.subtitle }}
                </p>
                <p class="text-xs text-gray-400 mt-2">
                  {{ activeTestimonial.date }}
                </p>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Controls -->
        <div
          class="flex items-center justify-center gap-4 sm:gap-6 mt-8 lg:mt-12 relative z-10"
        >
          <button
            @click="prev"
            class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-x-1"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          <div class="flex gap-2">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              @click="goTo(index)"
              class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300"
              :class="
                index === activeIndex
                  ? 'bg-primary w-6 sm:w-8'
                  : 'bg-gray-200 hover:bg-gray-300'
              "
            ></button>
          </div>

          <button
            @click="next"
            class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300 hover:shadow-lg hover:translate-x-1"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.4s ease;
}

.slide-next-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
