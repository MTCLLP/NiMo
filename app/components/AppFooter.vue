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
          <h4 class="text-sm font-semibold mb-2">About</h4>
          <p class="text-xs text-white/60 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            finibus ac lacus ut sodales. Etiam nisi mauris, pellentesque sed dui
            vel, placerat imperdiet nunc. Fusce nec urna dolor. Curabitur congue
            dui ut neque eleifend.
          </p>
        </div>

        <!-- Links Column -->
        <div class="flex flex-col gap-3">
          <a
            href="#"
            class="text-sm text-white/80 hover:text-white transition-colors"
            >Home</a
          >
          <a
            href="#"
            class="text-sm text-white/80 hover:text-white transition-colors"
            >Conditions Treated</a
          >
          <a
            href="#"
            class="text-sm text-white/80 hover:text-white transition-colors"
            >Procedures</a
          >
          <a
            href="#"
            class="text-sm text-white/80 hover:text-white transition-colors"
            >Blogs</a
          >
          <a
            href="#"
            class="text-sm text-white/80 hover:text-white transition-colors"
            >Testimonials</a
          >
        </div>

        <!-- Contact Column -->
        <div class="flex flex-col gap-6">
          <div>
            <h4 class="text-sm font-semibold mb-1">WhatsApp Consultation</h4>
            <a href="#" class="text-xs text-secondary hover:underline"
              >Click here</a
            >
          </div>
          <div>
            <h4 class="text-sm font-semibold mb-1">Contact</h4>
            <p class="text-xs text-white/80">Call: +91 98330 66702</p>
          </div>
          <div>
            <h4 class="text-sm font-semibold mb-1">Email</h4>
            <p class="text-xs text-white/80">niharmodi@gmail.com</p>
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
          href="https://share.google/wDt78U5vGNSPQgzbA"
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
          <a
            href="#"
            class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </a>
          <!-- ... Add other icons as needed ... -->
        </div>

        <div class="flex gap-6 text-xs text-white/50">
          <a href="#" class="hover:text-white">Privacy policy</a>
          <a href="#" class="hover:text-white">Terms and Conditions</a>
        </div>
      </div>
    </div>
  </footer>
</template>
