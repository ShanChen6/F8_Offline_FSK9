// //
// var items = document.querySelectorAll(".content ul li");
// items.forEach(function (item) {
//   item.addEventListener("click", function () {
//     this.style.color = `red`;
//   });
// });

// var btn = document.querySelector(".content .btn");
// var ul = document.querySelector(".content ul");
// btn.addEventListener("click", function () {
//   ul.innerHTML += `<li>Item 4</li>`;
// });

// Cách mới ==> Dùng event target
// var ul = document.querySelector(".content ul");
// var btn = document.querySelector(".content .btn");
// ul.addEventListener("click", function (e) {
//   if (e.target.nodeName === "LI") {
//     e.target.style.color = "red";
//   }
// });
// btn.addEventListener("click", function () {
//   ul.innerHTML += `<li>Item 4</li>`;
// });

var btn = document.querySelector(".btn");
var offsetX = 0,
  offsetY = 0;
btn.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    document.addEventListener("mousemove", handleDrag);
  }
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
});
function handleDrag(e) {
  console.log("object");
  //   btn.style.position = `absolute`;
  btn.style.left = `${e.clientX - offsetX}px`;
  btn.style.top = `${e.clientY - offsetY}px`;
}
