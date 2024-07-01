// String: là tập hợp các kí tự
var fullname = "Hoàng Sơn";
console.log(fullname);
// Kiểm tra 1 biến có phải là string hay không?
if (typeof fullname === "string") {
  console.log("đúng");
}
// Lưu ý: Trong tất cả các kiểu dữ liệu ( trừ null và undefined)
// --> JS bọc object ở bên ngoài kiểu dữ liệu để chứa các phương thức và thuộc tính
// để xử lí với kiểu dữ liệu tương ứng
// Mỗi kiểu dữ liệu trong JS sẽ có 1 hàm tạo (Constructor) tương ứng
// Chuỗi ==> String()
// Số ==> Number()
// Logic ==> Boolean()
// Mảng ==> Array()
// Đối tượng ==> Object()

console.log(String.prototype);
// console.log(fullname.length);

// 1. at(index) hoặc charAt(index) ==> Trả về ký tự dựa vào index (index bắt đầu từu 0)
// Phương thức
var str = "Học lập trình tại F8";
// console.log(str.at(1));
// console.log(str.charAt(1));

// 2. charCodeAt(index) ==> Trả về mã ASCII cỉa kí tự theo index
// Phương thức
// console.log(str.charCodeAt(1));

// 3.concat() ==> Nỗi chuỗi (ít dùng)
// Phương thức
// console.log(str.concat("Hello 1", "Hello 2", "Hello 3"));

// 4. length ==> trả về độ dài của chuỗi
// Thuộc tính
// console.log(str.length);

// 5. indexOf(sub_string) ==> trả về index đầu tiên tìm được chuỗi sub_string trong chuỗi cha,
// nếu không tìm được trả về -1
// console.log(str.indexOf("F8"));

// 6. lastIndexOf(sub_string)
// ==> Trả về index cuối cùng tìm được sub_string trong chuỗi cha
// Nếu không tìm được trả về -1

// 7. includes(sub_string)
// ==> tìm chuỗi sub_string trong chuỗi cha và trả về true/false

// 8. slice(start, end)
// ==> Cắt chuỗi từ index đến end-1
/* console.log(str.slice(2, 5)); //
console.log(str.slice(5)); // từ 5 đến hết
console.log(str.slice(-5)); // lấy 5 kí tự cuối */

// 9. replace(old_string, new_string)
// ==> Thay thế old_string thành new_string

// 10. replaceAll(old_string, new_string)
// ==> thay thế tất cả
// console.log(str.replaceAll("F8", "F88"));

// 11. startsWith(sub_string)
//  ==> Tìm chuỗi sub_string có bắt đầu trong chuỗi cha không
// console.log(str.startsWith("học"));

// 12. endsWith(sub_string)
//  ==> Tìm chuỗi sub_string có kết thúc trong chuỗi cha không

// 13. toUpperCase()
//  ==> Chuyển thành chữ HOA
// console.log(str.toUpperCase());

// 14. toLowerCase() ==> Chuyển thành chữ thường
// console.log(str.toLowerCase());

// 15. trim() ==> Xóa khoảng trắng đầu và cuối chuỗi

// 16. trimStart(), trimLeft ==> Xóa khoảng trắng đầu chuỗi

// 17. trimEnd(), trimRight ==> Xóa khoảng trắng cuối chuỗi

// 18. split()
// ==> Tách chuỗi thành mảng dựa vào kí tự phân cách
// console.log(str.split(" "));

// 19. repeat() ==> Lặp lại chuỗi theo số lần nhất định
// console.log("*".repeat(10));

// 20. match() ==> Cắt chuỗi dựa vào biểu thức chính quy (Regex)
var str2 = "Hello an hem F8, so dien thoai 0123456789 và so nua 0987654321";
var phones = str2.match(/0\d{9}/g);
console.log(phones);
