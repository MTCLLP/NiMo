<script setup lang="ts">
import { ref, computed } from 'vue'

const { data: posts } = await useAsyncData("blog-posts", () =>
  queryCollection("blog").order("date", "DESC").all(),
);

// Helper: extract the last path segment as the URL slug
const getPostSlug = (post: any) => post.path?.split("/").pop() ?? post.slug;

const searchQuery = ref('');

const filteredPosts = computed(() => {
  if (!posts.value) return [];
  if (!searchQuery.value) return posts.value;
  
  const query = searchQuery.value.toLowerCase();
  return posts.value.filter(post => 
    post.title?.toLowerCase().includes(query) ||
    post.description?.toLowerCase().includes(query) ||
    post.category?.toLowerCase().includes(query)
  );
});

useHead({
  title: "Orthopaedic Blog | Sports Medicine & Knee Health | Dr. Nihar Modi",
  meta: [
    {
      name: "description",
      content:
        "Expert insights on sports knee injuries, ACL tears, meniscus tears, and orthopaedic care — written by Dr. Nihar Modi, orthopaedic sports surgeon in Mumbai.",
    },
    {
      property: "og:title",
      content: "Orthopaedic Blog | Dr. Nihar Modi, Mumbai",
    },
    {
      property: "og:description",
      content:
        "Patient-friendly articles on knee health, sports injuries, and treatment options from a leading orthopaedic surgeon in Mumbai.",
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://drniharmodi.com/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://drniharmodi.com/blog' },
        ]
      })
    }
  ]
});
</script>

<template>
  <main>
    <section class="bg-white min-h-screen pb-20 md:pb-32 pt-32 md:pt-40">
      <div class="container mx-auto px-6 max-w-6xl">

        <!-- Breadcrumbs -->
        <nav class="flex items-center justify-center gap-2 text-sm font-medium text-gray-500 mb-10" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-primary transition-colors">Home</NuxtLink>
          <span class="text-gray-300 mx-1">/</span>
          <span class="text-gray-400" aria-current="page">Blog</span>
        </nav>

        <!-- Category badge + heading + subtitle -->
        <div class="mb-12 text-center">
          <span
            class="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase mb-4"
          >
            Sports Medicine & Orthopaedics
          </span>
          <h1 class="text-3xl md:text-5xl font-mirage text-primary mb-4">
            Latest Articles
          </h1>
          <p class="text-base md:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Understand orthopaedic health, sports injuries, joint and muscle pain, treatment options, and recovery with patient-friendly guidance from Dr. Nihar Modi, Orthopaedic Surgeon.
          </p>
        </div>

        <!-- Search Box -->
        <div class="max-w-xl mx-auto mb-12 relative">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search articles by title, topic, or keyword..."
            class="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 outline-none text-gray-700 shadow-sm"
          />
        </div>

        <!-- Blog grid -->
        <div
          v-if="filteredPosts && filteredPosts.length"
          class="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <article
            v-for="post in filteredPosts"
            :key="post.slug"
            class="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
          >
            <!-- Category chip -->
            <div class="px-6 pt-6 pb-0">
              <span
                class="inline-block text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full mb-4"
              >
                {{ post.category }}
              </span>
            </div>

            <!-- Content -->
            <div class="px-6 pb-6 flex flex-col flex-grow">
              <NuxtLink :to="`/blog/${getPostSlug(post)}`" class="block">
                <h3
                  class="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-200 leading-snug mb-3"
                >
                  {{ post.title }}
                </h3>
              </NuxtLink>

              <p class="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">
                {{ post.description }}
              </p>

              <!-- Meta row -->
              <div
                class="flex items-center justify-between pt-4 border-t border-gray-100"
              >
                <div class="flex items-center gap-2">
                  <!-- Avatar initials -->
                  <div
                    class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0"
                  >
                    NM
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-gray-700">
                      {{ post.author }}
                    </p>
                    <p class="text-xs text-gray-400">
                      {{
                        new Date(post.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      }}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 5l7 7-7 7"
                      />
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
        <div
          class="mt-20 bg-accent rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6"
        >
          <div
            class="w-20 h-20 rounded-full bg-primary shrink-0 flex items-center justify-center text-white text-2xl font-mirage"
          >
            NM
          </div>
          <div>
            <p
              class="text-xs font-bold text-secondary uppercase tracking-widest mb-1"
            >
              About the Author
            </p>
            <h4 class="text-xl font-bold text-primary mb-1">Dr. Nihar Modi</h4>
            <p class="text-sm text-gray-500 leading-relaxed">
              MS Orthopaedics · DNB · MNAMS · MRCS (England) · AOA Fellow
              (Sydney) · FIFA Diploma in Football Medicine. Dr. Nihar Modi is a
              sports medicine and joint replacement surgeon based in Mumbai,
              with specialist training in arthroscopic surgery of the knee and
              shoulder. These articles are written to help patients understand
              their conditions clearly and make informed decisions about their
              care.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
