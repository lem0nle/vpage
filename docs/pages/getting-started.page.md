---
title: Getting Started - VPage Docs
layout: book
---

# Getting Started

Before you start, run the following command to start a development server:
```bash
npm run dev
```

Read the [installation guide](/docs/installation) for more details.

## Start from an example
VPage lets you start a website extremely easily. We have hand-crafted several example sites as a starting point for you, and all you need to do is to copy-and-paste the one that fits your need, and build your own website upon it.

For demonstration, let's copy `assets/`, `components/`, `layouts/` and `pages/` directories from `examples/personal/` to `src/` (overwrite the original directories). Your directory structure would then be like:
```yaml
src/
  assets/
    ...
  components/
    PersonalFooter.vue
  layouts/
    home.layout.vue
  pages/
    index.page.md
  _default.page.route.ts
```

Afterwards, you can now see a personal website demo at http://localhost:3000.

## Write a new page
Writing a new page is as simple as creating a file named `<name>.page.md` under `src/pages/`. The resulting page will be placed at url `/<name>`. Let's create a `src/pages/contact.page.md` and give the following content:

```markdown
---
title: Personal | Contact
layout: home
---
# Contact
My address is ...
```

Visit http://localhost:3000/blog to see your new page!

## Customize design
You may have noticed that `index.page.md` and `contact.page.md` share the same `layout` field in the frontmatter (`home`). Therefore, they also share the same visual layout. To design the looks of your page, you may want to modify layout components under `src/layouts/`.

Let's add a navbar to let us switch between the index page and the contact page. To do so, we modify the content in `src/layouts/home.layout.vue`:

```html
<template>
  <nav class="py-6">
    <ul class="flex justify-center space-x-4 font-medium">
      <li><a-router href="/">home</a-router></li>
      <li><a-router href="/contact">contact</a-router></li>
    </ul>
  </nav>
  <main class="px-4 py-10 max-w-3xl mx-auto prose text-gray-700">
    <slot />
  </main>
  <PersonalFooter class="px-4 pb-10 max-w-3xl mx-auto" />
</template>
<script lang="ts" setup>
import PersonalFooter from '../components/PersonalFooter.vue'
</script>
```

Here we include a navbar, and specify the design of it using [Tailwind](https://tailwindcss.com/) / [WindiCSS](https://windicss.org/) utility classes.

## Publish website
After we are satisfied with the design of our website, now it's time to publish it to the world.

In many cases, using a static site hosting service is enough to host our pages. VPage provides setup for [GitHub Pages](https://pages.github.com/) and [Netlify](https://www.netlify.com/), so that you can deploy with them without any configuration. Both of them require your website source code to be managed on GitHub.


### GitHub Pages
To deploy using GitHub Pages, go to your project Settings -> Pages -> Source, select the auto-built branch `gh-pages` as page source.

### Netlify
To deploy using Netlify, visit https://app.netlify.com and choose New Site from Git. Follow the instructions to connect to your GitHub project.

### Manual deploy
You can also build the whole site and deploy it manually.

First, build the whole site with:
```bash
npm run build
```

This will build `dist/client/` and `dist/server/` directories. For static websites, you can upload `dist/client/` directory to your server, and configure a web server to serve them (e.g. Nginx).

If you need SSR, you can just run the following (you must build the website first):
```bash
npm run serve
```
