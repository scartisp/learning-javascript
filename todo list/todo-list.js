//DOM stuff
const taskInputElement = document.querySelector('.js-todo-input'); // should reference the actual html element, not just the value,
const dateInputElement = document.querySelector('.js-date-input');
const ouptutElement = document.querySelector('.js-todo-output');

//loading the list from localStorage
const todoList = JSON.parse(localStorage.getItem('list')) || []; // better to use const for objects, including arrays
displayList(todoList);

//saves the list
function saveList() {
  localStorage.setItem('list', JSON.stringify(todoList));
}

//event listener for clicking add button
document.querySelector('.js-add-button').addEventListener('click', () => {
  addToList();
})




//add things to the list
function addToList() {
  // because that would just be a local copy of the string it holds
  if (taskInputElement.value !== '') { //checking to see if the value isn't empty because if not, can add empty todo in array and just display a delete button without any text
    todoList.push({
      name: taskInputElement.value,
      dueDate: dateInputElement.value
    });
  }
  displayList(todoList);
  taskInputElement.value = dateInputElement.value = '';
}


//displays the list
function displayList(todoList) {
  ouptutElement.innerHTML = '';

  for (i = 0; i < todoList.length; ++i) {
    ouptutElement.innerHTML += `
    <div>${todoList[i].name}</div>
    <div>${todoList[i].dueDate} </div>
    <button class="todo-delete-button js-todo-delete-button"">Delete</button> 
    `; // everythiing is in its own individual div because of how this section is styled (see todo-list.css).
    // The button is not in a div because it already has an html element.
    // Div is chosen because it has no default styling
  }

  document.querySelectorAll('.js-todo-delete-button').forEach((deleteButton, i) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(i, 1);
      displayList(todoList);
    })
  }); // must be added after adding the todo and within the displayList function. this is because display list deletes everything in outputElement.innerHTML,
  // so everytime it is called, and the list is re-created, you need to re-add event listeners
  
  saveList();
}
