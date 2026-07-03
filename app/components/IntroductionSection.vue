<script setup lang="ts"></script>

<template>
  <section class="py-24 relative overflow-hidden bg-white">
    <!-- Decorative background elements -->
    <div class="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl opacity-60"></div>
    <div class="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl opacity-60"></div>
    
    <div class="container mx-auto px-8 max-w-7xl relative z-10">
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start">
        <!-- Image Column -->
        <div class="w-full lg:w-5/12 relative group mt-4 lg:mt-0">
          <!-- Offset Decorative Box -->
          <div class="absolute inset-0 bg-primary/5 rounded-2xl transform translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6 lg:group-hover:translate-x-8 lg:group-hover:translate-y-8 -z-10"></div>
          
          <!-- Image -->
          <div class="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/10 border border-gray-100 bg-white">
            <img
              src="/dr-nihar-modi.webp"
              alt="Dr. Nihar Modi"
              class="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          <!-- Floating Badge -->
          <div class="absolute -bottom-6 -left-2 lg:-left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <div>
              <div class="text-sm font-bold text-gray-800">Expert Care</div>
              <div class="text-xs text-gray-500">Orthopaedic Surgeon</div>
            </div>
          </div>
        </div>

        <!-- Text Column -->
        <div class="w-full lg:w-7/12 flex flex-col pt-12 lg:pt-4">
          <div class="mb-4 flex items-center gap-4">
            <span class="w-12 h-px bg-primary/30"></span>
            <span class="text-sm font-bold tracking-widest text-primary uppercase">About Dr. Modi</span>
          </div>
          
          <h2 class="text-3xl lg:text-4xl xl:text-5xl font-mirage text-gray-900 mb-8 leading-tight">
            Moving with <span class="text-primary italic">Confidence</span> &amp;<br class="hidden lg:block" /> <span class="text-primary italic">Independence</span>
          </h2>

          <div class="prose prose-lg text-gray-600 max-w-none">
            <p class="text-lg lg:text-xl leading-relaxed text-gray-800 font-medium mb-6 border-l-4 border-primary/20 pl-4">
              Movement is more than just mobility, it is independence, confidence, and quality of life. As an Orthopaedic Surgeon, my goal is to help patients overcome pain, recover from injury, and return to the activities they enjoy most.
            </p>
            
            <p class="mb-6 leading-relaxed text-sm lg:text-base">
              I specialise in sports injuries, arthroscopy (keyhole surgery), and joint replacement, offering treatment tailored to everyone’s needs and lifestyle. My approach combines the latest evidence-based techniques with compassionate, patient-centred care, ensuring that every patient understands their condition and is actively involved in the treatment journey.
            </p>
            
            <p class="mb-8 leading-relaxed text-sm lg:text-base">
              I believe that successful treatment is not simply about performing surgery. It begins with an accurate diagnosis, clear communication, and choosing the most appropriate treatment, whether that involves rehabilitation, minimally invasive procedures, or surgery when truly necessary. My commitment is to provide honest advice, precise care, and long-term solutions that help every patient move with confidence and return to living an active, fulfilling life.
            </p>
          </div>

          <div class="mt-2">
            <UiButton to="/about" variant="primary" class="group shadow-md shadow-primary/20">
              Read More
              <svg class="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </UiButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
