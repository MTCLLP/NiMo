<script setup lang="ts">
// Header component
</script>

<template>
  <header class="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6">
    <!-- Logo -->
    <div class="flex items-center">
      <div class="text-2xl font-mirage text-primary leading-tight">
        <span class="text-sm font-sans uppercase tracking-widest text-gray-500 block mb-[-4px]">Doctor</span>
        Nihar Modi
        <span class="text-xs font-sans text-gray-500 block mt-1 tracking-wider uppercase">MS (Orth) DNB (Orth), MNAMS</span>
      </div>
    </div>

    <!-- Right side navigation -->
    <div class="flex items-center gap-8">
      <!-- Top Social Icons (if any, as per PDF) -->
      
      <!-- Nav Links -->
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
        <a href="#about" class="hover:text-primary transition-colors">About</a>
        <a href="tel:1234567890" class="flex items-center gap-2 hover:text-primary transition-colors">
          <img src="/icon-phone-dr-nihar-modi.svg" alt="Phone" class="w-4 h-4" />
          123-456-7890
        </a>
        <a href="#map" class="flex items-center gap-2 hover:text-primary transition-colors">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          Google Map
        </a>
      </nav>

      <!-- Hamburger -->
      <button class="p-2 ml-4">
        <img src="/icon-hamburger-dr-nihar-modi.svg" alt="Menu" class="w-6 h-6" />
      </button>
    </div>
  </header>
</template>
