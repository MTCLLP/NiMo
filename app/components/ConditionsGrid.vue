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
      <UiSectionTitle class="mb-16">
        Conditions Treated
      </UiSectionTitle>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        <UiFeatureBlock
          v-for="(item, idx) in conditions"
          :key="idx"
          :title="item.name"
          :desc="item.desc"
          :icon="item.icon"
        />
      </div>
    </div>
  </section>
</template>
