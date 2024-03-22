import{i as c,S as u}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector(".form"),f=document.querySelector(".gallery");function p(o){const r="https://pixabay.com",s="/api/",i=new URLSearchParams({key:"42962590-b9bb006e5b1e7f6cfce132ccb",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${s}?${i}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(response.status);return t.json()})}l.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements.image.value.trim();p(r).then(s=>{const i=h(s.hits);if(f.innerHTML=i,s.hits.length===0)return error}).catch(s=>{c.error({color:"red",position:"center",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>l.reset())});const h=o=>o.map(r=>`<li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${r.webformatURL}"
            data-source="${r.largeImageURL}"
            alt="${r.tags}"
          />
          </a>
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${r.likes}</p>
          </li>
          <li><h3>Views</h3><p>${r.views}</p>
            </li>
            <li><h3>Comments</h3><p>${r.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${r.downloads}</p>
                </li>
          </ul>
        </li>`).join(""),m={captionsData:"alt"};let a=new u(".gallery a",m);a.on("show.simplelightbox",function(){});a.refresh();
//# sourceMappingURL=commonHelpers.js.map
