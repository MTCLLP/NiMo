<script setup lang="ts">
import { ref } from "vue";

const isSidebarOpen = ref(false);
</script>

<template>
  <header
    class="absolute top-0 left-0 w-full z-[100] flex items-center justify-between px-8 py-6"
  >
    <!-- Logo -->
    <NuxtLink
      to="/"
      class="flex items-center hover:opacity-80 transition-opacity"
    >
      <div class="text-2xl font-mirage text-primary leading-tight">
        <span
          class="text-sm font-sans uppercase tracking-widest text-gray-500 block mb-[-4px]"
          >Doctor</span
        >
        Nihar Modi
        <span
          class="text-xs font-sans text-gray-500 block mt-1 tracking-wider uppercase"
          >MS (Orth) DNB (Orth), MNAMS</span
        >
      </div>
    </NuxtLink>

    <!-- Right side navigation -->
    <div class="flex flex-col items-end gap-3">
      <!-- Top Social Icons -->
      <div class="hidden md:flex gap-3 items-center">
        <UiSocialLink
          platform="linkedin"
          href="https://www.linkedin.com/in/dr-nihar-modi-8702672a4/"
          target="_blank"
        />
        <UiSocialLink
          platform="instagram"
          href="https://www.instagram.com/dr_sportho/"
          target="_blank"
        />
        <!-- <UiSocialLink platform="youtube" href="#" /> -->
        <UiSocialLink
          platform="whatsapp"
          href="https://wa.me/919833066702"
          target="_blank"
        />
      </div>

      <div class="flex items-center gap-8">
        <!-- Nav Links -->
        <nav
          class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700"
        >
          <NuxtLink to="/about" class="hover:text-primary transition-colors">About</NuxtLink>
          <a
            href="tel:+919833066702"
            class="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <img
              src="/icon-phone-dr-nihar-modi.svg"
              alt="Phone"
              class="w-4 h-4"
            />
            +91 98330 66702
          </a>
          <a
            href="https://www.google.com/maps/place/Dr.+Nihar+Modi/@19.0556717,72.8321864,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c90040600f91:0x16abcd80ff8ae9f8!8m2!3d19.0556717!4d72.8321864!16s%2Fg%2F11whdlthql?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <svg
              class="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            Google Map
          </a>
        </nav>

        <!-- Hamburger -->
        <button @click="isSidebarOpen = true" class="p-2 ml-4 cursor-pointer">
          <img
            src="/icon-hamburger-dr-nihar-modi.svg"
            alt="Menu"
            class="w-6 h-6"
          />
        </button>
      </div>
    </div>

    <!-- Sidebar Overlay -->
    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 bg-black/50 z-[60] transition-opacity"
      @click="isSidebarOpen = false"
    ></div>

    <!-- Sidebar Menu -->
    <div
      class="fixed top-0 right-0 h-full w-80 bg-white z-[70] transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl"
      :class="isSidebarOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <!-- Close Button -->
      <div class="flex justify-end p-6">
        <button
          @click="isSidebarOpen = false"
          class="p-2 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
        >
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Menu Items -->
      <div class="flex-grow flex flex-col px-8 py-4 gap-6 text-lg font-medium text-gray-800">
        <NuxtLink to="/about" @click="isSidebarOpen = false" class="hover:text-primary transition-colors border-b border-gray-100 pb-4">About</NuxtLink>
        <NuxtLink to="/services" @click="isSidebarOpen = false" class="hover:text-primary transition-colors border-b border-gray-100 pb-4">Services</NuxtLink>
        <NuxtLink to="/patient-stories" @click="isSidebarOpen = false" class="hover:text-primary transition-colors border-b border-gray-100 pb-4">Patient Stories</NuxtLink>
        <NuxtLink to="/faqs" @click="isSidebarOpen = false" class="hover:text-primary transition-colors border-b border-gray-100 pb-4">FAQs</NuxtLink>
        <NuxtLink to="/contact" @click="isSidebarOpen = false" class="hover:text-primary transition-colors border-b border-gray-100 pb-4">Contact</NuxtLink>
      </div>

      <!-- Social Media Icons in a row -->
      <div class="p-8 pb-12">
        <div class="flex gap-4 items-center">
          <UiSocialLink
            platform="linkedin"
            href="https://www.linkedin.com/in/dr-nihar-modi-8702672a4/"
            target="_blank"
          />
          <UiSocialLink
            platform="instagram"
            href="https://www.instagram.com/dr_sportho/"
            target="_blank"
          />
          <!-- <UiSocialLink platform="youtube" href="#" /> -->
          <UiSocialLink
            platform="whatsapp"
            href="https://wa.me/919833066702"
            target="_blank"
          />
        </div>
      </div>
    </div>
  </header>
</template>
