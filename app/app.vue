<script setup lang="ts">
import { defineLocalBusiness } from "nuxt-schema-org/schema";

useSchemaOrg([
  defineLocalBusiness({
    "@type": "Physician" as any,
    "@id": "https://drniharmodi.com/#physician",
    name: "Dr. Nihar Modi",
    description:
      "Dr. Nihar Modi is a specialist orthopaedic and sports surgeon in Mumbai, specializing in arthroscopic surgery, ACL reconstruction, joint replacement, and sports medicine.",
    url: "https://drniharmodi.com/",
    telephone: "+91 98330 66702",
    image: "https://drniharmodi.com/about-dr-nihar-modi.webp",
    medicalSpecialty: [
      {
        "@type": "MedicalSpecialty",
        name: "Orthopaedic Surgery",
      },
      {
        "@type": "MedicalSpecialty",
        name: "Sports Medicine",
      },
      {
        "@type": "MedicalSpecialty",
        name: "Joint Replacement Surgery",
      },
      {
        "@type": "MedicalSpecialty",
        name: "Arthroscopy",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Santacruz West / Bandra West / Khar",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400054",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/in/dr-nihar-modi-8702672a4/",
      "https://www.instagram.com/dr_sportho/",
      "https://www.youtube.com/@dr_sportho",
      "https://www.google.com/maps/place/Dr.+Nihar+Modi/@19.0556717,72.8321864,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c90040600f91:0x16abcd80ff8ae9f8!8m2!3d19.0556717!4d72.8321864!16s%2Fg%2F11whdlthql",
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
