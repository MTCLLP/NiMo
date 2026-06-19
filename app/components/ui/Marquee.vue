<script setup lang="ts">
const props = defineProps<{
  speed?: string
}>()

const animationDuration = props.speed || '20s'
</script>

<template>
  <div class="relative w-full flex overflow-hidden group">
    <!-- Track 1 -->
    <div
      class="animate-marquee flex gap-8 pr-8 whitespace-nowrap min-w-full flex-shrink-0"
      :style="{ animationDuration }"
    >
      <slot />
    </div>

    <!-- Track 2 (Duplicate for seamless loop) -->
    <div
      class="animate-marquee flex gap-8 pr-8 whitespace-nowrap min-w-full flex-shrink-0"
      :style="{ animationDuration }"
      aria-hidden="true"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.animate-marquee {
  animation: marquee linear infinite;
}

/* Pause animation on hover */
.group:hover .animate-marquee {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
