//Vòng lặp for cơ bản:
for (let i = 0; i <= 10; i++) {
    if (i === 7) {
      console.log('Số 7 là số may mắn của tôi');
    } else {
      console.log('Số ' + i);
    }
  }
//Vòng lặp lồng nhau:
for (let i = 1; i <= 10; i++) {
    console.log('Số ' + i);
  
    for (let j = 1; j <= 5; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
//Lặp qua một mảng:
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
  if (names[i] === 'John') {
    console.log(names[i] + ' là người xuất sắc nhất');
  } else {
    console.log(names[i]);
  }
}
