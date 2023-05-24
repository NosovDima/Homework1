// Exrecise 1
let str = "js";
alert(str.toLocaleUpperCase());
// Exrecise 2
function searchStart(arr, subString) {
  arr.forEach((element) => {
    if (element.toLowerCase().startsWith(subString.toLowerCase())) {
      alert(element);
    }
  });
  return null;
}
const animals = ["Кошка", "Кит", "Комар", "Носорог"];
const products = ["яблоко", "груша", "гриб", "огурец"];
const buildings = ["Дом", "Банк", "Больница", "Театр"];

// можно ли сделать одну функцию для всего массива?

searchStart(["Кошка", "Кит", "Комар", "Носорог"], "ко"); // ['кошка', 'комар']
searchStart(["яблоко", "груша", "гриб", "огурец"], "гру"); // ['груша']
searchStart(["Дом", "Банк", "Больница", "Театр"], "Кино"); // []

// ==================================================

const animals = ["Кошка", "Кит", "Комар", "Носорог"];
const search = "ко";

animals.forEach((animal) => {
  if (animal.toLowerCase().startsWith(search.toLowerCase())) {
    alert(animal);
  }
});

const products = ["яблоко", "груша", "гриб", "огурец"];
const search = "гру";

products.forEach((product) => {
  if (product.toLowerCase().startsWith(search.toLowerCase())) {
    alert(product);
  }
});

const buildings = ["Дом", "Банк", "Больница", "Театр"];
const search = "Кино";

buildings.forEach((building) => {
  if (building.toLowerCase().startsWith(search.toLowerCase())) {
    alert(building);
  }
});
// Exrecise 3
alert(Math.floor(32.58884));
alert(Math.ceil(32.58884));
alert(Math.round(32.58884));
// Exrecise 4
const arr = [52, 53, 49, 77, 21, 32];
alert(Math.min(...arr));
alert(Math.max(...arr));
// Exrecise 5
function randomNum() {
  alert(Math.round(Math.random() * 10));
}
// Exrecise 6 Проверьте пожалуйста суждение
function getRandomArrNumbers(num) {
  // создаю функцию, которая на входе принимает целое число
  const arr = [];
  // создаю пустой массив куда будут приходить параметры после вызова функции
  const length = num / 2;
  // создаю переменную, которая будет отвечать за длину массива
  for (let i = 0; i < length; i++) {
    // задаю условия для прогрессирующей функции
    arr.push(Math.floor(Math.random() * num));
    // с помощью метода push добавляем в массив новое значение сгенерированное методом random и округляем его
  }
  return arr;
  //   возвращаем уже новый массив
}

const randomArray = getRandomArrNumbers(7);
alert(randomArray);
// Exrecise 7
function getTwoNumbers(minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue));
}
alert(getTwoNumbers(2, 5));
// Exrecise 8
const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

let myDate = new Date();
let fullDate =
  "Сегодня: " +
  myDate.getDate() +
  " " +
  months[myDate.getMonth()] +
  " " +
  myDate.getFullYear() +
  ", " +
  days[myDate.getDay()];

alert(fullDate);
// Exrecise 9
let days = 73;
let day = new Date();
day.setDate(day.getDate() + +days);
alert("через " + days + " дней, будет " + day);
// Exrecise 10
const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
let myDate = new Date();
let fullDate =
  "Сегодня: " +
  myDate.getDate() +
  " " +
  months[myDate.getMonth()] +
  ", " +
  days[myDate.getDay()];

alert(
  fullDate +
    " " +
    myDate.getHours() +
    ":" +
    myDate.getMinutes() +
    ":" +
    myDate.getSeconds()
);
// Exrecise 11
function wordsGame() {
  let arr = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];
  arr = arr.sort(() => Math.random() - 0.5);
  alert(arr);
  // как добавить пробел в alert arr, чтобы при этом ответы можно было вводить без пробела?
  let userAnswer1 = prompt("Чему равнялся первый элемент массива?");
  let userAnswer2 = prompt("Чему равнялся первый элемент массива?");
  if (
    userAnswer1.toLowerCase() == arr[0].toLowerCase() &&
    userAnswer2.toLowerCase() == arr[6].toLowerCase()
  ) {
    alert("Поздравляем, Вы угадили!");
  } else if (
    userAnswer1.toLowerCase() == arr[0].toLowerCase() ||
    userAnswer2.toLowerCase() == arr[6].toLowerCase()
  ) {
    alert("Вы были близки к победе!");
  } else {
    alert("Все ответы неверные");
  }
}
wordsGame();
// что нужно сделать, чтобы при перезагрузке скрипт не срабатывал? А работал только при клике
