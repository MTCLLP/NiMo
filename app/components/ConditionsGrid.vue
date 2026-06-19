<script setup lang="ts">
const conditions = [
  { name: 'Back Pain', icon: '/conditions/icon-back-pain-dr-nihar-modi.svg', desc: 'Comprehensive evaluation and treatment for chronic and acute back pain to restore mobility.' },
  { name: 'Knee Pain', icon: '/conditions/icon-knee-pain-dr-nihar-modi.svg', desc: 'Expert care for knee discomfort, from conservative treatments to advanced joint preservation techniques.' },
  { name: 'Shoulder Pain', icon: '/conditions/icon-shoulder-pain-dr-nihar-modi.svg', desc: 'Diagnosis and management of shoulder pain, including rotator cuff issues and joint instability.' },
  { name: 'Frozen Shoulder', icon: '/conditions/icon-frozen-shoulder-dr-nihar-modi.svg', desc: 'Effective interventions to alleviate stiffness and pain, helping you regain full range of motion.' },
  { name: 'Sports Injuries', icon: '/conditions/icon-sports-injuries-dr-nihar-modi.svg', desc: 'Specialized care for athletes of all levels to safely return to their sport after injury.' },
  { name: 'Arthritis', icon: '/conditions/icon-arthritis-dr-nihar-modi.svg', desc: 'Personalized management plans for joint inflammation to reduce pain and improve daily function.' },
  { name: 'Ligament Injuries', icon: '/conditions/icon-ligament-injuries-dr-nihar-modi.svg', desc: 'Advanced treatment for ACL, MCL, and other ligament tears to restore joint stability.' },
  { name: 'Fractures', icon: '/conditions/icon-fractures-dr-nihar-modi.svg', desc: 'Expert fracture care and rehabilitation to ensure proper healing and prevent future complications.' },
  { name: 'Trauma', icon: '/conditions/icon-trauma-dr-nihar-modi.svg', desc: 'Immediate and comprehensive orthopaedic trauma care for complex injuries and post-traumatic reconstruction.' }
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
