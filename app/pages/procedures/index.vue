<script setup lang="ts">
useHead({
  title: 'Procedures - Dr. Nihar Modi',
  meta: [
    { name: 'description', content: 'Explore the range of orthopaedic procedures performed by Dr. Nihar Modi, including knee, shoulder, and elbow surgeries.' }
  ]
});
</script>

<template>
  <main>
    <PageHeader 
      title="Procedures" 
      :breadcrumbs="[{ name: 'Home', path: '/' }, { name: 'Procedures', path: '/procedures' }]"
    />
    <SpecialisedAreas />
  </main>
</template>
