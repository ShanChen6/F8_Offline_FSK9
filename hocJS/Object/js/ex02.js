// Thực hành prototype
/* 
    - Thêm prototype cho Object ==> Tất cả các object sẽ được kế thừa
    - Thêm prototype cho cóntructor (array, string,...) ==> Chỉ những object được tạo ra từ cóntructor đó ==> kế thừa được
    Object ==> Constructor ==> instance
*/

// Array.prototype.latest = function () {
//   return this[this.length - 1];
// };

// var arr = ["item1", "item2", "item3", "item4"];
// console.log(arr.latest());

/* var users = ["item1", "item2", "item3", "item4"];

Array.prototype.map2 = function (cb) {
  if (typeof cb !== "function") {
    return;
  }
  var result = [];
  for (var index = 0; index < this.length; index++) {
    // console.log(result);
    result.push(cb(this[index], index, this));
  }
  return result;
};
var newArr = users.map2(function (user, index) {
  return `<h3>${index + 1} - ${user}</h3>`;
});
console.log(newArr); */

// Object literal
// function constructor
// - Tạo ra 1 bản thiết kế cho đối tường
// - khởi tạo đối tượng từ bản thiết kế đó ==> Đối tượng được gọi là instance

function Person(name, email) {
  this.name = name;
  this.email = email;
  this.getName = function () {
    return this.email;
  };
}

var person1 = new Person("Hồng Sơn", "hongson@gmail.com");
console.log(person1);

// Kiểm tra 1 object được tạo từ constructor nào
// console.log(person1.constructor.name);
// console.log(person1 instanceof Person);

// Kiểm tra 1 biến có phải là 1 mảng không? (không dùng hàm Array.isArray())

// var users = [];
// if (users instanceof Array) {
//   console.log("Là mảng");
// } else {
//   console.log("không phải là mảng");
// }

// Phương thức tĩnh, thuộc tính tĩnh
// - Không phụ thuộc vào đối tượng
// - Đảm bảo dữ liệu không thay đổi khi constructor được khởi tạo lại
// - Truy cập trực tiếp từ Constructor

Person.message = "Học JS không khó"; // static property
Person.isPerson = function (instance) {
  return instance instanceof Person;
}; // static method
Person.something = function () {
  console.log(new this().data);
  return "Something";
};

// Từ khóa this trong phương thức tĩnh ==> Trả về constructor

// console.log(Person.message);
// console.log(Person.isPerson(person1));

//non-static property
Person.prototype.data = "Hello anh em F8";

//non-static method
Person.prototype.getData = function () {
  // Gọi thuộc tính message(
  console.log(this.constructor.message);
  return this.data;
};

// Yêu cầu 1: Gọi hàm getData
// var person = new Person();
// console.log(person.getData());

// Yêu cầu 2: Trong hàm getData ==> Gọi thuộc tính message

console.log(Person.something());
// Yêu cầu: Trong hàm something ==> Gọi thuộc tính data
