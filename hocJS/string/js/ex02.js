var content = `<h1>Học lập trình không khó tại F8. Học lập trình không khó tại F8. Học lập trình không khó tại F8. Học lập trình không khó tại F8</h1>`;
var keyword = "trình";
var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var newContent = "";
while (position !== -1) {
  newContent +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>`;
  // Cắt bỏ đã tìm được
  content = content.slice(position + keyword.length);
  //   Tìm lại ở content mới
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
}
newContent += content;
// content =
//   content.slice(0, position) +
//   `<span>${content.slice(position, position + keyword.length)}</span>` +
//   content.slice(position + keyword.length);
// console.log(content);
document.write(newContent);

// Chia chuỗi cần xử lí thành 3 phần
// Phần 1: từ đầu đến vị trí cần xử lí
// phần 2: vị trí cần xử lí
// phần 3: sau vị trí cần xử lí

// Tìm và highlight từ khóa đầu tiên
// ==> Lưu kết quả tìm được vào 1 biến
// Cắt bỏ đoạn đã tìm được và tiến hành tìm lại
