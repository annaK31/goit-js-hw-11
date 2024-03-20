import{i as n,S as a}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=document.querySelector(".form"),u=document.querySelector(".images-gallery");function m(r){const o="https://pixabay.com",i="/api/",l=new URLSearchParams({key:"42962590-b9bb006e5b1e7f6cfce132ccb",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${i}?${l}`;return fetch(e).then(t=>t.json())}c.addEventListener("submit",r=>{r.preventDefault();const o=r.currentTarget.elements.image.value.trim();m(o).then(i=>{console.log(i);const l=p(i);u.innerHTML=l}).catch(i=>{n.error({color:"red",position:"center",message:"Sorry, there are no images matching your search query. Please try again!"})})});const p=r=>r.map(o=>`<ul>
 <li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${r.webformatURL}"
            data-source="${r.largeImageURL}"
            alt="${r.tags}"
          />
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
        </a>
      </li>
      </ul>`).join("");new a(".gallery a",{captionsData:"alt",captionDelay:250,refresh(){}});
//# sourceMappingURL=commonHelpers.js.map
