// Object, Array
// Destructuring
// Cú pháp của ES6 ccho phép phá vỡ cấu trúc của array, object để truy cập vào cácc phần tử và lưu thành các biến riêng biệt

// const user = {
//   fullname: "Shan",
//   email: "embemohon@gmail.com",
//   age: 30,
//   "status-text": "success",
//   address: "Ha Noi",
//   gender: "Nam",
// };

// const { fullname: username, email, age = 30, "status-text": statusText } = user;
// console.log(username, email, age, statusText);

// const { fullname, email, ...rest } = user;
// console.log(user);

// const profile = {
//   displayName: "Shan",
//   emails: {
//     id: 1,
//     email: "c",
//   },
// };

// const {
//   displayName,
//   emails: { email },
// } = profile;
// console.log(displayName, email);

// var key = "fullname";
// const { [key]: a } = user;
// console.log(a);

// const users = ["shan", "embemohon@gmail.com", 32, "HN", "Nam"];
// console.log(users);
// const [fullname, email, ...rest] = users;
// console.log(fullname, email);
// console.log(rest);

/* const doSomething = function ({ fullname, password }) {
  console.log(fullname, password);
};

doSomething({
  fullname: "shan",
  password: "123456",
}); */

// Name Arguments
/* const doSomething = function ({
  name,
  email = "embemohon@gmail.com",
  status = true,
  isShow = false,
}) {
  console.log(`Name: `, name);
  console.log(`Email: `, email);
  console.log(`Status: `, status);
  console.log(`IsShow: `, isShow);
};

doSomething({ name: "user 1", status: false }); */

// Spread Operator
/* const oldObj = {
  name: "Shan",
  email: "shanchen@gmail.com",
};

const newObj = {
  teacher: "F8",
  price: 1000,
  ...oldObj,
};

console.log(newObj); */

/* const data = {
  msg: "hoc js khong kho",
  products: ["product 1", "product 2"],
};

// Sao chép object dât và lưu vào biến newData, sau đó thực hiện thê Product 3 vào key products

const newData = {
  ...data,
  products: [...data.products, "product 3"],
};

console.log(newData);
console.log(data);
 */

const name = "shan";
const email = "abc@gmail.com";
const age = 32;

const user = {
  name,
  email,
  age,
  getName() {
    return this.name;
  },
};
console.log(user);
