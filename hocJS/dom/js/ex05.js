// DOM CSS
var h1 = document.querySelector("h1");
// var css = {
//   color: `red`,
//   backgroundColor: `yellow`,
//   backgroundImage: `URL("https://picsum.photos/200/300")`,
//   height: `300px`,
//   transform: `translateX(200px)`,
// };
// Object.assign(h1.style, css);
// h1.style.color = null;

// Bài tập: Thêm 2 thuộc tính sau
// bg-image --> Tự thiết lập 1 ảnh bất kì
// transform: translateX(200px)

var boxEl = document.querySelector(".box");
var fadeInBtn = document.querySelector(".fade-in-btn");
var fadeOutBtn = document.querySelector(".fade-out-btn");
fadeOutBtn.addEventListener("click", function () {
  boxEl.computedStyleMap.transition = `opacity 1s ease`;
  boxEl.computedStyleMap.opacity = 0;
  setTimeout(function () {
    boxEl.style.display = `none`;
  }, 1000);
});
fadeInBtn.addEventListener("click", function () {
  boxEl.style.transition = `opacity 1s ease`;
  boxEl.style.display = null;
  boxEl.style.opacity = 0;
  setTimeout(function () {
    boxEl.style.opacity = 1;
  }, 500);
});
var css = {
  transition: `display 4s allow-discrete`,
};
