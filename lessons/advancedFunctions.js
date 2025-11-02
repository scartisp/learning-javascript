//functions are a data type. This will return function
const function1 = function greeting() {
  console.log(typeof function1);

}
//this will show what the object function1 is equal to, and it is equal to greeting
console.log(function1);
//this will return the type of function1, which is function
function1();
//this will cause an error: "greeting is not defined" because "greeting" is function1's internal name, and it exists only inside of greeting's own scope (this allows for recurssion)
//can delete greeting, and that makes it an anonymous function
//console.log(greeting());

//can also call greeting by calling function1()
function1();

//HOISTING
/*this is like the issue in C++, where it compiles top from bottom. 

function greeting() {
} 
this version has hoisting, meaning it is like Java in which order does not matter. You can reference the function before you define it

const function1 = function() {
}
this does not have hoisting, meaning you cannot use the function before you define it
*/

//FUNCTIONS INSIDE OF OBJECTS
const object1 = {
  num: 2,
  function: function() {
    console.log('hello world');
  }
}

object1.function();

//PASSING FUNCTIONS INTO FUNCTIONS
function run(param) {
 param(); // literally just calling the function that I have passed into run as a parameter
 // function that is parameter is called a callback function
}
run(function() {
  console.log('hello again world');
});

//MORE PRACTICAL EXAMPLES: 
console.log('\nTHIS IS THE MORE PRACTICAL SECTION\n');

//ASYNCHRONOUS CODE: 

// setTimeout(function() {
//   console.log('timeout');
// }, 3000) // setTimeOut if built in function that takes in two parameters: 
         // function it is supposed to execute, and how long it should wait before executing (in ms)

//the below line will execute before the timeout one. This is because setTimeout does not kill execusion for x miliseconds, but simply sets a timer (asynchronous).
console.log('this line will execute first');

// setInterval(function() {
//   console.log('interval');
// },3000); // this function takes a function as the first argument, and executes it every x amount of time where x is in miliseconds. also asyncrhonous
// returns an id. can use clearInterval(the interval's id) to stop it.

['make dinner', 
  'wash dishes',
  'watch youtube'
].forEach((value, index) =>{
  console.log(index+' '+value);
}) /* arrays have built in for each functions. the callback function (the inner most functions) has the arguments in the order:
array[i]
i
array

the syntax "=>" is an easier way to write this call back function (the anonymus function found within the forEach() function). samething as doing function() {}
*/ 