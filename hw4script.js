// Exercise 1
// let i = 0;

// while (i < 2) {
//   alert("Привет");

//   i++;
// }
// Exercise 2
// let i = 1;

// while (i <= 5) {
//   alert(i);

//   i++;
// }
// Exercise 3
// let i = 7;

// while (i <= 22) {
//   alert(i);

//   i++;
// }
// Exercise 4
// const obj = {
//   Коля: 200,
//   Вася: 300,
//   Петя: 400,
// };

// for (const salary in obj) {
//   alert(salary + " — зарплата " + obj[salary] + " долларов");
// }
// Exercise 5 Можно ли с помощью этого цикла сделать?
// let n = 1000;
// let num = 0;

// do {
//   n / 2;
//   num++;
//   alert(n);
// } while (n < 50);

// alert("Iterated " + num + " times!");
// Exercise 5
// let n = 1000;
// let num = 0;
// for (let n = 1000, num = 0; n <= 50; num++) {
//   n / 2;
//   alert(num);
// }
// alert("Iterated " + num + " times!");
// Exercise 6
// let day = 5;
// for (let day = 5; day <= 31; day += 7) {
//   // почему +=? почему +=7 не в фигурных скобках???
//   alert(
//     "Сегодня пятница, " + day + " -е число. Необходимо подготовить отчет.!"
//   );
// }

// Exercise 7
// const obj = {
//   Але: "ша",
//   Гри: "ша",
//   Ди: "ма",
// };
// for (const capital in obj) {
//   alert(capital + "- это " + obj[capital]);
// }
const obj = {
  Baby: "Boss",
  Art: "Museum",
  Assassin: "creed Brotherhood",
};
for (const game in obj) {
  alert(game + "'S " + obj[game]);
}
