<script setup lang="ts">
useHead({
  title: 'Conditions Treated - Dr. Nihar Modi',
  meta: [
    { name: 'description', content: 'Explore the range of orthopaedic conditions treated by Dr. Nihar Modi, including sports injuries, shoulder conditions, knee pain, and more.' }
  ]
});
</script>

<template>
  <main>
    <PageHeader 
      title="Conditions Treated" 
      :breadcrumbs="[{ name: 'Home', path: '/' }, { name: 'Conditions Treated', path: '/conditions' }]"
    />
    <ConditionsGrid />
  </main>
</template>
