//multiply func
const multiply = (num1, num2) => num1 * num2;
console.log('arrow function that multiplies two numbers together: \nmultiplying 4 and 5: ' +
  multiply(4, 5) + '\n');

let count = 0;
[1, 5, -4, 3, -5, -1, 0].forEach(value => {
  if (value > 0) {
    ++count;
  }
});
console.log('function that counts how many positive numbers are in an array\n' +
  'array: [1,5,-4,3,-5,-1,0] \nanswer: ' + count +'\n');

//increase by value
let num = 2;
console.log('function that increases each value in an array by a specified number\n'+
  'original array: [1,5,-4,3,-5,-1,0]\nnew array: '+
  [1, 5, -4, 3, -5, -1, 0].map(value => value+num).join(', ') + '\n');

//remove egg
let numRemoved = 0;
const arr = ['egg', 'ham', 'egg', 'bacon', 'egg', 'egg', 'cheese'];
console.log('function that removes the first two instances of the word \'egg\' from an array\n'+
  'original array: ' + arr.join(', ')+'\nnew array:');

  console.log(arr.filter(value => {
  if (value === "egg" && numRemoved < 2) {
    ++numRemoved;
    return false;
  }
  else
    return true;
}).join(', ') + '\n');
