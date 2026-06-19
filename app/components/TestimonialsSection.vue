<script setup lang="ts">
import { ref, computed } from "vue";

const testimonials = [
  {
    img: "/testimonials/01.webp",
    title: "John Doe",
    subtitle: "Patient",
    text: "Great experience and quick recovery.",
    rating: 5,
    date: "10th Jan 2026",
  },
  {
    img: "/testimonials/02.webp",
    title: "Jane Smith",
    subtitle: "Athlete",
    text: "Dr. Modi is fantastic! My knee feels brand new.",
    rating: 5,
    date: "22nd Feb 2026",
  },
  {
    img: "/testimonials/03.webp",
    title: "Mark Lee",
    subtitle: "Patient",
    text: "Very supportive staff and excellent treatment.",
    rating: 5,
    date: "10th Mar 2026",
  },
  {
    img: "/testimonials/04.webp",
    title: "Vestibulum bibendum",
    subtitle: "Vivamus mollis mauris libero",
    rating: 5,
    date: "14th May 2026",
    text: "I was unable to lift my arm due to frozen shoulder. After treatment and guided physiotherapy, I gradually regained movement and could sleep comfortably again.",
  },
  {
    img: "/testimonials/05.webp",
    title: "Sarah Davis",
    subtitle: "Patient",
    text: "Very professional and caring approach.",
    rating: 5,
    date: "12th Apr 2026",
  },
  {
    img: "/testimonials/06.webp",
    title: "David Wilson",
    subtitle: "Patient",
    text: "Quick recovery from my sports injury.",
    rating: 5,
    date: "15th May 2026",
  },
  {
    img: "/testimonials/07.webp",
    title: "James Taylor",
    subtitle: "Patient",
    text: "Excellent care throughout the surgery.",
    rating: 5,
    date: "20th Jun 2026",
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
      <UiSectionTitle class="mb-20">
        Patient Testimonials
      </UiSectionTitle>

      <div
        class="relative w-full max-w-7xl mx-auto flex justify-center items-start gap-4 lg:gap-8"
      >
        <!-- Left Column: Thumbnails + Author Info -->
        <div class="flex flex-col w-1/3">
          <!-- Thumbnails aligned to top right -->
          <TransitionGroup
            name="list"
            tag="div"
            class="flex justify-end gap-2 lg:gap-4 mb-12 lg:mb-16"
          >
            <img
              v-for="test in leftTestimonials"
              :key="test.originalIndex"
              :src="test.img"
              @click="setActive(test.originalIndex, 'slide-prev')"
              class="w-16 h-24 sm:w-20 sm:h-28 lg:w-32 lg:h-40 object-cover grayscale opacity-70 rounded flex-shrink-0 transition-all duration-300 hover:grayscale-0 cursor-pointer hover:-translate-y-1"
              alt="Patient Thumbnail"
            />
          </TransitionGroup>
          <!-- Author Info -->
          <div
            class="text-right pr-2 lg:pr-8 min-h-[120px] grid place-items-end"
          >
            <Transition :name="transitionName">
              <div
                :key="activeTestimonial.title"
                class="col-start-1 row-start-1 w-full"
              >
                <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mb-1">
                  {{ activeTestimonial.title }}
                </h3>
                <p class="text-xs lg:text-sm text-gray-500 mb-4">
                  {{ activeTestimonial.subtitle }}
                </p>
                <div class="flex justify-end text-blue-400 mb-2 gap-1">
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

        <!-- Center Column: Active Big Image -->
        <div class="w-1/3 grid place-items-center flex-shrink-0 z-10">
          <Transition :name="transitionName">
            <img
              :src="activeTestimonial.img"
              :key="activeTestimonial.img"
              class="col-start-1 row-start-1 w-full max-w-[200px] sm:max-w-[280px] lg:max-w-[360px] h-[280px] sm:h-[380px] lg:h-[480px] object-cover rounded-xl shadow-xl"
              alt="Active Patient"
            />
          </Transition>
        </div>

        <!-- Right Column: Thumbnails + Review Text -->
        <div class="flex flex-col w-1/3">
          <!-- Thumbnails aligned to top left -->
          <TransitionGroup
            name="list"
            tag="div"
            class="flex justify-start gap-2 lg:gap-4 mb-12 lg:mb-16"
          >
            <img
              v-for="test in rightTestimonials"
              :key="test.originalIndex"
              :src="test.img"
              @click="setActive(test.originalIndex, 'slide-next')"
              class="w-16 h-24 sm:w-20 sm:h-28 lg:w-32 lg:h-40 object-cover grayscale opacity-70 rounded flex-shrink-0 transition-all duration-300 hover:grayscale-0 cursor-pointer hover:-translate-y-1"
              alt="Patient Thumbnail"
            />
          </TransitionGroup>
          <!-- Review Text -->
          <div class="text-left relative min-h-[120px] grid place-items-start">
            <!-- Quote Icon -->
            <div
              class="absolute -top-6 lg:-top-8 text-[80px] lg:text-[120px] text-[#e0eaf3] font-asectica leading-none select-none z-0"
            >
              “
            </div>
            <Transition :name="transitionName">
              <p
                :key="activeTestimonial.text"
                class="col-start-1 row-start-1 text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed relative z-10 mt-6 lg:mt-8 max-w-xs lg:max-w-sm"
              >
                {{ activeTestimonial.text }}
              </p>
            </Transition>
          </div>
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
