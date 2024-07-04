// Mảng: là cấu trúc dữ liệu có nhiều phần tử (giá trị)
// Khai báo:
// var users = ["shan", "dev", "it", "laptrinh", "f8"];
// console.log(users);

// kiểm tra 1 biến có phải 1 mảng hay không?
// console.log(Array.isArray(users));

// Lấy số lượng phần tử
// console.log(users.length);

// Truy cập vào 1 phần tử trong mảng
// console.log(users[1]);

// Cập nhật giá trị 1 phần tử
// users[1] = "Nam";
// console.log(users);

// Thêm phần tử mới vào mảng
// users[users.length] = "Nam";
// console.log(users);

// Duyệt qua từng giá trị
// for (var i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// for (var index in users) {
//   console.log(users[index]);
// }

// for (var value of users) {
//   console.log(value);
// }

// var indexDel = 1;
// var newUsers = [];
// for (var index in users) {
//   if (+index === indexDel) {
//     continue;
//   }
//   newUsers[newUsers.length] = users[index];
// }
// console.log(newUsers);
// var value = "sơn";
// var newUsers = [value];
// for (var index in users) {
//   newUsers[newUsers.length] = users[index];
// }
// console.log(newUsers);

// var users = [
//   "Tạ Hoàng An",
//   "Nguyễn Tuấn Anh",
//   "Nguyễn Văn Dũng",
//   "Phạm Văn Hiếu",
// ];
// var keyword = "an";
// var newUsers = [];
// for (var user of users) {
//   var isMatch = user.toLowerCase().includes(keyword.toLowerCase());
//   if (isMatch) {
//     continue;
//   }
//   newUsers[newUsers.length] = user;
// }
// console.log(newUsers);

// var numbers = [5, 2, 1, 9, 6];
// // Yêu cầu: Tìm phần tử lớn nhất trong mảng và đổi chỗ phần tử đó với phần tử đầu tiên
// // var max;
// var max = numbers[0];
// var maxIndex = 0;
// for (var index in numbers) {
//   if (max < numbers[index]) {
//     max = numbers[index];
//     maxIndex = index;
//   }
// }
// numbers[maxIndex] = numbers[0];
// numbers[0] = max;
// console.log(numbers);
