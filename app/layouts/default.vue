<script setup lang="ts">
// Default layout
import { testimonials } from "~/data/testimonials";

const reviews = testimonials.map(t => ({
  author: { name: t.title },
  datePublished: new Date(t.date).toISOString().split('T')[0],
  reviewBody: t.text,
  reviewRating: { ratingValue: t.rating }
}));

useSchemaOrg([
  defineWebSite({
    name: 'Dr. Nihar Modi',
    url: 'https://drniharmodi.com',
  }),
  defineLocalBusiness({
    name: 'Dr. Nihar Modi',
    address: {
      streetAddress: 'Santacruz West / Bandra',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN'
    },
    image: '/about-dr-nihar-modi.webp',
    aggregateRating: {
      ratingValue: 5,
      ratingCount: testimonials.length,
    },
    review: reviews,
  })
])
</script>

<template>
  <div class="relative min-h-screen bg-accent/20 font-sans text-gray-800 flex flex-col">
    <AppHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <CtaSection />
    <AppFooter />
    <UiFloatingActions />
  </div>
</template>
