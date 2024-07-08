// var numbers = [1, 2, 3, 4, 5, 6, 78, 9];
// Kiểm tra trong mảng numbers có sẵn số chẵn không
// some(cb)
// Duyệt qua từng mản ban đầu
// Trả về giá trị boolean (true, false)
// Trả về true nếu có ít nhất 1 lần trong cb
// var status = numbers.some(function (number) {
//   console.log(number);
//   return number % 2 === 0;
// });
// console.log(status);

/* 
    every(cb)
- Duyệt qua từng mản ban đầu
- Trả về giá trị boolean (true, false)
- Trả về true nếu có tất cả các lần lặp đều return về truthy
*/
// Kiểm tra trong mảng có phải tất cả là số lẻ không
// var status = numbers.every(function (number) {
//   return number % 2 !== 0;
// });
// console.log(status);
// Vòng lặp sẽ dừng lại khi có điều kiện sai

/* 
    find(cb)
    - Cách hoạt động giống filter
    khác: trả về phần tử mảng đầu tiền tìm được
*/
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var result = numbers.find(function (number) {
//   return number > 2; // 3
// });
// console.log(result);

/* 
    findLast(cb)
    - Cách hoạt động giống filter
    khác: trả về phần tử mảng cuối cùng tìm được
*/
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var result = numbers.findLast(function (number) {
//   return number > 2;
// });
// console.log(result); // 9

/* 
    findIndex(cb)
    - Cách hoạt động giống find
    khác: trả về index đầu tiên tìm được
*/

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var result = numbers.findIndex(function (number) {
//   return number > 2;
// });
// console.log(result); // 2

/* 
    findLastIndex(cb)
    - Cách hoạt động giống findLast
    khác: trả về index cuối cùng tìm được
*/

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var result = numbers.findLastIndex(function (number) {
//   return number > 2;
// });
// console.log(result); // 8

/* 
    Bài tập: tìm phần tử giao giữa 2 mảng
*/
// var arrA = [1, 4, 3, 2];
// var arrB = [5, 2, 6, 7, 1];

// var result = arrA.filter(function (number) {
//   return arrB.indexOf(number) !== -1;
// });
// console.log(result);

/* Bài tập 2 */
// var data = [];
// var addData = function (value, status) {
//   if (status) {
//     if (!data.includes(value)) {
//       data.push(value);
//     }
//   } else {
//     data = data.filter(function (item) {
//       return item !== value;
//     });
//   }
// };
// addData("An", true);
// addData("An", true);
// addData("Quân", true);
// addData("Quân", false);
// console.log(data);

// Output: ["An"]
// Nếu stt = true ==> thêm value vào data và kiểm tra trùng lặp, nếu trùng thì không thêm nữa
// Nếu stt = false ==> xóa nó đi

/* 
    reduce(cb, initialValue)
    cb: có 4 tham số(chủ yếu làm việc với 3 tham số)
    - preValue
    - currentValue
    - index

    initialValue: Giá trị khởi tạo
    Cách hoạt động:
    1. Không có initialValue (không có tham số thứ 2)
    - vòng lặp reduce sẽ chạy từ phần tử thứ 2 đến hết
    - preValue của lần lặp đầu tiên chính là phần tử đầu của mảng
    - currentValue là giá trị của phần tử mảng khi lặp
    - preValue của vòng lặp sau sẽ là return của vòng lặp trước
    - giá trị của hàm reduce là return cuối cùng của cb

    2. Có initialValue
    - Vòng lặp reduce sẽ chạy từ phần tử thứ nhất
    - preValue của lần lặp đầu tiên sẽ chính là initialValue
    - currentValue là giá trị của phần tử mảng khi lặp
    - preValue của vòng lặp sau sẽ là return của vòng lặp trước
    - giá trị của hàm reduce là return cuối cùng của cb
*/

// var numbers = [5, 10, 15, 20, 25];
// console.log(numbers);
// var result = numbers.reduce(function (prev, current, index) {
//   console.log(`prev = ${prev}, current = ${current}, index = ${index}`);
//   return current;
// });
// console.log(result);

// var total = numbers.reduce(function (prev, number) {
//   return prev + number;
// }, 0);
// console.log(total);

/* 
    Bài tập: Tìm phần tử lớn nhất dùng reduce
*/

// var numbers = [2, 9, 5, 1, -5];
// var max = numbers.reduce(function (prev, number) {
//   if (prev < number) {
//     // console.log(number);
//     return number;
//   }
//   // console.log(prev);
//   return prev;
// });
// console.log(max);

// var users = ["An", "Tùng", "Đạt", "Quân", "Tùng", "Nam"];
// // Xóa các phần tử trùng trong mảng users
// // Yêu cầu: Dùng Reduce
// var users = users.reduce(function (prev, current) {
//   if (!prev.includes(current)) {
//     prev.push(current);
//   }
//   return prev;
// }, []);
// console.log(users);

/* 
    Làm phẳng mảng
    yêu cầu: dùng hàm reduce, không sử dụng hàm flat
    Gợi ý: Xem lại giải thuật đệ quy
*/
// var numbers = [1, [2, 3], [4], 5, [[6, 7]], [[[[8]], 9]]];
// var flattenArr = function (arr) {
//   return arr.reduce(function (prev, current) {
//     if (Array.isArray(current)) {
//       return prev.concat(flattenArr(current));
//     } else {
//       prev.push(current);
//       return prev;
//     }
//   }, []);
// };
// var newArr = flattenArr(numbers);
// console.log(newArr);

/* 
    Chunk Array: Chia nhỏ mảng
*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var size = 3;
var newArr = numbers.reduce(
  function (prev, current) {
    if (prev[prev.length - 1].length < size) {
      prev[prev.length - 1].push(current);
    } else {
      prev.push([current]);
    }
    return prev;
  },
  [[]]
);
console.log(newArr);
