<script setup lang="ts">
import { useHead } from "#imports";

useHead({
  title: "Shoulder Arthroscopy Specialist in Mumbai | Dr. Nihar Modi",
  meta: [
    {
      name: "description",
      content:
        "Expert shoulder arthroscopy in Mumbai by Dr. Nihar Modi. Minimally invasive treatment for rotator cuff tears, labral tears, and shoulder impingement.",
    },
  ],
});
</script>

<template>
  <main>
    <PageHeader
      title="Shoulder Arthroscopy"
      :breadcrumbs="[
        { name: 'Home', path: '/' },
        { name: 'Procedures', path: '#' },
        {
          name: 'Shoulder Arthroscopy',
          path: '/procedures/shoulder-arthroscopy',
        },
      ]"
    />

    <div class="bg-white min-h-screen pb-20 md:pb-32 pt-12 md:pt-24">
      <section class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-3xl md:text-5xl font-mirage text-primary mb-8">
          Shoulder Arthroscopy Surgery
        </h2>

        <div class="prose prose-lg max-w-none text-gray-600 space-y-8">
          <p>
            Shoulder arthroscopy is a minimally invasive surgical procedure used to diagnose and treat a wide range of shoulder problems. During the procedure, a small camera called an arthroscope is inserted into your shoulder joint.
          </p>
          <p>
            This allows Dr. Nihar Modi to guide miniature surgical instruments, resulting in smaller incisions, less pain, and a faster recovery compared to traditional open surgery.
          </p>

          <h2 class="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Common Conditions Treated
          </h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Rotator Cuff Tears:</strong> Repairing torn tendons that attach the muscles to the shoulder joint.</li>
            <li><strong>Labral Tears (SLAP lesions):</strong> Repairing damage to the ring of cartilage that surrounds the shoulder socket.</li>
            <li><strong>Shoulder Impingement:</strong> Removing bone spurs or inflamed tissue that rub against the rotator cuff.</li>
            <li><strong>Frozen Shoulder:</strong> Releasing tight capsule tissue when conservative treatments have failed.</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Recovery & Return to Activity
          </h2>
          <p>
            Recovery time varies depending on the specific procedure performed. Most patients go home the same day. Physical therapy is a crucial part of the recovery process to regain strength and range of motion.
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
            Looking for a Shoulder Specialist in Mumbai?
          </h3>
          <UiButton to="/contact" variant="primary" size="lg">
            Consult Dr. Nihar Modi
          </UiButton>
        </div>
      </section>
    </div>
  </main>
</template>
