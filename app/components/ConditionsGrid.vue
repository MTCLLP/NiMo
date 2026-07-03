<script setup lang="ts">
const conditions = [
  {
    name: "Sports Injuries",
    icon: "/conditions/icon-sports-injuries-dr-nihar-modi.svg",
    desc: "Comprehensive evaluation and treatment for chronic and acute back pain to restore mobility.",
  },
  {
    name: "Shoulder Conditions",
    icon: "/conditions/icon-frozen-shoulder-dr-nihar-modi.svg",
    desc: "Expert care for knee discomfort, from conservative treatments to advanced joint preservation techniques.",
  },
  {
    name: "Elbow Conditions",
    icon: "/conditions/icon-shoulder-pain-dr-nihar-modi.svg",
    desc: "Diagnosis and management of shoulder pain, including rotator cuff issues and joint instability.",
  },
  {
    name: "Knee Conditions",
    icon: "/conditions/icon-knee-pain-dr-nihar-modi.svg",
    desc: "Effective interventions to alleviate stiffness and pain, helping you regain full range of motion.",
  },
  {
    name: "Joint Replacement Surgery",
    icon: "/conditions/icon-sports-injuries-dr-nihar-modi.svg",
    desc: "Specialized care for athletes of all levels to safely return to their sport after injury.",
  },
  {
    name: "Arthroscopy (Keyhole Surgery)",
    icon: "/conditions/icon-arthritis-dr-nihar-modi.svg",
    desc: "Personalized management plans for joint inflammation to reduce pain and improve daily function.",
  },
  {
    name: "Fracture & Trauma Care",
    icon: "/conditions/icon-fractures-dr-nihar-modi.svg",
    desc: "Advanced treatment for ACL, MCL, and other ligament tears to restore joint stability.",
  },
  // {
  //   name: "Fractures",
  //   icon: "/conditions/icon-fractures-dr-nihar-modi.svg",
  //   desc: "Expert fracture care and rehabilitation to ensure proper healing and prevent future complications.",
  // },
  // {
  //   name: "Trauma",
  //   icon: "/conditions/icon-trauma-dr-nihar-modi.svg",
  //   desc: "Immediate and comprehensive orthopaedic trauma care for complex injuries and post-traumatic reconstruction.",
  // },
];
</script>

<template>
  <section class="py-24 bg-accent/30">
    <div class="container mx-auto px-8">
      <UiSectionTitle class="mb-16"> Conditions Treated </UiSectionTitle>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
      >
        <div
          v-for="(item, idx) in conditions"
          :key="idx"
          class="flex flex-col relative"
        >
          <UiFeatureBlock
            :title="item.name"
            :desc="item.desc"
            :icon="item.icon"
          />
          <div class="text-right mt-3 block lg:hidden">
            <NuxtLink
              to="#"
              class="text-[#1DAAFF] font-medium text-sm hover:underline"
              >Know more</NuxtLink
            >
          </div>
          <div
            v-if="idx !== conditions.length - 1"
            class="absolute -bottom-6 left-0 w-full h-px bg-gray-200 md:hidden"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
