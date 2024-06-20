// biểu thức = toán hạng + toán tử
// Ví dụ: s = a b * c

// 1. Toán tử số học
// +, - *, /, % (Chia lấy dư), ** (lũy thừa)

// Lưu ý với phép + ==> Chú ý kiểu dữ liệu và thực hiện ép kiể (cast)
// var  a = "10";
// var b = 20;
// var c = +a + +b;
// console.log(c);

// var count = 1;
// count++; 
// ++count;
// console.log(count)

// Phân biệt count++ và ++count

// Giống nhau: đều tăng lên 1 đv
// count++: trả về giá trị trước khi tăng
// ++count: trả về giá trị sau khi tăng

// 2. Toán tử so sánh: Luôn trả về kiểu dữ liệu boolean
// >, <, >=, <=, ==, ===, !=, !==.

/* 
    3. Toán tử gán (=)
*/

// var a = 10;
// // a = a + 10;
// a += 10; // a = a + 10
// a -= 5; // a = a -5
// a *= 5; // a = a * 5
// a /= 5; // a = a / 5
// a %= 5; // a = a % 5
// a ** 5; // a = a ** 5
// console.log(a);

/* 
    4. Toán tử logic (luận lí): &&, !, 
    &&: kết hợp của biểu thức con, nếu tất cả đều đúng
    ==> trả về true, ngược lại trả về false
    ||: kết hợp các biểu thức con, 
    nếu 1 biểu thức đúng ==> trả về true
    nếu tất cả đều sai ==> trả về false
    !: ngược lại (phủ định)

    // Lưu ý: Trong tình huống cần kết hợp mà muốn ưu tiến
    ==> thêm cặp ngoặc ()
*/

// ĐỘ ƯU TIÊN: NOT (!) => AND (&&) => OR (||)

// var a = 10;
// var b = a >= 5 && a <=15;
// console.log(b);

/* 
    Toán tử 3 ngôi (dieukien ? giatridung : giatrisai)
*/

// var a = 10;
// var b = a === 10 ? 20 : 5;
// console.log(b);

// 6. Toán tử nullish (??)
// Kiểm tra null hoặc undefine

// var a = 10;
// var b = a ?? "F8";
// console.log(b);

/* 
    Bài tập: Viết lại toán tử nullish bằng toán tử 3 ngôi
*/

// var a = undefined;
// var b = a === null || a === undefined ? "F8" : a;
// console.log(b);

/* 
    7. Truthy và Falsy
    - Trong điều kiện cần phải sử dụng kiểu dữ liệu logic (boolean)
    mà các giá trị tự động chuyển về true --> TRUTHY,
    ngược lại gọi là falsy

    Falsy: 0, "", null, undefine, NaN, false
    Truthy: Các trường hợp còn lại
*/

// var a = 10;
// var b = a ? "Đúng" : "Sai";
// console.log(b);

/* 
    8. Toán tử &&: áp dụng cho việc gán vào biểu thức
    ==> Tìm giá trị của biểu thức sai
*/

// var a = 10;
// var b = 0;
// var c = -5;
// var result = a && b && c && "Học JS";
// console.log(result);

/* 
    || áp dụng cho việc gán vào biểu thức
    ==> Tìm giá trị của biểu thức đúng
*/

// var a = 0;
// var b = null;
// var c = "F8";
// var result = a || b && c && "Học JS";
// console.log(result);

var email = 0;

if (email) {
    console.log("co du lieu");
} else {
    console.log("khong co du lieu");
}

/* 
    Các kiểu dữ liệu trong JS
    1. Kiểu dữ liệu nguyên thủy
    - String
    - Number
    - Boolean
    - Null
    - Undefined
    - BigInt
    - Symbol
    2. Kiểu dữ liệu tham chiếu:
    - Object
    + Array
    + Function
    + Literal Object
*/
