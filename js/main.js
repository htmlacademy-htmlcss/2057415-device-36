const slider = document.querySelector(".slider-pagination");
const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");
const slides = Array.from(slider.querySelectorAll(".slider-pagination-item"));
const slideCount = slides.length;
let slideIndex = 0;

const pointControl = document.querySelector(".point-control");
const buttonControl = Array.from(pointControl.querySelectorAll(".point-control-button"));
const controlCount = buttonControl.length;

// Функция для показа предыдущего слайда
const showPreviousSlide = () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
const showNextSlide = () => {
  slideIndex = (slideIndex + 1) % slideCount; //выражение означает, что slideIndex никогда не будет больше slideCount;
  updateSlider();
}

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для обновления отображения слайдера
const updateSlider = () => {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'flex';
      buttonControl[index].classList.add("point-control--button");
    } else {
      slide.style.display = 'none';
      buttonControl[index].classList.remove("point-control--button");
    }
  });
}

// Инициализация слайдера
updateSlider();

// Переключение на странице предложений;
let deliveryBlockButton = document.querySelector(".delivery-main-button-wrapper");
let deliveryButton = deliveryBlockButton.querySelector(".delivery-button");
let securityButton = deliveryBlockButton.querySelector(".security-button");
let creditButton = deliveryBlockButton.querySelector(".credit-button");
let deliveryList = document.querySelector(".delivery-list");
let deliveryButtonList = deliveryList.querySelector(".delivery-button-list");
let securityButtonList = deliveryList.querySelector(".security-button-list");
let creditButtonList = deliveryList.querySelector(".credit-button-list");

deliveryButton.addEventListener('click', function () {
  deliveryButton.classList.add("service-button-current");
  securityButton.classList.remove("service-button-current");
  creditButton.classList.remove("service-button-current");

  deliveryButtonList.classList.add("delivery-button-current");
  deliveryButtonList.classList.remove("delivery-button-hidden");
  securityButtonList.classList.remove("delivery-button-current");
  securityButtonList.classList.add("delivery-button-hidden");
  creditButtonList.classList.remove("delivery-button-current");
  creditButtonList.classList.add("delivery-button-hidden");
});

securityButton.addEventListener('click', function () {
  securityButton.classList.add("service-button-current");
  creditButton.classList.remove("service-button-current");
  deliveryButton.classList.remove("service-button-current");

  securityButtonList.classList.add("delivery-button-current");
  securityButtonList.classList.remove("delivery-button-hidden");
  deliveryButtonList.classList.remove("delivery-button-current");
  deliveryButtonList.classList.add("delivery-button-hidden");
  creditButtonList.classList.remove("delivery-button-current");
  creditButtonList.classList.add("delivery-button-hidden");
});

creditButton.addEventListener('click', function (){
  creditButton.classList.add("service-button-current");
  securityButton.classList.remove("service-button-current");
  deliveryButton.classList.remove("service-button-current");

  creditButtonList.classList.add("delivery-button-current");
  creditButtonList.classList.remove("delivery-button-hidden");
  deliveryButtonList.classList.remove("delivery-button-current");
  deliveryButtonList.classList.add("delivery-button-hidden");
  securityButtonList.classList.remove("delivery-button-current");
  securityButtonList.classList.add("delivery-button-hidden");
});

/*
prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
}

window.addEventListener('load', () => {
  slide();
});
*/
/*
const sliderPromoElement = document.querySelector('.slider-promo');
const servicesElement = document.querySelector('.services');
const modalFormElement = document.querySelector('.modal-form');
const modalMapElement = document.querySelector('.modal-map');
const contactsButtonElement = document.querySelector('.contacts__button');
const contactsMapElement = document.querySelector('.contacts__map');
const mapId = document.querySelector('#map');

if (sliderPromoElement) {
  new Slider(sliderPromoElement, 'slider-promo__list-item', 'slider-promo-controls').init();
}

if (servicesElement) {
  new Slider(servicesElement, 'services__list-item', 'services-controls').init();
}

if (modalFormElement) {
  const modalForm = new Modal(modalFormElement);

  contactsButtonElement.addEventListener('click', (evt) => {
    evt.preventDefault();

    modalForm.show();
  });
}

if (modalMapElement) {
  const modalMap = new Modal(modalMapElement);

  contactsMapElement.addEventListener('click', (evt) => {
    evt.preventDefault();

    modalMap.show();
  });
}

if (mapId) {
  new Map('map', URL_MAP).init();
}
*/
