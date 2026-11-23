<script setup lang="ts">
// Home page
useHead({
  title: "Orthopaedic & Sports Surgeon in Bandra & Mumbai | Dr. Nihar Modi",
  meta: [
    {
      name: "description",
      content:
        "Consult Dr. Nihar Modi, Orthopaedic & Sports Surgeon in Bandra West & Santacruz West. Specialist care for knee pain, ACL tears, shoulder injuries & joint preservation. Call/WhatsApp +91 98330 66702.",
    },
  ],
});

useSchemaOrg([
  defineWebPage(),
  defineQuestion({
    name: "Where does Dr. Nihar Modi consult in Mumbai?",
    acceptedAnswer:
      "Dr. Nihar Modi conducts consultations at Santacruz West and is attached as a specialist orthopaedic and sports surgeon to Lilavati Hospital (Bandra West), P. D. Hinduja Hospital (Mahim), and Apollo Spectra Hospitals (Santacruz and Tardeo).",
  }),
  defineQuestion({
    name: "What conditions does an orthopaedic and sports surgeon treat?",
    acceptedAnswer:
      "Specialist evaluation and treatment are provided for sports injuries, knee ligament tears (ACL, PCL), meniscus injuries, shoulder dislocations, rotator cuff tears, cartilage lesions, and joint arthritis.",
  }),
  defineQuestion({
    name: "How can I book an appointment or MRI review with Dr. Nihar Modi?",
    acceptedAnswer:
      "Appointments and clinical MRI reviews can be arranged directly by calling or sending a WhatsApp message to +91 98330 66702, or through the appointment booking form on drniharmodi.com.",
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
