//simple practice of passing a function into another function
const add = {
  function() {
    console.log(2 + 3);
  }
}
function runTwice(fun) {
  fun();
  fun();
}
runTwice(add.function);
// if I do runTwice(add.function()), that is the same thing as executing function, and will therefore just pass in the return, which in this case is void/undefined

//pressing a button, wait one second, change the text FOUND IN HTML FILE

//press button, show text, then make text dissapear after 2 seconds. if button is pressed again, reset wait
const addButton = document.querySelector('.js-add-button');
const addText = document.querySelector('.js-add-text');
let showAddTimeoutId;
function showAddText() {
  clearTimeout(showAddTimeoutId); // put it before it is redefined, that way it kills any previous waits and not the current one
  addText.textContent = 'Added';
  showAddTimeoutId = setTimeout(function () {
    addText.textContent = '';
  }, 2000)
}

//change the title every 1 second from "app" to (x) new messages
let displayMessages = false
let numOfMessages = 0
setInterval(function () {
  displayMessages = !displayMessages
  if (displayMessages && numOfMessages > 0) {
    document.title = `(${numOfMessages}) new messages`;
  } else {
    document.title = 'app';
  }
}, 1000)