import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const action = (imageAction) => {
    imageAction.preventDefault();
}

const  createGallery = (items) =>{
    return items.map((item) =>
     `<li class='gallery__item'>
        <a class='gallery__link' href='${item.original}'>
            <img
                class='gallery__image'
                src= '${item.preview}'
                alt= '${item.description}'
            />
        </a>  
    </li>`).join('');
}

const addGallery = createGallery(galleryItems);
gallery.innerHTML = addGallery;

let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 100});
console.log(lightbox);