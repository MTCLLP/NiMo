<script setup lang="ts">
import { ref, computed } from "vue";

const testimonials = [
  {
    img: "/testimonials/01.webp",
    title: "Sushma Agarwal",
    subtitle: "",
    text: "Dr. Nihar treated me for a wrist injury, and I couldn't be happier with the care I received. He was knowledgeable, approachable and his advice was accurate. I appreciated his regular follow-ups and genuine concern for my recovery. I highly recommend him.",
    rating: 5,
    date: "03 July 2026",
  },
  {
    img: "/testimonials/02.webp",
    title: "Sudipta Dhruva",
    subtitle: "",
    text: "Dr.Nihar Modi is a very professional Doctor and knowledgeable in his field and the best part is he takes the time to explain the situations clearly to his patients and is genuinely caring. That has been my experience and I would recommend him without any reservation.",
    rating: 5,
    date: "05 Nov 2024",
  },
  {
    img: "/testimonials/03.webp",
    title: "Reshma Chitale",
    subtitle: "",
    text: "Excellent experience with one of the top sports orthopaedic surgeons Dr Nihar Modi, for chronic elbow pain. His conservative treatment approach, combined with precise diagnoses, saved me from unnecessary injections and surgery. Very professional, listens carefully, and gives practical advice.",
    rating: 5,
    date: "26 June 2026",
  },
  {
    img: "/testimonials/04.webp",
    title: "Mridula Poddar",
    subtitle: "",
    text: "At the age of 70, I was naturally anxious after suffering a hairline fracture in my elbow. I am deeply grateful to Dr.Nihar Modi for the exceptional care and expertise shown during my treatment. The plaster was applied with remarkable precision, patience, and gentleness, making the entire experience comfortable and reassuring. I highly recommend Dr.Nihar to anyone looking for a skilled, compassionate, calm and dedicated orthopaedic specialist. Thank you for your excellent treatment and care during follow ups as well.",
    rating: 5,
    date: "28 June 2026",
  },
  {
    img: "/testimonials/05.webp",
    title: "Nipun Shah",
    subtitle: "",
    text: "Dr. Nihar performed a shoulder dislocation surgery for my mom and the results have been excellent. Even though I stay in Pune and my mom is in Mumbai, the entire experience was seamless and stress-free. From the first consultation to post-op care, Dr. Nihar and his team were extremely cooperative, responsive, and organized. By the time I reached Mumbai, everything was already perfectly handled — admission, tests, surgery, and recovery plan. He explained the procedure clearly, addressed all our concerns with patience, and his surgical skill is evident in my mom’s smooth recovery and restored mobility. We felt genuinely cared for throughout. Highly recommend Dr. Nihar to anyone looking for a skilled, empathetic orthopedic surgeon who ensures top-notch care even when family is managing things remotely. Thank you, doctor!",
    rating: 5,
    date: "29 June 2026",
  },
  {
    img: "/testimonials/06.webp",
    title: "Jugantaraj Dan Roy",
    subtitle: "",
    text: "I had been suffering from a knee problem for nearly 2.5 years. It all started with what seemed like a minor ligament sprain. The ligament eventually healed, but the pain, swelling, and mechanical block in my knee never truly went away. After trying multiple treatments, I finally met Dr. Nihar Modi. Dr. Modi performed my synovectomy and successfully cleared the mechanical block in my knee. But what impressed me even more than the surgery was the way he treated me throughout the entire journey. I traveled from another state for the procedure, and from the very beginning he guided me on everything, when to come, what to do, what to avoid, and how to prepare. Even after the surgery, he continued to check on me and made sure I was comfortable until the very last moment. He was still helping me right up until I boarded my flight back home. It’s rare to find a doctor who combines skill, professionalism, and genuine care the way he does. He never made me feel like just another patient. If you’re looking for someone you can truly trust with your treatment, I wholeheartedly recommend Dr. Nihar Modi. He is genuinely one of the rare ones.",
    rating: 5,
    date: "06 July 2026",
  },
  {
    img: "/testimonials/07.webp",
    title: "Ganesh Kanse",
    subtitle: "",
    text: "I had been suffering from a frozen shoulder for months, experiencing terrible stiffness and constant aching. Dr Nihar Modi provided a comprehensive management plan that targeted the root cause of my pain. His expertise in advanced shoulder conditions and non-surgical interventions truly worked wonders for me. I felt deeply cared for as a patient, with all my questions answered thoroughly at every visit. Thanks to his dedication, the stiffness is completely gone, and I can move my arm freely again.",
    rating: 5,
    date: "07 July 2026",
  },
].map((t, index) => ({ ...t, originalIndex: index }));

const activeIndex = ref(3); // 04.webp is the active one initially
const activeTestimonial = computed(() => testimonials[activeIndex.value]!);

const leftTestimonials = computed(() => {
  const len = testimonials.length;
  return [
    testimonials[(activeIndex.value - 3 + len) % len]!,
    testimonials[(activeIndex.value - 2 + len) % len]!,
    testimonials[(activeIndex.value - 1 + len) % len]!,
  ];
});

const rightTestimonials = computed(() => {
  const len = testimonials.length;
  return [
    testimonials[(activeIndex.value + 1) % len]!,
    testimonials[(activeIndex.value + 2) % len]!,
    testimonials[(activeIndex.value + 3) % len]!,
  ];
});

const transitionName = ref("slide-next");

