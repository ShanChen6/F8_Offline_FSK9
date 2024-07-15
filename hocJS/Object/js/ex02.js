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

var users = ["item1", "item2", "item3", "item4"];

Array.prototype.map2 = function (cb) {
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
console.log(newArr);
