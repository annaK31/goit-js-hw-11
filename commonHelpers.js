import{i as a,S as n}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const c=document.querySelector(".form"),u=document.querySelector(".images-gallery");function m(t){const o="https://pixabay.com",i="/api/",s=new URLSearchParams({key:"42962590-b9bb006e5b1e7f6cfce132ccb",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${i}?${s}`;return fetch(e).then(r=>r.json())}c.addEventListener("submit",t=>{t.preventDefault();const o=t.currentTarget.elements.image.value.trim();m(o).then(i=>{const s=p(i);u.innerHTML=s}).catch(i=>{a.error({color:"red",position:"center",message:"Sorry, there are no images matching your search query. Please try again!"})})});const p=t=>t.map(o=>`<ul>
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
      </ul>`).join("");new n(".gallery a",{captionsData:"alt",captionDelay:250,refresh(){}});
//# sourceMappingURL=commonHelpers.js.map
