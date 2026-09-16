<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const props = withDefaults(
  defineProps<{
    title: string
    description?: string
    slug: string
    variant?: 'banner' | 'compact'
  }>(),
  {
    variant: 'banner',
  }
)

const copied = ref(false)
const canShare = ref(false)

const shareUrl = computed(() => {
  if (import.meta.client && typeof window !== 'undefined') {
    return window.location.href
  }
  return `https://drniharmodi.com/blog/${props.slug}`
})

const whatsappUrl = computed(() => {
  const text = `${props.title}\n\nRead more from Dr. Nihar Modi:\n${shareUrl.value}`
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`
})

const linkedinUrl = computed(() => {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl.value)}`
})

const twitterUrl = computed(() => {
  const text = `${props.title} — by Dr. Nihar Modi`
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl.value)}`
})

const emailUrl = computed(() => {
  const subject = `Article: ${props.title}`
  const body = `Hi,\n\nI thought you might find this article on orthopaedic health helpful:\n\n"${props.title}"\n${props.description ? `\n${props.description}\n` : ''}\nRead the full guide here: ${shareUrl.value}\n\nDr. Nihar Modi — Orthopaedic Sports Surgeon`
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
})

onMounted(() => {
  if (typeof navigator !== 'undefined' && 'share' in navigator) {
    canShare.value = true
  }
})

const handleWebShare = async () => {
  if (!navigator.share) return
  try {
    await navigator.share({
      title: props.title,
      text: props.description || props.title,
      url: shareUrl.value,
    })
  } catch (err: any) {
    // User cancelled/aborted share sheet - no action needed
    if (err?.name !== 'AbortError') {
      console.error('Error invoking Web Share API:', err)
    }
  }
}

const copyToClipboard = async () => {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(shareUrl.value)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2500)
    }
  } catch (err) {
    console.error('Failed to copy to clipboard:', err)
  }
}
</script>

<template>
  <!-- Compact variant (header / inline) -->
  <div v-if="variant === 'compact'" class="flex items-center gap-2 flex-wrap">
    <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Share:</span>

    <!-- Native Web Share API (mobile/supported devices) -->
    <button
      v-if="canShare"
      type="button"
      @click="handleWebShare"
      class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary text-white text-xs font-medium hover:bg-secondary transition-all cursor-pointer shadow-xs"
      title="Share via device share sheet"
      aria-label="Share via device share sheet"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
      <span>Share</span>
    </button>

    <!-- WhatsApp -->
    <a
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="w-7 h-7 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all duration-200"
      aria-label="Share on WhatsApp"
      title="Share on WhatsApp"
    >
      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.06c-1.52 0-3.02-.41-4.32-1.18l-.31-.18-3.21.84.86-3.13-.2-.32a8.03 8.03 0 01-1.23-4.28c0-4.47 3.64-8.11 8.11-8.11 2.17 0 4.2 1.05 5.73 2.58a7.99 7.99 0 012.38 5.72c0 4.48-3.64 8.06-8.11 8.06zm4.44-6.07c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.41-.41-.56-.42h-.48c-.16 0-.43.06-.66.31-.22.24-.87.85-.87 2.08 0 1.23.9 2.42 1.02 2.58.12.16 1.76 2.69 4.26 3.77.6.26 1.06.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z"/>
      </svg>
    </a>

    <!-- LinkedIn -->
    <a
      :href="linkedinUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="w-7 h-7 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition-all duration-200"
      aria-label="Share on LinkedIn"
      title="Share on LinkedIn"
    >
      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
      </svg>
    </a>

    <!-- X (Twitter) -->
    <a
      :href="twitterUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="w-7 h-7 rounded-full bg-black/5 text-gray-800 hover:bg-black hover:text-white flex items-center justify-center transition-all duration-200"
      aria-label="Share on X"
      title="Share on X"
    >
      <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </a>

    <!-- Email -->
    <a
      :href="emailUrl"
      class="w-7 h-7 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-200"
      aria-label="Share via Email"
      title="Share via Email"
    >
      <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </a>

    <!-- Copy Link -->
    <button
      type="button"
      @click="copyToClipboard"
      class="w-7 h-7 rounded-full bg-gray-100 text-gray-600 hover:bg-secondary hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
      :title="copied ? 'Copied to clipboard!' : 'Copy link'"
      :aria-label="copied ? 'Copied to clipboard!' : 'Copy link'"
    >
      <svg v-if="copied" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    </button>
  </div>

  <!-- Banner variant (bottom of article) -->
  <div
    v-else
    class="my-10 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-accent via-white to-accent/60 border border-gray-100 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
  >
    <div class="flex items-start md:items-center gap-4">
      <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </div>
      <div>
        <h3 class="text-base font-bold text-primary mb-1">
          Share this article
        </h3>
        <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
          Help friends and athletes stay informed on injury recovery and joint care.
        </p>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex items-center gap-2.5 flex-wrap w-full md:w-auto">
      <!-- Web Share API (native share sheet on mobile & supported browsers) -->
      <button
        v-if="canShare"
        type="button"
        @click="handleWebShare"
        class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-secondary transition-all duration-200 shadow-sm cursor-pointer"
        aria-label="Open device share sheet"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        <span>Share</span>
      </button>

      <!-- WhatsApp -->
      <a
        :href="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
        aria-label="Share on WhatsApp"
        title="Share on WhatsApp"
      >
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.06c-1.52 0-3.02-.41-4.32-1.18l-.31-.18-3.21.84.86-3.13-.2-.32a8.03 8.03 0 01-1.23-4.28c0-4.47 3.64-8.11 8.11-8.11 2.17 0 4.2 1.05 5.73 2.58a7.99 7.99 0 012.38 5.72c0 4.48-3.64 8.06-8.11 8.06zm4.44-6.07c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.41-.41-.56-.42h-.48c-.16 0-.43.06-.66.31-.22.24-.87.85-.87 2.08 0 1.23.9 2.42 1.02 2.58.12.16 1.76 2.69 4.26 3.77.6.26 1.06.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z"/>
        </svg>
      </a>

      <!-- LinkedIn -->
      <a
        :href="linkedinUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="w-10 h-10 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
      >
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
        </svg>
      </a>

      <!-- X (Twitter) -->
      <a
        :href="twitterUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="w-10 h-10 rounded-full bg-black/5 text-gray-800 hover:bg-black hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
        aria-label="Share on X"
        title="Share on X"
      >
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>

      <!-- Email -->
      <a
        :href="emailUrl"
        class="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
        aria-label="Share via Email"
        title="Share via Email"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </a>

      <!-- Copy Link button -->
      <button
        type="button"
        @click="copyToClipboard"
        class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-gray-200 bg-white hover:border-secondary hover:text-secondary text-gray-700 text-xs font-semibold transition-all duration-200 shadow-xs cursor-pointer"
        :aria-label="copied ? 'Link copied to clipboard' : 'Copy article link'"
      >
        <svg v-if="copied" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        <span>{{ copied ? 'Copied!' : 'Copy Link' }}</span>
      </button>
    </div>
  </div>
</template>
