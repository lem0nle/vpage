<template>
  <div class="bg-yellow-50 min-h-screen grid grid-rows-[auto,1fr,auto]">
    <VPageHeader />
    <div class="text-center flex flex-col justify-center -mt-8 px-4">
      <div class="mt-3 mb-3 text-sm font-medium uppercase opacity-70">
        fast, modern and flexible website starter built on Vite
      </div>
      <div class="font-serif text-5xl font-medium">
        <span class="text-green-900">V</span
        ><span class="underline underline-gray-200 text-orange-600 opacity-90"
          >Page</span
        >
      </div>
    </div>
    <VPageFooter />
  </div>
</template>

<script lang="ts">
export const frontmatter = {
  title: 'VPage',
}
</script>

<script lang="ts" setup>
import VPageHeader from '@/components/VPageHeader.vue'
import VPageFooter from '@/components/VPageFooter.vue'
</script>
