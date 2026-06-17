<script setup lang="ts">
// Placeholders since no patient images were explicitly provided
const testimonials = [
  { img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', active: false },
  { img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', active: false },
  { 
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80', 
    active: true,
    title: 'Vestibulum bibendum',
    subtitle: 'Vivamus mollis mauris libero',
    rating: 5,
    date: '14th May 2026',
    text: 'I was unable to lift my arm due to frozen shoulder. After treatment and guided physiotherapy, I gradually regained movement and could sleep comfortably again.'
  },
  { img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80', active: false },
  { img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', active: false }
]
</script>

<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-8">
      <h2 class="text-4xl lg:text-5xl font-mirage text-gray-800 text-center mb-16">
        Patient Testimonials
      </h2>
      
      <div class="flex items-center justify-center gap-4">
        <template v-for="(test, idx) in testimonials" :key="idx">
          
          <div v-if="!test.active" class="w-32 h-40 md:w-48 md:h-64 rounded-xl overflow-hidden flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
            <img :src="test.img" class="w-full h-full object-cover grayscale" alt="Patient" />
          </div>

          <!-- Active State -->
          <div v-else class="flex flex-col md:flex-row bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl mx-4 transform scale-105 z-10">
            <!-- Left Card -->
            <div class="w-full md:w-1/3 bg-white p-6 md:p-8 flex flex-col justify-end">
               <h3 class="text-xl font-medium text-gray-800">{{ test.title }}</h3>
               <p class="text-sm text-gray-500 mb-4">{{ test.subtitle }}</p>
               <div class="flex text-blue-500 mb-2">
                 <svg v-for="i in test.rating" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
               </div>
               <p class="text-xs text-gray-400">{{ test.date }}</p>
            </div>
            
            <!-- Middle Image -->
            <div class="w-full md:w-1/3 h-64 md:h-auto relative">
              <img :src="test.img" class="w-full h-full object-cover" alt="Active Patient" />
            </div>

            <!-- Right Text -->
            <div class="w-full md:w-1/3 bg-gray-50 p-6 md:p-8 flex flex-col justify-center relative">
               <div class="absolute top-4 left-4 text-6xl text-gray-200 font-serif leading-none rotate-180">"</div>
               <p class="text-sm text-gray-600 leading-relaxed relative z-10">
                 {{ test.text }}
               </p>
            </div>
          </div>
          
        </template>
      </div>
    </div>
  </section>
</template>
