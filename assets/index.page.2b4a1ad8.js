import{o as a,c,k as e,m as _,n,w as l,l as t,p as i}from"./vendor.c40850ef.js";const d={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},u=e("g",{fill:"none"},[e("path",{d:"M19.463 5.576c-.688-.75-1.929-.796-2.756.031l-8.1 8.1c-.21.21-.21.476 0 .686c.21.21.476.21.686 0l6.7-6.7a1 1 0 0 1 1.414 1.414l-6.7 6.7a2.45 2.45 0 0 1-3.514 0a2.45 2.45 0 0 1 0-3.514l8.1-8.1c1.567-1.568 4.115-1.619 5.63.015c1.552 1.569 1.597 4.104-.03 5.613l-9.486 9.486c-2.19 2.19-5.624 2.19-7.814 0c-2.19-2.19-2.19-5.624 0-7.814l8.1-8.1a1 1 0 0 1 1.414 1.414l-8.1 8.1c-1.41 1.41-1.41 3.576 0 4.986c1.41 1.41 3.576 1.41 4.986 0l9.5-9.5l.031-.03c.75-.687.796-1.929-.031-2.756a1.06 1.06 0 0 1-.03-.031z",fill:"currentColor"})],-1),h=[u];function m(r,s){return a(),c("svg",d,h)}var k={name:"mi-attachment",render:m};const g={class:"markdown-body"},f=e("h1",null,"Welcome \u{1F44F}",-1),w=e("p",null,[t("This is a "),e("strong",null,"Markdown Template"),t(". You can create "),e("em",null,"amazing"),t(" things here.")],-1),y=e("h2",null,"Add code \u{1F4BB}",-1),v=t(" Here is some "),x=e("code",null,"python",-1),M=t(" code sample:"),P=i(`<pre class="language-python"><code class="language-python"><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">)</span>
</code></pre>`,1),V=t("Also see "),B=t("Project Page"),H=t(" and "),N=t("Personal Page"),b=t("."),T={title:"VPage | HOME",layout:"home"},$={setup(r,{expose:s}){return s({frontmatter:{title:"VPage | HOME",layout:"home"}}),(A,C)=>{const p=k,o=_("a-router");return a(),c("div",g,[f,w,y,e("p",null,[n(p),v,x,M]),P,e("p",null,[V,n(o,{href:"/demos/project"},{default:l(()=>[B]),_:1}),H,n(o,{href:"/demos/personal"},{default:l(()=>[N]),_:1}),b])])}}};export{$ as default,T as frontmatter};
