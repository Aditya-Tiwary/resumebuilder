import{r as l,j as d,a as e,m as h,R as p,b}from"./vendor.aa3f725b.js";const y=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=c(t);fetch(t.href,i)}};y();const v="modulepreload",m={},x="/",n=function(a,c){return!c||c.length===0?a():Promise.all(c.map(r=>{if(r=`${x}${r}`,r in m)return;m[r]=!0;const t=r.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const s=document.createElement("link");if(s.rel=t?"stylesheet":v,t||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),t)return new Promise((u,f)=>{s.addEventListener("load",u),s.addEventListener("error",f)})})).then(()=>a())},_=l.exports.lazy(()=>n(()=>import("./HomePage.f639ee97.js"),["assets/HomePage.f639ee97.js","assets/vendor.aa3f725b.js"])),g=l.exports.lazy(()=>n(()=>import("./AboutUs.d35759ab.js"),["assets/AboutUs.d35759ab.js","assets/vendor.aa3f725b.js"])),A=l.exports.lazy(()=>n(()=>import("./ContactUs.fba719f2.js"),["assets/ContactUs.fba719f2.js","assets/vendor.aa3f725b.js"])),N=l.exports.lazy(()=>n(()=>import("./FAQ.2bb6094f.js"),["assets/FAQ.2bb6094f.js","assets/vendor.aa3f725b.js"])),P=l.exports.lazy(()=>n(()=>import("./PrivacyPolicy.64775e1f.js"),["assets/PrivacyPolicy.64775e1f.js","assets/vendor.aa3f725b.js"])),E=l.exports.lazy(()=>n(()=>import("./TermsOfService.ede3e7f1.js"),["assets/TermsOfService.ede3e7f1.js","assets/vendor.aa3f725b.js"])),w=l.exports.lazy(()=>n(()=>import("./WithoutAi.f8a7fefd.js"),["assets/WithoutAi.f8a7fefd.js","assets/vendor.aa3f725b.js"])),L=()=>{const[o,a]=l.exports.useState("home");return d("div",{className:"min-h-screen bg-gray-50",children:[e("header",{className:"bg-blue-600 text-white shadow-md sticky top-0 z-50",children:e("div",{className:"container mx-auto px-4 py-6",children:d("div",{className:"flex flex-col md:flex-row md:justify-between md:items-center",children:[e("h1",{className:"text-2xl font-bold mb-4 md:mb-0",children:"AI Resume Builder"}),e("nav",{children:e("ul",{className:"flex flex-wrap gap-2 md:gap-4",children:[{id:"home",label:"Home"},{id:"about",label:"About Us"},{id:"contact",label:"Contact Us"},{id:"faq",label:"FAQ"},{id:"withoutai",label:"Without AI"}].map(r=>e("li",{children:e("button",{onClick:()=>a(r.id),className:`px-4 py-2 rounded transition-all duration-300 ${o===r.id?"bg-white text-blue-600":"hover:bg-blue-500"}`,"aria-label":`${r.label} Page`,children:r.label})},r.id))})})]})})}),e("main",{className:"container mx-auto px-4 py-8",children:e(l.exports.Suspense,{fallback:d("div",{className:"text-center py-12",children:[e("div",{className:"inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent",role:"status",children:e("span",{className:"sr-only",children:"Loading..."})}),e("p",{className:"mt-2 text-gray-700",children:"Loading..."})]}),children:d(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},className:"min-h-[50vh]",children:[o==="home"&&e(_,{}),o==="about"&&e(g,{}),o==="contact"&&e(A,{}),o==="faq"&&e(N,{}),o==="withoutai"&&e(w,{}),o==="privacy"&&e(P,{}),o==="terms"&&e(E,{})]},o)})}),e("footer",{className:"bg-gray-800 text-white mt-12",children:e("div",{className:"container mx-auto px-4 py-6",children:d("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[e("p",{children:"\xA9 2025 AI Resume Builder. All rights reserved."}),e("div",{className:"mt-4 md:mt-0",children:d("ul",{className:"flex space-x-4",children:[e("li",{children:e("button",{onClick:()=>a("privacy"),className:"hover:text-blue-300 transition-colors duration-300","aria-label":"View Privacy Policy",children:"Privacy Policy"})}),e("li",{children:e("button",{onClick:()=>a("terms"),className:"hover:text-blue-300 transition-colors duration-300","aria-label":"View Terms of Service",children:"Terms of Service"})})]})})]})})})]})};p.render(e(b.StrictMode,{children:e(L,{})}),document.getElementById("root"));
