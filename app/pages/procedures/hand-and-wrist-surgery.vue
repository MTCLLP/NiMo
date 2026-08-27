<script setup lang="ts">
import { useHead } from "#imports";

useHead({
  title: "Hand & Wrist Surgeon in Mumbai | Dr. Nihar Modi",
  meta: [
    {
      name: "description",
      content:
        "Specialized hand and wrist surgery in Mumbai. Dr. Nihar Modi treats carpal tunnel, fractures, tendon injuries, and arthritis of the hand and wrist.",
    },
  ],
});
</script>

<template>
  <main>
    <PageHeader
      title="Hand & Wrist Surgery"
      :breadcrumbs="[
        { name: 'Home', path: '/' },
        { name: 'Procedures', path: '#' },
        {
          name: 'Hand & Wrist Surgery',
          path: '/procedures/hand-and-wrist-surgery',
        },
      ]"
    />

    <div class="bg-white min-h-screen pb-20 md:pb-32 pt-12 md:pt-24">
      <section class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-3xl md:text-5xl font-mirage text-primary mb-8">
          Hand & Wrist Care
        </h2>

        <div class="prose prose-lg max-w-none text-gray-600 space-y-8">
          <p>
            Your hands and wrists are intricate structures composed of bones, joints, ligaments, tendons, muscles, and nerves. Because we rely on them for almost everything we do, injuries or conditions affecting the hand and wrist can significantly impact your daily life.
          </p>
          <p>
            Dr. Nihar Modi offers comprehensive evaluation and treatment for a variety of hand and wrist problems, ranging from sports injuries to repetitive strain conditions.
          </p>

          <h2 class="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Conditions We Treat
          </h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Carpal Tunnel Syndrome:</strong> Relieving pressure on the median nerve to reduce pain, numbness, and tingling.</li>
            <li><strong>Fractures:</strong> Treating broken bones in the hand, fingers, and wrist (e.g., distal radius fractures).</li>
            <li><strong>Tendon Injuries:</strong> Repairing cut or torn tendons to restore movement.</li>
            <li><strong>Trigger Finger:</strong> Treating inflammation that causes fingers to catch or lock.</li>
            <li><strong>Arthritis:</strong> Managing osteoarthritis or rheumatoid arthritis pain through medication, splinting, or surgery.</li>
            <li><strong>Ganglion Cysts:</strong> Removing benign fluid-filled lumps that form along joints or tendons.</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Treatment Philosophy
          </h2>
          <p>
            The goal is always to restore maximum function with the least invasive approach possible. Many hand and wrist conditions can be successfully treated with conservative measures such as splinting, medications, or hand therapy. When surgery is necessary, advanced microsurgical techniques are utilized for precise repair and faster recovery.
          </p>
        </div>

        
        <div class="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Explore Related Procedures</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NuxtLink to="/procedures/shoulder-arthroscopy" class="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-primary font-medium group">
              <span class="flex-grow">Shoulder Arthroscopy</span>
              <span class="text-gray-400 group-hover:text-primary transition-colors">→</span>
            </NuxtLink>
            <NuxtLink to="/procedures/ligament-reconstruction-mumbai" class="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-primary font-medium group">
              <span class="flex-grow">Ligament Reconstruction</span>
              <span class="text-gray-400 group-hover:text-primary transition-colors">→</span>
            </NuxtLink>
            <NuxtLink to="/procedures/shoulder-dislocation-treatment" class="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-primary font-medium group">
              <span class="flex-grow">Shoulder Dislocation</span>
              <span class="text-gray-400 group-hover:text-primary transition-colors">→</span>
            </NuxtLink>
            <NuxtLink to="/procedures/hand-and-wrist-surgery" class="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-primary font-medium group">
              <span class="flex-grow">Hand & Wrist Surgery</span>
              <span class="text-gray-400 group-hover:text-primary transition-colors">→</span>
            </NuxtLink>
          </div>
        </div>

<div
          class="mt-16 flex flex-col items-center justify-center text-center"
        >
          <h3 class="text-2xl font-mirage text-primary mb-6">
            Need Expert Hand & Wrist Care?
          </h3>
          <UiButton to="/contact" variant="primary" size="lg">
            Book an Appointment
          </UiButton>
        </div>
      </section>
    </div>
  </main>
</template>
