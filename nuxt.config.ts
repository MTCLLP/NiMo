// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/seo'],
  site: {
    name: 'Dr. Nihar Modi',
    url: 'https://drniharmodi.com',
  },
  features: {
    inlineStyles: true
  },
  app: {
    head: {
      meta: [
        { property: 'og:image', content: '/about-dr-nihar-modi.webp' },
        { property: 'og:image:width', content: '800' },
        { property: 'og:image:height', content: '1000' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: '/about-dr-nihar-modi.webp' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2' },
        // Preload critical fonts to avoid chaining requests
        { rel: 'preload', as: 'font', type: 'font/otf', href: '/fonts/made-mirage/MADE%20Mirage%20Regular%20PERSONAL%20USE.otf', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/otf', href: '/fonts/made-mirage/MADE%20Mirage%20Thin%20PERSONAL%20USE.otf', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/otf', href: '/fonts/Asectica%20Simple%20Demo.otf', crossorigin: 'anonymous' }
      ],
      script: []
    }
  },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['gsap'],
  },
  vite: {
    build: {
      cssCodeSplit: false
    },
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: [
        '@unhead/schema-org/vue',
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },
})