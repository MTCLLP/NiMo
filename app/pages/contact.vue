<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Contact Us | Dr. Nihar Modi',
  meta: [
    { name: 'description', content: 'Get in touch with Dr. Nihar Modi for orthopaedic consultations, appointments, and queries.' }
  ]
})
</script>

<template>
  <div class="pt-40 pb-24 bg-accent/10 min-h-[80vh]">
    <div class="container mx-auto px-8 max-w-6xl">
      <UiSectionTitle class="mb-16">Get in Touch</UiSectionTitle>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        <!-- Contact Information -->
        <div class="p-10 md:p-14 flex flex-col justify-center">
          <h3 class="text-3xl font-mirage text-secondary mb-10">Contact Information</h3>
          
          <div class="space-y-8 mb-12">
            <!-- Phone -->
            <div class="flex items-start gap-5">
              <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <img src="/icon-phone-dr-nihar-modi.svg" alt="Phone" class="w-5 h-5" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 mb-1 text-lg">Phone</h4>
                <a href="tel:+919833066702" class="text-gray-600 hover:text-primary transition-colors text-lg">+91 98330 66702</a>
              </div>
            </div>

            <!-- WhatsApp -->
            <div class="flex items-start gap-5">
              <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <img src="/icon-whatsapp-alt-dr-nihar-modi.svg" alt="WhatsApp" class="w-5 h-5" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 mb-1 text-lg">WhatsApp</h4>
                <a href="https://wa.me/919833066702" target="_blank" class="text-gray-600 hover:text-primary transition-colors text-lg">+91 98330 66702</a>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start gap-5">
              <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 mb-1 text-lg">Email</h4>
                <a href="mailto:modi.nihar95@gmail.com" class="text-gray-600 hover:text-primary transition-colors text-lg">modi.nihar95@gmail.com</a>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div>
            <h4 class="font-semibold text-gray-800 mb-4 text-lg">Connect with us</h4>
            <div class="flex gap-4">
              <UiSocialLink platform="linkedin" href="https://www.linkedin.com/in/dr-nihar-modi-8702672a4/" target="_blank" />
              <UiSocialLink platform="instagram" href="https://www.instagram.com/dr_sportho/" target="_blank" />
              <UiSocialLink platform="whatsapp" href="https://wa.me/919833066702" target="_blank" />
            </div>
          </div>
        </div>

        <!-- Google Map -->
        <div class="h-[400px] lg:h-auto w-full relative bg-gray-100 flex flex-col">
          <iframe 
            src="https://maps.google.com/maps?q=19.0556717,72.8321864&t=&z=17&ie=UTF8&iwloc=&output=embed" 
            class="flex-grow w-full h-full border-0 min-h-[400px]" 
            allowfullscreen="true" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          <div class="bg-secondary p-6 text-center text-white flex justify-center items-center">
            <a href="https://www.google.com/maps/place/Dr.+Nihar+Modi/@19.0556717,72.8321864,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c90040600f91:0x16abcd80ff8ae9f8!8m2!3d19.0556717!4d72.8321864!16s%2Fg%2F11whdlthql?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 hover:text-primary font-medium transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Open in Google Maps
            </a>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
