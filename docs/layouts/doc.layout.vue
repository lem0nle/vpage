<template>
  <article
    class="absolute inset-0 h-full overflow-hidden grid grid-cols-1 md:grid-cols-[280px,1fr] lg:grid-cols-[320px,1fr] grid-rows-[auto,1fr]"
  >
    <div class="col-span-2 h-16"></div>
    <header class="fixed inset-0 h-16 bg-white shadow-sm px-6">
      <nav class="h-full flex items-center justify-between">
        <div class="text-lg font-bold">VPage</div>
        <ul>
          <li>GitHub</li>
        </ul>
      </nav>
    </header>
    <aside
      class="hidden md:block border-r-2 border-gray-50 overflow-scroll px-6 py-8"
    >
      <ul class="space-y-4 text-lg font-semibold">
        <li>Installation</li>
        <li>
          Getting Started
          <ul class="ml-4 mt-3 text-base space-y-2 font-normal">
            <li class="font-bold text-blue-600">Tutorial</li>
            <li>Tutorial</li>
            <li>Tutorial</li>
          </ul>
        </li>
        <li>Contribute</li>
      </ul>
    </aside>
    <main
      class="px-6 md:px-12 py-8 overflow-scroll xl:grid grid-cols-[1fr,192px] gap-4"
    >
      <div class="mx-auto prose max-w-screen-sm flex-1">
        <slot></slot>
      </div>
      <div class="hidden xl:block w-48 flex-none">
        <ul class="fixed mt-2 space-y-2">
          <li>Installation</li>
          <li>
            Getting Started
            <ul class="mt-2 text-base space-y-2 font-normal">
              <li>Tutorial</li>
              <li>Tutorial</li>
              <li>Tutorial</li>
            </ul>
          </li>
          <li>Contribute</li>
        </ul>
      </div>
    </main>
  </article>
</template>
