/*jshint esversion: 6 */

const displayImgs = () => {
  const galleryContainer = document.querySelector('.js-galleryContainer');

  arrayData.forEach(data => {
    galleryContainer.insertAdjacentHTML(
      'afterbegin',
      `
      <li class="js-photo">
        <img src="images/${data.src}" class="img-responsive photo">
      </li>
      `
    );
  });
};
displayImgs();

let slideIndex = 1;

// Next/previous controls
const plusSlides = n => {
  switchSlides((slideIndex += n));
};

const switchSlides = n => {
  const allListItems = document.getElementsByClassName('js-photo');
  const allImages = document.getElementsByClassName('photo');
  const list = document.querySelectorAll('.js-photo');
  // list.classList.add('transform');
  if (n > allListItems.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = allListItems.length;
  }

  for (let i = 0; i < allImages.length; i++) {
    allImages[i].className = allImages[i].className.replace(' active', '');
  }
  allImages[slideIndex - 1].className += ' active';

  for (let i = 0; i < allListItems.length; i++) {
    allListItems[i].className = allListItems[i].className.replace(' transform', '');
  }

  list.forEach(e => {
    const style = window.getComputedStyle(e);
    const matrix = new WebKitCSSMatrix(style.webkitTransform);
    
    e.style.transform = `translateX(${matrix.m41 - 250}px)`;
  });
};


