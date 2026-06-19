<script setup lang="ts">
const logos = [
  { name: 'LOREM', sub: 'HOSPITAL' },
  { name: 'Keithston', sub: 'HOSPITAL' },
  { name: 'THE DOCTOR\'S', sub: 'HOSPITAL' },
  { name: 'MEDICARE', sub: 'HOSPITAL' },
  { name: 'Hospital', sub: 'LOREM' },
  { name: 'LOREM', sub: 'HOSPITAL' },
]
</script>

<template>
  <section class="py-12 bg-white border-b border-gray-100 overflow-hidden">
    <div class="opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
      <UiMarquee speed="30s">
        <div class="flex items-center justify-around gap-12 lg:gap-24 pr-12 lg:pr-24">
          <div v-for="(logo, idx) in logos" :key="'t1-'+idx" class="text-center font-mirage">
            <div class="text-lg tracking-[0.2em] uppercase text-gray-800 leading-none">{{ logo.name }}</div>
            <div class="text-[0.6rem] tracking-[0.3em] uppercase text-gray-500 mt-2">{{ logo.sub }}</div>
          </div>
        </div>
      </UiMarquee>
    </div>
  </section>
</template>
