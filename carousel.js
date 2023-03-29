

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');


const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");


let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter ) + "px)";

function slideNext() {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
}

function slidePrev() {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
}

function checkSlideEnd() {
    if (carouselImages[counter].id === "lastClone"){
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }

    if (carouselImages[counter].id === "firstClone"){
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
}

nextBtn.addEventListener("click", slideNext);
prevBtn.addEventListener("click", slidePrev);
carouselSlide.addEventListener('transitionend', checkSlideEnd);

setInterval(slideNext, 5000);














