// console.log(Array.prototype);
var users = ["User 1", "user 2", "user 3", "user 4"];
// console.log(users);

// Chaining: object.method1().method2().method3()
// 1. at(index) ==> lấy phần tử dựa vào index
// console.log(users.at(0));

// 2. concat(arr1, arr2, ...) ==> Nối các array thành 1 array
// console.log(users.concat([1, 2, 3], [4, 5, 6], ["A", "B", "C"]));
// console.log(users.concat("user 5"));

// 3. fill(value) ==> Cập nhật các phần tử thành 1 giá trị
// users.fill(0);
// console.log(users);

// 4. includes(value) ==> kiểm tra phần tử có trong mảng không? true/false
// console.log(users.includes("user 3"));

// 5. indexOf(value) ==> kiểm tra phần tử có trong mảng không?
// ==> Trả về index đầu tiên tìm được
// console.log(users.indexOf("user 22"));

// 6. lastIndexOf(value) ==> Kiểm tra phần tử có trong mảng không?
// ==> Trả về index cuối cùng tìm được
// console.log(users.lastIndexOf("user"));
// không có trả về -1

// 7. slice(start, end) ==> Cắt mảng từ start đến end -1 (trả về mảng mới)
// console.log(users.slice(0, 2));
// console.log(users.slice(1));
// console.log(users.slice(-2));

// 8. join() ==> nối các phần tử trong mảng thành chuỗi
// console.log(users.join(" - "));

// var fullname = "Trần Hồng Sơn";
// var firstName = fullname.split(" ").slice(-1).join();
// console.log(firstName);

// 9. reverse() ==> Đảo ngược mảng, thay đổi mảng ban đầu
// console.log(users.reverse());

// 10. sort() ==> Sắp xếp mảng theo thứ tự tăng dần (kiểm tra theo thứ tự)

// var users2 = ["m", "a", "b", "c", "d", "r"];
// users2.sort();
// console.log(users2);

// var numbers = [1, 2, 100, 3];
// numbers.sort(function (a, b) {
//   /*
//     a: phần tử sau
//     b: phần tử trước
//     Nếu hàm này return về giá trị âm ==> Tự động đổi chỗ a và b
//     */
//   //   console.log(`a = ${a}, b = ${b}`);
//   //   if (b > a) {
//   //     return -1;
//   //   }
//   return a - b;
// });
// console.log(numbers);

// var customers = [
//   "Nguyễn Văn A",
//   "Trần Văn B",
//   "Nguyễn Văn C",
//   "Lại Thị G",
//   "Đinh Ngọc B",
//   "Đinh Thu T",
// ];
// // Sắp xếp mảng customers theo thứ tự tăng dần (Sắp xếp theo tên)
// var getFirstName = function (fullname) {
//   return fullname.split(" ").slice(-1).join();
// };
// customers.sort(function (a, b) {
//   if (getFirstName(b) > getFirstName(a)) {
//     return -1;
//   }
// });

// console.log(customers);

// // Thêm 1 khách hàng vào giữ mảng customers
// var newCustomer = "Lê Đức Nam";
// var index = (customers.length - (customers.length % 2)) / 2;
// var firstArr = customers.slice(0, index);
// var customers = firstArr.concat(newCustomer, customers.slice(index));
// console.log(customers);

// var fullname = "Trần    Hồng  Sơn";
// fullname = fullname.split(" ");
// var fullnameArr = [];
// for (var value of fullname) {
//   if (value) {
//     fullnameArr[fullnameArr.length] = value;
//   }
// }
// fullname = fullnameArr.join(" ");
// console.log(fullname);

// 11. push() ==> Thêm phần tử vào cuối mảng
// ==> Làm thay đổi mảng ban đầu
// var count = users.push("a", "b", "c");
// console.log(users);
// console.log(count);

// 12. unshift() ==> Thêm phần tử vào đầu mảng
// var count = users.unshift("a", "b");
// console.log("users");
// console.log(count);

// 13. pop() ==> Xóa phần tử cuối mảng và trả về giá trị
// var value = users.pop();
// console.log(users);
// console.log(value);

// 14. shift() ==> Xóa phần tử đầu mảng và trả về giá trị vừa xóa
// var value = users.shift();
// console.log(users);
// console.log(value);

// 15. splice(index, count) ==> Xóa count phần tử index, có thể chèn thêm phần tử vào mảng
// var result = users.splice(1, 2, "item 1", "item 2");
// console.log(users);
// console.log(result);

// 16. Length ==> Lấy độ dài
var arr = ["Item 1", "item 2", "item3", "item4"];
arr.length = 2;
console.log(arr);
