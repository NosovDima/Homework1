Exercise 1
let password = String(prompt("Введите пароль"));
if (password === "alright") {
 alert("Пароль введен верно");
} else {
 alert("Пароль введен неправильно");
}
Exercise 2
let c = 2;
if (c > 0 && c < 10) {
  alert("Верно");
} else {
  alert("Неверно");
}
Exercise 3
let d = 10;
let e = 90;
if (d > 100 || e > 100) {
 alert("Верно");
} else {
 alert("Неверно");
}
Exercise 4
let a = "2";
let b = "3";
alert(a + b);
alert(Number(a) + Number(b));
Exercise 5
let month = String(prompt("Введите номер месяца"));
switch (month) {
  case "1":
    alert("Winter");
    break;
  case "2":
    alert("Winter");
    break;
  case "3":
    alert("Spring");
    break;
  case "4":
    alert("Spring");
    break;
  case "5":
    alert("Spring");
    break;
  case "6":
    alert("Summer");
    break;
  case "7":
    alert("Summer");
    break;
  case "8":
    alert("Summer");
    break;
  case "9":
    alert("Autumn");
    break;
  case "10":
    alert("Autumn");
    break;
  case "11":
    alert("Autumn");
    break;
  case "12":
    alert("Winter");
    break;

  default:
    alert("Такого месяца нет");
    break;
}
Exercise 7
let num = Number(prompt("Пожалуйста, введите любое число"));
const isNumeric = (num) => !isNaN(num);
if (num % 2 === 0) {
  alert("Четное число");
} else if (num % 1 === 0) {
  alert("Нечетное число");
} else {
  alert("Введите число");
}
Exercise 8
let clientOS = Number(prompt("Если Ваша операционная система IOS введите 0"));
clientOS === 0
  ? alert("Установите версию приложения для iOS по ссылке")
  : alert("Установите версию приложения для Android по ссылке");
Exercise 9
let year = prompt("Какого года выпуска Ваш телефон?");
let clientOS = prompt("Если Ваша операционная система IOS введите 0");
if (year < 2015 && clientOS == 0) {
  alert("Установите облегченную версию приложения для iOS по ссылке");
} else if (year >= 2015 && clientOS == 0) {
  alert("Установите версию приложения для iOS по ссылке");
} else if (year >= 2015 && clientOS !== 0) {
  alert("Установите версию приложения для Android по ссылке");
} else {
  alert("Установите облегченную версию приложения для Android по ссылке");
}
{
}
{
}
Exercise 1
let i = 0;

while (i < 2) {
  alert("Привет");

  i++;
}
Exercise 2
let i = 1;

while (i <= 5) {
  alert(i);

  i++;
}
Exercise 3
let i = 7;

while (i <= 22) {
  alert(i);

  i++;
}
Exercise 4
const obj = {
  Коля: 200,
  Вася: 300,
  Петя: 400,
};

for (const salary in obj) {
  alert(salary + " — зарплата " + obj[salary] + " долларов");
}
Exercise 5
let n = 1000;
let num = 0;

do {
  n / 2;
  num++;
  alert(n);
} while (n < 50);

alert("Iterated " + num + " times!");
Exercise 5
let n = 1000;
let num = 0;
for (n, num; n >= 50; num++) {
  n = n / 2;
  alert(num);
}
alert("Iterated " + num + " times!");
Exercise 6
