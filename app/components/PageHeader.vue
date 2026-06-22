<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';

defineProps<{
  title: string;
  subtitle?: string;
  breadcrumbs: { name: string, path: string }[];
}>();

onMounted(() => {
  const tl = gsap.timeline();
  tl.fromTo('.page-header-title',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
  );
  if (document.querySelector('.page-header-subtitle')) {
    tl.fromTo('.page-header-subtitle',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    );
  }
  if (document.querySelector('.page-header-breadcrumb')) {
    tl.fromTo('.page-header-breadcrumb',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    );
  }
});
</script>

<template>
  <section class="relative pt-40 pb-20 px-8 min-h-[400px] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[#f8f9fa]"
    style="background-image: url('/Main_banner.webp');">
    
    <!-- Background Watermark -->
    <div class="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none watermark-n">
      <div class="text-[400px] font-mirage text-primary leading-none">N</div>
    </div>
    
    <div class="container mx-auto relative z-10 flex flex-col items-center justify-center text-center">
      <h1 class="text-5xl md:text-6xl font-mirage text-secondary leading-tight mb-4 page-header-title">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="text-xl md:text-2xl text-gray-600 font-medium tracking-wide page-header-subtitle mb-2">
        {{ subtitle }}
      </p>
      
      <!-- Breadcrumbs -->
      <nav class="page-header-breadcrumb flex items-center gap-2 text-sm font-medium text-gray-600 mt-4" aria-label="Breadcrumb">
        <template v-for="(crumb, index) in breadcrumbs" :key="index">
          <NuxtLink v-if="index < breadcrumbs.length - 1" :to="crumb.path" class="hover:text-primary transition-colors">
            {{ crumb.name }}
          </NuxtLink>
          <span v-else class="text-gray-400" aria-current="page">
            {{ crumb.name }}
          </span>
          <span v-if="index < breadcrumbs.length - 1" class="text-gray-400 mx-1">/</span>
        </template>
      </nav>

      <!-- Schema.org BreadcrumbList for SEO -->
      <Head>
        <Script type="application/ld+json">
          {{
            JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": breadcrumbs.map((crumb, idx) => ({
                "@type": "ListItem",
                "position": idx + 1,
                "name": crumb.name,
                "item": crumb.path === '/' ? 'https://drniharmodi.com/' : `https://drniharmodi.com${crumb.path}`
              }))
            })
          }}
        </Script>
      </Head>
    </div>
  </section>
</template>
