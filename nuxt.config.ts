// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/seo'],
  site: {
    name: 'Dr. Nihar Modi',
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-W0H7PG4YQF',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W0H7PG4YQF');
          `,
          type: 'text/javascript'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['gsap'],
  },
  vite: {
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