const carouselCont = document.getElementById("#why-us-carousel");
const carouselSlides = document.querySelectorAll(".carousel-slide");

const carousel = new Carousel(carouselCont);

carousel.addSlide(carouselSlides);

carousel.init();