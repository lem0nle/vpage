<template>
  <a :href="baseUrl + href.slice(1)"><slot></slot></a>
</template>
<script lang="ts" setup>
defineProps<{
  href: string
}>()
const baseUrl = import.meta.env.BASE_URL
</script>
