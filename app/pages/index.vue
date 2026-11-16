<script setup lang="ts">
// Home page
useHead({
  title: "Orthopaedic & Sports Surgeon in Bandra, Mumbai | Dr. Nihar Modi",
  meta: [
    {
      name: "description",
      content:
        "Looking for an orthopaedic doctor near you? Dr. Nihar Modi is an orthopaedic and sports surgeon in Bandra, Mumbai, specializing in ACL, knee and shoulder treatments.",
    },
  ],
});

useSchemaOrg([
  defineWebPage(),
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
