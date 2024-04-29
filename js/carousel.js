// Carousel
let i = 0;
const carouselImage = document.querySelector(".carousel-image");
const tabs = document.querySelectorAll(".tab");

let carouselImages = [
  "assets/carousel-image-one.png",
  "assets/office.png",
  "assets/section-four-image.png",
  "assets/carousel-image-one.png",
  "assets/office.png",
];

const changeCarouselImage = (i) => {
  carouselImage.setAttribute("src", carouselImages[i]);
  tabs.forEach((tab) => {
    tab.classList.remove("selected");
  });
  tabs[i].classList.add("selected");
};

const nextImage = () => {
  if (i === 4) {
    i = -1;
  }
  changeCarouselImage(++i);
};

const prevImage = () => {
  if (i === 0) {
    i = 5;
  }
  changeCarouselImage(--i);
};
