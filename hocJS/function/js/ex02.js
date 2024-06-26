// var display = function (callback, ...args) {
//   console.log("Display");
//   if (typeof callback === "function") {
//     callback(...args); // Lời gọi hàm
//   }
//   //   showInfo();
// };
// var showInfo = function (text, title, a) {
//   console.log("Show Info", text, title, a);
// };
// display(showInfo, "F8", "F9", "F10");

// var showInfo2 = function () {
//   console.log("Show Info 2");
// };
// display(showInfo);
// display(showInfo2);
// display(function () {
//   console.log("Chào anh em F8");
// });

// setTimeout ==> Thự thi 1 hàm khác sau 1 khoảng thời gian chỉ định
// setTimeout(
//   function (a, b) {
//     console.log("Học lập trình không khó", a, b);
//   },
//   2000,
//   "F8",
//   "F9"
// );

// setInterval ==> Thực thi lặp lại 1 hàm sau 1 khoảng thời gian
// var count = 0;
// var id = setInterval(function () {
//   console.log(`Hello anh em F8`, ++count);
//   if (count === 5) {
//     clearInterval(id);
//   }
// }, 1000);

// setTimeout(function () {
//   console.log("Hello anh em F8");
// }, 0);
// console.log("Học lập trình không khó");

var getA = function (callback) {
  setTimeout(function () {
    console.log("getA");
    if (typeof callback === "function") {
      callback();
    }
  }, 1000);
};

var getB = function (callback) {
  setTimeout(function () {
    console.log("getB");
    if (typeof callback === "function") {
      callback();
    }
  }, 500);
};

var getC = function () {
  setTimeout(function () {
    console.log("getC");
    if (typeof callback === "function") {
      callback();
    }
  }, 1500);
};
getA(function () {
  getB(function () {
    getC();
  });
});
