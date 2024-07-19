/* var queryString =
  "status=active&keyword=ahihi&category=1&category=2&category=3";

// var statusArr = ["active"]
var query = queryString
  .replace("+", " ")
  .split("&")
  .reduce(function (prev, current) {
    var arr = current.split("=");
    var key = arr[0];
    var value = arr[1];
    if (!prev[key]) {
      prev[key] = value;
    } else {
      if (!Array.isArray(prev[key])) {
        prev[key] = [prev[key]];
      }
      prev[key].push(value);
    }
    console.log(prev);
    return prev;
  }, {});
console.log(query);
 */

// Tham chiếu
// var a = {
//   name: "Shan Chen",
//   email: "shanchen@gmail.com",
// };

// var b = a;
// var b = Object.assign({}, a);
// var b = { ...a };

// var b = JSON.parse(JSON.stringify(a));
// b.name = "Shan học lập trình";

// // Optional Chaining (?.)
// var user = {
//   name: {
//     firstName: "Shan",
//     lastName: "Chen",
//   },
// };
// console.log(user?.name?.firstName);

// 2. optional chaining với phương thức
var user = undefined;
user?.getFirstName?.();
