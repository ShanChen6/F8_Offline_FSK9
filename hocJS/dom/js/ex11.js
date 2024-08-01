var progressBar = document.querySelector(".progress-bar");
var progress = document.querySelector(".progress-bar .progress");
var item = document.querySelector(".progress-bar .progress span");

var offsetX = 0;
var progressBarWidth = progressBar.clientWidth;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    var rate = (offsetX / progressBarWidth) * 100;
    progress.style.width = `${rate}%`;
  }
});
item.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    document.addEventListener("mousemove", handleDrag);
    clientXSpan = e.clientX;
  }
});
document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
});

var clientXSpan = 0;
var a = 0;
function handleDrag(e) {
  var spaceMove = e.offsetX - clientXSpan;
  var rate = (spaceMove / progressBarWidth) * 100;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  progress.style.width = `${rate}%`;
}
