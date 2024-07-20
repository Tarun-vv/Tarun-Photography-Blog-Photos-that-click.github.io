// LIKE BUTTON FEATURE

const btn = document.querySelectorAll(".like-btn");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    btn[i].classList.toggle("fill");
  });
}

// ZOOMING IMAGE FEATURE
let src = "";
const img = document.querySelectorAll(".img");
const changingImg = document.querySelector(".changing-img");
const overlay = document.querySelector(".overlay");
const imgZoom = document.querySelector(".img-zoom-box");
const closeBtn = document.querySelector(".close-btn");
const body = document.querySelector("body");
console.log(img);
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function () {
    overlay.classList.remove("hidden");
    closeBtn.classList.remove("hidden");
    changingImg.classList.remove("hidden");
    src = img[i].src;
    changingImg.src = src;
  });
}

closeBtn.addEventListener("click", function () {
  overlay.classList.add("hidden");
  changingImg.classList.add("hidden");
  closeBtn.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
  changingImg.classList.add("hidden");
  closeBtn.classList.add("hidden");
});

// Comment Feature

const commentBtn = document.querySelector(".btn-comment");
const commentSection = document.querySelector(".comment-section");

commentBtn.addEventListener("click", function () {
  commentSection.classList.toggle("hidden");
});

console.log("hello");
