// // class
// function Person() {
//   this.name = "Ngoc Bich";
//   this.mail = "ngocbichmohon@gmail.com";
// }

// var person = new Person();

class Person {
  name = "Ngoc Bich";
  email = "ngocbichmohon@gmail.com";
  static message = "hoc lap trinh tai f8";
  constructor(name, email) {
    console.log("Ham khoi tao");
    // console.log(name, email);
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
}
var person = new Person("Ngoc Bich", "Ngocbichmohon@gmail.com");
console.log(person);
console.log(Person.message);

class User extends Person {
  constructor() {
    console.log("User constructor");
    super();
  }
  getInfo() {
    return `
        - Name: ${this.name}
        - Email: ${this.email}
        `;
  }
}
var user = new User();
console.log(user.getInfo());
