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
