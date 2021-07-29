// sidebar open close js
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click", ()=> {
    navLinks.style.left="0"
})
menuCloseBtn.addEventListener("click", ()=> {
    navLinks.style.left="-100%"
})

// sidebar sub menu open close js

let propArrow = document.querySelector("prop-arrow")
propArrow.addEventListener("click", ()=> {
    navLinks.classList.toggle("show1")
})
