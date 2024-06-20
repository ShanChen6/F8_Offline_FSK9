/* 
    2. Câu lệnh switch case
    - Chỉ chấp nhận so sánh bằng (===)
*/
var action = "insert";
// switch (action) {
//     case "create":
//     case "insert":
//     case "add":
//         console.log("Thêm");
//         break;
//     case "update":
//         console.log("Cập nhật");
//         break;
//     case "delete":
//         console.log("Xóa");
//         break;
//     default:
//         console.log("Danh sách");
//         break;
// }

if (action === "create" || action === "insert" || action === "add") {
    action = "Thêm";
} else if (action === "update") {
    action = "Cập nhật";
} else if (action === "delete") {
    action = "Xóa";
} else {
    action = "Danh sách";
}

console.log(action);