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
// // Exercise 2
// const evenNum = (a) => {
//   if (a % 2 == 0) {
//     return "Четное число";
//   } else {
//     return "Нечетное число";
//   }
//   // Как сделать с prompt?
// };
// alert(evenNum(7));
// //or

// let Number = prompt("Введите число");

// if (a % 2 == 0) {
//   function evenNum() {
//     alert("Четное число");
//   }
// } else {
//   function evenNum() {
//     alert("Нечетное число");
//   }
//   // Почему не работает?
// }
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
// // Exercise 5
// const userNumber1 = prompt("Введите первое число");
// const userNumber2 = prompt("Введите второе число");
// if (isNan(userNumber1 || userNumber2)) {
//   function printMessage() {
//     alert("Одно или оба значения не являются числом");
//   }
// } else {
//   function mult() {
//     return a * b;
//   }
// }
// printMessage();
// mult();
// // Exercise 6
// let num = prompt("Введите число");
// if ((num) => !isNaN(num)) {
//   function printMessage() {
//     alert("Переданный параметр не является числом");
//   }
// } else {
//   function mult(a) {
//     return a ** 3;
//   }
// }
// printMessage();
// mult();
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
// Exercise 8
let season = prompt("Введите номер месяца");
if (season > 0 && season < 3) {
  function printMessage() {
    alert("Зима");
  }
} else if (season > 2 && season < 6) {
  function printMessage() {
    alert("Весна");
  }
} else if (season > 5 && season < 9) {
  function printMessage() {
    alert("Лето");
  }
} else if (season > 8 && season < 12) {
  function printMessage() {
    alert("Осень");
  }
} else if (season == 12) {
  function printMessage() {
    alert("Зима");
  }
} else {
  function printMessage() {
    alert("Такого месяца не существует");
  }
}
{
}
{
}
{
}
{
}
printMessage();
