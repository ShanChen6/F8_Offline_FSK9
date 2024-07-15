// Array.from() ==> Ép kiểu dữ liệu khác về mảng
// var fullname = "Hồng Sơn";
// console.log(Array.from(fullname));

// var user = {
//   0: "user1",
//   1: "user2",
//   2: "user3",
//   length: 3,
// };
// user = Array.from(user);
// console.log(user);

/* 
    Bài toán: Tạo mảng chứa các số từ 1 - 100
*/

// var numbers = Array(100);
// Array.from(numbers).forEach(function (value, index) {
//   console.log(value, index);
// });
// console.log(numbers);

// var rangeArr = Array.from(Array(100)).map(function (_, index) {
//   return index + 1;
// });
// console.log(rangeArr);

/* 
    Tham chiếu:
*/
// var a = 1;
// var b = a;
// console.log(b);
// console.log(a);

/* 
    Sao chép mảng:
    1. Shallow Copy: Dùng các phương thức trong mảng cho phép trả về mảng mới
    2. Deep Copy: Sử dụng đệ quy, JSON
    b1: chuyển array thành json
    b2: chuyển json thành array
*/

// var a = ["Shan dev", 19, "Thái Bình"];
// // var b = a.slice(0);
// // var b = [...a];

// var json = JSON.stringify(a);
// var b = JSON.parse(json);

// b[0] = "Sơn Trần";
// console.log(a);
// console.log(b);

// var a = ["Sơn"];
// var b = ["Sơn"];
// console.log(a === b);
// Không thể so sánh 2 mảng, 2 object
