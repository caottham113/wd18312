// Tham số mặc định
function registerUser(user = 'Bot') {
    return user + ' đã được đăng ký';
  }
  
  console.log(registerUser());
  
  // Tham số Rest
  function sum(...numbers) {
    let total = 0;
  
    for (const num of numbers) {
      total += num;
    }
  
    return total;
  }
  
  console.log(sum(1, 2, 3, 4, 5, 6, 100));
  
  // Đối tượng làm tham số
  function loginUser(user) {
    return `Người dùng ${user.name} có id ${user.id} đã đăng nhập`;
  }
  
  const user = {
    id: 1,
    name: 'John',
  };
  
  console.log(loginUser(user));
  console.log(
    loginUser({
      id: 2,
      name: 'Sara',
    })
  );
  
  // Mảng làm tham số
  function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log(item);
  }
  
  getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);