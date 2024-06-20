/*
- Khai báo biến
=> var tenbien1, tenbien2, tenbien3
=> var tenbien1=giatri1, tenbien2=giatri2, tenbien3=giatri3
*/
// Luu y: Dùng cú pháp camelCase
// Cho phép: chữ thường, chữ hoa, số, gạch dưới, $
// Nhưng không được bắt đầu bằng số

// var username, userEmail, userId;
// var customer = "Hoang Son",
//     course = "Fullstack"

// // Hiển thị ở tab console
// console.log(customer)

// document.write(customer)

var company = "F9"
// var welcome = "<h1> Welcome to " + company + "</h1>"
var welcome = `<h1>Welcome to ${company}</h1>
<h2>ShanDev</h2>`
document.write(welcome)

var a = 1;
var b = 2;
var result = `${a} + ${b} = ${a + b}`;
document.write(result);