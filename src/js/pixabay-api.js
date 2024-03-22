import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formEl = document.querySelector('.form');
const imgGallery = document.querySelector(`.gallery`);

function getImage(inputValue) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: "42962590-b9bb006e5b1e7f6cfce132ccb",
    q: inputValue,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  
  return fetch(url).then(res => {
    if(!res.ok){
        throw new Error(response.status);
    }
    return res.json();
  });
}


formEl.addEventListener('submit', event => {
  event.preventDefault();
  const inputValue = event.currentTarget.elements.image.value.trim();
  
  getImage(inputValue).then(data =>{
    
    const markup = imageTemplate(data.hits);
    
     imgGallery.innerHTML = markup; 
      
    if(data.hits.length === 0){
   return error;
    }
  })
  .catch(error => {
    iziToast.error({
      color: 'red',
      position: 'center',
      message: "Sorry, there are no images matching your search query. Please try again!",
    })
      })
.finally(() => {

 return formEl.reset()
  
})
});
 
    



const imageTemplate = (images) => {
 return images.map(image => 
    `<li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${image.webformatURL}"
            data-source="${image.largeImageURL}"
            alt="${image.tags}"
          />
          </a>
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${image.likes}</p>
          </li>
          <li><h3>Views</h3><p>${image.views}</p>
            </li>
            <li><h3>Comments</h3><p>${image.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${image.downloads}</p>
                </li>
          </ul>
        </li>`
).join('');

 }
 const galleryCfg = {
  captionsData: 'alt',
};
let lightbox = new SimpleLightbox('.gallery a', galleryCfg);
lightbox.on('show.simplelightbox', function () {});
lightbox.refresh();










      
    









