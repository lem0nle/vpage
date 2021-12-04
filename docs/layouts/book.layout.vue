<template>
  <article
    class="absolute inset-0 grid grid-cols-[auto,1fr] grid-rows-[auto,1fr]"
  >
    <aside
      class="row-span-2 overflow-scroll bg-gray-50 py-6"
      :class="{
        'w-64 px-6 md:w-0 md:px-0': !asideVisible,
        'w-0 px-0 md:w-64 md:px-6': asideVisible,
      }"
    >
      <a-router
        href="/"
        class="flex text-lg font-serif font-bold justify-center"
      >
        VPage
      </a-router>
      <hr class="mt-4" />
      <nav class="mt-6">
        <ul class="space-y-4">
          <li>
            <NavLink class="font-semibold" href="/docs"> Introduction </NavLink>
          </li>
          <li>
            <NavLink class="font-semibold" href="/docs/installation">
              Installation
            </NavLink>
            <ul class="ml-4 mt-2 space-y-1">
              <li>
                <a-router href="/docs/installation#requirements">
                  Requirements
                </a-router>
              </li>
              <li>
                <a-router href="/docs/installation#install"> Install </a-router>
              </li>
              <li>
                <a-router href="/docs/installation#run-development-server">
                  Run development server
                </a-router>
              </li>
            </ul>
          </li>
          <li>
            <NavLink class="font-semibold" href="/docs/getting-started">
              Getting Started
            </NavLink>
            <ul class="ml-4 mt-2 space-y-1">
              <li>
                <a-router href="/docs/getting-started#start-from-an-example">
                  Start from an example
                </a-router>
              </li>
              <li>
                <a-router href="/docs/getting-started#write-a-new-page">
                  Write a new page
                </a-router>
              </li>
              <li>
                <a-router href="/docs/getting-started#customize-design">
                  Customize design
                </a-router>
              </li>
              <li>
                <a-router href="/docs/getting-started#publish-website">
                  Publish website
                </a-router>
              </li>
            </ul>
          </li>
          <li>
            <div class="font-semibold">Advanced</div>
            <ul class="ml-4 mt-2 space-y-1">
              <li>
                <NavLink
                  href="/docs/advanced/architecture"
                  active-class="text-blue-700 font-medium"
                >
                  Architecture
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/docs/advanced/router"
                  active-class="text-blue-700 font-medium"
                >
                  Router
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/docs/advanced/organize"
                  active-class="text-blue-700 font-medium"
                >
                  Organize a large website
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/docs/advanced/seo"
                  active-class="text-blue-700 font-medium"
                >
                  SEO
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/docs/advanced/data"
                  active-class="text-blue-700 font-medium"
                >
                  Data fetching
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>

    <header class="col-start-2 px-6 py-4 flex items-center justify-between">
      <button
        class="-ml-2.5 text-2xl font-medium text-gray-400 px-3 py-1 rounded hover:bg-gray-100 focus:outline-none"
        @click="toggleAside"
      >
        ≡
      </button>
      <a
        class="h-6"
        href="https://github.com/lem0nle/vpage"
        target="_blank"
        rel="noopener"
      >
        <svg
          class="h-6 text-gray-400 fill-current"
          aria-hidden="true"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </a>
    </header>

    <main class="col-start-2 overflow-scroll">
      <article class="prose mx-auto p-6">
        <slot></slot>
      </article>
      <footer class="h-16">
        <!-- TODO: prev/next links -->
      </footer>
    </main>
  </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavLink from '../components/NavLink.vue'

const asideVisible = ref(true)
const toggleAside = () => (asideVisible.value = !asideVisible.value)
</script>
