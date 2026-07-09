<script setup lang="ts">
const minimallyInvasive = [
  {
    name: "Arthroscopy (Keyhole Surgery)",
    icon: "/treatment-techniques/icon-arthroscopy-dr-nihar-modi.svg",
    desc: "Minimally invasive surgery performed through small incisions using a high-definition camera and specialised instruments, allowing precise treatment with less pain and quicker recovery.",
  },
  {
    name: "Ligament Reconstruction",
    icon: "/treatment-techniques/icon-ligament-reconstruction-dr-nihar-modi.svg",
    desc: "Advanced procedures to restore stability following ligament injuries, including ACL and other sports-related ligament reconstructions.",
  },
  {
    name: "Cartilage Restoration",
    icon: "/treatment-techniques/icon-cartilage-restoration-dr-nihar-modi.svg",
    desc: "Modern techniques to treat cartilage damage with the aim of preserving joint health, reducing pain, and delaying arthritis whenever appropriate.",
  },
  {
    name: "Tendon Repair",
    icon: "/treatment-techniques/icon-tendon-repair-dr-nihar-modi.svg",
    desc: "Surgical repair of torn or damaged tendons using evidence-based techniques that promote healing and restore strength and function.",
  },
];

const advancedSurgicalCare = [
  {
    name: "Joint Replacement Surgery",
    icon: "/treatment-techniques/icon-joint-replacement-surgery-dr-nihar-modi.svg",
    desc: "State-of-the-art shoulder replacement procedures designed to relieve pain, improve mobility, and help patients return to an active, independent lifestyle.",
  },
  {
    name: "Fracture Fixation",
    icon: "/treatment-techniques/icon-fracture-fixation-dr-nihar-modi.svg",
    desc: "Modern surgical management of fractures using plates, screws, rods, or other fixation methods to restore alignment and facilitate early rehabilitation.",
  },
];
</script>

<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-8">
      <UiSectionTitle class="mb-16"> Treatment Techniques </UiSectionTitle>

      <div class="mb-16">
        <div class="mb-8 flex items-center gap-4">
          <span class="w-8 h-1 bg-primary rounded-full"></span>
          <h3 class="text-2xl font-semibold text-gray-800">
            Minimally Invasive Procedures
          </h3>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12"
        >
          <div
            v-for="(item, idx) in minimallyInvasive"
            :key="idx"
            class="flex flex-col relative"
          >
            <UiFeatureBlock
              :title="item.name"
              :desc="item.desc"
              :icon="item.icon"
            />
          </div>
        </div>
      </div>

      <div>
        <div class="mb-8 flex items-center gap-4">
          <span class="w-8 h-1 bg-primary rounded-full"></span>
          <h3 class="text-2xl font-semibold text-gray-800">
            Advanced Surgical Care
          </h3>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12"
        >
          <div
            v-for="(item, idx) in advancedSurgicalCare"
            :key="idx"
            class="flex flex-col relative"
          >
            <UiFeatureBlock
              :title="item.name"
              :desc="item.desc"
              :icon="item.icon"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
