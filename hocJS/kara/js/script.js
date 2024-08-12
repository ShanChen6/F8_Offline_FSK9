// console.log(lyric);

// Tao element
var audio = document.querySelector("audio");
var karaokeInner = document.querySelector(".karaoke-inner");

// audio.addEventListener("timeupdate", function () {
//   console.log(this.currentTime);
// });

var requestId;
audio.addEventListener("play", function () {
  requestId = window.requestAnimationFrame(handleKaraoke);
});
audio.addEventListener("pause", function () {
  window.cancelAnimationFrame(requestId);
});
// window.requestAnimationFrame(handleKaraoke);
var lastIndex;
function handleKaraoke() {
  //   console.log(audio.currentTime);
  var currentTime = audio.currentTime * 1000;
  renderLyric(currentTime);
  renderKaraoke(currentTime);
}

function getSentence(index) {
  return lyric[index].words
    .map(function (wordEl) {
      return `<span class="word" data-start-time="${wordEl.startTime}" data-end-time="${wordEl.endTime}">
        ${wordEl.data}<span>${wordEl.data}</span></span>`;
    })
    .join(" ");
}

// Hien thi loi bai hat
function renderLyric(currentTime) {
  var index = lyric.findIndex(function (sentenceEl) {
    var sentenceArr = sentenceEl.words;
    var firstWord = sentenceArr[0];
    var lastWord = sentenceArr[sentenceArr.length - 1];
    return (
      currentTime >= firstWord.startTime && currentTime <= lastWord.endTime
    );
  });
  if (index !== -1 && index !== lastIndex) {
    if (index === 0) {
      karaokeInner.innerHTML = `
            <p>${getSentence(0)}</p>
            <p>${getSentence(1)}</p>
            `;
    } else {
      if (index % 2 !== 0) {
        nextSentence(karaokeInner.children[0], getSentence(index + 1));
      } else {
        nextSentence(karaokeInner.children[1], getSentence(index + 1));
      }
    }
    lastIndex = index;
  }
  requestId = window.requestAnimationFrame(handleKaraoke);
}

// Xu ly to mau khi hat karaoke
function renderKaraoke(currentTime) {
  //   console.log(currentTime);
  var wordList = karaokeInner.querySelectorAll(".word");
  console.log(wordList);

  wordList.forEach(function (wordEl) {
    var startTime = wordEl.dataset.startTime;
    var endTime = wordEl.dataset.endTime;
    if (currentTime >= startTime && currentTime <= endTime) {
      var rate = ((currentTime - startTime) / (endTime - startTime)) * 100;
      wordEl.children[0].style.width = `${rate}%`;
      console.log(wordEl);
    }
    if (currentTime > endTime) {
      wordEl.children[0].style.width = `100%`;
    }
  });
}

function nextSentence(element, sentence) {
  element.style.transition = `opacity 0.6s ease-in-out`;
  element.style.opacity = 0;
  setTimeout(function () {
    element.innerHTML = sentence;
    element.style.opacity = 1;
  }, 600);
}
