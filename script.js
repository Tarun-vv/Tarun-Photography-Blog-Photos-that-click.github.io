const btn = document.querySelectorAll(".like-btn");
console.log(btn);

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    btn[i].classList.toggle("fill");
  });
}
