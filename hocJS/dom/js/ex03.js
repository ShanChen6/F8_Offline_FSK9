// 1. innerHTML (là 1 hàm)
// console.log(contentEl.innerHTML);
// contentEl.innerHTML = `<h1>HỌC LẬP TRÌNH KHÔNG KHÓ</h1>`;

// 2. innerText
// console.log(contentEl.innerText);
// contentEl.innerText = `<h1>HỌC LẬP TRÌNH KHÔNG KHÓ</h1>`;
// ==> Xóa khoảng trắng

// 3. textContent
// console.log(contentEl.textContent);
// contentEl.textContent = `<h1>HỌC LẬP TRÌNH KHÔNG KHÓ</h1>`;
// ==> Giữ nguyên khoảng trắng

// 4. outerHTML: Lấy chính nó và tất cả thành phần bên trong
// console.log(contentEl.outerHTML);
// contentEl.outerHTML = `<h1>HỌC LẬP TRÌNH KHÔNG KHÓ</h1>`;

// var contentEl = document.querySelector(".content");

// var btnEl = document.querySelector(".btn");
// var content = contentEl.innerHTML;
// btnEl.addEventListener("click", function () {
//   if (contentEl.innerHTML) {
//     contentEl.innerHTML = "";
//     this.innerHTML = "Hiện";
//   } else {
//     contentEl.innerHTML = content;
//     this.innerText = "Ẩn";
//   }
// });

// var minusBtn = document.querySelector(".counter-app .minus-btn");
// var plusBtn = document.querySelector(".counter-app .plus-btn");
// var numberEl = document.querySelector(".counter-app .number");

// plusBtn.addEventListener("click", function () {
//   numberEl.innerText++;
// });
// minusBtn.addEventListener("click", function () {
//   numberEl.innerText--;
// });

/* 
    Attribute
    1. Áp dụng với các thuộc tính hợp lệ
    Cú pháp: element.tenthuoctinh

    2. Áp dụng với các thuộc tính không có sẵn
    - getAttribute(tenthuoctinh)
    - setAttribute(tenthuoctinh, giatri)
*/

var linkEl = document.querySelector("a");
// console.log(linkEl.href);
// console.log(linkEl.target);
// console.log(linkEl.id);
// console.log(linkEl.title);
// console.log(linkEl.className);
// linkEl.href = "https://google.com";
// linkEl.className = "link-text";
// linkEl.style = `background: red`;

console.log(linkEl.getAttribute("v-name"));
linkEl.setAttribute("v-name", "Shan Chen");

// Data Attribute: data-*
console.log(linkEl.dataset.index); // data-index
linkEl.dataset.index = "ahihi"; // data-index

linkEl.dataset.animationDuration = "1s";
linkEl.dataset.animationTimingFunction = "ease-in";

// Xóa data attribute
delete linkEl.dataset.index;

// Xóa các loại thuộc tính ==> removeAttribute(tenthuoctinh)
linkEl.removeAttribute("target");

// Xóa thẻ html
linkEl.remove();

var websiteEl = document.querySelector(".website");
websiteEl.addEventListener("change", function () {
  var value = this.value;
  if (value) {
    window.open(value);
  }
});
