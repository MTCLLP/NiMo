// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'

// Build-time function to generate blog sitemap entries by reading
// the content/blog directory. This works correctly with `npm run generate`
// (static site) because it runs at Nuxt config load time, not at runtime.
const getBlogSitemapUrls = () => {
  try {
    const blogDir = join(process.cwd(), 'content/blog')
    const files = readdirSync(blogDir).filter(f => f.endsWith('.md'))

    return files.map((filename) => {
      const slug = filename.replace('.md', '')

      // Extract date from frontmatter for accurate lastmod
      const content = readFileSync(join(blogDir, filename), 'utf-8')
      const dateMatch = content.match(/^date:\s*(.+)$/m)
      const lastmod = dateMatch ? dateMatch[1].trim() : undefined

      return {
        loc: `/blog/${slug}`,
        lastmod,
        changefreq: 'monthly' as const,
        priority: 0.8,
      }
    })
  } catch {
    return []
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // @nuxtjs/seo (which includes @nuxtjs/sitemap) must be listed BEFORE
  // @nuxt/content so the sitemap module can hook into content processing.
  modules: ['@nuxt/image', '@nuxtjs/seo', '@nuxt/content', 'nuxt-studio'],
  site: {
    name: 'Dr. Nihar Modi',
    url: 'https://drniharmodi.com',
  },
  sitemap: {
    // Inject all blog article URLs at build time.
    // This approach works for static generation (npm run generate) because
    // it runs when nuxt.config is loaded — no runtime server required.
    urls: getBlogSitemapUrls(),
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