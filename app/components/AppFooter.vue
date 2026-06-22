<script setup lang="ts">
// Footer component
//
</script>

<template>
  <footer
    class="text-white pt-20 pb-8"
    style="
      background: repeating-linear-gradient(
        135deg,
        #1b324c 0px,
        #1b324c 15px,
        #15273b 15px,
        #15273b 30px
      );
    "
  >
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- About Column -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <img
              src="/dr-nihar-modi-footer.png"
              alt="Doctor"
              class="w-12 h-12 rounded-full object-cover object-top border-2 border-white/20"
            />
            <div>
              <div class="text-xl font-mirage text-white leading-tight">
                <span
                  class="text-[10px] font-sans uppercase tracking-widest text-white/50 block mb-[-2px]"
                  >Doctor</span
                >
                Nihar Modi
              </div>
              <div
                class="text-[9px] font-sans text-white/50 tracking-wider uppercase mt-1"
              >
                MS (Orth) DNB (Orth), MNAMS
              </div>
            </div>
          </div>
          <!-- <h4 class="text-sm font-semibold mb-2">About</h4> -->
          <p class="text-xs text-white/60 leading-relaxed">
            Dedicated Orthopaedic surgeon specializing in restoring mobility and
            improving quality of life. Expertise in treating sports injuries,
            degenerative joint diseases, fractures, and trauma. Committed to
            individualized care, integrating advanced techniques to achieve
            optimal results. Enthusiastic about continuous learning.
          </p>
        </div>

        <!-- Links Column -->
        <div class="flex flex-col gap-3">
          <NuxtLink
            to="/"
            class="text-sm text-white/80 hover:text-white transition-colors"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/conditions"
            class="text-sm text-white/80 hover:text-white transition-colors"
            >Conditions Treated</NuxtLink
          >
          <NuxtLink
            to="/procedures"
            class="text-sm text-white/80 hover:text-white transition-colors"
            >Procedures</NuxtLink
          >
          <NuxtLink
            to="/blogs"
            class="text-sm text-white/80 hover:text-white transition-colors"
            >Blogs</NuxtLink
          >
          <NuxtLink
            to="/patient-stories"
            class="text-sm text-white/80 hover:text-white transition-colors"
            >Testimonials</NuxtLink
          >
        </div>

        <!-- Contact Column -->
        <div class="flex flex-col gap-6">
          <div>
            <h4 class="text-sm font-semibold mb-1">WhatsApp Consultation</h4>
            <a
              href="https://wa.me/919833066702"
              target="_blank"
              class="text-xs text-secondary hover:underline"
              >Click here</a
            >
          </div>
          <div>
            <h4 class="text-sm font-semibold mb-1">Contact</h4>
            <p class="text-xs text-white/80">Call: +91 98330 66702</p>
          </div>
          <div>
            <h4 class="text-sm font-semibold mb-1">Email</h4>
            <p class="text-xs text-white/80">modi.nihar95@gmail.com</p>
          </div>
          <div>
            <h4 class="text-sm font-semibold mb-1">FAQs</h4>
            <a href="#" class="text-xs text-white/80 hover:text-white"
              >View FAQs</a
            >
          </div>
        </div>

        <!-- Map Placeholder -->
        <a
          href="https://www.google.com/maps/place/Dr.+Nihar+Modi/@19.0556717,72.8321864,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c90040600f91:0x16abcd80ff8ae9f8!8m2!3d19.0556717!4d72.8321864!16s%2Fg%2F11whdlthql?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          class="block bg-white/10 rounded-lg p-2 h-40 relative overflow-hidden hover:bg-white/20 transition-colors"
        >
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <svg
              class="w-8 h-8 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <!-- In real app, put iframe or actual map image here -->
          <div
            class="w-full h-full bg-gray-200/20 rounded border border-white/20"
            style="
              background-image: radial-gradient(
                circle,
                #ffffff22 2px,
                transparent 2px
              );
              background-size: 10px 10px;
            "
          ></div>
        </a>
      </div>

      <!-- Bottom Footer -->
      <div
        class="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6"
      >
        <p class="text-xs text-white/50 mb-4 md:mb-0">
          &copy; 2026, Mool Tatvam Consulting LLP. All rights reserved.
        </p>

        <!-- Socials -->
        <div class="flex items-center gap-4 mb-4 md:mb-0">
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

        <div class="flex gap-6 text-xs text-white/50">
          <NuxtLink to="/privacy-policy" class="hover:text-white transition-colors">Privacy policy</NuxtLink>
          <NuxtLink to="/terms-conditions" class="hover:text-white transition-colors">Terms and Conditions</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
