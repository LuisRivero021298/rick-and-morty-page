!function(n){var e={};function a(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=n,a.c=e,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a(a.s=0)}([function(n,e,a){"use strict";a.r(e);var t=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var r=n=>{if("about"!=n){if("/"===n)return n;if(n.length<=3)return"/:id";if(n.includes("page"))return"/:pages"}return"/"+n};var i=()=>'\n    <div class="navbar">\n      <a href="#/">\n        <span class="logo__container"></span>\n      </a>\n    </div>\n  ';const s="https://rickandmortyapi.com/api/character/";var o=async n=>{try{const e=n?`${s}${n}`:s,a=await fetch(e);return await a.json()}catch(n){console.error(n)}};var c=async()=>{const{info:n}=await o();let e=[];for(let a=1;a<=n.pages;a++)e.push(a);let a=0;return`\n      <div>\n          ${e.map(()=>`<a class="pagination__item" href="#/?page=${++a}/">${a}</a>`).join("")}\n      </div>\n    `};var d=n=>("unknown"===status&&(status="No registered"),"unknown"===origin.name&&(origin.name="No registered"),n.map(n=>`<article class="card" >\n      <a href="#/${n.id}">\n        <div class="card__top">\n          <img class="card__image" src="${n.image}" alt="card-image">\n        </div>\n        <div class="card__bottom spaced">\n          <div>\n            <h3 class="card__title">${n.name}</h3>\n          </div>\n          <div>\n            <span class="card__text">${n.species}</span>\n            <span class="card__label--${n.status.toLowerCase()}">${n.status}</span>\n          </div>\n        </div>\n      </a>\n    </article>`).join("")+"\n  ");var l=async()=>{const n=await t(),{results:e}=await o(n);return`\n  <div class="card__grid">\n    ${await d(e)}\n  </div> \n  `};var p=()=>{const n=document.createElement("div");return n.classList.add("error"),n};const u={"/":l,"/:pages":l,"/:id":async()=>{const n=t(),{origin:e,location:a,...r}=await o(n);return`\n    <div class="character__inner">\n      <article >\n        <img src="${r.image}" alt="${r.name}" />\n      </article>\n      <article>\n        <h2>${r.name}</h2>\n        <p>Episodes: <span>${r.episode.length}</span></p>\n        <p>Status: <span>${r.status}</span></p>\n        <p>Species: <span>${r.species}</span></p>\n        <p>Gender: <span>${r.gender}</span></p>\n        <p>Origin: <span>${e.name}</span></p>\n        <p>Last location: <span>${a.name}</span></p>\n      </article>\n    </div>\n  `}};var v=async()=>{const n=document.getElementById("nav__header"),e=document.getElementById("content"),a=document.getElementById("pagination");n.innerHTML=await i();let s=t(),o=await r(s),d=u[o]?u[o]:p;e.innerHTML=await d(),a.innerHTML=await c()};window.addEventListener("load",v),window.addEventListener("hashchange",v)}]);