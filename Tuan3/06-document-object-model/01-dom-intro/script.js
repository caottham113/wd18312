// Đối tượng window toàn cầu
console.log(window);

// Đối tượng document là một phần của đối tượng window
console.dir(window.document);

// Chúng ta có thể truy cập trực tiếp các phần tử DOM thông qua các thuộc tính
console.log(document.body);
console.log(document.links[0]);

// Chúng ta có thể đặt giá trị cho các thuộc tính của các phần tử
// document.body.innerHTML = '<h1>Xin chào từ thân trang</h1>';

// Đối tượng document có nhiều phương thức. Một trong những phương thức là `document.write()`, sẽ viết một cái gì đó vào tài liệu
document.write('Xin chào từ JS');

// Chúng ta cũng có các phương thức để chọn các phần tử một cách trực tiếp hơn
document.getElementById('main').innerHTML = '<h1>Xin chào từ trang chính</h1>';

document.querySelector('#main h1').innerText = 'Xin chào';
