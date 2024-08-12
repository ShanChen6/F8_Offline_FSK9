var btnList = document.querySelectorAll("header button");
// console.log(btn);

var navEl = document.querySelector("header");
var navHeight = navEl.clientHeight;

if (btnList.length) {
  btnList.forEach(function (btn) {
    btn.addEventListener("click", function () {
      //   console.log(btn);
      var target = btn.dataset.target;
      //   console.log(target.dataset);
      var sectionEl = document.querySelector(target);
      var sectionOffsetTop = sectionEl.offsetTop;
      window.scroll({
        top: sectionOffsetTop - navHeight,
        behavior: "smooth",
      });
    });
  });
}

var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var target = entry.target.id;
        // console.log(target);
        var navItem = document.querySelector(
          `header button[data-target="#${target}]`
        );
        if (navItem) {
          var navItemActive = document.querySelector("header button.active");
          if (navItemActive) {
            navItemActive.classList.remove("active");
          }
          navItem.classList.add("active");
        }
      }
    });
    //   console.log(entries);
    // if (entries[0].isIntersecting) {
    //   console.log("section 3 da xuat hien");
    // }
  },
  {
    threshold: 0.5,
  }
);
var sectionList = document.querySelectorAll("section");
sectionList.forEach(function (sectionEl) {
  observer.observe(sectionEl);
});
// var section3 = document.querySelector("#section-3");
// observer.observe(section3);
