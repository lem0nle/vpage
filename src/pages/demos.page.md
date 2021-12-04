---
title: VPage | Demos
layout: page
---

# Demos
Here we demonstrate the usage of VPage with two examples, a multi-page project website and a single-page personal homepage, showing the simple but powerful side of VPage. 

Both examples are organized in the same way, containing mainly three parts: `pages/`, `layouts/` and `components/`. We provide for you to write page content directly with **Markdown** in `pages/`, organize the page layout in `layouts/` and write reusable **Vue** component in `components/`.

```python
project/                      # or /personal
  pages/                      # page content with `Markdown` or `Vue`
  layouts/                    # page layout
  components/                 # Vue components
  assets/                     # images, icons, etc.
  _default.page.route.ts      # page routing
```

## ♻️ <a-router href="/demos/project" target="_blank" rel="noopener">Project</a-router>
We design a project called **Recycle** for environmentally friendly Recycling. It contains common pages in a real project, such as a *blog* page and a *team* page. You can easily adapt this example to any other projects or products.

## 🧙‍♂️ <a-router href="/demos/personal" target="_blank" rel="noopener">Personal</a-router>
We make a personal homepage for **Harry Potter** telling some of his early adventures. Hope you have fun making one for yourself too.
