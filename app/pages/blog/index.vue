<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

// Helper: extract the last path segment as the URL slug
const getPostSlug = (post: any) => post.path?.split('/').pop() ?? post.slug

useHead({
  title: 'Orthopaedic Blog | Sports Medicine & Knee Health | Dr. Nihar Modi',
  meta: [
    {
      name: 'description',
      content: 'Expert insights on sports knee injuries, ACL tears, meniscus tears, and orthopaedic care — written by Dr. Nihar Modi, orthopaedic sports surgeon in Mumbai.'
    },
    { property: 'og:title', content: 'Orthopaedic Blog | Dr. Nihar Modi, Mumbai' },
    { property: 'og:description', content: 'Patient-friendly articles on knee health, sports injuries, and treatment options from a leading orthopaedic surgeon in Mumbai.' }
  ]
})
</script>

<template>
  <main>
    <PageHeader
      title="Blog"
      subtitle="Patient-friendly insights on orthopaedic health, sports injuries, and recovery — from the desk of Dr. Nihar Modi."
      :breadcrumbs="[{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }]"
    />

    <section class="bg-white min-h-screen pb-20 md:pb-32 pt-12 md:pt-20">
      <div class="container mx-auto px-6 max-w-6xl">

        <!-- Category badge + heading -->
        <div class="mb-12 text-center">
          <span class="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase mb-4">
            Sports Medicine & Orthopaedics
          </span>
          <h2 class="text-3xl md:text-5xl font-mirage text-primary">
            Latest Articles
          </h2>
        </div>

        <!-- Blog grid -->
        <div v-if="posts && posts.length" class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article
            v-for="post in posts"
            :key="post.slug"
            class="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
          >
            <!-- Category chip -->
            <div class="px-6 pt-6 pb-0">
              <span class="inline-block text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full mb-4">
                {{ post.category }}
              </span>
            </div>

            <!-- Content -->
            <div class="px-6 pb-6 flex flex-col flex-grow">
              <NuxtLink :to="`/blog/${getPostSlug(post)}`" class="block">
                <h3 class="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-200 leading-snug mb-3">
                  {{ post.title }}
                </h3>
              </NuxtLink>

              <p class="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">
                {{ post.description }}
              </p>

              <!-- Meta row -->
              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <div class="flex items-center gap-2">
                  <!-- Avatar initials -->
                  <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                    NM
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-gray-700">{{ post.author }}</p>
                    <p class="text-xs text-gray-400">
                      {{ new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) }}
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <span class="text-xs text-gray-400">{{ post.readTime }}</span>
                  <NuxtLink
                    :to="`/blog/${getPostSlug(post)}`"
                    class="text-secondary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all duration-200"
                    :aria-label="`Read full article: ${post.title}`"
                  >
                    Read
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty state -->
        <div v-else class="text-center py-24 text-gray-400">
          <p class="text-lg">No articles found. Check back soon.</p>
        </div>

        <!-- Author bio strip -->
        <div class="mt-20 bg-accent rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <div class="w-20 h-20 rounded-full bg-primary shrink-0 flex items-center justify-center text-white text-2xl font-mirage">
            N
          </div>
          <div>
            <p class="text-xs font-bold text-secondary uppercase tracking-widest mb-1">About the Author</p>
            <h4 class="text-xl font-bold text-primary mb-1">Dr. Nihar Modi</h4>
            <p class="text-sm text-gray-500 leading-relaxed">
              MS Orthopaedics · DNB · MNAMS · MRCS (England) · AOA Fellow (Sydney) · FIFA Diploma in Football Medicine.
              Dr. Nihar Modi is a sports medicine and joint replacement surgeon based in Mumbai, with specialist training in arthroscopic
              surgery of the knee and shoulder. These articles are written to help patients understand their conditions clearly and make
              informed decisions about their care.
            </p>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>
