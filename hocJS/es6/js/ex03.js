// Arrow Function
/* const getMessage = (msg) => {
  console.log("hello world", msg);
};
getMessage("F8"); */

// const sum = (a, b) => a + b;
// console.log(sum(10, 20));

/* const getUser = () => ({
  name: "shan",
  age: 26,
});

console.log(getUser()); */

// const users = [
//   {
//     id: 1,
//     name: "user 1",
//   },
//   {
//     id: 2,
//     name: "user 2",
//   },
// ];
// const getUser = (userId) => users.find(({ id }) => userId === id);
// console.log(getUser(2));

// setTimeout(() => {
//   console.log("hello world");
// }, 1000);

// const user = {
//   name: "Shan",
//   getName: function () {
//     return this.name;
//   },
// };
// console.log(user.getName());

/* 
    Lưu ý:
    - không binding được từ khóa this
    - không binding được từ khóa arguments
    - không được dùng làm function constructor
    - không có thuộc tính prototype
    - không nên sử dụng làm method của object
*/

// function doSomething() {
//   console.log(arguments);
// }
// doSomething(1, 2, 3);

const user = {
  name: "shan",
  getInfo: function () {
    return {
      age: 26,
      getAge: function () {
        return this.age;
      },
      getName: () => this.name,
    };
  },
};
console.log(user.getInfo().getAge());
console.log(user.getInfo().getName());
