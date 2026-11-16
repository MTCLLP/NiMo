// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'

// Build-time function to generate comprehensive sitemap entries.
// This ensures that static generation (npm run generate) and crawlers
// discover all blog articles, procedure categories, and condition pages.
const getAllSitemapUrls = () => {
  const urls: { loc: string; lastmod?: string; changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'; priority?: number }[] = []

  // Core static pages
  const corePages = [
    { loc: '/', priority: 1.0, changefreq: 'weekly' as const },
    { loc: '/about', priority: 0.9, changefreq: 'monthly' as const },
    { loc: '/procedures', priority: 0.9, changefreq: 'weekly' as const },
    { loc: '/conditions', priority: 0.9, changefreq: 'weekly' as const },
    { loc: '/blog', priority: 0.8, changefreq: 'daily' as const },
    { loc: '/contact', priority: 0.8, changefreq: 'monthly' as const },
    { loc: '/faqs', priority: 0.7, changefreq: 'monthly' as const },
    { loc: '/gallery', priority: 0.6, changefreq: 'monthly' as const },
    { loc: '/shorts', priority: 0.7, changefreq: 'weekly' as const },
    { loc: '/privacy-policy', priority: 0.3, changefreq: 'yearly' as const },
    { loc: '/terms-conditions', priority: 0.3, changefreq: 'yearly' as const },
  ]
  urls.push(...corePages)

  // Dynamic category and static specialized procedure routes
  const procedureSlugs = [
    'shoulder-surgery',
    'elbow-surgery',
    'knee-surgery',
    'revision-complex-sports-surgery',
    'arthroscopic-surgery',
    'tendon-repair-mumbai',
    'ligament-reconstruction-mumbai',
    'fracture-fixation-mumbai',
    'arthroscopy-surgeon-mumbai',
    'shoulder-arthroscopy',
    'hand-and-wrist-surgery',
    'cartilage-restoration-mumbai',
    'sports-medicine-mumbai',
    'shoulder-dislocation-treatment',
    'joint-replacement-surgery-mumbai',
  ]
  procedureSlugs.forEach((slug) => {
    urls.push({
      loc: `/procedures/${slug}`,
      changefreq: 'weekly',
      priority: 0.85,
    })
  })

  // Condition routes (strictly non-procedure symptom & disease categories)
  const conditionSlugs = [
    'sports-injuries',
    'shoulder-conditions',
    'elbow-conditions',
    'knee-conditions',
    'fracture-trauma-care',
  ]
  conditionSlugs.forEach((slug) => {
    urls.push({
      loc: `/conditions/${slug}`,
      changefreq: 'weekly',
      priority: 0.8,
    })
  })

  // Blog articles
  try {
    const blogDir = join(process.cwd(), 'content/blog')
    const files = readdirSync(blogDir).filter((f) => f.endsWith('.md'))

    files.forEach((filename) => {
      const slug = filename.replace('.md', '')
      const content = readFileSync(join(blogDir, filename), 'utf-8')
      const dateMatch = content.match(/^date:\s*["']?([^"'\n\r]+)["']?/m)
      const lastmod = dateMatch ? dateMatch[1].trim() : undefined

      urls.push({
        loc: `/blog/${slug}`,
        lastmod,
        changefreq: 'monthly',
        priority: 0.8,
      })
    })
  } catch {
    // ignore
  }

  return urls
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // @nuxtjs/seo (which includes @nuxtjs/sitemap) must be listed BEFORE
  // @nuxt/content so the sitemap module can hook into content processing.
  modules: [
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxt/content',
    // nuxt-studio is only needed in development/preview — exclude from generate
    ...(process.env.NODE_ENV !== 'production' ? ['nuxt-studio'] : []),
  ],
  site: {
    name: 'Dr. Nihar Modi',
    url: 'https://drniharmodi.com',
  },
  routeRules: {
    '/services': { redirect: { to: '/procedures', statusCode: 301 } },
    '/conditions/arthroscopy': { redirect: { to: '/procedures/arthroscopy-surgeon-mumbai', statusCode: 301 } },
    '/conditions/joint-replacement-surgery': { redirect: { to: '/procedures/joint-replacement-surgery-mumbai', statusCode: 301 } },
  },
  sitemap: {
    exclude: ['/testimonials'],
    // Inject all verified site URLs at build time.
    // This approach works for static generation (npm run generate) because
    // it runs when nuxt.config is loaded — no runtime server required.
    urls: getAllSitemapUrls(),
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