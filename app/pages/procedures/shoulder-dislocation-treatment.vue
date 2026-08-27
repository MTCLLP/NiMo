<script setup lang="ts">
import { useHead } from "#imports";

useHead({
  title: "Shoulder Dislocation Treatment in Mumbai | Dr. Nihar Modi",
  meta: [
    {
      name: "description",
      content:
        "Comprehensive shoulder dislocation treatment in Mumbai. Dr. Nihar Modi provides expert care for recurrent dislocations and shoulder instability.",
    },
  ],
});
</script>

<template>
  <main>
    <PageHeader
      title="Shoulder Dislocation Treatment"
      :breadcrumbs="[
        { name: 'Home', path: '/' },
        { name: 'Procedures', path: '#' },
        {
          name: 'Shoulder Dislocation Treatment',
          path: '/procedures/shoulder-dislocation-treatment',
        },
      ]"
    />

    <div class="bg-white min-h-screen pb-20 md:pb-32 pt-12 md:pt-24">
      <section class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-3xl md:text-5xl font-mirage text-primary mb-8">
          Shoulder Dislocation & Instability
        </h2>

        <div class="prose prose-lg max-w-none text-gray-600 space-y-8">
          <p>
            The shoulder is the most mobile joint in the body, which also makes it the most susceptible to dislocation. A dislocation occurs when the head of the upper arm bone (humerus) is forced out of the shoulder socket (glenoid).
          </p>
          <p>
            Whether it's a first-time dislocation from a sports injury or recurrent instability where the shoulder slips out frequently, Dr. Nihar Modi provides personalized treatment plans to restore stability and function.
          </p>

          <h2 class="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Treatment Approaches
          </h2>
          
          <h3 class="text-xl font-semibold text-gray-800">Non-Surgical Treatment</h3>
          <p>
            For many first-time dislocations, conservative management is appropriate. This includes:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Closed Reduction:</strong> Safely putting the shoulder back into the socket.</li>
            <li><strong>Immobilization:</strong> Wearing a sling for a short period to allow the tissue to heal.</li>
            <li><strong>Physical Therapy:</strong> Specific exercises to strengthen the shoulder muscles and improve stability.</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-800">Surgical Options</h3>
          <p>
            If you suffer from recurrent dislocations, or if there is significant damage to the labrum (Bankart tear) or bone, surgery may be necessary to prevent further damage to the joint.
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Arthroscopic Bankart Repair:</strong> A minimally invasive procedure to reattach torn ligaments to the bone.</li>
            <li><strong>Latarjet Procedure:</strong> A bone grafting procedure used for severe instability or when there is significant bone loss in the shoulder socket.</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Preventing Recurrence
          </h2>
          <p>
            Proper rehabilitation is the key to preventing future dislocations. Dr. Modi works closely with physical therapists to ensure you regain strength and return to your activities safely.
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
            Experiencing Shoulder Instability?
          </h3>
          <UiButton to="/contact" variant="primary" size="lg">
            Consult Dr. Nihar Modi
          </UiButton>
        </div>
      </section>
    </div>
  </main>
</template>
