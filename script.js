let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-main');
let input = document.querySelector('#menu-icon-2');
let inputbox = document.querySelector('.input-box');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

input.onclick = ()=>{
    input.classList.toggle('bx-x');
    inputbox.classList.toggle('open1');
}
AOS.init();

