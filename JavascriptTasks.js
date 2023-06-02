// Написать программу, которая будет проверять слова на повторяющие буквы
// Пример 
isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
// 
function isIsogram(str) {
    // создаем две переменных, которые будут перебирать массив и сравнивать неповторящиеся буквы и повторяющиеся
    let i, j;
    // так как мы работает с буквами (это стринговые значения), нужна стринг приравнять к нижнему регистру, чтобы любой запрос подходил под нижний регистр
    str = str.toLowerCase();
    // теперь даем задание тем двум переменным перебрать входящие данные с помощью цикла for
    for (i = 0; i < str.length; ++i) {
        for(j = 0; j < str.length; ++j) {
            //  теперь пишем условие, что если j и I совпадают, значит программа обнаружила одинаковые символу, то есть стринг
            if(str[i] === str[j]) {
                // возвращаем false
                return false;
            }
        }

    }
    // означает, что наша программа отработала верно
    return true;
}
// или
function isIsogram(str){
    var hash = {};
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
      if (hash[str[i]]) {
        return false;
      }
      hash[str[i]] = true;
    }
    return true; 
 }
//  
function calculateTotal() {
    // тело функции
    console.log("hello js!");
    const total = 20 + 20;
    return total;
}
// Запускаем функцию
const total = calculateTotal();

const numOne = 13;
const numTwo = 11;
function calculateTotal(num1, num2) {
    // тело функции
   return num1 + num2;
}
// Запускаем функцию
const total = calculateTotal(numOne, numTwo);
// 
// Называем функцию и указываем один параметр для входной строки
// используем return для того чтобы вернуть результат этой функции
// берем наш параметр, который получили на входной строке, и разделяем его пробелами
// с помощью map перебираем входящее значение (например word, что и будет являться str)
// далее с помощью стрелочной функции повторяем операциию с деление слова, но уже без пробела, затем переворачиваем
// и объединяем
function reverseWords(str) {
    return str.split(" ").map(word => word.split("").reverse().join("")).join(" ")
    
    
  }
//   Write a function called startsWithVowel that takes a string as input and returns true if the string starts with a vowel, and false otherwise.

// Write a function called removeVowels that takes a string as input and returns a new string with all the vowels removed.

// Write a function called findLongestWord that takes a string as input and returns the longest word in the string.

// Write a function called isPalindrome that takes a string as input and returns true if the string is a palindrome (i.e., the same forwards and backwards), and false otherwise.

// Write a function called titleCase that takes a string as input and returns a new string with the first letter of each word capitalized.

function strCount(str, letter) {
    let count = 0;  // initialize a variable to keep track of the count
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        count++;
      }
    }
    return count;  // return the final count
  }




//   Complete the square sum function so that it squares each number passed into it and then sums the results together. (Use map and reduce methods)
     function squareSum(numbers) {
    let sum = numbers.map(el => el ** 2).reduce((acc, cur) => acc + cur, 0)
    return sum;
  }





//   Complete the solution so that it reverses the string passed into it.
//   'world'  =>  'dlrow'
//   'word'   =>  'drow'

  function solution(str){
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }





// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
function mango(quantity, price){
    let totalCost = 0;
      if (quantity % 3 != 0) {
        totalCost = (Math.floor(quantity / 3) * 2 + quantity % 3) * price;
      }
      else {
        totalCost = (quantity / 3) * 2 * price;
      }
      return totalCost;
    
    }


    // Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

    // invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
    // invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
    // invert([]) == []
    // You can assume that all values are integers. Do not mutate the input array/list.  


    function invert(array) {
        let negArr = array.map(num => -1 * num);
        return negArr;
      }





// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
      
function powersOfTwo(n){
  let powers = [];
  for (let i = 0; i <= n; i++) {
    powers.push(Math.pow(2, i));
  }
  return powers;
}


// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
e


function grow(x){
    const total = x.reduce((a, b) => a * b);
    return total;
  
  }







  // Summation
  // Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
  
  // For example (Input -> Output):
  
  // 2 -> 3 (1 + 2)
  // 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

  var summation = function (num) {
    let sum = 0;
     for (let i = 1; i <= num; i++) {
      sum += i; 
    }
     return sum;
   }




  //  Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

  //  Examples (Input -> Output)
  //  * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
  //  * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
  //  * [42, 54, 65, 87, 0]             -> min = 0, max = 87
  //  * [5]                             -> min = 5, max = 5

var min = function(list){
  return Math.min(...list);
  }

var max = function(list){
  
  return Math.max(...list);
}




// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.



function findDifference(a, b) {
  let volumeA = a[0] * a[1] * a[2];
  let volumeB = b[0] * b[1] * b[2];
  const difference = Math.abs(volumeA - volumeB);
  return difference;
}


const person = {
  nickname: " John",
  last: "Cray",
  age: 30,
}
for (let key in person) {
  console.log(key + ":" + person[key])
}






const person = {
  nickname: "John",
  lastname: "Cray",
  age: 30,
}
for (let key in person) {
  alert(key + ":" + person[key]);
}








indexOf(str, pos)
const str = "Hello world";
console.log(str.indexOf("o"))








let x;
console.log(x);

let x = null;
console.log(x);