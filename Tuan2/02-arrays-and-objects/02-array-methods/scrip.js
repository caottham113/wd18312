let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// Lồng mảng

// Lồng berries bên trong fruits
fruits.push(berries);

// Bây giờ chúng ta có thể truy cập 'blueberry' bằng cách sau
x = fruits[3][1];
console.log(x); // Kết quả: 'blueberry'

// Tạo một biến mới và lồng cả hai mảng
const allFruits = [fruits, berries];

x = allFruits[1][2];
console.log(x); // Kết quả: 'raspberry'

// concat() - Nối các mảng
x = fruits.concat(berries);
console.log(x); // Kết quả: ['apple', 'pear', 'orange', ['strawberry', 'blueberry', 'raspberry']]

// Toán tử spread (...) - Nối mảng
x = [...fruits, ...berries];
console.log(x); // Kết quả: ['apple', 'pear', 'orange', 'strawberry', 'blueberry', 'raspberry']

// flat() - Làm phẳng một mảng
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();
console.log(x); // Kết quả: [1, 2, 3, 4, 5, 6, 7, 8]

// Các phương thức tĩnh của đối tượng Array

// isArray() - Kiểm tra xem có phải là một mảng hay không
x = Array.isArray(fruits);
console.log(x); // Kết quả: true

// from() - Tạo một mảng từ một giá trị giống mảng
x = Array.from('12345');
console.log(x); // Kết quả: ['1', '2', '3', '4', '5']

// of() - Tạo một mảng từ một tập hợp các giá trị
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);
console.log(x); // Kết quả: [1, 2, 3]