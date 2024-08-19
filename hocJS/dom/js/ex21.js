// /*
//     Shadow Host (Element)
// */
// var boxEl = document.querySelector(".box");

// // Shadow root
// var shadowRoot = boxEl.attachShadow({
//   mode: "open",
// });

// // Them content vao shadow root
// shadowRoot.innerHTML = `<h1>F8 - hoc lap trinh khong kho</h1>`;
// var styleEl = document.createElement("style");
// styleEl.textContent = `
// h1 {
//     color: red;
// }
// `;
// shadowRoot.append(styleEl);

// // var box2 = document.querySelector(".box");
// // var h1 = document.querySelector("h1");
// // console.log(h1);

/* 
    Xay dung component Todo App
*/
class TodoApp extends HTMLElement {
  static observedAttributes = ["theme"];

  constructor() {
    super();
    this.theme = "";
    this.valueInput = "";
  }
  connectedCallback() {
    // console.log(this);
    this.attachShadow({
      mode: "open",
    });
    this.render();
    this.addStyles();
    this.addEvent();
    // this.theme();
    // console.log("ok khong");
  }

  /*   this.document.querySelector(".light-btn").addEventListener("click", function () {

  }) */

  //   handleOnChangeInput() {
  //     var inputEl = this.shadowRoot.querySelector(".input-todo");
  //     var btnAdd = this.shadowRoot.querySelector(".btn-add");

  //     inputEl.addEventListener("change");
  //   }

  addStyles() {
    var style = document.createElement("style");
    style.textContent = `
        * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        }
        ul {
            list-style: inside;
        }
        .todo-app {
            border: 1px solid red;
            padding: 15px;
        }
        .todo-app .theme {
            float: right;
        }

        .todo-app {
            &.theme-dark {
                color: #fff;
                background: #000;
            }
            .theme {
                .active {
                    color: red;
                }
            }
        }
    `;
    this.shadowRoot.append(style);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // console.log("attributeChangedCallback", name, oldValue, newValue);
    /* document.addEventListener("DOMContentLoaded", function () {
      if (name === "theme" && oldValue !== newValue) {
        _this.shadowRoot
          .querySelector(".todo-app")
          .classList.toggle(`theme-${newValue}`);
      }
    }); */
    if (name === "theme" && oldValue !== newValue) {
      this.theme = newValue;
    }
  }

  addEvent() {
    var themeEl = this.shadowRoot.querySelector(".theme");
    themeEl.addEventListener(
      "click",
      function (e) {
        var theme = e.target.dataset.theme;
        this.setAttribute("theme", theme);
        this.render();
        this.addStyles();
        this.addEvent();
      }.bind(this)
    );
    var form = this.shadowRoot.querySelector("form");
    var ul = this.shadowRoot.querySelector("ul");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var titleEl = e.target.elements.title;
      var value = titleEl.value;
      if (!value) {
        return alert("vui long nhap");
      }
      var li = document.createElement("li");
      li.innerText = value;
      ul.append(li);
      titleEl.value = "";
    });
  }

  //   theme() {
  //     var lightBtn = this.shadowRoot.querySelector(".light-btn");
  //     var darkBtn = this.shadowRoot.querySelector(".dark-btn");

  //     lightBtn.addEventListener(
  //       "click",
  //       function () {
  //         // console.log("light");
  //         this.setAttribute("theme", "light");
  //       }.bind(this)
  //     );
  //     darkBtn.addEventListener(
  //       "click",
  //       function () {
  //         // console.log("light");
  //         this.setAttribute("theme", "dark");
  //       }.bind(this)
  //     );
  //   }

  render() {
    var template = `<div class="todo-app theme-${this.theme}">
        <h1>Todo App</h1>
        <div class="theme">
            <button class="${
              this.theme === "light" ? "active" : ""
            }" data-theme="light">Light</button>
            <button class="${
              this.theme === "dark" ? "active" : ""
            }" data-theme="dark">Dark</button>
        </div>
        <ul>
            <li>j1</li>
            <li>j2</li>
            <li>j3</li>
            <li>j4</li>
            <li>j5</li>
        </ul>
        <form>
            <input type="text" class="input-todo" name="title" />
            <button class="btn-add">Add</button>
        </form>
        </div>
        `;
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = template;
    }
  }
}

customElements.define("todo-app", TodoApp);
