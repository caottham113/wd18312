//document.all đã lỗi thời:
output = document.all;
output = document.all[11];
output = document.all.length;
//Cấu trúc tài liệu:
output = document.documentElement;  // Toàn bộ tài liệu HTML
output = document.head;  // Thẻ Head
output = document.body;  // Thẻ Body
//HTMLCollection của các phần tử trong head/body:
output = document.head.children;  // Bộ sưu tập các phần tử trong head
output = document.body.children;  // Bộ sưu tập các phần tử trong body
//Các thuộc tính ngẫu nhiên:
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;
//Biểu mẫu:
output = document.forms;  // Bộ sưu tập tất cả các biểu mẫu
output = document.forms[0];  // Biểu mẫu đầu tiên
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;
document.forms[0].id = 'new-id';  // Thay đổi id của biểu mẫu
//Liên kết (đã chú thích):
// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;
//Hình ảnh:
output = document.images;  // Bộ sưu tập tất cả các hình ảnh
output = document.images[0];  // Hình ảnh đầu tiên
output = document.images[0].src;
//Chuyển đổi HTMLCollection thành Mảng:
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));
//Ghi log kết quả cuối cùng:
console.log(output);
