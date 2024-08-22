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
  static message = "hoc js khong kho";

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
  static getMessage() {
    // return this.message;
    // return new this().name;
    console.log(this);
  }
}

const person = new Person(); //instance
// console.log(person);
// console.log(person.getIncome());
// console.log(person.getInfo());
person.latest = "ite4";
console.log(person.latest);

// element.innerHTML ==> getter
// element.innerHTML = value ==> setter

// console.log(Person.getMessage());

class Counter {
  name = "f8";
  handleClick = () => {
    console.log(this.name);
  };
  render() {
    const h1 = document.createElement("h1");
    h1.innerText = 0;
    document.body.append(h1);
    const btn = document.createElement("button");
    btn.innerText = `click me`;
    btn.addEventListener("click", this.handleClick);
    document.body.append(btn);
  }
}
new Counter().render();
