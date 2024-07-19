/* function User() {
  this.name = "Shan Dev";
  this.email = "shandev@gmail.com";
  this.first = function () {
    return {
      name: this.name,
      email: this.email,
    };
  };
}

function Authentication() {
  User.call(this);
  this.getProfile = function () {
    return this.first();
  };
}

var user = new Authentication();
console.log(user.getProfile());
 */

// setter: Cập nhật giá trị của thuộc tính thông qua 1 hàm
// getter: Lấy giá trị của thuộc tính thông qua 1 hàm
// ==> Cách gọi giống thuộc tính
// ví dụ: users.length

/* function Person() {
  this.data = ["item1", "item2", "item3"];
  this.getLatest = function () {
    return this.data[this.data.length - 1];
  };
}

Person.prototype = {
  get latest() {
    return this.data[this.data.length - 1];
  },
  set latest(value) {
    this.data.push(value);
  },
};
var person = new Person();
person.latest = "Item 4";
console.log(person.getLatest()); */

// Sử dụng Constructor giống như 1 Function thông thường
// function Person() {
//   this.name = "Shan dev";
//   this.email = "shandev@gmail.com";
//   return "F8";
// }
// var person = new Person();
// console.log(person);
// console.log(Person());

// var age = new Number(10);
// console.log(age);
// console.log(Number(10));

// var fullname = new String("hello");
// console.log(fullname);
// console.log(String("hello ae"));

// dùng từ khóa new trả về dữ liệu?
// function Transformer() {}

/* function UserTransformer(instance) {
  this.config = function () {
    return {
      UUID: instance.id,
      fullname: instance.name,
      emailAddress: instance.email,
      status: instance.status,
    };
  };
  return this.config();
}

var user = {
  id: 1,
  name: "Shan Dev",
  email: "shandev@gmail.com",
  status: true,
};

var newUser = new UserTransformer(user);
console.log(newUser); */

// Nếu trong constructor return về object ==> Khi khởi tạo instance từ constructor ==> instance chứa dữ liệu return

var users = [
  {
    id: 1,
    name: "user 1",
    email: "user1@gmail.com",
  },
  {
    id: 2,
    name: "user 2",
    email: "user2@gmail.com",
  },
  {
    id: 3,
    name: "user 3",
    email: "user3@gmail.com",
  },
];

// Xóa user có email là user2@gmail.com
users = users.filter(function (user) {
  return user.email !== "user2@gmail.com";
});

document.write(
  users
    .map(function (user) {
      return `<div>
    <h2>ID: ${user.id}</h2>
    <h2>Name: ${user.name}</h2>
    <h2>Email: ${user.email}</h2>
    </div>`;
    })
    .join("")
);
