var btn = document.querySelectorAll(".header .btn");
console.log(btn);
btn.forEach(function (element) {
  //   console.log(element);
  element.addEventListener("click", function () {
    element.classList.add("active");
  });
});

// btn.addEventListener("click", function () {
//   btn.classList.add("active");
// });

// btn.forEach(function (itemEl) {
//   itemEl.addEventListener("click", function (e) {
//     console.log(itemEl);
//     var active = document.querySelector(".active");
//     if (active) {
//       active.classList.remove("active");
//     }
//     itemEl.lastElementChild.classList.add("active");
//   });
// });
