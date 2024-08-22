// ES6: Phiên bản của JS được cập nhật năm 2015
/* 
    - khai báo biến
    - Function
    - Object, Array
    - Class
    - Module
    - Promise ==> xử lí bất đồng bộ
*/

// 1. Khai báo biến
// let, const chỉ hoạt động trong phạm vi nó khai báo và các phạm vi con
// - không được khai báo lại trong cùng 1 phạm vi
// let ==> được phép cập nhật lại giá trị biến
// const ==> không được cập nhật lại và phải gán luôn khi khai báo

/* 
Phạm vi:
    - Global Scope
    - Function Scope
    - Block Scope
    - Module Scope
*/
// let a = 10;
// const a = 10;
// console.log(a);

/* for (let i = 0; i < 5; i++) {
  console.log(i);
} // la 1 block scope */

/* let a = 10;
if (a >= 10) {
  let b = 20;
  console.log(b);
} */

//   Tim hieu Temporal Dead Zone
