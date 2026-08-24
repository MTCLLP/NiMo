<script setup lang="ts">
// Services coming soon
useHead({
  title: 'Orthopedic Services in Mumbai - Dr. Nihar Modi',
  meta: [
    {
      name: 'description',
      content: 'Explore the comprehensive orthopedic services provided by Dr. Nihar Modi in Mumbai, including arthroscopy, joint replacement, and sports medicine.'
    }
  ]
});
</script>

<template>
  <main>
    <PageHeader 
      title="Services" 
      :breadcrumbs="[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]"
    />
    <ComingSoon />
  </main>
</template>
