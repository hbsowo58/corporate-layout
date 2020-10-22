var swiper = new Swiper('.visual',{
    loop: true,
    speed:500,

    // autoplay: {
    //     delay: 1000,
    // },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

