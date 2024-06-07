# Responsive Web Design

- thiết kế web thích ứng với các thiết bị khác nhau

- sử dụng css để thay đổi giao diện, dựa vào kích thước màn hình

## Breakpoint

- Điểm dừng kích thước màn hình mà tại đó giao diện sẽ thay đổi
- Không có breakpoint cố định cho mọi dự án
- Chỉ có breakpoint phổ biến có thể thay đổi theo từng dự án

Breakpoint phổ biến:

- 576px
- 768px
- 992px
- 1200px
- 1400px

## Media Queries

- At-rule có sẵn của CSS

```css
@media all|screen|print and (min-width: value) and (max-width: value) {
    selector {
        code CSS
    }
}

```

```css
@media screen and (max-width: 1399px) {
  //Selector CSS
}
@media screen and (max-width: 1199px) {
  //Selector CSS
}
@media screen and (max-width: 991px) {
  //Selector CSS
}
@media screen and (max-width: 767px) {
  //Selector CSS
}
@media screen and (max-width: 575px) {
  //Selector CSS
}
```
