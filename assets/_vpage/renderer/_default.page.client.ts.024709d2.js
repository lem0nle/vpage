var p=Object.defineProperty;var s=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var c=(t,n,e)=>n in t?p(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,l=(t,n)=>{for(var e in n||(n={}))y.call(n,e)&&c(t,e,n[e]);if(s)for(var e of s(n))f.call(n,e)&&c(t,e,n[e]);return t};import{_ as m,c as d,a as v,b as _,u as w,h as r,d as b,e as $,s as k}from"../../vendor.022c0bc2.js";function h(t){switch(t){default:return new Promise(function(n,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function E(t){switch(t){default:return new Promise(function(n,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function q(t){switch(t){default:return new Promise(function(n,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function M(t){switch(t){case"../../examples/project/layouts/home.layout.vue":return m(()=>import("../../home.layout.9d4fa65b.js"),["assets/home.layout.9d4fa65b.js","assets/plugin-vue_export-helper.5a098b48.js","assets/vendor.022c0bc2.js"]);default:return new Promise(function(n,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function P(t){switch(t){case"../../src/layouts/home.layout.vue":return m(()=>import("../../home.layout.74b87edb.js"),["assets/home.layout.74b87edb.js","assets/plugin-vue_export-helper.5a098b48.js","assets/vendor.022c0bc2.js"]);default:return new Promise(function(n,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function g(t){switch(t){default:return new Promise(function(n,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function R(t,n){const e=n.split("/");switch(e.splice(0,1),e.splice(-2,2),e.length){case 0:return g(`../../layouts/${t}.layout.vue`);case 1:return P(`../../${e[0]}/layouts/${t}.layout.vue`);case 2:return M(`../../${e[0]}/${e[1]}/layouts/${t}.layout.vue`);case 3:return q(`../../${e[0]}/${e[1]}/${e[2]}/layouts/${t}.layout.vue`);case 4:return E(`../../${e[0]}/${e[1]}/${e[2]}/${e[3]}/layouts/${t}.layout.vue`);case 5:return h(`../../${e[0]}/${e[1]}/${e[2]}/${e[3]}/${e[4]}/layouts/${t}.layout.vue`);default:throw new Error("cannot assign layout to page with depth more than 5")}}function T(t){const n=d(()=>l({title:"VPage"},t.pageExports.frontmatter)),u=v({setup(){return w(n),()=>{var i;return((i=n.value)==null?void 0:i.layout)?r(b(()=>R(n.value.layout,t._pageId)),{},{default:()=>r(t.Page)}):r(t.Page)}}}),a=_();return u.use(a),{app:u,head:a}}let o;$({render(t){if(o)Object.assign(o,t);else{o=k(t);const{app:n}=T(o);n.mount("#app")}},ensureHydration:!0,prefetchLinks:!0,onTransitionStart:()=>{},onTransitionEnd:()=>{}});