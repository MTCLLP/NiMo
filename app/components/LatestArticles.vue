<script setup lang="ts">
const { data: posts } = await useAsyncData('home-latest-posts', () =>
  queryCollection('blog').order('date', 'DESC').limit(4).all()
)

const getPostSlug = (post: any) => post.path?.split('/').pop() ?? post.slug
</script>

<template>
  <section class="py-24 bg-accent">
    <div class="container mx-auto px-6 max-w-6xl">

      <!-- Section header -->
      <div class="text-center mb-14">
        <span class="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase mb-4">
          Patient Resources
        </span>
        <h2 class="text-3xl md:text-5xl font-mirage text-primary mb-4">
          Latest Articles
        </h2>
        <p class="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Clear, trustworthy guidance on orthopaedic health, sports injuries, and recovery — written by Dr. Nihar Modi.
        </p>
      </div>

      <!-- Article grid -->
      <div v-if="posts && posts.length" class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <NuxtLink
          v-for="post in posts"
          :key="post.slug"
          :to="`/blog/${getPostSlug(post)}`"
          class="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col p-6"
        >
          <!-- Category chip -->
          <span class="inline-block self-start text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full mb-4">
            {{ post.category }}
          </span>

          <!-- Title -->
          <h3 class="text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-200 leading-snug mb-3">
            {{ post.title }}
          </h3>

          <!-- Description -->
          <p class="text-gray-500 text-sm leading-relaxed mb-5 flex-grow line-clamp-2">
            {{ post.description }}
          </p>

          <!-- Meta row -->
          <div class="flex items-center justify-between pt-4 border-t border-gray-100">
            <span class="text-xs text-gray-400">
              {{ new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) }}
            </span>
            <span class="text-secondary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
              Read
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </NuxtLink>
      </div>

      <!-- View all button -->
      <div class="text-center">
        <NuxtLink
          to="/blog"
          class="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3.5 rounded-full hover:bg-secondary transition-all duration-300 shadow-sm hover:shadow-md text-sm tracking-wide"
        >
          View All Articles
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>
