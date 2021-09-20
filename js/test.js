var navButton = document.querySelector(".page-nav__toggle");
var menuShow = document.querySelector(".nav-list");
var header = document.querySelector(".page-header");
var toggleBurger = document.querySelector(".page-nav__svg--burger");
var toggleCross = document.querySelector(".page-nav__svg--cross");

document.addEventListener("DOMContentLoaded", function(){
    menuShow.classList.toggle("nav-list--show");
    header.classList.toggle("page-header--menu");
    header.classList.toggle("page-header--inactive");
});
navButton.addEventListener("click", function (evt) {
    menuShow.classList.toggle("nav-list--show");
    header.classList.toggle("page-header--menu");
    header.classList.toggle("page-header--inactive");
    toggleCross.classList.toggle("page-nav__svg--hidden");
    toggleBurger.classList.toggle("page-nav__svg--hidden");
});