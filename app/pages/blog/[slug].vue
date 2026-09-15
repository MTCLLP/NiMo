<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

// In Nuxt Content v3, each file gets an auto-generated `path` derived from
// its location in /content. A file at content/blog/my-article.md → path: /blog/my-article
const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog').path(`/blog/${slug}`).first()
)

if (!post.value) {
  await navigateTo('/blog')
}

useHead({
  title: post.value ? `${post.value.title} | Dr. Nihar Modi` : 'Dr. Nihar Modi',
  meta: [
    { name: 'description', content: post.value?.description || '' },
    { property: 'og:title', content: post.value?.title || '' },
    { property: 'og:description', content: post.value?.description || '' },
    { name: 'author', content: post.value?.author || '' },
    { name: 'keywords', content: post.value?.tags?.join(', ') || '' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: post.value ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.value.title,
        description: post.value.description,
        author: {
          '@type': 'Person',
          name: post.value.author,
          jobTitle: post.value.authorTitle,
          url: 'https://drniharmodi.com/about'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Dr. Nihar Modi',
          url: 'https://drniharmodi.com'
        },
        datePublished: post.value.date,
        url: `https://drniharmodi.com/blog/${post.value.slug}`
      }) : ''
    }
  ]
})
</script>

<template>
  <main v-if="post">
    <PageHeader
      :title="post.title"
      :breadcrumbs="[
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: post.title, path: `/blog/${post.slug}` }
      ]"
    />

    <div class="bg-white min-h-screen pb-20 md:pb-32 pt-12 md:pt-20">
      <div class="container mx-auto px-6 max-w-3xl">

        <!-- Article header -->
        <header class="mb-10">
          <!-- Category + read time -->
          <div class="flex items-center gap-3 mb-4 flex-wrap">
            <span class="inline-block text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">
              {{ post.category }}
            </span>
            <span class="text-xs text-gray-400">
              {{ new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) }}
            </span>
            <span class="text-gray-300">&bull;</span>
            <span class="text-xs text-gray-400">{{ post.readTime }}</span>
          </div>

          <!-- Title -->
          <h1 class="text-3xl md:text-5xl font-mirage text-primary leading-tight mb-6">
            {{ post.title }}
          </h1>

          <!-- Description -->
          <p class="text-lg text-gray-500 leading-relaxed mb-6 border-l-4 border-secondary pl-4">
            {{ post.description }}
          </p>

          <!-- Author row -->
          <div class="flex items-center gap-3 py-4 border-t border-b border-gray-100">
            <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shrink-0">
              NM
            </div>
            <div>
              <p class="text-sm font-semibold text-gray-800">{{ post.author }}</p>
              <p class="text-xs text-gray-400">{{ post.authorTitle }}</p>
            </div>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mt-4">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
            >
              #{{ tag.replace(/ /g, '-') }}
            </span>
          </div>
        </header>

        <!-- Article body rendered from markdown -->
        <article v-format-citations class="prose prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-primary
          prose-h1:font-mirage prose-h1:text-4xl
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
          prose-p:text-gray-600 prose-p:leading-relaxed
          prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-800
          prose-ul:text-gray-600 prose-ol:text-gray-600
          prose-li:my-1
          prose-blockquote:border-secondary prose-blockquote:text-gray-500 prose-blockquote:italic
          prose-table:w-full prose-table:text-sm prose-table:border-collapse
          prose-th:bg-primary prose-th:text-white prose-th:font-semibold prose-th:p-3 prose-th:text-left
          prose-td:text-gray-600 prose-td:p-3 prose-td:border-b prose-td:border-gray-100
          prose-hr:border-gray-200
        ">
          <ContentRenderer :value="post" />
        </article>

        <!-- Back to blog link -->
        <div class="mt-14 pt-8 border-t border-gray-100">
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all duration-200 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            Back to all articles
          </NuxtLink>
        </div>

        <!-- Disclaimer -->
        <div class="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p class="text-xs text-amber-700 leading-relaxed">
            <strong>Medical Disclaimer:</strong> This article is written for general informational purposes only and does not constitute medical advice.
            It is not a substitute for professional medical diagnosis, treatment, or consultation. Always seek the guidance of a qualified healthcare
            professional with any questions you may have regarding a medical condition.
          </p>
        </div>

      </div>
    </div>
  </main>
</template>
