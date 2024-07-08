// Vòng lặp mảng
// var users = ["user1", "user2", "user3", "user4"];
// 1. forEach(callback)
// - Duyệt qua từng phần tử của mảng và trả kq vào cb
//  cb có 2 tham số: value và index

// users.forEach(function (value, index) {
//   console.log(value, index);
// });

// 2. map(callback)
// - Duyệt qua từng phần tử của mảng, trả về value, index ở callback
// - Trả về 1 mảng mới có số lượng phần tử mảng ban đầu
// - Giá trị của các phần tử mảng mới là giá trị cb (cb return về giá trị nào ==> lưu vào mảng mới)

// var newArr = users.map(function (value, index) {
//   console.log(value, index);
//   return `${index + 1} - ${value}`;
// });
// console.log(newArr);

// 3. filter(callback)
// - Duyệt qua từng phần tử của mảng ban đầu
// - Trả về một mảng mới, giá trị phần tử của 1 mảng mới sẽ là các phần tử của 1 mảng ban đầu nếu cb trả về truthy
// var numbers = [1, 2, 3, 4, 5, 67, 8, 0];
// console.log(numbers);
// var newArr = numbers.filter(function (value, index) {
//   return value % 2 !== 0;
// });
// console.log(newArr);

// ==> Áp dụng vào bài toán lọc

// var fullname = "Trần    Hồng   Sơn";
// var newName = fullname
//   .split(" ")
//   .filter(function (item) {
//     return item;
//   })
//   .join(" ");
// console.log(newName);

/* 
    Bài tập: Xóa KH có email là: customer2@gmail.com
*/
// var customers = [
//   ["customer 1", "customer1@gmail.com", 32],
//   ["customer 2", "customer2@gmail.com", 28],
//   ["customer 3", "customer3@gmail.com", 23],
//   ["customer 4", "customer4@gmail.com", 15],
// ];
// customers = customers.filter(function (customer) {
//   return !customer.includes("customer2@gmail.com");
// });
// console.log(customers);

/* 
    Bài tập 2: Tăng tuổi của customer: customer2@gmail.com
    Gọi ý: dùng map()
*/
// customers = customers.map(function (customer) {
//   if (customer.includes("customer2@gmail.com")) {
//     customer[2] += 2;
//   }
//   return customer;
// });
// console.log(customers);

// var users = ["user1", "user2", "user3", "user4", "user2"];
// var newUsers = [];
// users.forEach(function (user) {
//   if (!newUsers.includes(user)) {
//     newUsers.push(user);
//   }
// });

// console.log(newUsers);

/* 
    Buổi sau:
    - some()
    - every()
    - find()
    - findIndex
    - findLast
    - findLastIndex
    - reduce    
*/
