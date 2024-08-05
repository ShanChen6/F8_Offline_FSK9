var root = document.querySelector("#root");

// Tao element
var h1 = document.createElement("h1");

h1.innerText = `Hoc JS khong kho`;
h1.id = "title";
h1.className = "title";
// console.log(h1);

var btn = document.createElement("button");
btn.innerText = "click";
btn.addEventListener("click", function () {
  //   console.log("hello");
  var span = document.createElement("span");
  span.innerText = "F8";
  h1.append(span);
});

root.append(h1);
root.append(btn);
// var h1 = h1.cloneNode(true);
// root.append(h1);

// var h2 = document.createElement("h2");
// h2.innerText = `Hoc JS khong kho`;
// root.prepend(h2);

/* 
    Bai tap:
*/

var ul = document.createElement("ul");
// ul.innerText = `Hoc JS khong kho`;
ul.className = "menu";

for (var i = 1; i <= 4; i++) {
  var li = document.createElement("li");
  li.innerText = `Item ${i}`;
  li.addEventListener("click", function () {
    removeItem(this);
  });
  ul.append(li);
}

var btnAdd = document.createElement("button");
btnAdd.innerText = "add";

btnAdd.addEventListener("click", function () {
  //   console.log("hello world");
  var li = document.createElement("li");
  li.innerText = `Item ${i++}`;
  li.addEventListener("click", function () {
    removeItem(this);
  });
  ul.append(li);
});

root.append(ul);
root.append(btnAdd);

var removeItem = function (el) {
  el.remove();
};

// insertBefore

var h3 = document.createElement("h3");
h3.innerText = "Javascript";
root.insertBefore(h3, ul);

var nextUlEl = ul.nextElementSibling;
if (nextUlEl) {
  root.insertBefore(h3, nextUlEl);
} else {
  root.append(h3);
}

// replaceChild
var p = document.createElement("p");
p.innerText = "hoc lap trinh qua kho";
root.replaceChild(p, h1);
root.append(h1);

// removeChild
root.removeChild(ul);
root.append(ul);