const setActive = (index: number, direction: "slide-next" | "slide-prev") => {
  transitionName.value = direction;
  activeIndex.value = index;
};
</script>

<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-4 lg:px-8 text-center">
      <UiSectionTitle class="mb-12 lg:mb-20">
        Patient Testimonials
      </UiSectionTitle>

      <div
        class="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8"
      >
        <!-- Center Column: Active Big Image (Top on mobile) -->
        <div
          class="w-full lg:w-1/3 grid place-items-center flex-shrink-0 z-10 order-1 lg:order-2"
        >
          <Transition :name="transitionName">
            <img
              :src="activeTestimonial.img"
              :key="activeTestimonial.img"
              class="col-start-1 row-start-1 w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[360px] h-[320px] sm:h-[380px] lg:h-[480px] object-cover rounded-xl shadow-xl"
              alt="Active Patient"
            />
          </Transition>
        </div>

        <!-- Left Column: Thumbnails + Author Info (Middle on mobile) -->
        <div class="flex flex-col w-full lg:w-1/3 order-2 lg:order-1">
          <!-- Thumbnails aligned to top right (Hidden on mobile) -->
          <TransitionGroup
            name="list"
            tag="div"
            class="hidden lg:flex justify-end gap-2 lg:gap-4 mb-16"
          >
            <img
              v-for="test in leftTestimonials"
              :key="test.originalIndex"
              :src="test.img"
              @click="setActive(test.originalIndex, 'slide-prev')"
              class="w-20 h-28 lg:w-32 lg:h-40 object-cover grayscale opacity-70 rounded flex-shrink-0 transition-all duration-300 hover:grayscale-0 cursor-pointer hover:-translate-y-1"
              alt="Patient Thumbnail"
            />
          </TransitionGroup>
          <!-- Author Info -->
          <div
            class="text-center lg:text-right px-4 lg:pr-8 min-h-[auto] lg:min-h-[120px] grid place-items-center lg:place-items-end"
          >
            <Transition :name="transitionName">
              <div
                :key="activeTestimonial.title"
                class="col-start-1 row-start-1 w-full"
              >
                <h3 class="text-xl lg:text-2xl font-medium text-gray-800 mb-1">
                  {{ activeTestimonial.title }}
                </h3>
                <p class="text-sm text-gray-500 mb-2 lg:mb-4">
                  {{ activeTestimonial.subtitle }}
                </p>
                <div
                  class="flex justify-center lg:justify-end text-blue-400 mb-2 gap-1"
                >
                  <svg
                    v-for="i in activeTestimonial.rating"
                    :key="i"
                    class="w-4 h-4 lg:w-5 lg:h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                </div>
                <p class="text-xs lg:text-sm text-gray-400 mt-2">
                  {{ activeTestimonial.date }}
                </p>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Right Column: Thumbnails + Review Text (Middle on mobile) -->
        <div class="flex flex-col w-full lg:w-1/3 order-3">
          <!-- Thumbnails aligned to top left (Hidden on mobile) -->
          <TransitionGroup
            name="list"
            tag="div"
            class="hidden lg:flex justify-start gap-2 lg:gap-4 mb-16"
          >
            <img
              v-for="test in rightTestimonials"
              :key="test.originalIndex"
              :src="test.img"
              @click="setActive(test.originalIndex, 'slide-next')"
              class="w-20 h-28 lg:w-32 lg:h-40 object-cover grayscale opacity-70 rounded flex-shrink-0 transition-all duration-300 hover:grayscale-0 cursor-pointer hover:-translate-y-1"
              alt="Patient Thumbnail"
            />
          </TransitionGroup>
          <!-- Review Text -->
          <div
            class="text-center lg:text-left relative min-h-[100px] lg:min-h-[120px] grid place-items-center lg:place-items-start px-4"
          >
            <!-- Quote Icon -->
            <div
              class="hidden lg:block absolute -top-8 text-[120px] text-[#e0eaf3] font-asectica leading-none select-none z-0"
            >
              “
            </div>
            <Transition :name="transitionName">
              <p
                :key="activeTestimonial.text"
                class="col-start-1 row-start-1 text-sm lg:text-base text-gray-600 leading-relaxed relative z-10 lg:mt-8 max-w-sm mx-auto lg:mx-0"
              >
                {{ activeTestimonial.text }}
              </p>
            </Transition>
          </div>
        </div>

        <!-- Mobile Thumbnails Row (Bottom on mobile) -->
        <div
          class="flex lg:hidden order-4 w-full overflow-x-auto gap-3 px-4 py-2 mt-4 justify-start no-scrollbar"
        >
          <img
            v-for="test in testimonials"
            :key="'mob-' + test.originalIndex"
            :src="test.img"
            @click="
              setActive(
                test.originalIndex,
                test.originalIndex > activeIndex ? 'slide-next' : 'slide-prev',
              )
            "
            class="w-20 h-28 object-cover rounded flex-shrink-0 transition-all duration-300 cursor-pointer"
            :class="
              test.originalIndex === activeIndex
                ? 'grayscale-0 ring-2 ring-primary scale-[1.02] shadow-md'
                : 'grayscale opacity-70 hover:opacity-100'
            "
            alt="Patient Thumbnail"
          />
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
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.slide-next-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}

.list-enter-from,
.list-leave-to {
  /* Removed opacity: 0 to remove fade out effect */
  transform: scale(0.9);
}
</style>
