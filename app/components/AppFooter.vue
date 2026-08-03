<script setup lang="ts">
// Footer component
//
</script>

<template>
  <footer class="text-white py-16 bg-gradient-to-br from-primary to-[#0a1626]">

    <div class="container mx-auto px-8 flex flex-col items-center text-center">
      <!-- Logo / Doctor Info -->
      <div class="flex items-center justify-center gap-4 mb-8">
        <img src="/logo.svg" alt="Logo" class="h-16 w-auto" />
        <div class="text-left">
          <div class="text-3xl font-mirage text-white leading-tight">
            <span
              class="text-xs font-sans uppercase tracking-widest text-white/50 block mb-[-2px]"
              >Doctor</span
            >
            Nihar Modi
          </div>
          <div
            class="text-[10px] font-sans text-white/50 tracking-wider uppercase mt-1"
          >
            M. S. Ortho | D.N.B. Ortho | MRCS (England) | Diploma in Football Medicine (FIFA) | Fellowship in Shoulder, Elbow & Knee Sports injuries, Arthroscopy and Arthroplasty (Australia, USA)
          </div>
        </div>
      </div>

      <!-- Socials -->
      <div class="flex items-center justify-center gap-6 opacity-80 mb-12">
        <UiSocialLink
          platform="linkedin"
          href="https://www.linkedin.com/in/dr-nihar-modi-8702672a4/"
          target="_blank"
          theme="dark"
        />
        <UiSocialLink
          platform="instagram"
          href="https://www.instagram.com/dr_sportho/"
          target="_blank"
          theme="dark"
        />
        <UiSocialLink
          platform="whatsapp"
          href="https://wa.me/919833066702"
          target="_blank"
          theme="dark"
        />
      </div>

      <!-- Links -->
      <div class="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12">
        <NuxtLink
          to="/"
          class="text-[15px] text-white hover:text-white/80 transition-colors"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/conditions"
          class="text-[15px] text-white hover:text-white/80 transition-colors"
          >Conditions Treated</NuxtLink
        >
        <NuxtLink
          to="/procedures"
          class="text-[15px] text-white hover:text-white/80 transition-colors"
          >Procedures</NuxtLink
        >
        <!-- <NuxtLink
          to="/blogs"
          class="text-[15px] text-white hover:text-white/80 transition-colors"
          >Blogs</NuxtLink
        > -->
        <NuxtLink
          to="/faqs"
          class="text-[15px] text-white hover:text-white/80 transition-colors"
          >FAQs</NuxtLink
        >
        <NuxtLink
          to="/testimonials"
          class="text-[15px] text-white hover:text-white/80 transition-colors"
          >Testimonials</NuxtLink
        >
        <NuxtLink
          to="/privacy-policy"
          class="text-[15px] text-white hover:text-white/80 transition-colors"
          >Privacy Policy</NuxtLink
        >
        <NuxtLink
          to="/terms-conditions"
          class="text-[15px] text-white hover:text-white/80 transition-colors"
          >Terms & Conditions</NuxtLink
        >
      </div>

      <!-- Contact & Copyright -->
      <div
        class="flex flex-col gap-2 text-[13px] text-white/60 mb-12 max-w-4xl leading-relaxed"
      >
        <!-- <div>Call: +91 98330 66702 &bull; Email: modi.nihar95@gmail.com</div> -->
        <div>&copy; 2026, Mool Tatvam Consulting LLP. All rights reserved.</div>
      </div>
    </div>
  </footer>
</template>
