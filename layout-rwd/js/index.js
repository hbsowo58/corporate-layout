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

var btn = document.querySelector('.btnCall');
var menu_mo = document.querySelector('.menuMo');

btn.onclick = function(){
    menu_mo.classList.toggle('on');
}

window.onresize = function(){
    var wid = window.innerWidth
    if(wid>=1180){
        menu_mo.classList.remove('on');
    }
}
