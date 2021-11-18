<template>
  <nav class="h-24 px-4 lg:px-16 border-b flex items-center justify-between">
    <a-router href="/" class="font-serif text-3xl font-bold text-gray-400">
      <span class="text-gray-600">V</span
      ><span class="underline underline-gray-200">Page</span>
    </a-router>
    <div class="text-xl space-x-12">
      <a-router href="/demos/project">Demo</a-router>
      <a-router href="/about">About</a-router>
      <a
        href="https://github.com/lem0nle/vpage/"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </nav>
  <main class="px-4 py-16 max-w-3xl mx-auto">
    <slot />
    <div class="mt-24 mx-auto text-center opacity-25 text-sm">
      [Home Layout]
    </div>
  </main>
</template>
