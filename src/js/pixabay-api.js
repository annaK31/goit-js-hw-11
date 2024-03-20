import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formEl = document.querySelector('.form');
const imgGallery = document.querySelector(`.images-gallery`)


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
  
  return fetch(url).then(res => res.json());
  
}


formEl.addEventListener('submit', event => {
  event.preventDefault();
  const inputValue = event.currentTarget.elements.image.value.trim();
  getImage(inputValue).then(data =>{
    const markup = imageTemplate(data);
    imgGallery.innerHTML = markup; 
    
  }) 
  .catch(error => {
    iziToast.error({
      color: 'red',
      position: 'center',
      message: "Sorry, there are no images matching your search query. Please try again!",
    })
})
});
 
    



const imageTemplate = (images) =>{
 return images.map(image => 
    `<ul>
 <li class="gallery-item">
        <a class="gallery-link" href="${images.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${images.webformatURL}"
            data-source="${images.largeImageURL}"
            alt="${images.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${images.likes}</p>
          </li>
          <li><h3>Views</h3><p>${images.views}</p>
            </li>
            <li><h3>Comments</h3><p>${images.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${images.downloads}</p>
                </li>
          </ul>
        </a>
      </li>
      </ul>`
 )
    .join('');
}




const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    refresh(){

    }
},);
      
    









