var root = document.querySelector("#root");
var h1 = document.createElement("h1");
h1.innerText = "Count: ";
var btnSub = document.createElement("button");
var btnAdd = document.createElement("button");
btnSub.innerText = "-";
btnAdd.innerText = "+";

// var span = document.createElement("span");
// span.innerText = 0;
var textNode = document.createTextNode(0);
h1.append(textNode);

btnSub.addEventListener("click", function (e) {
  if (textNode.data > 0) {
    textNode.data--;
  }
});

btnAdd.addEventListener("click", function (e) {
  console.log("hello world");
  //   span.innerText++;
  textNode.data++;
  comment.data = "vua tang";
});

root.append(h1);
root.append(btnSub);
root.append(btnAdd);

// Comment Node
var comment = document.createComment("Counter App");
root.append(comment);
