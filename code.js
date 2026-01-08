//1
function reverse(text) {
  let reversetext = "";

  for (let i = text.length - 1; i > -1; i--) {
    reversetext += text[i];
  }
  return reversetext;
}
//2
function countVowels(text) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      count++;
    }
  }
  return count;
}
//3
function isPalindrome(text) {
  let textReverse = "";
  for (let i = text.length - 1; i > -1; i--) {
    textReverse += text[i];
  }
  return textReverse === text;
}
//4
function getMax(numberArray) {
  let max = numberArray[0];

  for (let i = 0; i < numberArray.length; i++) {
    if (max < numberArray[i]) {
      max = numberArray[i];
    }
  }
  return max;
}
//5
function removeDuplicates(numberArray) {
  let updatedArray = [];
  for (let i = 0; i < numberArray.length; i++) {
    !updatedArray.includes(numberArray[i]) && updatedArray.push(numberArray[i]);
  }
  return updatedArray;
}
//6
function sumOfArray(array) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum;
}
//7
function findEven(array) {
  let evens = [];
  for (let num of array) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}
//8
function Capitalize(text) {
  let parts = text.split(" ");
  let update = [];
  for (let part of parts) {
    let word = part[0].toUpperCase() + part.slice(1);
    update.push(word);
  }
  return update.join(" ");
}
//9
function getFac(num) {
  let fra = 1;
  for (let i = 1; i < num + 1; i++) {
    fra *= i;
  }
  return fra;
}
//10
function pingPong() {
  for (let i = 1; i < 20 + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}
