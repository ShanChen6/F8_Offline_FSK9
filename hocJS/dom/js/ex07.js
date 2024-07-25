var a = document.querySelector("a");
a.addEventListener("click", function (e) {
  e.preventDefault(); //chặn mặc định
  console.log(a.href);
});

var menu = document.querySelector(".menu");
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  menu.style.display = "block";
  menu.style.left = `${e.clientX}px`;
  menu.style.top = `${e.clientY}px`;
});
menu.addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target.nodeName === "LI") {
    e.target.style.color = "red";
  }
});
document.addEventListener("click", function () {
  menu.style.display = "none";
});
document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    menu.style.display = "none";
  }
});
