var p=Object.defineProperty;var s=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var l=(t,a,e)=>a in t?p(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,c=(t,a)=>{for(var e in a||(a={}))f.call(a,e)&&l(t,e,a[e]);if(s)for(var e of s(a))v.call(a,e)&&l(t,e,a[e]);return t};import{_ as m,s as w,c as _,a as b,b as $,d as k,u as h,h as n,e as g}from"../../vendor.da50ed32.js";function E(t){switch(t){default:return new Promise(function(a,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function q(t){switch(t){default:return new Promise(function(a,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function M(t){switch(t){default:return new Promise(function(a,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function P(t){switch(t){case"../../examples/project/layouts/home.layout.vue":return m(()=>import("../../home.layout.05d38565.js"),["assets/home.layout.05d38565.js","assets/plugin-vue_export-helper.5a098b48.js","assets/vendor.da50ed32.js"]);default:return new Promise(function(a,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function R(t){switch(t){case"../../src/layouts/home.layout.vue":return m(()=>import("../../home.layout.49d6b1e8.js"),["assets/home.layout.49d6b1e8.js","assets/plugin-vue_export-helper.5a098b48.js","assets/vendor.da50ed32.js"]);default:return new Promise(function(a,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function I(t){switch(t){default:return new Promise(function(a,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}async function d(t,a){const e=a.split("/");switch(e.splice(0,1),e.splice(-2,2),e.length){case 0:return(await I(`../../layouts/${t}.layout.vue`)).default;case 1:return(await R(`../../${e[0]}/layouts/${t}.layout.vue`)).default;case 2:return(await P(`../../${e[0]}/${e[1]}/layouts/${t}.layout.vue`)).default;case 3:return(await M(`../../${e[0]}/${e[1]}/${e[2]}/layouts/${t}.layout.vue`)).default;case 4:return(await q(`../../${e[0]}/${e[1]}/${e[2]}/${e[3]}/layouts/${t}.layout.vue`)).default;case 5:return(await E(`../../${e[0]}/${e[1]}/${e[2]}/${e[3]}/${e[4]}/layouts/${t}.layout.vue`)).default;default:throw new Error("cannot assign layout to page with depth more than 5")}}async function T(t){const a=w(t),e=_(()=>c({title:"VPage"},a.pageExports.frontmatter)),o=b(e.value.layout?await d(e.value.layout,a._pageId):void 0),r=$({setup(){return h(e),()=>o.value?n(o.value,{},{default:()=>n(a.Page)}):n(a.Page)}}),i=k();return r.use(i),{app:r,head:i,context:a,frontmatter:e,layout:o}}let u,y;g({async render(t){if(u){const a=t.pageExports.frontmatter;y.value=(a==null?void 0:a.layout)?await d(a.layout,t._pageId):void 0,Object.assign(u,t)}else{const{app:a,context:e,layout:o}=await T(t);u=e,y=o,a.mount("#app")}},ensureHydration:!0,prefetchLinks:!0,onTransitionStart:()=>{},onTransitionEnd:()=>{}});
