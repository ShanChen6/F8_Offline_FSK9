// Number: kiểu dữ liệu nguyên thủy dùng để xử lý số
// Hàm tạo của number là Number
// Trước khi xử lí cần kiểm tra dữ liệu có bị infinity
// console.dir(Number);
// var a = 10;
// console.log(typeof a);
// console.log(a.constructor.name === "Number");

// Ép kiểu
// var a = "10.5abc";
// // a = Number(a);
// // a = +a;
// // a = parseInt(a);
// a = parseFloat(a);
// console.log(a, typeof a);

// Lưu ý: khi ở trong biểu thức có các toán tử số học thì JS tự động ép kiểu về kiểu số trừ toán tử "+"

// var a = "10";
// var b = 20;
// console.log(a * b);

// Số NaN ===> ép kiểu thất bại
// var a = "10a" * 2;
// if (isNaN(a)) {
//   console.log("Là số NaN");
// } else {
//   console.log("Không là số NaN");
// }
// if (Number.isNaN(a)) {
//   console.log("Là số NaN");
// } else {
//   console.log("Không là số NaN");
// }

// Số Infinity
// var a = 1000 ** 1000;
// if (a !== Infinity && a !== -Infinity) {
//   console.log(a);
// } else {
//   console.log("Vượt quá giới hạn");
// }

// Kiểm tra số thực
// var a = 10.5;
// // if (Number.isInteger(a)) {
// //   console.log("Là số nguyên");
// // }
// if (a === parseFloat(a)) {
//   console.log("Là số thực");
// }

// var a = 12345.678;
// // Lấy 2 chữ số thập phân và làm tròn
// // a = a.toFixed(2);
// a = a.toPrecision(7);
// console.log(a);

// toFixed, toPrecision ==> Trả về chuỗi

// var price = 120000000.567;
// price = price.toLocaleString("vi-VN");
// console.log(price);

// Bài Tập:
var numbers = [
  5,
  "10",
  null,
  2,
  undefined,
  [],
  NaN,
  Infinity,
  8,
  -Infinity,
  {},
  [1],
  7,
  true,
  12,
  false,
];

// Tính tổng các số lẻ (Chỉ tính số và chuỗi số)

var result = numbers.reduce(function (total, number) {
  var numberCast = parseFloat(number);
  if (
    !isNaN(numberCast) &&
    !Array.isArray(number) &&
    Math.abs(numberCast) !== Infinity &&
    numberCast % 2 !== 0
  ) {
    return total + numberCast;
  }
  return total;
}, 0);
console.log(result);
