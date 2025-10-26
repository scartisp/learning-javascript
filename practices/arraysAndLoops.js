//practice 1. find index of first occurence of specified word,

function findWord(stringArray, word) {
  for (item of stringArray) {
    if (item === word) {
      return `the word '${word}' is at index ${stringArray.indexOf(item)}`;
    }
  }
  return `the word '${word}' is not in the array`;
}
const array1 = ['hello', 'potatoe', 'search', 'this', 'search'];
console.log('practice 1\n' + findWord(array1, 'search'));
console.log(findWord(array1, 'orange') + '\n');

//practice 2. make a copy of the array and remove the last two instances of the word egg in the array by reversing the array

function removeEgg(foods) {
  foods.reverse();
  let i = 0;
  let counter = 0;
  while (i < foods.length) {
    if (foods[i] == 'egg' && counter < 2) {
      foods.splice(i, 1);
      ++counter;
    } else {
      ++i;
    }
  }
  return foods.reverse();
}
const array2 = ['egg', 'ham', 'egg', 'bacon', 'egg', 'egg', 'cheese'];
console.log('practice 2\n' + removeEgg(array2.slice()) + '\n');
console.log(array2);

//practice 3: array of unique elements

function unique(stringArray) {
  const newArray = [];
  for (i = 0; i < stringArray.length; ++i) {
    if (stringArray.indexOf(stringArray[i]) === i) {
      newArray.push(stringArray[i])
    }
  }
  return newArray;
}
const array3 = ['green', 'blue', 'green', 'red', 'blue'];
console.log('practice 3\n original array: ' + array3 + "\narray with only unique elements: " + unique(array3) + '\n');