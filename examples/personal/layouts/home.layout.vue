<template>
  <main class="px-4 py-10 max-w-3xl mx-auto prose text-gray-700">
    <slot />
  </main>
  <PersonalFooter class="px-4 pb-10 max-w-3xl mx-auto" />
</template>

<script setup lang="ts">
import PersonalFooter from '../components/PersonalFooter.vue'
</script>
