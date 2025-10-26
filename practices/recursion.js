//practicing basic recurssive algorithms in JS

//fibonacci sequence
function fibonacci(i) {
  if (i <= 0) {
    return 0;
  } else if (i === 1) {
    return 1;
  } 
  else {
    return fibonacci(i-1) + fibonacci(i-2);
  }
}
console.log('fibonacci: ' + fibonacci(7));

//factorial
function factorial(num) {
  if (num <=1) {
    return 1;
  } else
    return num*factorial(--num);
}
console.log('factorial:' + factorial(3));