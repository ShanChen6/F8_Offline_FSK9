// Class
/* 
  - class
  - extends
  - khai bao property, method
  - constructor
  - super
  - static
*/

class Person {
  // khai báo thuộc tính
  name = "shan";
  age = 26;
  #income = 12000; //private property
  #data = ["ite1", "ite2", "ite3"];
  // phương thúc khởi tạo
  constructor() {}
  // phương thức khác
  #getName() {
    return this.name;
  }
  getIncome() {
    return this.#income;
  }
  getInfo() {
    return {
      name: this.#getName(),
    };
  }
  get latest() {
    return this.#data[this.#data.length - 1];
  }
  set latest(value) {
    this.#data.push(value);
  }
}

const person = new Person(); //instance
// console.log(person);
// console.log(person.getIncome());
// console.log(person.getInfo());
person.latest = "ite4";
console.log(person.latest);

// element.innerHTML ==> getter
// element.
