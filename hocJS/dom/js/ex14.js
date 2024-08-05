// var form = document.querySelector("form");
// var todoList = document.querySelector(".todo-list");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   var inputEl = this.querySelector("input");
//   var value = inputEl.value;
//   if (value) {
//     var p = document.createElement("p");
//     p.innerText = value;
//     todoList.append(p);
//     inputEl.value = "";
//   }
// });

/* 
    DOMContentLoaded --> khi cây DOM đuọc tải
    load
*/

// document.addEventListener("DOMContentLoaded", function () {
//   var h1 = document.querySelector("h1");
//   console.log(h1);
// });

// window.addEventListener("DOMContentLoaded", function () {
//   var img = document.querySelector("img");
//   console.log(img.width);
// });

var load = document.createElement("div");
load.innerText = "loading";
load.className = "loading";
root.append(load);

window.addEventListener("load", function () {
  var img = document.querySelector("img");
  console.log(img);
});
