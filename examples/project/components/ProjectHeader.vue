<template>
  <div class="py-6">
    <div
      class="mx-auto flex items-center justify-between px-4 max-w-screen-sm lg:max-w-screen-lg"
    >
      <a-router class="" href="/demos/project">
        <div
          class="text-3xl rounded-full h-12 w-12 bg-orange-300 inline-grid place-items-center"
        >
          ♻️
        </div>
      </a-router>
      <div class="flex space-x-10">
        <a-router
          class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          href="/demos/project/blog"
        >
          Blog
        </a-router>
        <a-router
          class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          href="/demos/project/team"
        >
          Team
        </a-router>
        <a-router
          class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          href="/demos/project/help"
        >
          Help
        </a-router>
      </div>
    </div>
  </div>
</template>
