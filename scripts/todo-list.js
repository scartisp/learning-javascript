
const todoList = JSON.parse(localStorage.getItem('list')) || []; // better to use const for objects, including arrays


function saveList() {
  localStorage.setItem('list', JSON.stringify(todoList));
}


function addToList() {
  const inputElement = document.querySelector('.js-todo-input'); // should reference the actual html element, not just the value,
  // because that would just be a local copy of the string it holds
  todoList.push(inputElement.value);
  
  
  console.log(todoList)
  displayList(todoList);
  inputElement.value = '';
  //saveList();
}

function deleteFromList() {
  
}

function displayList(todoList) {
  const ouptutElement = document.querySelector('.js-todo-output');
  ouptutElement.innerHTML = '';
  for (i = 0; i < todoList.length; ++i) {
    ouptutElement.innerHTML += `<p>
    ${todoList[i]}
    <button onclick="
    todoList.splice(${i},1);
    displayList(todoList);
    ">Delete</button> 
    </p>`;
  }
}


// TODO LIST PRACTICE 1
// function addToList1() {
//   const inputElement = document.querySelector('.js-todo-input'); // should reference the actual html element, not just the value,
//   // because that would just be a local copy of the string it holds
//   todoList.push(inputElement.value);
//   console.log(todoList);
//   inputElement.value = '';
//   //saveList();
// }

//TODO LIST PRACTICE 2
// function addToList2() {
//   const inputElement = document.querySelector('.js-todo-input2'); // should reference the actual html element, not just the value,
//                                                                   // because that would just be a local copy of the string it holds
//   todoList.push(inputElement.value);
//   console.log(todoList)
//   displayList(todoList);
//   inputElement.value = '';
//   //saveList();
// }

// function displayList(todoList) {
//   const ouptutElement = document.querySelector('.js-todo-output');
//   ouptutElement.innerHTML = '';
//   for (i = 0; i < todoList.length; ++i) {
//     console.log(i);
//     i != todoList.length - 1 ? ouptutElement.innerHTML += todoList[i] + '<br>' : ouptutElement.innerHTML += todoList[i];
//   }
// }








//array info
myArray = [1, '1', true, { name: 'socks' }, [1, 2]];
console.log(typeof (myArray)); //this will simply all an array an object
console.log(Array.isArray(myArray)); // how to check if an object is an array

myArray.splice(0, 1) // what index you want to start from, how many things you want to remove
console.log(myArray);

const countWords = ['apple', 'apple', 'grape', 'apple'];
const count = {};
for (let word of countWords) {
  if (count[word]) //what this is doing is creating a number data memeber to count
  // with the string as the variable name
  ++count[word];//
  else
    count[word] = 1;
}
console.log(count);

//console.log(count[grapefruit]); // this produces an error and the above doesn't because the things in the array are strings.
// Therefore, javascript looks for a property with that name.
// But, because this is not a string, it treats it as a variable name, it can't find anything with that name, and then returns the error