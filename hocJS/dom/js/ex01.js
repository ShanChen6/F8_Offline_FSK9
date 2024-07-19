/* 
// DOM = Document Object Model
Mô hình hóa tài liệu HTML thành các object dễ dàng thao tác, chỉnh sử HTML
==> Sử dụng các object để thay đổi HTML ==> Giao diện sẽ thay đổi

Các loại DOM:
1. DOM Document
2. DOM Element
3. DOM HTML
4. DOM CSS
5. DOM Event
6. DOM Event Listener
7. DOM Node, NodeList
8. DOM Navigation
- Bổ sung: Web Component, Custom Element, Shadow DOM
*/

// console.dir(document);

// 1. DOM Element ==> Thao tác dựa vào các thẻ html có sẵn để trả về object (Element Node)
// 1.1 document.getElementId(id)
// ==> Chỉ trả về 1 phần tử đầu tiên
// var title = document.getElementById("title");
// console.log(title, typeof title);

// 2.2 document.getElementsByClassName(ten_class)
// ==> Trả về 1 danh sách các element thỏa mãn điều kiện

// var titleList = document.getElementsByClassName("title");
// console.log(titleList);

// 2.3 document.getElementsByTagName(ten_class)
// ==> Trả về 1 danh sách các element thỏa mãn điều kiện

// var titleList = document.getElementsByTagName("h1");
// console.log(titleList);

// 2.4 document.querySelector(selector)
// ==> Dựa vào selector của css để chọn và trả về 1 phần tử đầu tiên

// var title = document.querySelector("#title");
// console.log(title);

// 2.5 document.querySelectorAll(selector)
// ==> Dựa vào selector của css để chọn và trả về 1 danh sách chứa các phần tử thỏa mãn
// var titleList = document.querySelectorAll(".title");
// console.log(titleList);

// Trường hợp đặc biệt
// console.log(document.head);
// console.log(document.body);
// console.log(document.title);
console.log(document.login_form.email);
// document.login_form.email.value = "shanchen@gmail.com";
document.login_form.email.placeholder = "Địa chỉ email ...";
