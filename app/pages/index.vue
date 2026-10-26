<script setup lang="ts">
// Home page
useHead({
  title: "Orthopaedic & Sports Surgeon in Santacruz & Bandra, Mumbai | Dr. Nihar Modi",
  meta: [
    {
      name: "description",
      content:
        "Looking for an orthopaedic doctor near you? Dr. Nihar Modi is an orthopaedic and sports surgeon in Santacruz & Bandra, Mumbai, specializing in ACL, knee & shoulder treatments.",
    },
  ],
});

useSchemaOrg([
  defineWebSite({
    name: "Dr. Nihar Modi",
  }),
  defineWebPage(),
  // @ts-expect-error Nuxt Schema Org type mismatch
  defineLocalBusiness({
    "@type": "Physician",
    name: "Dr. Nihar Modi",
    description:
      "Orthopaedic and sports surgeon in Santacruz & Bandra, Mumbai, specializing in ACL, knee & shoulder treatments.",
    image: "https://drniharmodi.com/about-dr-nihar-modi.webp",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    telephone: "+91 98330 66702",
    url: "https://drniharmodi.com/",
  }),
]);
</script>
<template>
  <div>
    <HeroSection />
    <LogoScroller />
    <IntroSection />
    <!-- <StatsBanner /> -->
    <SpecialisedAreas />
    <QuoteBanner />
    <ConditionsGrid />
    <TreatmentTechniques />
    <GallerySection />
    <!-- Deactivated for NMC compliance:
    <TestimonialsSection />
    -->
    <LatestArticles />
    <PatientEducation />
  </div>
</template>
