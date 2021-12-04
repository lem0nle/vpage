<template>
  <div class="bg-gray-50 border-b border-gray-200">
    <ProjectHeader />
    <div
      class="max-w-screen-sm mx-auto px-6 md:px-8 pt-20 pb-32 flex flex-col items-center"
    >
      <h1
        class="font-extrabold text-5xl leading-10 tracking-tight text-gray-900"
      >
        Recycle
      </h1>
      <h2
        class="mt-4 sm:mt-5 font-light text-2xl text-center leading-tight text-gray-900"
      >
        A project for
        <span class="font-bold">environmentally friendly</span>
        Recycling.
      </h2>
      <a-router
        href="/demos/project/help"
        class="rounded-full mt-8 px-8 py-2 transition-colors duration-75 ease-in-out bg-blue-500 hover:bg-blue-400 text-white text-lg shadow-lg"
      >
        Get Help
      </a-router>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectHeader from './ProjectHeader.vue'
</script>
