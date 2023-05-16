// // Exercise 1
// const least = (a, b) => {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// };
// console.log(least(4, 8));
// console.log(least(6, 6));
// // or
// function min(a, b) {
//   return a < b ? a : b;
// }
// console.log(min(4, 8));
// Exercise 2
// const evenNum = (a) => {
//   if (a % 2 == 0) {
//     return "Четное число";
//   } else {
//     return "Нечетное число";
//   }
//   // Как сделать с prompt?
// };
// alert(evenNum(7));
//or

// let number = prompt("Введите число");

// if (number % 2 == 0) {
//   function evenNum() {
//     alert("Четное число");
//   }
// } else {
//   function evenNum() {
//     alert("Нечетное число");
//   }
// }
// evenNum();
// // or
// function evenNum(a) {
//   return a % 2 == 0 ? "Четное число" : "Нечетное число";
// }
// alert(evenNum(7));
// // Exercise 3.2
// const squareNum = (a) => {
//   let result = a ** 2;
//   return result;
// };
// console.log(squareNum(3));
// // Exercise 3.1
// let number = prompt("Введите число");
// function squareNum(a) {
//   return a ** 2;
// }
// alert(squareNum(Number));
// // Exercise 4
// let age = prompt("Сколько Вам лет?");
// if (age < 0) {
//   function printMessage() {
//     alert("Вы ввели неправильное значение");
//   }
// } else if (age < 12) {
//   function printMessage() {
//     alert("Привет, друг!");
//   }
// } else {
//   function printMessage() {
//     alert("Добро пожаловать!");
//   }
// }
// {
// }
// printMessage();
// Exercise 5
const mult = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    return "Одно или оба значения не являются числом";
  }
  let result = a * b;
  return result;
};
alert(mult(prompt("Введите первое число"), prompt("Введите второе число")));

// // Exercise 6
const mult = (a) => {
  if (isNaN(a)) {
    return "Значение не является числом";
  }
  let result = a ** 3;
  return result;
};
alert(mult(prompt("Введите первое число")));
// // Exercise 7
// function getСircleArea() {
//   return this.radius ** 2 * Math.PI;
// }
// function getСirclePerimeter() {
//   return this.radius * 2 * Math.PI;
// }

// const circle1 = {
//   radius: 3,

//   getArea: getСircleArea,
//   getPerimeter: getСirclePerimeter,
// };

// const circle2 = {
//   radius: 7,

//   getArea: getСircleArea,
//   getPerimeter: getСirclePerimeter,
// };

// alert(circle1.getArea());
// alert(circle1.getPerimeter());
// alert(circle2.getArea());
// alert(circle2.getPerimeter());
//// Exercise 8
const season = (a) => {
  if (isNaN(a)) {
    return "Вы ввели не число";
  }
  if (a == 12 || (a >= 1 && a <= 2)) {
    // Ошибка в синтаксисе? Не видит число 12
    return "Зима";
  } else if (a >= 3 && a <= 5) {
    return "Весна";
  } else if (a >= 6 && a <= 8) {
    return "Лето";
  } else if (a >= 9 && a <= 11) {
    return "Осень";
  } else {
    return "Такого месяца не существует";
  }
  {
  }
  {
  }
  {
  }
};
alert(season(prompt("Введите номер месяца")));
