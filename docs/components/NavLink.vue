<template>
  <a-router
    :href="href"
    :class="{
      [activeClass || 'text-blue-700']: pathname == href,
    }"
  >
    <slot></slot>
  </a-router>
</template>
<script lang="ts" setup>
import { useCurrentUrl } from 'vpage/router'
const { pathname } = useCurrentUrl()

defineProps<{
  href: string
  activeClass?: string
}>()
</script>
