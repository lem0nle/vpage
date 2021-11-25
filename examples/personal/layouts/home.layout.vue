<template>
  <main class="px-4 py-10 max-w-xl mx-auto text-center text-gray-700">
    <slot />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Personal: {{ pathname }}]
    </div>
  </main>
</template>
<script setup lang="ts">
import { useCurrentUrl } from 'vpage/router'
const { pathname } = useCurrentUrl()
</script>
