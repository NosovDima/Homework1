const newspaper = {
  sports: {
    title: "ARod Hits Home Run",
    writers: ["Miramon Nuevo", "Rick Reilly", "Woddy Paige"],
  },
  business: {
    title: "GE Stock Dips Again",
    writers: ["Adam Smith", "Albert Humphrey", "Charles Handy"],
  },
  movies: {
    title: "Superman Is A Flop",
    writers: ["Rogert Ebert", "Andrew Sarris", "Wesley Morris"],
  },
};
newspaper.sports.title;
newspaper.business.writers[0];
newspaper.movies.writers[1];
// Exersice 1
const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] <= 10) break;
  //   почему Undefined ?
  alert(numbers[i]);
}
// Exersice 2
const numbers = [1, 5, 4, 10, 0, 3];
alert(numbers.indexOf(4));
// Exersice 3
let numbers = [1, 3, 5, 10, 20];
numbers = numbers.join(" ");
alert(numbers);
// Exersice 4

const arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let a = 0; a < 3; a++) {
    arr[i][a] = 1;
  }
}
alert(arr)
// Exersice 5
let numbers = [1, 1, 1];
numbers.push(2, 2, 2);
alert(numbers);
// Exercise 6
let arrNum = [9, 8, 7, "a", 6, 5];
arrNum = arrNum.sort();
arrNum.pop();
alert(arrNum);
// Exersice 7
const numbers = [9, 8, 7, 6, 5];
let num = Number(prompt("Пожалуйста, введите любое число"));
let search = numbers.includes(num);
alert(numbers.includes(num));
// Exersice 8
let letters = "abcdef";
letters = letters.split("");
letters.sort();
letters.reverse();
letters = letters.join(" ");
alert(letters);
// Exersice 9
let arrNum = [
  [1, 2, 3],
  [4, 5, 6],
];
for (let item of arrNum) {
  item = item.join(" ");
}
alert(arrNum);
// Exersice 10
const arr = [9, 8, 7, 6, 5];
for (let i = 0; i < arr.length - 1; i++) {
  alert(arr[i] + arr[i + 1]);
}
// Exersice 11
const num = [
  prompt("Пожалуйста, введите любое число"),
  prompt("Пожалуйста, введите любое число"),
  prompt("Пожалуйста, введите любое число"),
  prompt("Пожалуйста, введите любое число"),
];
const squareNum = num.map((el) => el ** 2);
alert(squareNum);
// Exersice 12
function getLengthWords(words) {
  return words.map((item) => item.length);
}
alert(getLengthWords(prompt("Введите слово")));
// Exersice 13
function filterPositive(array) {
  return array.filter((el) => el > 0);
}

filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]
// Exersice 14
const arr = [...Array(10)].map((e) => ~~(Math.random() * 10));
const evenNum = arr.filter((el) => el % 2 == 0);
alert(evenNum);
alert(arr);
// Exersice 15

const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
const result = average([...Array(6)].map((e) => ~~(Math.random() * 6)));
alert(result);
alert(average);
