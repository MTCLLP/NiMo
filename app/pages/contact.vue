<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Contact Dr. Nihar Modi | Orthopaedic Surgeon Santacruz West, Bandra & Mumbai',
  meta: [
    {
      name: 'description',
      content:
        'Consult Dr. Nihar Modi, specialist orthopaedic and sports surgeon in Santacruz West, Bandra West, Mahim, and Tardeo, Mumbai. Call +91 98330 66702 for knee, shoulder, and joint appointments.',
    },
    {
      property: 'og:title',
      content: 'Contact Dr. Nihar Modi | Orthopaedic Surgeon Mumbai',
    },
    {
      property: 'og:description',
      content:
        'Book an appointment with Dr. Nihar Modi across clinics and affiliated hospitals in Santacruz West, Bandra, Mahim, and Tardeo.',
    },
  ],
})

const consultationCentres = [
  {
    name: 'Primary Clinic (Santacruz / Khar)',
    area: 'Santacruz West & Khar West',
    description: 'Central OPD for sports injuries, knee pain, shoulder consultations, and initial clinical evaluations.',
    address: 'Santacruz West / Khar, Mumbai, Maharashtra 400054',
    mapLink: 'https://www.google.com/maps/place/Dr.+Nihar+Modi/@19.0556717,72.8321864,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c90040600f91:0x16abcd80ff8ae9f8!8m2!3d19.0556717!4d72.8321864!16s%2Fg%2F11whdlthql',
  },
  {
    name: 'Holy Family Hospital',
    area: 'Bandra West',
    description: 'Advanced arthroscopy, ligament reconstruction, and inpatient surgical procedures.',
    address: 'St. Andrew\'s Road, Bandra West, Mumbai, Maharashtra 400050',
    mapLink: 'https://maps.google.com/?q=Holy+Family+Hospital+Bandra+West+Mumbai',
  },
  {
    name: 'S. L. Raheja Hospital',
    area: 'Mahim West',
    description: 'A Fortis associate hospital offering comprehensive joint replacement and sports orthopaedic care.',
    address: 'Raheja Rugnalaya Marg, Mahim West, Mumbai, Maharashtra 400016',
    mapLink: 'https://maps.google.com/?q=SL+Raheja+Hospital+Mahim+Mumbai',
  },
  {
    name: 'Apollo Spectra Hospitals',
    area: 'Tardeo (South Mumbai)',
    description: 'Day-care keyhole surgery, minimally invasive joint procedures, and specialized recovery suites.',
    address: '156, Famous Cine Building, Tardeo Road, Mumbai, Maharashtra 400034',
    mapLink: 'https://maps.google.com/?q=Apollo+Spectra+Hospitals+Tardeo+Mumbai',
  },
]

useSchemaOrg([
  defineWebPage({
    name: 'Contact Dr. Nihar Modi - Orthopaedic Surgeon Mumbai',
    description: 'Contact information and hospital consultation locations for Dr. Nihar Modi across Mumbai.',
  }),
  {
    '@type': 'MedicalClinic',
    name: 'Dr. Nihar Modi - Orthopaedic & Sports Surgery Clinic',
    telephone: '+91 98330 66702',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Santacruz West / Bandra West',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400054',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.0556717',
      longitude: '72.8321864',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
  },
])
</script>

