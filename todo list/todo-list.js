

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
  for (i = 0; i < todoList.length; ++i) {
    ouptutElement.innerHTML += `
    <div>${todoList[i].name}</div>
     <div>${todoList[i].dueDate} </div>
    <button class="todo-delete-button" onclick="
    todoList.splice(${i},1);
    displayList(todoList);
    ">Delete</button> 
    `; // everythiing is in its own individual div because of how this section is styled (see todo-list.css).
    // The button is not in a div because it already has an html element.
    // Div is chosen because it has no default styling
  }
  saveList();
}