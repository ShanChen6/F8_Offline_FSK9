/* 
    Đối tượng (Object): Khái niệm trừu tượng để mô tả đối tượng cụ thể
    - Đặc điểm (Thuộc tính)
    - Hành động (Phương thức)

    Trong JS, hầu hết đều là đối tượng
*/
// KHởi tạo Object
// var user = {
//   name: "Shan",
//   age: 19,
//   email: "shandev@gmail.com",
//   getName: function () {
//     return "Hello anh em";
//   },
//   //   key: value
// };
// user.address = "Hà Nội";
// user["location"] = "Việt Nam";

// // Cập nhật giá trị của 1 key trong object
// user.name = "Shan Dev";

// // Xóa 1 key trong object
// delete user.email;

// Duyệt qua từng phần tử của object
// console.log(user);
// for (var key in user) {
//   if (typeof user[key] === "function") {
//     console.log(user[key]());
//   } else {
//     console.log(user[key]);
//   }
// }

// var product = {
//   name: "Laptop",
//   price: 2000,
//   info: {
//     ssd: "512GB",
//     ram: "8GB",
//   },
// };

// console.log(product.info.ssd);

// var obj1 = {
//   name: "Sơn",
//   email: "son@gmail.com",
// };

// var obj2 = {
//   age: 26,
//   role: "student",
// };

// var obj3 = {};
// for (var key in obj1) {
//   obj3[key] = obj1[key];
// }

// for (var key in obj2) {
//   obj3[key] = obj2[key];
// }
// obj3.name = "Sơn";
// obj3.email = "son@gmail.com";
// obj3.age = 26;
// obj3.role = "student";
// console.log(obj3);
/* 
    1. Object.keys() ==> Lấy danh sách key trong object và trả về array
*/
// console.log(Object.keys(obj3));

// var a = {};
// if (Object.keys(a).length) {
//   console.log("Có dữ liệu");
// } else {
//   console.log("Không có dữ liệu");
// }

// 2. Object.values() ==> Lấy các value trong object và lưu vào 1 mảng

// 3. Object.entries() ==> Lấy cả key và value của object và trả về mảng 2 chiều
// console.log(Object.entries(obj3));

// 4. Object.fromEntries() ==> Chuyển mảng 2 chiều thành Object
// console.log(Object.fromEntries(Object.entries(obj3)));

// var query = {
//   category: 1,
//   keyword: "Khóa học fullstack",
//   status: true,
// };
// Chuyển thành query string
// console.log(Object.entries(query));
// queryString = "";
// for (var key in query) {
//   queryString += `&${key}=${query[key]}`;
// }
// queryString = queryString.slice(1).replaceAll(" ", "+");
// console.log(queryString);

// var queryString = Object.entries(query)
//   .map(function (item) {
//     return item.join("=");
//   })
//   .join("&")
//   .replaceAll(" ", "+");
// console.log(queryString);

// Bài tập: Chuyển queryString thành Object
// category=1&keyword=Khóa+học+fullstack&status=true

// var allowArr = ["true", "false"];
// var query = queryString
//   .replaceAll("+", "  ")
//   .split("&")
//   .map(function (item) {
//     var itemArr = item.split("=");
//     if (!isNaN(+itemArr[1])) {
//       itemArr[1] = +itemArr[1];
//     }
//     if (allowArr.includes(itemArr[1])) {
//       itemArr[1] = itemArr[1] === "true";
//     }
//     return itemArr;
//   });
// query = Object.fromEntries(query);
// console.log(query);

/* 
  Object.assign(target, source1, source2, ... sourceN) ==> Nối Object
*/

// var user = {
//   name: "Sơn",
//   email: "son@gmail.com",
// };

// var course = {
//   courseName: "fullstack",
//   price: 1000,
// };
// var newObj = Object.assign({}, user, course);
// console.log(user);
// console.log(newObj);

// Từ khóa this (Context)
// var user = {
//   name: "Sơn",
//   email: "son@gmail.com",
//   getName: function () {
//     // console.log(this);
//     return this.name;
//   },
//   getInfo: function () {
//     var _this = this;
//     return {
//       age: 26,
//       getEmail: function () {
//         console.log(_this.email);
//       },
//     };
//   },
// };
// user.getInfo().getEmail();
// console.log(user.getName());

// Hàm bind():
// var a = {
//   name: "Sơn",
//   email: "son@gmail.com",
// };

// var b = {
//   course: "fullstack",
//   role: "student",
//   getEmail: function () {
//     console.log(this.email);
//   },
// };
// b.getEmail.bind(a)();

/* 
  Hàm call()
*/
var a = {
  name: "Sơn",
  email: "son@gmail.com",
};
function something(a, b) {
  console.log(this);
  console.log(a, b);
}
// something.call(a, 10, 20);

// Hàm Apply
var args = [10, 20];
// something.apply(a, args);

var user = {
  name: "Sơn",
  email: "son@gmail.com",
  combineValues: function () {
    var result = [];
    // var _this = this;
    Object.keys(this).forEach(function (key) {
      if (typeof this[key] !== "function") {
        result.push(this[key]);
      }
    }, this);
    console.log(result);
  },
};
user.combineValues();

// Trong JS ==> Hàm tạo Object là to nhất (Hay còn gọi là object cụ tổ)
