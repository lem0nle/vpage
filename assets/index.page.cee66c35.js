import{o as n,c as s,n as t}from"./vendor.8659481e.js";const e={class:"markdown-body"},o=t(`<h1 id="getting-started" tabindex="-1">Getting Started</h1><p>Before you start, run the following command to start a development server:</p><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> run dev
</code></pre><p>Read the <a href="/vpage/docs/installation">installation guide</a> for more details.</p><h2 id="start-from-an-example" tabindex="-1">Start from an example</h2><p>VPage lets you start a website extremely easily. We have hand-crafted several example sites as a starting point for you, and all you need to do is to copy-and-paste the one that fits your need, and build your own website upon it.</p><p>For demonstration, let\u2019s copy <code>asssets/</code>, <code>components/</code>, <code>layouts/</code> and <code>pages/</code> directories from <code>examples/personal/</code> to <code>src/</code> (overwrite the original directories). Your directory structure would then be like:</p><pre class="language-yaml"><code class="language-yaml">src/
  assets/
    <span class="token punctuation">...</span>
  components/
    PersonalFooter.vue
  layouts/
    home.layout.vue
  pages/
    index.page.md
  _default.page.route.ts
</code></pre><p>Afterwards, you can now see a personal website demo at <a href="http://localhost:3000" target="_blank" rel="noopener">http://localhost:3000</a>.</p><h2 id="write-a-new-page" tabindex="-1">Write a new page</h2><p>Writing a new page is as simple as creating a file named <code>&lt;name&gt;.page.md</code> under <code>src/pages/</code>. The resulting page will be placed at url <code>/&lt;name&gt;</code>. Let\u2019s create a <code>src/pages/contact.page.md</code> and give the following content:</p><pre class="language-markdown"><code class="language-markdown"><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token font-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> Personal <span class="token punctuation">|</span> Contact
<span class="token key atrule">layout</span><span class="token punctuation">:</span> home</span>
<span class="token punctuation">---</span></span>
<span class="token title important"><span class="token punctuation">#</span> Contact</span>
My address is ...
</code></pre><p>Visit <a href="http://localhost:3000/blog" target="_blank" rel="noopener">http://localhost:3000/blog</a> to see your new page!</p><h2 id="customize-design" tabindex="-1">Customize design</h2><p>You may have noticed that <code>index.page.md</code> and <code>contact.page.md</code> share the same <code>layout</code> field in the frontmatter (<code>home</code>). Therefore, they also share the same visual layout. To design the looks of your page, you may want to modify layout components under <code>src/layouts/</code>.</p><p>Let\u2019s add a navbar to let us switch between the index page and the contact page. To do so, we modify the content in <code>src/layouts/home.layout.vue</code>:</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>py-6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex justify-center space-x-4 font-medium<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-router</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-router</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-router</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/contact<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>contact<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-router</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>px-4 py-10 max-w-3xl mx-auto prose text-gray-700<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PersonalFooter</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>px-4 pb-10 max-w-3xl mx-auto<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> PersonalFooter <span class="token keyword">from</span> <span class="token string">&#39;../components/PersonalFooter.vue&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Here we include a navbar, and specify the design of it using <a href="https://tailwindcss.com/" target="_blank" rel="noopener">Tailwind</a> / <a href="https://windicss.org/" target="_blank" rel="noopener">WindiCSS</a> utility classes.</p><h2 id="publish-website" tabindex="-1">Publish website</h2><p>After we are satisfied with the design of our website, now it\u2019s time to publish it to the world.</p><p>In many cases, using a static site hosting service is enough to host our pages. VPage provides setup for <a href="https://pages.github.com/" target="_blank" rel="noopener">GitHub Pages</a> and <a href="https://www.netlify.com/" target="_blank" rel="noopener">Netlify</a>, so that you can deploy with them without any configuration. Both of them require your website source code to be managed on GitHub.</p><h3 id="github-pages" tabindex="-1">GitHub Pages</h3><p>To deploy using GitHub Pages, go to your project Settings -&gt; Pages -&gt; Source, select the auto-built branch <code>gh-pages</code> as page source.</p><h3 id="netlify" tabindex="-1">Netlify</h3><p>To deploy using Netlify, visit <a href="https://app.netlify.com" target="_blank" rel="noopener">https://app.netlify.com</a> and choose New Site from Git. Follow the instructions to connect to your GitHub project.</p><h3 id="manual-deploy" tabindex="-1">Manual deploy</h3><p>You can also build the whole site and deploy it manually.</p><p>First, build the whole site with:</p><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> run build
</code></pre><p>This will build <code>dist/client/</code> and <code>dist/server/</code> directories. For static websites, you can upload <code>dist/client/</code> directory to your server, and configure a web server to serve them (e.g. Nginx).</p><p>If you need SSR, you can just run the following (you must build the website first):</p><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> run serve
</code></pre>`,32),p=[o],d={title:"Getting Started - VPage Docs",layout:"book"},g={setup(c,{expose:a}){return a({frontmatter:{title:"Getting Started - VPage Docs",layout:"book"}}),(u,i)=>(n(),s("div",e,p))}};export{g as default,d as frontmatter};
