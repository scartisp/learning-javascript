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
  function: function greeting() {
    console.log('hello world');
  }
}

object1.function();