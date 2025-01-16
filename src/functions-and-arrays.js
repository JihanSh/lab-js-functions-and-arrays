// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else return b;
}
const result = maxOfTwoNumbers(3, 4);
console.log(result);

// Iteration 2 | Find the Longest Word

function findLongestWord(words) {
  if (words.length === 0) return null;
  let longWord = words[0];
  let maxLength = longWord.length;
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let wordLength = currentWord.length;
    if (wordLength > maxLength) {
      longWord = currentWord;
      maxLength = wordLength;
    }
  }
  return longWord;
}
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];
console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers

function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
console.log(sumNumbers(numbers));

// Iteration 4 | Numbers Average

function averageNumbers(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  const sum = sumNumbers(numbers);

  return sum / numbers.length;
}
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
console.log(averageNumbers(numbers2));

// Iteration 5 | Find Elements

function doesWordExist(words, wordToSearch) {
  if (words.length === 0) return null;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === wordToSearch) {
      return true;
    }
  }
  return false;
}
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];
console.log(doesWordExist(words2, "machine"));
console.log(doesWordExist(words2, "love"));
