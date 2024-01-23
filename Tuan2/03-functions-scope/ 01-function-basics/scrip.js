// Định nghĩa một hàm không có tham số
function sayHello() {
    console.log('Hello World');
  }
  
  // Gọi hàm sayHello
  sayHello();
  
  // Định nghĩa một hàm có tham số
  function add(num1, num2) {
    console.log(num1 + num2);
  }
  
  // Gọi hàm add với các đối số
  add(5, 10);
  
  // Giải thích về tham số và đối số
  // Tham số là tên của các biến được sử dụng để truyền dữ liệu vào một hàm.
  // Đối số là các giá trị được truyền vào hàm khi nó được gọi.
  
  // Hàm trả về giá trị
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  // Gán giá trị trả về cho một biến
  const result = subtract(10, 2);
  
  // In ra giá trị của biến result và kết quả của hàm subtract
  console.log(result, subtract(20, 5));