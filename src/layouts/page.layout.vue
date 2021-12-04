<template>
  <VPageHeader />
  <main class="px-4 py-16 prose max-w-3xl mx-auto">
    <slot />
  </main>
  <VPageFooter />
</template>

<script setup lang="ts">
import VPageHeader from '@/components/VPageHeader.vue'
import VPageFooter from '@/components/VPageFooter.vue'
</script>
