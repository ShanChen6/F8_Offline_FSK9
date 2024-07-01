// IIFE
// function something() {
//   console.log("Hello");
// }
// something();

// (function () {
//   console.log("Hello");
// })();

// Hàm con
/* var msg = "F8";
function display() {
  function showInfo() {
    console.log("Hello F8");
  }
  showInfo(); // Chỉ chạy ở trong phạm vị hàm display
  //   return showInfo;
  //   return function () {
  //     console.log("Hello ae F8");
  //   };
}
display(); */
// console.log(window);
// Bên ngoài sẽ không truy cập được vào hàm showInfo()
// var show = display();
// show();
// Hàm showInfo ==> Được gọi là hàm Closure
// ==> Hàm có khả năng truy cập tới các biến của phạm vi chứa nó
// ==> Chỉ gọi hàm trong phạm vi khai báo
// window là 1 object lớn nhất trong JS (chạy trên trình duyệt), dùng để trạo ra mọi thứ trong JS

// var sum = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };
// var adder = sum(10);
// var result1 = adder(10);
// var result2 = adder(20);
// console.log(result1);
// console.log(result2);

// Giải thuật đệ quy
// Kỹ thuật gọi lại chính hàm đang định nghĩa để thực thi các bài toán lặp đi lặp lại
// Trong lập trình web thường được dùng để giải quyết các bài toán đa cấp: menu đa cấp, chuyên mục đa cấp
// Lưu ý: khi gọi lại hàm ==> để ý điều kiện để chương trình dừng lại
/* 
    Ưu điểm: dễ, nhàn cho lập trình viên
    nhược điểm: chạy chậm
*/

// function showNumber(number) {
//   console.log(number);
//   if (number > 1) {
//     showNumber(number - 1);
//   }
// }
// showNumber(10);

// Tính giá trị biểu thức = 1 + 2 + ... + 10
// var getTotal = function (n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n + getTotal(n - 1);
// };
// var result = getTotal(10);
// console.log(result);

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5));

function showFibonacci(number, count = 1) {
  console.log(fibonacci(count));
  if (count < number) {
    showFibonacci(number, count + 1);
  }
}
showFibonacci(10);
