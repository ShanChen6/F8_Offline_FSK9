// Kỹ thuật tách các đoạn chương trình con ==> Hàm
/* 
    Biến: Lưu trữ dữ liệu (Thể hiện dưới dạng danh từ)
    Hàm: Đoạn chương trình (Thể hiện dưới dạng hành động)

    Cú pháp:
    1. Định nghĩa hàm
    function tenham() {
        Nội dung hàm
    }

    function tenHam(Thamso1, Thamso2,...) {
        Nội dung hàm
    }

    2. Gọi hàm
    tenHam()
    tenHam(doiso1, doiso2,...)
*/

/* function getTotal(a, b) {
  var total = a + b;
  console.log(total);
}

getTotal(10, 20);
getTotal(50, 20);

function showMessage(msg, type = "success") {
  //   console.log("Học lập trình không khó");
  console.log(msg);
  console.log(type);
}
showMessage("Học lập trình không khó");
showMessage("Học lập trình không khó", "error"); */

// Hàm có giá trị trả về (Return Function)
// Hàm không có giá trị trả về (Void Function)
// Lưu ý khi dùng return
// ==> Khi gọi từ khóa return ==> Hàm sẽ bị thoát
// Các đoạn chương trình phía dưới return không có tác dụng

/* function getTotal(a, b) {
  var total = a + b;
  return total;
}
console.log(`Kết quả là ${getTotal(10, 20)}`); */

/* function division(a, b) {
  if (b === 0) {
    return 0;
  }
  return a / b;
}
console.log(division(10, 2)); */

// Bài tập: Viết hàm kiểm tra số nguyên tố
// Nếu isShow = true ==> Hiển thị kết quả dạng clg ngay trong hàm
// Nếu isShow = false ==> Return về true / false và sẽ thực hiện hiển thị kết quả ngoài hàm

/* function showResult(number, isShow, status) {
  var msgSuccess = `${number} là số nguyên tố`;
  var msgError = `${number} không phải số nguyên tố`;
  if (!isShow) {
    return status;
  }
  console.log(status ? msgSuccess : msgError);
  return;
}
function isPrime(number, isShow = false) {
  if (number <= 1 || number % 1 !== 0) {
    return showResult(number, isShow, false);
  }
  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      return showResult(number, isShow, false);
    }
  }
  return showResult(number, isShow, true);
}
// console.log(isPrime(43), false);
isPrime(43, true); */

/* 
    Biến toàn cục, biến cục bộ
    - Biến cục bộ chỉ được sử dụng trong phạm vi hẹp
*/

/* var data = "Học JS không khó"; // Biến toàn cục
function getMessage() {
  return data;
}
console.log(getMessage());

function setMessage(value) {
  data = value;
}

setMessage("JS");
console.log(setMessage()); */

/* 
    HÀM ẨN DANH (Anonymous Function)
    - Không có tên
    - Muốn chạy được phải gán vào 1 biến hoặc gọi trong hàm khác thông qua tham số
*/
// var something = function () {
//   console.log("Xin chào ae F8");
// };
// // ==> Expression Function
// something();

/* function getA() {
  console.log("Xin chào ae F8");
}
var something = getA;
something();
getA(); */

/* var something = function () {
  console.log("Xin chào ae F8");
};
if (typeof something === "function") {
  //Phù hợp với việc kiểm tra kiểu dữ liệu nguyên thủy
  console.log("something là function");
  something();
} */

/* 
    arguments keyword
*/

// var getMax = function (a, b) {
//   console.log(a, b);
//   console.log(arguments);
// };
// getMax(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// reset parameters
var getMax = function (a, b, ...args) {
  console.log(a, b);
  console.log(args);
};
getMax(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
