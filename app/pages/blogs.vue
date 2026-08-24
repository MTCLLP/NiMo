<script setup lang="ts">
// Blogs coming soon
useHead({
  title: 'Orthopedic Blog - Dr. Nihar Modi',
  meta: [
    {
      name: 'description',
      content: 'Read the latest insights on bone health, joint replacement, and sports injuries from Dr. Nihar Modi, a trusted orthopedic surgeon in Mumbai.'
    }
  ]
});
</script>

<template>
  <main>
    <PageHeader 
      title="Blogs" 
      :breadcrumbs="[{ name: 'Home', path: '/' }, { name: 'Blogs', path: '/blogs' }]"
    />
    <ComingSoon />
  </main>
</template>
