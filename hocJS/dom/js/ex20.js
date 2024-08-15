// HTMLElement
// console.log(HTMLElement);
class HelloWorld extends HTMLElement {
  static observedAttributes = ["data-type"];
  constructor() {
    super();
    // console.log("HelloWorld");
    // console.log(this);
    console.log("Hello World Constructor");
  }
  connectedCallback() {
    var _this = this;
    console.log("Component duoc dua vao DOM");
    this.innerHTML = `<h1>Count: <span>0</span></h1>
    <button>+</button>`;
    var btn = this.querySelector("button");
    var span = this.querySelector("span");
    btn.addEventListener("click", function () {
      span.innerText++;
      if (span.innerHTML == 10) {
        _this.setAttribute("data-type", "success");
      }
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attributeChangedCallback", name, oldValue, newValue);
  }

  disconnectedCallback() {
    console.log("Component truoc khi bi loai bo khoi DOM");
  }
}
customElements.define("hello-world", HelloWorld);

var btn = document.querySelector(".btn");
var helloWorldEl = document.createElement("hello-world");
var isShow = false;
btn.addEventListener("click", function () {
  if (!isShow) {
    document.body.append(helloWorldEl);
    isShow = true;
  } else {
    helloWorldEl.remove();
    isShow = false;
  }
});
