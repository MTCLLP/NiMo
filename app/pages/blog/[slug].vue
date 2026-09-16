<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const slug = route.params.slug as string

// Helper: extract the last path segment as the URL slug
const getPostSlug = (post: any) => post?.path?.split("/").pop() ?? post?.slug;

// In Nuxt Content v3, each file gets an auto-generated `path` derived from
// its location in /content. A file at content/blog/my-article.md → path: /blog/my-article
const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog').path(`/blog/${slug}`).first()
)

if (!post.value) {
  await navigateTo('/blog')
}

// Fetch all posts to derive related articles
const { data: allPosts } = await useAsyncData('all-blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

// Compute up to 3 related articles based on category and tags matching
const relatedPosts = computed(() => {
  if (!allPosts.value || !post.value) return [];

  const currentSlug = getPostSlug(post.value);
  const currentCategory = post.value.category;
  const currentTags = post.value.tags || [];

  const others = allPosts.value.filter((p: any) => getPostSlug(p) !== currentSlug);

  const scored = others.map((p: any) => {
    let score = 0;
    if (p.category && p.category === currentCategory) {
      score += 3;
    }
    if (p.tags && Array.isArray(p.tags)) {
      const commonTags = p.tags.filter((t: string) => currentTags.includes(t));
      score += commonTags.length;
    }
    return { post: p, score };
  });

  scored.sort((a: any, b: any) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
  });

  return scored.slice(0, 3).map((item: any) => item.post);
});

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
    },
    {
      type: 'application/ld+json',
      innerHTML: post.value ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://drniharmodi.com/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://drniharmodi.com/blog' },
          { '@type': 'ListItem', position: 3, name: post.value.title, item: `https://drniharmodi.com/blog/${post.value.slug}` }
        ]
      }) : ''
    }
  ]
})
</script>

<template>
  <main v-if="post">
    <div class="bg-white min-h-screen pt-32 md:pt-40">
      <div class="container mx-auto px-6 max-w-3xl">
        
        <!-- Breadcrumbs -->
        <nav class="flex items-center gap-2 text-sm font-medium text-gray-500 mb-8" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-primary transition-colors">Home</NuxtLink>
          <span class="text-gray-300 mx-1">/</span>
          <NuxtLink to="/blog" class="hover:text-primary transition-colors">Blog</NuxtLink>
          <span class="text-gray-300 mx-1">/</span>
          <span class="text-gray-400 truncate" aria-current="page">{{ post.title }}</span>
        </nav>

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

        <!-- Disclaimer -->
        <div class="mt-12 mb-16 bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p class="text-xs text-amber-700 leading-relaxed">
            <strong>Medical Disclaimer:</strong> This article is written for general informational purposes only and does not constitute medical advice.
            It is not a substitute for professional medical diagnosis, treatment, or consultation. Always seek the guidance of a qualified healthcare
            professional with any questions you may have regarding a medical condition.
          </p>
        </div>

      </div>

      <!-- "You May Want to Read" Section -->
      <section v-if="relatedPosts && relatedPosts.length" class="bg-accent py-16 md:py-24 border-t border-gray-100">
        <div class="container mx-auto px-6 max-w-6xl">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span class="inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase mb-3">
                Related Topics
              </span>
              <h2 class="text-2xl md:text-4xl font-mirage text-primary">
                You May Want to Read
              </h2>
            </div>
            <NuxtLink
              to="/blog"
              class="text-secondary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all self-start sm:self-auto"
            >
              View all articles
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>

          <!-- 3-column article card grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NuxtLink
              v-for="relPost in relatedPosts"
              :key="relPost.slug"
              :to="`/blog/${getPostSlug(relPost)}`"
              class="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <!-- Category chip & read time -->
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-bold text-secondary uppercase tracking-wider bg-secondary/10 px-2.5 py-0.5 rounded-full">
                  {{ relPost.category }}
                </span>
                <span class="text-xs text-gray-400">
                  {{ relPost.readTime }}
                </span>
              </div>

              <!-- Title -->
              <h3 class="text-base md:text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-200 leading-snug mb-2 line-clamp-2">
                {{ relPost.title }}
              </h3>

              <!-- Description -->
              <p class="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                {{ relPost.description }}
              </p>

              <!-- Meta footer -->
              <div class="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                <span class="text-xs text-gray-400">
                  {{
                    new Date(relPost.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })
                  }}
                </span>
                <span class="text-secondary font-semibold text-xs flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  Read
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

    </div>
  </main>
</template>
