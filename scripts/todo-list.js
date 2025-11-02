

const todoList = JSON.parse(localStorage.getItem('list')) || []; // better to use const for objects, including arrays
displayList(todoList);


function saveList() {
  localStorage.setItem('list', JSON.stringify(todoList));
}


function addToList() {
  const taskInputElement = document.querySelector('.js-todo-input'); // should reference the actual html element, not just the value,
  // because that would just be a local copy of the string it holds
  const dateInputElement = document.querySelector('.js-date-input');
  if (taskInputElement.value !== '') { //checking to see if the value isn't empty because if not, can add empty todo in array and just display a delete button without any text
    todoList.push({
      name: taskInputElement.value,
      dueDate: dateInputElement.value
    });
  }
  displayList(todoList);
  taskInputElement.value = dateInputElement.value = '';
}

function displayList(todoList) {
  const ouptutElement = document.querySelector('.js-todo-output');
  ouptutElement.innerHTML = '';

  console.log(todoList.length);
  todoList.forEach((item, index) => {
    ouptutElement.innerHTML += `
    <div>${item.name}</div>
     <div>${item.dueDate} </div>
    <button class="todo-delete-button" onclick="
    todoList.splice(${index},1);
    displayList(todoList);
    ">Delete</button> 
    `; // everythiing is in its own individual div because of how this section is styled (see todo-list.css).
    // The button is not in a div because it already has an html element.
    // Div is chosen because it has no default styling
  })
  saveList();
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
console.log(typeof (myArray)); //this will simply call an array an object
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
console.log(count['grape']);
//console.log(count[grape]); // this produces an error and the above doesn't because in the count object, grape is a string key, however, you are not passing in a string
// Therefore, javascript looks for a variable with that name and can't find one

// array's are references, so the variable acts as a pointer to things in memory
const array1 = [1, 2, 3];
const array2 = array1;
const array3 = array1.slice(); // this is how you make a deep copy of an array
array1.push(5);
console.log("ARRAY SHALLOW COPY EXAMPLE:\narray 2 (shallow copy)" + array2 + "\narray 3 (deep copy) " + array3); // array2 will have the changes in array1, because it is a shallow copy of array1\

//destructuring
const [firstValue, secondValue, thirdValue] = [1, 2, 3]; //this saves the individual values into different variables