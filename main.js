/*jshint esversion: 6 */

const generatePhotos = () => {
  const photosContainer = document.querySelector('.js-slide-list');
  const newArr = arrayData.slice().reverse();

  newArr.forEach((data, dataIndex) => {
    const skillsArr = data.skills;
    const skills = skillsArr.join(', ');

    photosContainer.insertAdjacentHTML(
      'beforeend',
      `
      <li class="slide-list__item js-slide-list-item" data-slide-index="${dataIndex}">
        <div class="slide-list__content-area">
          <div class="content-area__img">
            <img src="./images/${data.src}" class="img-responsive" />
          </div>
          
          <div class="content-area__text">
            <h2 class="heading-2">${data.firstName} ${data.lastName}</h2>
            <p class="mb-1">Title: ${data.title}</p>
            <p class="mb-1">Skills: ${skills}</p>
            <p>Favourit quote: ${data.favoriteQuote}</p>
            
          </div>
        </div>
      </li>
    `
    );
  });
};

const generateSliderPager = () => {
  const sliderPagerContainer = document.querySelector('.js-slider-pager');
  const newArr = arrayData.slice().reverse();

  newArr.forEach((data, dataIndex) => {
    sliderPagerContainer.insertAdjacentHTML(
      'beforeend',
      `
      <button class="slider-pager__item js-pager-item ${
        dataIndex === 0 ? 'active' : ''
      }" type="button" data-slide-index="${dataIndex}">
        <img src="./images/${
          data.src
        }" class="img-responsive slider-pager__img" />
      </button>
      `
    );
  });
};

const Slider = function (id) {
  this.slider = document.getElementById(id);
  this.slideList = this.slider.getElementsByClassName('js-slide-list')[0];
  this.slideListItems = this.slider.getElementsByClassName('js-slide-list-item');
  this.slideWidth = this.slideListItems[0].offsetWidth;
  this.slidesLength = this.slideListItems.length;
  // Means we're at slide 0 (Slide 1)
  this.current = 1;
  this.direction;
  this.animating = false;
};

Slider.prototype = {
  constructor: Slider,
  init: function () {
    this.listenEvents();
    this.cloneFirstAndLastItem();
  },

  listenEvents: function () {
    let that = this;
    let arrowButtons = this.slider.getElementsByClassName('js-arrow-button');
    for (let i = 0; i < arrowButtons.length; i++) {
      arrowButtons[i].addEventListener('click', function () {
        that.clickArrowButton(this);
      });
    }

    let pagerItems = this.slider.getElementsByClassName('js-pager-item');
    for (let i = 0; i < pagerItems.length; i++) {
      pagerItems[i].addEventListener('click', function () {
        that.clickPagerItem(this);
      });
    }
  },

  cloneFirstAndLastItem: function () {
    let firstSlide = this.slideListItems[0];
    let lastSlide = this.slideListItems[this.slidesLength - 1];
    let firstSlideClone = firstSlide.cloneNode(true);
    let lastSlideClone = lastSlide.cloneNode(true);

    // Remove data-slide-index for pager items to choose correct target
    firstSlideClone.removeAttribute('data-slide-index');
    lastSlideClone.removeAttribute('data-slide-index');

    this.slideList.appendChild(firstSlideClone);
    this.slideList.insertBefore(lastSlideClone, firstSlide);
  },

  clickArrowButton: function (el) {
    let direction = el.getAttribute('data-direction');
    let pos = parseInt(this.slideList.style.left) || 0;
    let newPos;
    let allPager = this.slider.querySelectorAll('.js-pager-item');

    // direction will be added to current slide number
    this.direction = direction === 'prev' ? -1 : 1;
    newPos = pos + -1 * 100 * this.direction;

    if (!this.animating) {
      this.slideTo(
        this.slideList,
        function (progress) {
          return Math.pow(progress, 2);
        },
        pos,
        newPos,
        500
      );
      // Update current slide number
      this.current += this.direction;
    }

    allPager.forEach(pager => {
      let pagerIndex = pager.getAttribute('data-slide-index');
      let targetPager = this.slider.querySelector('.js-pager-item[data-slide-index="' + pagerIndex + '"]');

      if (targetPager.classList.contains('active')) {
        targetPager.classList.remove('active');
      }

      if (this.current - 1 === parseInt(targetPager.dataset.slideIndex)) {
        targetPager.classList.add('active');
      }
    });
  },

  clickPagerItem: function (el) {
    let slideIndex = el.getAttribute('data-slide-index');
    let targetSlide = this.slider.querySelector('.js-slide-list-item[data-slide-index="' + slideIndex + '"]');
    let allPager = this.slider.querySelectorAll('.js-pager-item');
    let targetPager = this.slider.querySelector('.js-pager-item[data-slide-index="' + slideIndex + '"]');
    let pos = parseInt(this.slideList.style.left) || 0;
    let newPos = Math.round(targetSlide.offsetLeft / targetSlide.offsetWidth) * 100 * -1;

    allPager.forEach(pager => {
      if (pager.classList.contains('active')) {
        pager.classList.remove('active');
      }
    });
    targetPager.classList.add('active');

    if (!this.animating && pos !== newPos) {
      this.slideTo(
        this.slideList,
        function (progress) {
          return Math.pow(progress, 2);
        },
        pos,
        newPos,
        500
      );
      // Update current slide number
      this.current = parseInt(slideIndex) + 1;
    }
  },

  slideTo: function (element, deltaFunc, pos, newPos, duration) {
    this.animating = true;
    this.animate({
      delay: 20,
      duration: duration || 1000,
      deltaFunc: deltaFunc,
      step: function (delta) {
        var direction = pos > newPos ? 1 : -1;
        element.style.left =
          pos + Math.abs(newPos - pos) * delta * direction * -1 + '%';

        // PREV
        // Direction: -1
        // Pos = -600
        // newPos = 0
        // Ex: Slide 4 (0px) <- Slide 1 (-600px)
        //element.style.left = -600  + Math.abs(0 - (-600)) * 0.021 * -1 * -1+ 'px';

        // NEXT
        // Direction: +1
        // Pos = -600
        // newPos = -1200
        // Next: Slide 1 (-600px) -> Slide 2 (-1200px)
        //element.style.left = -600  + Math.abs( -600 - (-1200) ) * 0.021 * 1 * -1 + 'px';
      }
    });
  },

  animate: function (opts) {
    let that = this;
    let start = new Date();
    let id = setInterval(function () {
      let timePassed = new Date() - start;
      let progress = timePassed / opts.duration;

      if (progress > 1) {
        progress = 1;
      }
      let delta = opts.deltaFunc(progress);
      opts.step(delta);

      if (progress === 1) {
        clearInterval(id);
        that.animating = false;
        that.checkCurrentSlide();
      }
    }, opts.delay || 10);
  },

  checkCurrentSlide: function () {
    let cycle = false;
    //this.current += this.direction;
    // Are we at the cloned slides?
    cycle = !!(this.current === 0 || this.current > this.slidesLength);
    if (cycle) {
      // update current in order to adapt new slide list
      // we'll use current value to relocate slide list
      this.current = this.current === 0 ? this.slidesLength : 1;
      // For 4 x 600px slides,
      // left pos will be either -600px (first slide clone -> first slide)       // or -2400px (last slide clone -> fourth slide)
      this.slideList.style.left = -1 * this.current * 100 + '%';
    }
  }
};

document.addEventListener('DOMContentLoaded', function () {
  generatePhotos();
  generateSliderPager();
  new Slider('categorySlider').init();
});

// Learned from: https://codepen.io/otuzel/pen/ObKxoE