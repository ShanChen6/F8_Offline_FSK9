var carouselInner = document.querySelector(".carousel .carousel-inner");
var nextBtn = document.querySelector(".carousel .carousel-nav .next");
var prevBtn = document.querySelector(".carousel .carousel-nav .prev");
// console.log(nextBtn);
var carouselWidth = carouselInner.clientWidth;
var totalWidth = carouselWidth * carouselInner.children.length;
var position = 0;
nextBtn.addEventListener("click", function () {
  console.log("a");
  if (Math.abs(position) + carouselWidth >= totalWidth) {
    return;
  }
  position += carouselWidth;
  console.log(position);
  carouselInner.style.translate = `${position}px`;
});
