<script setup lang="ts">
const conditions = [
  {
    name: "Sports Injuries",
    link: "/conditions/sports-injuries",
    icon: "/conditions/icon-sports-injuries-dr-nihar-modi.svg",
    desc: "Diagnosis and treatment of ligament, tendon, muscle, and cartilage injuries including advanced regenerative medicine treatment options like PRP, stem cells and peptides.",
  },
  {
    name: "Shoulder Conditions",
    link: "/conditions/shoulder-conditions",
    icon: "/conditions/icon-shoulder-pain-dr-nihar-modi.svg",
    desc: "Comprehensive management of rotator cuff tears, shoulder instability, frozen shoulder, dislocations, impingement, and arthritis.",
  },
  {
    name: "Elbow Conditions",
    link: "/conditions/elbow-conditions",
    icon: "/conditions/icon-elbow-conditions-dr-nihar-modi.svg",
    desc: "Treatment for tennis elbow, golfer's elbow, ligament injuries, stiffness, fractures, and other causes of elbow pain.",
  },
  {
    name: "Knee Conditions",
    link: "/conditions/knee-conditions",
    icon: "/conditions/icon-knee-pain-dr-nihar-modi.svg",
    desc: "Expert care for knee pain, ACL and meniscus injuries, multiligament injuries, arthritis, cartilage damage, patellofemoral instability, and sports-related knee injuries.",
  },
  {
    name: "Joint Replacement Surgery",
    link: "/procedures/joint-replacement-surgery-mumbai",
    icon: "/conditions/icon-ligament-injuries-dr-nihar-modi.svg",
    desc: "Advanced shoulder replacement procedures for patients with severe arthritis, helping restore mobility and improve quality of life.",
  },
  {
    name: "Arthroscopy (Keyhole Surgery)",
    link: "/procedures/arthroscopy-surgeon-mumbai",
    icon: "/conditions/icon-arthritis-dr-nihar-modi.svg",
    desc: "Minimally invasive surgery for the shoulder, elbow, knee, and other joints using small incisions for faster recovery and less postoperative discomfort.",
  },
  {
    name: "Fracture & Trauma Care",
    link: "/conditions/fracture-trauma-care",
    icon: "/conditions/icon-fractures-dr-nihar-modi.svg",
    desc: "Management of simple and complex fractures using modern surgical and non-surgical techniques for optimal healing and function.",
  },
];
</script>

<template>
  <section class="py-12 md:py-24 bg-accent/30">
    <div class="container mx-auto px-8">
      <UiSectionTitle class="mb-16"> Conditions Treated </UiSectionTitle>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
      >
        <NuxtLink
          v-for="(item, idx) in conditions"
          :key="idx"
          :to="item.link"
          class="flex flex-col relative group cursor-pointer"
        >
          <UiFeatureBlock
            :title="item.name"
            :desc="item.desc"
            :icon="item.icon"
          >
            <template #footer>
              <div class="mt-3 block">
                <span
                  class="text-primary font-medium text-sm group-hover:underline"
                >
                  Learn more →
                </span>
              </div>
            </template>
          </UiFeatureBlock>
          <div
            v-if="idx !== conditions.length - 1"
            class="absolute -bottom-6 left-0 w-full h-px bg-gray-200 md:hidden"
          ></div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
