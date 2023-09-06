const reviewsSwiper = document.querySelector(".reviews-swiper")
const blogSwiper = document.querySelector(".blog-swiper")


new Swiper(reviewsSwiper, {    // Свайпер для баннеров
    spaceBetween: 46,
    allowTouchMove: false,
    navigation: {
        prevEl: ".reviews-swiper-button-prev",
        nextEl: ".reviews-swiper-button-next",
    },
    pagination: {
        el: ".reviews-swiper-pagination",
    },
    autoplay: {
        enabled: true, delay: 10000
    }
});

new Swiper(blogSwiper, {    // Свайпер для баннеров
    spaceBetween: 42,
    slidesPerView: 4,
    allowTouchMove: false,
    navigation: {
        prevEl: ".blog-swiper-button-prev",
        nextEl: ".blog-swiper-button-next",
    },
    autoplay: {
        enabled: true, delay: 10000
    }
});

const moreInfo = document.querySelector(".more-info")
const helpItem = document.querySelector(".help-item")

helpItem.addEventListener("click", () => {
    moreInfo.classList.toggle('more-info-hidden')
})