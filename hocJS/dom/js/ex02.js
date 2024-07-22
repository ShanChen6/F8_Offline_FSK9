// Event: Hành động từ phía người dùng tác động lên các thẻ html
// Các thẻ html có sẵn các event
// Việc của ltv là lắng nghe các event đó để thực thi 1 công việc cụ thể
// - Định nghĩa các công việc bằng 1 hàm (Event Handler)
// - Trong các event Handler luôn có 1 tham số gọi là event object (mô tả thông tin của event)

// var btnEL = document.querySelector(".btn");
// btnEL.onclick = function (e) {
//   console.log("Click me");
//   console.log(e);
// };

// document.onkeyup = function (e) {
//   //   console.log("Bạn vừa nhả phím gì đó");
//   //   console.log(e.key);
//   if (e.key === "Enter") {
//     document.body.style.background = "yellow";1
//   }
//   if (e.key === "Escape") {
//     document.body.style.background = null;
//   }
// };

// Nhược điểm: không thể nghe 2 event handler

/* 
    Event Listener
    - addEventListener
    - removeEventListener
*/

var btnEl = document.querySelector(".btn");
// btnEl.addEventListener("click", function () {
//   console.log("click me");
// });
// btnEl.addEventListener("click", function () {
//   console.log("OK chưa");
// });
var count = 0;
var handleClick = function () {
  //   console.log("Click me");
  console.log("Count:", ++count);
  if (count === 5) {
    btnEl.removeEventListener("click", handleClick);
  }
};
btnEl.addEventListener("click", handleClick);
