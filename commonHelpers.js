import{i as l,S as a}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const c=document.querySelector(".form"),u=document.querySelector(".images-gallery");function p(o){const t="https://pixabay.com",s="/api/",i=new URLSearchParams({key:"42962590-b9bb006e5b1e7f6cfce132ccb",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${t}${s}?${i}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(response.status);return r.json()})}c.addEventListener("submit",o=>{o.preventDefault();const t=o.currentTarget.elements.image.value.trim();p(t).then(s=>{const i=m(s.hits);s.hits.length!==0&&(u.innerHTML=i)}).catch(s=>{l.error({color:"red",position:"center",message:"Sorry, there are no images matching your search query. Please try again!"})})});const m=o=>o.map(t=>`<ul>
 <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${t.webformatURL}"
            data-source="${t.largeImageURL}"
            alt="${t.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${t.likes}</p>
          </li>
          <li><h3>Views</h3><p>${t.views}</p>
            </li>
            <li><h3>Comments</h3><p>${t.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${t.downloads}</p>
                </li>
          </ul>
        </a>
      </li>
      </ul>`).join("");new a(".gallery a",{captionsData:"alt",captionDelay:250,refresh(){}});
//# sourceMappingURL=commonHelpers.js.map
