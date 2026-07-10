<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const galleryImages = [
  { url: '/gallery/dr-nihar-modi.webp', alt: 'Dr. Nihar Modi' },
  { url: '/gallery/dr-nihar-modi-doing-surgery.webp', alt: 'Dr. Nihar Modi Doing Surgery' },
  { url: '/gallery/dr-nihar-modi-doing-surgery-1.webp', alt: 'Dr. Nihar Modi Doing Surgery 1' },
  { url: '/gallery/dr-nihar-modi-doing-surgery-2.webp', alt: 'Dr. Nihar Modi Doing Surgery 2' },
  { url: '/gallery/dr-nihar-modi-in-surgery.webp', alt: 'Dr. Nihar Modi in Surgery' },
  { url: '/gallery/dr-nihar-modi-in-conference.webp', alt: 'Dr. Nihar Modi in Conference' },
  { url: '/gallery/dr-nihar-modi-training.webp', alt: 'Dr. Nihar Modi Training' },
  { url: '/gallery/dr-nihar-modi-training-1.webp', alt: 'Dr. Nihar Modi Training 1' },
  { url: '/gallery/dr-nihar-modi-trained-in-usa.webp', alt: 'Dr. Nihar Modi Trained in USA' },
  { url: '/gallery/dr-nihar-modi-trainined-in-australia.webp', alt: 'Dr. Nihar Modi Trained in Australia' },
];

const selectedIndex = ref<number | null>(null);

const openLightbox = (index: number) => {
  selectedIndex.value = index;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  selectedIndex.value = null;
  document.body.style.overflow = '';
};

const nextImage = (e?: Event) => {
  if (e) e.stopPropagation();
  if (selectedIndex.value !== null) {
    selectedIndex.value = (selectedIndex.value + 1) % galleryImages.length;
  }
};

const prevImage = (e?: Event) => {
  if (e) e.stopPropagation();
  if (selectedIndex.value !== null) {
    selectedIndex.value = (selectedIndex.value - 1 + galleryImages.length) % galleryImages.length;
  }
};

const handleKeydown = (e: KeyboardEvent) => {
  if (selectedIndex.value === null) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});
</script>

<template>
  <section class="py-24 bg-accent/30">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-end mb-16">
        <UiSectionTitle align="left" class="mb-0">Gallery</UiSectionTitle>
        <UiButton to="/gallery" variant="outline" class="hidden sm:inline-flex group items-center">
          View All
          <svg class="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </UiButton>
      </div>

      <UiMarquee speed="40s">
        <div 
          v-for="(img, idx) in galleryImages" 
          :key="idx"
          class="shrink-0 w-[80vw] sm:w-[350px] h-[250px] rounded-2xl overflow-hidden snap-center relative group cursor-pointer"
          @click="openLightbox(idx)"
        >
          <img :src="img.url" :alt="img.alt" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <span class="opacity-0 group-hover:opacity-100 text-white bg-black/60 p-3 rounded-full transition-opacity duration-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            </span>
          </div>
        </div>
      </UiMarquee>
      
      <div class="mt-8 text-center sm:hidden">
        <UiButton to="/gallery" variant="outline" class="w-full flex justify-center items-center group">
          View All
          <svg class="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </UiButton>
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
          class="absolute top-6 right-6 text-white hover:text-gray-300 z-[110] transition-transform hover:scale-110"
          @click.stop="closeLightbox"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <!-- Previous button -->
        <button 
          class="absolute left-4 md:left-8 text-white hover:text-gray-300 z-[110] transition-transform hover:scale-110"
          @click.stop="prevImage"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <!-- Image -->
        <div class="relative w-full max-w-6xl px-20 flex justify-center items-center h-full max-h-[85vh]">
          <img 
            :src="galleryImages[selectedIndex]?.url" 
            :alt="galleryImages[selectedIndex]?.alt" 
            class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            @click.stop
          />
          
          <div class="absolute bottom-[-50px] text-white/70 text-base font-medium text-center w-full left-0">
            {{ selectedIndex + 1 }} / {{ galleryImages.length }}
          </div>
        </div>

        <!-- Next button -->
        <button 
          class="absolute right-4 md:right-8 text-white hover:text-gray-300 z-[110] transition-transform hover:scale-110"
          @click.stop="nextImage"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
