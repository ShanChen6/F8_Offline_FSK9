var slider1 = document.querySelector(".slider-1");
var slider2 = document.querySelector(".slider-2");
// Tạo sự kiện có tên là finish với logic khi nào user kéo được 100
// Sự kiện finish được gán vào input range có class là slider-1
/* 
    CCó 3 yếu tố
    - tên sự kiện
    - logic
    - element
*/

/* var finishEvent = new Event("finish");
finishEvent.msg = "Hoc js khong kho";
slider1.addEventListener("mousedown", function (e) {
  var rate = Math.round((e.offsetX * 100) / this.clientWidth);
  finishEvent.initialRate = rate;
});
slider1.addEventListener("input", function (e) {
  var value = this.value;
  if (+value === 100) {
    slider1.dispatchEvent(finishEvent);
  }
}); */

// Lắng nghe
slider1.addEventListener("finish", function (e) {
  console.log("Logic 1");
  //   console.log(e.initialRate);
  //   console.log(e.msg);
});
// slider1.addEventListener("finish", function (e) {
//   console.log("logic 2");
// });
slider2.addEventListener("finish", function (e) {
  console.log("logic 2");
});

slider1.addEventListener("dragFast", function (e) {
  console.log("Nhanh");
});
