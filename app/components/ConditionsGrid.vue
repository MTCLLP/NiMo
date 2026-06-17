<script setup lang="ts">
const conditions = [
  { name: 'Back Pain', icon: '/conditions/icon-back-pain-dr-nihar-modi.svg', desc: 'Vivamus mollis mauris libero, sit amet ultrices justo condimentum et. Aenean eget libero quam.' },
  { name: 'Knee Pain', icon: '/conditions/icon-knee-pain-dr-nihar-modi.svg', desc: 'Vivamus mollis mauris libero, sit amet ultrices justo condimentum et. Aenean eget libero quam.' },
  { name: 'Shoulder Pain', icon: '/conditions/icon-shoulder-pain-dr-nihar-modi.svg', desc: 'Vivamus mollis mauris libero, sit amet ultrices justo condimentum et. Aenean eget libero quam.' },
  { name: 'Frozen Shoulder', icon: '/conditions/icon-frozen-shoulder-dr-nihar-modi.svg', desc: 'Vivamus mollis mauris libero, sit amet ultrices justo condimentum et. Aenean eget libero quam.' },
  { name: 'Sports Injuries', icon: '/conditions/icon-sports-injuries-dr-nihar-modi.svg', desc: 'Vivamus mollis mauris libero, sit amet ultrices justo condimentum et. Aenean eget libero quam.' },
  { name: 'Arthritis', icon: '/conditions/icon-arthritis-dr-nihar-modi.svg', desc: 'Vivamus mollis mauris libero, sit amet ultrices justo condimentum et. Aenean eget libero quam.' },
  { name: 'Ligament Injuries', icon: '/conditions/icon-ligament-injuries-dr-nihar-modi.svg', desc: 'Vivamus mollis mauris libero, sit amet ultrices justo condimentum et. Aenean eget libero quam.' },
  { name: 'Fractures', icon: '/conditions/icon-fractures-dr-nihar-modi.svg', desc: 'Vivamus mollis mauris libero, sit amet ultrices justo condimentum et. Aenean eget libero quam.' },
  { name: 'Trauma', icon: '/conditions/icon-trauma-dr-nihar-modi.svg', desc: 'Vivamus mollis mauris libero, sit amet ultrices justo condimentum et. Aenean eget libero quam.' }
]
</script>

<template>
  <section class="py-24 bg-accent/30">
    <div class="container mx-auto px-8">
      <h2 class="text-4xl lg:text-5xl font-mirage text-gray-800 text-center mb-16">
        Conditions We Treat
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        <div v-for="(item, idx) in conditions" :key="idx" class="flex gap-6 items-start group">
          <div class="w-16 h-16 flex-shrink-0 relative">
             <img :src="item.icon" :alt="item.name" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
          </div>
          <div>
            <h3 class="text-xl text-gray-800 font-medium mb-2">{{ item.name }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
