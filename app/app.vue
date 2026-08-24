<script setup lang="ts">
import { defineLocalBusiness } from "nuxt-schema-org/schema";

useSchemaOrg([
  defineLocalBusiness({
    "@type": "Physician" as any,
    name: "Dr. Nihar Modi",
    medicalSpecialty: "Orthopaedic Surgery, Sports Medicine",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Bandra",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Khar",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    ],
  }) as any,
]);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
