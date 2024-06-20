/* 
    Câu lệnh rẽ nhánh
    1. if else

    1.1. Câu lệnh if thiếu
    if (dieukien) {
        Khối lệnh
    }
    
    1.2. Câu lệnh if đủ
    if (dieukien) {
        Khối lệnh đúng
    } else {
        khối lệnh sai 
    }

    1.3. Câu lệnh if nhiều nhánh
    if (dieukien1) {
        khối lệnh 1
    } else if (dieukien2) {
        Khối lệnh 2
    } else if (dieukien3) {
        Khối lệnh 3 
    } else {
        Khối lệnh 4 
    }

    1.4. if lồng nhau
    if (dieukien1) {
        if (dieuklien2) {
            Khối lệnh
        } else {
            Khối lệnh 
        }
    }
    2. switch case
*/

// Ví dụ:
/* 
    - Lương <= 5tr --> thuế 0%
    - Lương > 5tr và < 15tr --> Thuế 3%
    - >= 15tr --> thuế 5%
*/

var salary = 15000000;
var tax;
var income;

if (salary > 0) {
    if (salary <= 5000000) {
        income = salary;
    } else if (salary >= 5000000 && salary <= 15000000) {
        tax = salary * 0.03;
        income = salary - tax;
    } else {
        tax = salary * 0.05;
        income = salary - tax;
    }
    console.log(`Thu nhập: ${income}`);
} else {
    console.log("Không hợp lệ");
}


// Bài kiểm tra logic
var saleRate = 5; // phần trăm giảm giá
var salePrice = 1000000; // Giá sau khi giảm giá

// salePrice = Price - (Price * saleRate) / 100
//  Price = salePrice / (1 - saleRate/100)

var price;
price = salePrice / (1 - saleRate/100);
console.log(price);