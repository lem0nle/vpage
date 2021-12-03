---
title: Installation - VPage Docs
layout: book
---

# Installation

## Requirements

You need Node.js > 12 for VPage to work. If you haven't already, check the [official installation guide](https://nodejs.org/en/download/package-manager/) to install Node.js.

## Install

VPage is more of a project template than a package. To use VPage to scaffold your website, you can simply [use GitHub template](https://github.com/lem0nle/vpage/generate) to create your own repo on Github. Afterwards, you may clone it to a local directory and install the dependencies:

```bash
npm i
```

Alternatively, you can also create your project locally, using `degit`:

```bash
npx degit lem0nle/vpage <your-website-name>
cd <your-website-name>
npm i
```

## Run development server

After you created your project, you can run the development server to see your pages live, simply by running:
```bash
npm run dev
```
then open http://localhost:3000 to see your website.

The development server supports fast HMR (Hot Module Reload), thanks to [Vite](https://vitejs.dev/) that VPage is built on. This means that you can modify the source code, and expect the rendered page to change instantly.

Try modify `src/pages/index.page.md` and observe the changes.
