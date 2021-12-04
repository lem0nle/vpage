# VPage
[![Github Pages](https://github.com/lem0nle/vpage/actions/workflows/gh-pages.yml/badge.svg?branch=main)](https://lem0nle.github.io/vpage)
[![Netlify](https://img.shields.io/netlify/233f23d5-ac09-41e0-81ea-918eb6f5c744)](https://vpage.netlify.app)

<img align="right" src="https://vitejs.dev/logo.svg" height="120px" alt="typescript logo">

> VPage is a _fast_, _modern_ and _flexible_ website starter built on Vite.

[VPage](https://vpage.netlify.app/) is designed for quickly building a website to place your personal homepage, display a project or promote a product, 
but also very suitable to expand into more dynamic and complex front-end projects.

### Features
* Start a website with no effort. Easy to write, build and deploy.
* Fast development with great guidance and instant feedback.
* Production-ready infrastructure for websites from small to large.
* Full control over everything without going through configuration hell.

## Quick Start
You can simply [use this template](https://github.com/lem0nle/vpage/generate) to create your own repo on Github.

If you wish to deploy on Github Pages, simply use this template to create a repo called `<your-github-username>.github.io`. 

To deploy on netlify, visit [Netlify](https://app.netlify.com/start) and select your cloned project. 

## Development
To further add some customized needs and make it more dynamic, clone or create a local project with this template:

```bash
npx degit lem0nle/vpage my-page
cd my-page
npm install
```

Run the following command and check http://localhost:3000.
```bash
npm run dev
```

Build your website:
```bash
npm run build
```

Then deploy `dist/client` as a static website, or start a production server with:
```bash
npm run serve
```

## Philosophy
Configuring things repeatedly sucks.
