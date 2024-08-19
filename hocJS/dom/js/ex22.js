var el = document.querySelector("[x-data]");
if (el) {
  var dataValue = el.getAttribute("x-data");
  if (dataValue) {
    var func = new Function(`return ${dataValue}`);
    var data = func();
    for (var key in data) {
      var outputEl = document.querySelector(`[x-text="${key}"]`);
      if (outputEl) {
        outputEl.innerText = data[key];
      }
    }
  }
}

// var str = "console.log('hello word')";
// var func = new Function(str);
// func.call();
