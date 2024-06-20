/* 
    Vòng lặp: Cú pháp trong lập trình cho phép đoạn chương trình lặp đi lặp lại theo số lần nào đó
    2 loại:
    1. Lặp với số lần xác định trước: for
    2. Lặp với số lần lặp không xác định trước: while, do while
*/

/* 
    Cú pháp for:
    for (giatrikhoitao; dieukiendung; buocnhay) {
        Khối lệnh
    }
*/

// for (var i = 1; i <= 10; i++) {
//     console.log(`Lặp lần ${i}`);
// }

// for (var i = 10; i >= 1; i--) {
//     console.log(`Lặp lần ${i}`);
// }

// for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j <= 5; j++) {
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

// Ví dụ: S = 1 + 2 + ... + n
// Yêu cầu: Tính giá trị biểu thức  trên
// var n = 10;
// var s = 1;
// for (var i = 1; i <= n; i++) {
//     s = s + i;
// }
// console.log(`Total = ${s}`);

// Bài tập: Tính n!
// var n = 5;
// var p = 1;
// for (var i = 1; i <=n; i++) {
//     p *= i
// }
// console.log(`${n}! = ${p}`);

// Bài tập 2:
// Total = 1 + 1*2 + 1*2*3 + ... 1*2*3*...*n
// var n = 5;
// var s = 0;
// var p = 1;
// for (var i = 1; i <= n; i++) {
//     p *= i;
//     s += p;
// }
// console.log(s);

// Bài tập 3: Kiểm tra số nguyên tố
/* 
    - Số nguyên
    - > 1
    - Chỉ chia hết cho 1 và chính nó
*/
var n = 1;

var isPrime = true;
if (n < 1 || n % 1 !== 0) {
    isPrime = false;
} else {
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`${n} là số nguyên tố`);
} else {
    console.log(`${n} không phải là số nguyên tố`);
}