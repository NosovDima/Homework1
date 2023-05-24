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
