// ClassList
var titleEl = document.querySelector("#title");
console.log(titleEl.classList);

// add() ==> Thêm class cho element
titleEl.classList.add("title-1", "title-2", "title-3");

// remove() ==> Xóa class khỏi element
titleEl.classList.remove("title-1", "title-3");

// replace() ==> thay thế
titleEl.classList.replace("title-2", "title-4");

// toggle ==> Thêm class nếu không tồn tại, xóa class nếu tồn tại
titleEl.classList.toggle("title");
titleEl.classList.toggle("title");

// contains ==> Kiểm tra class có tồn tại hay không?
// console.log(titleEl.classList.contains("title-4"));

var switchThemeBtn = document.querySelector(".switch-theme");
switchThemeBtn.addEventListener("click", function () {
  var body = document.body;
  if (!body.classList.contains("theme-dark")) {
    body.classList.add("theme-dark");
    this.innerText = `Light Theme`;
  } else {
    body.classList.remove("theme-dark");
    this.innerText = `Dark Theme`;
  }
});

var items = document.querySelectorAll("ul li");
// console.log(items);
items.forEach(function (itemEl) {
  itemEl.addEventListener("click", function () {
    console.log(this);
    this.classList.toggle("active");
  });
});

var clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", function () {
  items.forEach(function (itemEl) {
    itemEl.classList.remove("active");
  });
});
