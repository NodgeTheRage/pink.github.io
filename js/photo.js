var filterIconFirst = document.querySelector(".post__icon--1");
var filterIconSecond = document.querySelector(".post__icon--2");
var filterIconThird = document.querySelector(".post__icon--3");


filterIconFirst.addEventListener("click", function (evt) {
  filterIconFirst.classList.add("post__icon--active");
  filterIconSecond.classList.remove("post__icon--active");
  filterIconThird.classList.remove("post__icon--active");
});

filterIconSecond.addEventListener("click", function (evt) {
  filterIconSecond.classList.add("post__icon--active");
  filterIconFirst.classList.remove("post__icon--active");
  filterIconThird.classList.remove("post__icon--active");
});

filterIconThird.addEventListener("click", function (evt) {
  filterIconThird.classList.add("post__icon--active");
  filterIconSecond.classList.remove("post__icon--active");
  filterIconFirst.classList.remove("post__icon--active");
});
