var p=Object.defineProperty;var s=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var c=(t,o,e)=>o in t?p(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,l=(t,o)=>{for(var e in o||(o={}))m.call(o,e)&&c(t,e,o[e]);if(s)for(var e of s(o))d.call(o,e)&&c(t,e,o[e]);return t};import{_ as r,d as y,o as _,c as v,r as w,u as h,p as b,a as $,i as k,s as E,b as P,e as g,f as q,h as M,j as R,k as u}from"./vendor.a93df842.js";function x(t){switch(t){default:return new Promise(function(o,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function I(t){switch(t){default:return new Promise(function(o,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function D(t){switch(t){default:return new Promise(function(o,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function T(t){switch(t){case"../../examples/personal/layouts/home.layout.vue":return r(()=>import("./home.layout.7e136f07.js"),["assets/home.layout.7e136f07.js","assets/router.19686636.js","assets/vendor.a93df842.js"]);case"../../examples/project/layouts/home.layout.vue":return r(()=>import("./home.layout.d14ecf0e.js"),["assets/home.layout.d14ecf0e.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.a93df842.js","assets/ProjectFooter.6fa3ea3a.js"]);default:return new Promise(function(o,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function j(t){switch(t){case"../../src/layouts/home.layout.vue":return r(()=>import("./home.layout.a92b7c04.js"),["assets/home.layout.a92b7c04.js","assets/router.19686636.js","assets/vendor.a93df842.js"]);default:return new Promise(function(o,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function A(t){switch(t){default:return new Promise(function(o,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}async function U(t,o){const e=o.split("/");switch(e.splice(0,1),e.splice(-2,2),e.length){case 0:return(await A(`../../layouts/${t}.layout.vue`)).default;case 1:return(await j(`../../${e[0]}/layouts/${t}.layout.vue`)).default;case 2:return(await T(`../../${e[0]}/${e[1]}/layouts/${t}.layout.vue`)).default;case 3:return(await D(`../../${e[0]}/${e[1]}/${e[2]}/layouts/${t}.layout.vue`)).default;case 4:return(await I(`../../${e[0]}/${e[1]}/${e[2]}/${e[3]}/layouts/${t}.layout.vue`)).default;case 5:return(await x(`../../${e[0]}/${e[1]}/${e[2]}/${e[3]}/${e[4]}/layouts/${t}.layout.vue`)).default;default:throw new Error("cannot assign layout to page with depth more than 5")}}const L=["href"],C=y({props:{href:null},setup(t){const o="/vpage/";return(e,a)=>(_(),v("a",{href:h(o)+t.href.slice(1)},[w(e.$slots,"default")],8,L))}});function S(t,o){if(!t)throw new Error(o!=null?o:"assertion error")}const f=Symbol();function V(t){b(f,$(t))}function z(){const t=k(f);return S(t!==void 0),t}async function F(t){const o=E(t),e=P(()=>l({title:"VPage"},o.pageExports.frontmatter)),a=g(e.value.layout?await U(e.value.layout,o._pageId):o.pageExports.Layout),n=q({setup(){return V(o),R(e),()=>a.value?u(a.value,{},{default:()=>u(o.Page,o.pageProps)}):u(o.Page,o.pageProps)}}),i=M();return n.use(i),n.component("a-router",C),{app:n,head:i,context:o,frontmatter:e,layout:a}}export{F as c,U as r,z as u};