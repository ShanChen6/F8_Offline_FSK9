// var fullname = "TRẦN HỒNG SƠN";
// // Kiểm tra biến fullnam có phải tất cả là chữ HOA không?
// // var trans = fullname.toUpperCase();
// // if (trans === fullname) {
// //   console.log(`biến fullname tất cả là chữ HOA`);
// // } else {
// //   console.log(`biến fullnam có chữ không phải là chữ hoa`);
// // }

// var isUpperCase = function (fullname) {
//   return fullname === fullname.toUpperCase();
// };
// console.log(isUpperCase(fullname));

// Bài 2: Kiểm tra độ mạnh yếu mật khẩu
/* 
    - >= 8 kí tự
    Phải có ít nhất 1 kí tự viết Hoa
    Phải có ít nhất 1 kí tự thường
    phải có ít nhất 1 kí tự số
    phải có ít nhất 1 kí tự đặc biệt: !@#$%^&*()

    Lưu ý: không dùng Regex, mảng
*/
var isStrengthPassword = function (password) {
  var isUpper = false;
  var isLower = false;
  var isNumber = false;
  var isSpecial = false;
  if (password.length < 8) {
    return false;
  }
  var number = "0123456789";
  var special = "!@#$%^&*()";
  var countNumber = 0;
  var countUpper = 0;
  var countLower = 0;
  for (var i = 0; i < password.length; i++) {
    var char = password.charAt(i);
    if (char >= "A" && char <= "Z") {
      if (++countUpper >= 2) {
        isUpper = true;
      }
    }
    if (char >= "a" && char <= "z") {
      if (++countLower >= 2) {
        isLower = true;
      }
    }
    if (number.includes(char)) {
      if (++countNumber >= 2) {
        isNumber = true;
      }
    }
    if (special.includes(char)) {
      isSpecial = true;
    }
  }
  return isUpper && isLower && isNumber && isSpecial;
};
var testPassword = "Shade@123";
console.log(isStrengthPassword(testPassword));
