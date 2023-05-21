const fibonacci = [1, 1, 2, 3, 5, 8];

// TODO: Допишите код, чтобы в консоль ниже выводились правильные значения
// Используйте метод map, чтобы получить массив fibonacci, в котором все числа умножены на 2
const multipleByTwoFib = fibonacci.map((el) => el * 2);
// Используйте метод map, чтобы получить массив fibonacci, в котором к каждому числу добавили 10
const plusTenFib = fibonacci.map((el) => el + 10);
// Используйте метод filter, чтобы получить массив, в который входят числа Фибоначчи больше 3
const onlyBigFib = fibonacci.filter((el) => el > 3);

alert(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
alert(plusTenFib); // => [11, 11, 12, 13, 15, 18]
alert(onlyBigFib); // => [5, 8]

function callbackWithArrayLength(arr, callback) {
  callback(arr.length);
}

callbackWithArrayLength([1], (length) => {
  alert(length);
});

callbackWithArrayLength([1, 1], (len) => {
  alert(len);
});
callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
  alert(l);
});

function log(arrItem) {
  alert("Элемент массива:", arrItem);
}

function each(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

each(["Глеб", "Олег", "Татьяна", "Платон"], log);

// Homework8
// Exersice 1
const people = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];

people.sort(function (eld, young) {
  return eld.age - young.age;
});

