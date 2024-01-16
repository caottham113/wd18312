let x;

// Mảng được khai báo trực tiếp
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Xin chào', true, null];

// Mảng được tạo thông qua hàm tạo
const fruits = new Array('táo', 'nho', 'cam');

// Lấy giá trị thông qua chỉ số
x = numbers[0]; // x hiện giờ là 12

x = numbers[0] + numbers[3]; // x hiện giờ là 41 (12 + 29)

x = `Món trái cây yêu thích của tôi là ${fruits[2]}`; // x hiện giờ là "Món trái cây yêu thích của tôi là cam"

x = numbers.length; // x hiện giờ là 6 (độ dài của mảng 'numbers')

fruits[2] = 'lê'; // Cập nhật giá trị tại chỉ số 2 thành 'lê'

// Độ dài không phải là chỉ đọc
// fruits.length = 2;

fruits[3] = 'dâu'; // Thêm 'dâu' vào chỉ số 3

// Sử dụng độ dài làm chỉ số sẽ luôn thêm vào cuối
fruits[fruits.length] = 'dâu mâm xôi'; // Thêm 'dâu mâm xôi' vào cuối
fruits[fruits.length] = 'đào'; // Thêm 'đào' vào cuối

x = fruits; // x hiện giờ là mảng 'fruits' sau khi được chỉnh sửa

console.log(x); // In nội dung của mảng 'fruits' ra console
