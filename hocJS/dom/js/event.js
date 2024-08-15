var inputRangeList = document.querySelectorAll('input[type="range"]');
var finishEvent = new Event("finish");
var dragFastEvent = new Event("dragFast");
var startValue = null;
var startTime = null;
inputRangeList.forEach(function (inputRange) {
  inputRange.addEventListener("input", function () {
    if (!startValue) {
      startValue = this.value;
      console.log(startValue);
    }
    if (this.value !== startValue && !startTime) {
      startTime = new Date().getTime();
      console.log("start");
    }
    if (+this.value === 100) {
      this.dispatchEvent(finishEvent);
      var currentTime = new Date().getTime();
      if (currentTime - startTime < 500) {
        this.dispatchEvent(dragFastEvent);
      }
    }
  });
  inputRange.addEventListener("mouseup", function () {
    // var startValue = null;
    // var startTime = null;
  });
});

// Tạo event tên: dragFast để phát hiện user kéo nhanh (< 500ms)
