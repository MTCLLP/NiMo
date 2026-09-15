<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

useHead({
  title: "Educational Shorts - Dr. Nihar Modi",
  meta: [
    {
      name: "description",
      content:
        "Watch informative short videos by Dr. Nihar Modi, Mumbai's leading orthopedic surgeon, covering joint health, injury prevention, and surgical treatments.",
    },
  ],
});

const shorts = [
  {
    id: "SYwzDo1p5wc",
    title:
      "Why I Chose Sports Orthopaedics? | My Journey as an Orthopaedic Surgeon",
  },
  {
    id: "sMQg-CzBpoc",
    title:
      "Your ACL Is Weakest When You Feel Strongest | #ACL Recovery Explained",
  },
  {
    id: "KnuW1GXgcH0",
    title: "Does Running Cause Knee Arthritis? The Science Says No",
  },
  { id: "2-vgPaqGDP0", title: "Tennis Elbow" },
  {
    id: "WZuzvXUnD1o",
    title: "Does Your X-Ray Mean You Need a Knee Replacement?",
  },
  {
    id: "81Pq5oQ-T1k",
    title: "Surgery Doesn't Heal Fractures - Your Body Does",
  },
  {
    id: "xNUe9jPZcgM",
    title: "Your MRI Doesn't Tell the Whole Story",
  },
  {
    id: "NKJwJDWgerk",
    title: "Why Frozen Shoulder Hurts More at Night",
  },
  {
    id: "gtAV7GhDBnI",
    title: "Frozen Shoulder? Skip Surgery and Do These Exercises Instead",
  },
  {
    id: "wovffBoXrZw",
    title:
      "Never Skip Your Warm-Up | It Prevents Injuries & Boosts Performance",
  },
  {
    id: "IlJw9d3x7cc",
    title: "What Is Fartlek Training? The Easiest Way to Run Faster",
  },
  {
    id: "XrKZXvKWIZM",
    title: "Things My Patients Say That Keep Me Humble | Orthopaedic OPD",
  },
];

const selectedIndex = ref<number | null>(null);

const selectedShort = computed(() =>
  selectedIndex.value !== null ? shorts[selectedIndex.value] : null,
);

const openLightbox = (index: number) => {
  selectedIndex.value = index;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  selectedIndex.value = null;
  document.body.style.overflow = "";
};

const nextShort = (e?: Event) => {
  if (e) e.stopPropagation();
  if (selectedIndex.value !== null) {
    selectedIndex.value = (selectedIndex.value + 1) % shorts.length;
  }
};

const prevShort = (e?: Event) => {
  if (e) e.stopPropagation();
  if (selectedIndex.value !== null) {
    selectedIndex.value =
      (selectedIndex.value - 1 + shorts.length) % shorts.length;
  }
};

const handleKeydown = (e: KeyboardEvent) => {
  if (selectedIndex.value === null) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") nextShort();
  if (e.key === "ArrowLeft") prevShort();
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});
</script>

<template>
  <main>
    <PageHeader
      title="Shorts"
      :breadcrumbs="[
        { name: 'Home', path: '/' },
        { name: 'Shorts', path: '/shorts' },
      ]"
    />

    <div class="py-24">
      <div class="container mx-auto px-8">
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full mx-auto"
        >
          <div
            v-for="(short, idx) in shorts"
            :key="idx"
            class="w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-lg bg-gray-100 relative group cursor-pointer"
            @click="openLightbox(idx)"
          >
            <!-- YouTube Thumbnail -->
            <img
              width="100"
              height="100"
              :src="`https://i.ytimg.com/vi/${short.id}/maxresdefault.jpg`"
              onerror="
                this.src = `https://i.ytimg.com/vi/${short.id}/hqdefault.jpg`
              "
              :alt="short.title"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
            />

            <div
              class="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors z-10"
            >
              <div
                class="w-12 h-12 bg-red-600/90 rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            <!-- Title Overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-4 pt-12 bg-gradient-to-t from-black/90 to-transparent z-20 transition-opacity duration-300">
              <h3 class="text-white font-medium text-sm line-clamp-2 leading-snug drop-shadow-md" :title="short.title">
                {{ short.title }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="selectedIndex !== null"
        class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center transition-opacity"
        @click="closeLightbox"
      >
        <!-- Close button -->
        <button
          aria-label="Close video"
          class="absolute top-6 right-6 text-white hover:text-gray-300 z-[110] transition-transform hover:scale-110"
          @click.stop="closeLightbox"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- Previous button -->
        <button
          aria-label="Previous video"
          class="absolute left-4 md:left-8 text-white hover:text-gray-300 z-[110] transition-transform hover:scale-110"
          @click.stop="prevShort"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <!-- Video -->
        <div
          class="relative w-full max-w-sm px-4 flex flex-col justify-center items-center h-full max-h-[90vh]"
        >
          <div
            class="w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl relative bg-black shrink-0"
            @click.stop
          >
            <iframe
              v-if="selectedShort"
              :src="`https://www.youtube-nocookie.com/embed/${selectedShort.id}?rel=0&autoplay=1`"
              class="absolute inset-0 w-full h-full border-0"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
                web-share;
              "
              allowfullscreen
              loading="lazy"
              :title="selectedShort.title"
            ></iframe>
          </div>

          <div class="mt-4 text-center w-full px-2" v-if="selectedShort">
            <h2 class="text-white font-semibold text-lg line-clamp-2 drop-shadow-md">
              {{ selectedShort.title }}
            </h2>
            <div
              class="mt-2 text-white/70 text-sm font-medium"
            >
              {{ selectedIndex !== null ? selectedIndex + 1 : 0 }} / {{ shorts.length }}
            </div>
          </div>
        </div>

        <!-- Next button -->
        <button
          aria-label="Next video"
          class="absolute right-4 md:right-8 text-white hover:text-gray-300 z-[110] transition-transform hover:scale-110"
          @click.stop="nextShort"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </Teleport>
  </main>
</template>
