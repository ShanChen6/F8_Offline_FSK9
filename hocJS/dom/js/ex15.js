// Scroll Event
// window.scrollY
// window.scrollX ==> lay vi tri scroll theo truc X
/* 
    window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
    }) ==> Chuyen thanh cuon toi vi tri da thiet lap
*/

// var lastScrollPosition = 0;

// window.addEventListener("scroll", function () {
//   if (window.scrollY > lastScrollPosition) {
//     document.body.style.background = "red";
//   } else {
//     document.body.style.background = "null";
//   }
//   lastScrollPosition = window.scrollY;
// });

var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  window.scroll({
    top: 500,
    behavior: "smooth",
  });
});

var btnTop = document.querySelector(".top-btn");
btnTop.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }
});

btnTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
