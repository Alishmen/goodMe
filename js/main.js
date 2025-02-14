var slider1 = new Swiper(".mySwiper", {
    slidesPerView: 2,
    centeredSlides: false,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var slider2 = new Swiper('.swiper2-container', {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 30,
    pagination: {
        el: '.swiper2-pagination',
    },
});