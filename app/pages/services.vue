<script setup lang="ts">
// 301 Redirect to /procedures to prevent soft 404 / thin content indexing
await navigateTo('/procedures', { redirectCode: 301, external: false });
</script>

<template>
  <div></div>
</template>
