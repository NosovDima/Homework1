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
  //   alert(people.sort(function (eld, young) {
  //   return eld.age - young.age;)
  // почему без alert работет как нужно, а с alert нет?
});
// Exersice 2
function isPositive(num) {
  return num > 0;
}
function isMale(person) {
  return person.gender == "male";
}
function filter(arr, ruleFunction) {
  const output = [];
  arr.map((el) => {
    if (ruleFunction(el)) {
      output.push(el);
    }
  });
  return output;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
// Exercise (my test)
// function getEvenNumbers(num) {
//   return num % 2 === 0;
// }
// function filter(arr, ruleFunction) {
//   const output = [];
//   arr.map((el) => {
//     if (ruleFunction(el)) {
//       output.push(el);
//     }
//   });
//   return output;
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = filter(numbers, getEvenNumbers);
// alert(evenNumbers);
// Exercise 3
const timer = (deadline) => {
  const interval = setInterval(() => {
    let myDate = new Date();
    console.log(myDate.toLocaleTimeString());
  }, 3000);
  setTimeout(() => {
    clearInterval(interval);
    console.log("30 секунд прошло");
  }, deadline * 1000);
};
timer(30);
// Exercise 4
function delayForSecond(callback) {
  setTimeout(function () {
    console.log("Привет, Глеб!");
    callback();
  }, 1000);
}

delayForSecond(function () {
  alert("Привет, Глеб!");
});
// Exercise 5

function delayForSecond(cb) {
  setTimeout(() => {
    console.log("Прошла одна секунда");
    if (cb) {
      cb();
    }
  }, 1000);
}

function sayHi(name) {
  console.log(`Привет, ${name}!`);
}


delayForSecond(() => sayHi("Глеб"));