<template>
  <main>
    <PageHeader 
      title="Contact Us" 
      :breadcrumbs="[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]"
    />
    <div class="pt-16 pb-24 bg-accent/10 min-h-[80vh]">
      <div class="container mx-auto px-6 md:px-8 max-w-6xl">

        <!-- Top Contact Card with Map -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-16">
        
          <!-- Contact Information -->
          <div class="p-8 md:p-14 flex flex-col justify-center">
            <h2 class="text-3xl font-mirage text-secondary mb-2">Get in Touch</h2>
            <p class="text-xs text-gray-500 mb-8 tracking-wider">Maharashtra Medical Council Reg. No. MMC 2019/04/2851</p>
            
            <div class="space-y-6 mb-10">
              <!-- Phone -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <img width="20" height="20" src="/icon-phone-dr-nihar-modi.svg" alt="Phone" class="w-5 h-5" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800 text-sm uppercase tracking-wider text-gray-500">Phone Consultation</h3>
                  <a href="tel:+919833066702" class="text-gray-900 font-bold hover:text-primary transition-colors text-lg md:text-xl">+91 98330 66702</a>
                </div>
              </div>

              <!-- WhatsApp -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <img width="20" height="20" src="/icon-whatsapp-alt-dr-nihar-modi.svg" alt="WhatsApp" class="w-5 h-5" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800 text-sm uppercase tracking-wider text-gray-500">WhatsApp Appointment</h3>
                  <a href="https://wa.me/919833066702" target="_blank" rel="noopener noreferrer" class="text-gray-900 font-bold hover:text-primary transition-colors text-lg md:text-xl">+91 98330 66702</a>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800 text-sm uppercase tracking-wider text-gray-500">Email Enquiries</h3>
                  <a href="mailto:modi.nihar95@gmail.com" class="text-gray-800 hover:text-primary transition-colors text-base font-medium">modi.nihar95@gmail.com</a>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div>
              <h3 class="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wider">Connect Online</h3>
              <div class="flex gap-4">
                <UiSocialLink platform="linkedin" href="https://www.linkedin.com/in/dr-nihar-modi-8702672a4/" target="_blank" />
                <UiSocialLink platform="instagram" href="https://www.instagram.com/dr_sportho/" target="_blank" />
                <UiSocialLink platform="youtube" href="https://www.youtube.com/@dr_sportho" target="_blank" />
                <UiSocialLink platform="whatsapp" href="https://wa.me/919833066702" target="_blank" />
              </div>
            </div>
          </div>

          <!-- Google Map -->
          <div class="h-[400px] lg:h-auto w-full relative bg-gray-100 flex flex-col">
            <iframe 
              src="https://maps.google.com/maps?q=19.0556717,72.8321864&t=&z=17&ie=UTF8&iwloc=&output=embed" 
              class="flex-grow w-full h-full border-0 min-h-[350px]" 
              allowfullscreen="true" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="Dr. Nihar Modi Clinic Location Map">
            </iframe>
            <div class="bg-secondary p-5 text-center text-white flex justify-center items-center">
              <a href="https://www.google.com/maps/place/Dr.+Nihar+Modi/@19.0556717,72.8321864,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c90040600f91:0x16abcd80ff8ae9f8!8m2!3d19.0556717!4d72.8321864!16s%2Fg%2F11whdlthql" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 hover:text-primary font-medium transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Open Clinic Location in Google Maps
              </a>
            </div>
          </div>
          
        </div>

        <!-- Consultation & Hospital Catchment Locations -->
        <div class="mt-12">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-mirage text-gray-900 mb-3">Consultation & Hospital Locations</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Dr. Nihar Modi consults and performs surgeries across premier hospitals and clinics in Mumbai, providing accessible orthopaedic care across the Western Suburbs and South Mumbai.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="(loc, idx) in consultationCentres"
              :key="idx"
              class="bg-white rounded-xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs uppercase font-bold tracking-wider text-primary px-3 py-1 rounded-full bg-accent/20">
                    {{ loc.area }}
                  </span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  {{ loc.name }}
                </h3>
                <p class="text-sm text-gray-600 mb-4 leading-relaxed">
                  {{ loc.description }}
                </p>
                <p class="text-xs text-gray-500 flex items-start gap-2 mb-6">
                  <svg class="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>{{ loc.address }}</span>
                </p>
              </div>

              <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  :href="loc.mapLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1.5"
                >
                  Get Directions
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
                <a
                  href="tel:+919833066702"
                  class="text-xs font-semibold px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-gray-800 rounded-md transition-colors"
                >
                  Book OPD
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>
