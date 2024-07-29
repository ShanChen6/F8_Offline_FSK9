/* 
    Chọn các element cha, con, anh em
    - parentElement --> Chọn thành phần cha gần nhất
    - children -->Chọn tất cả thành phần cấp 1 (trả về 1 danh sách)
    - nextElementSibling --> Chọn thành phần kế tiếp
    - previousElementSibling --> Chọn thành phần phía trước
    - parentNode
    - childNodes
    - nextSibling
    - previousSibling
    - firstChild: node đầu tiên
    - lastChild
    - firstElementChild: node element đầu tiên
    - lastElementChild
*/

// var h2 = document.querySelector("h2");
// console.log(h2);
// console.log(
//   h2.parentElement.parentElement.parentElement.parentElement.parentElement
// );
// var wrapperEl = document.querySelector(".wrapper");
// console.log(wrapperEl.children[0].children[0]);

// var firstEl = document.querySelector(".products h2");
// console.log(
//   firstEl.nextElementSibling.nextElementSibling.previousElementSibling
// );

// var products = document.querySelector(".products");
// console.log(products.children);
// console.log(products.childNodes);

// var liEl = document.querySelector("li");
// console.log(liEl.children[1]);

var items = document.querySelectorAll(".parent-item");
console.log(items);
items.forEach(function (itemEl) {
  itemEl.addEventListener("click", function (e) {
    // console.log(itemEl.lastElementChild);
    // itemEl.lastElementChild.classList.remove("active");
    var active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    itemEl.lastElementChild.classList.add("active");
  });
});
