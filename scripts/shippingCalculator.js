const initialCostElement = document.querySelector('.js-order-price');
const finalCostElement = document.querySelector('.js-final-cost');


//WHEN USING ADDEVENTLISTENER, GOOD PRACTICE TO USE ARROWFUNCTIONS
initialCostElement.addEventListener('keydown',  (event) => {
  if (event.key === 'Enter')
    calculateFinalPrice();
}); // on keydownevents should be handled in the js, using addEventListener method.

function calculateFinalPrice() {

  if (initialCostElement.value < 40 && initialCostElement.value > 0) {
    finalCostElement.classList.remove('invalid')
    finalCostElement.innerHTML = '$' + (Number(initialCostElement.value * 100) + 1000) / 100; //Number() converts string into number, String() converts number into string
  } else if (initialCostElement.value >= 40) {
    finalCostElement.classList.remove('invalid')
    finalCostElement.innerHTML = '$' + initialCostElement.value;
  } else {
    finalCostElement.classList.add('invalid')
    finalCostElement.innerHTML = 'Error: cart is empty';
  }
}

const randomElement = document.querySelector('.js-random');
const randomOutputElement = document.querySelector('.js-random-output');
const eventListener4RandomElement = () => {
  randomOutputElement.innerHTML = randomElement.value;
}
randomElement.addEventListener('keyup', eventListener4RandomElement);

// randomElement.removeEventListener('keyup', eventListener4RandomElement);

//did this this way to show how to remove an event listener, must put the anonymous function into a function variable,
//put it in the event listener as second arg (as normal), and for the removeEventListener, do the same.
//THIS REMOVE EVENT LISTENER IS NOT ACTUALLY USED