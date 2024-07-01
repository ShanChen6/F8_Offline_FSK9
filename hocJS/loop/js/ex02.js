// Vòng lặp while
/* 
    Cú pháp: 
    while (dieukien) {
        khối lệnh
    }
*/

// var i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// var n =505000000;
// var count = 0;
// while (n % 2 === 0) {
//     n = n / 2;
//     count++;
// }

// console.log(`Số lần ${count}`);
// console.log(`n = ${n}`);

// var i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10)

// break: Thoát vòng lặp khi chưa chạy xong
// continue: Bỏ qua lần lặp để chạy lần tiếp theo

for (var i = 1 ; i <= 10; i++) {
    if (i === 6) {
        // break;
        // return i;
        continue;
    }
    console.log(i);
}