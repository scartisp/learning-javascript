const initialCostElement = document.querySelector('.js-order-price');
const finalCostElement = document.querySelector('.js-final-cost');

initialCostElement.addEventListener('keydown', function (event) {
  if (event.key === 'Enter')
    calculateFinalPrice();
}); // on keydownevents should be handled in the js, using addEventListener method.

function calculateFinalPrice() {

  if (initialCostElement.value < 40 && initialCostElement.value > 0) {
    finalCostElement.innerHTML = '$' + (Number(initialCostElement.value*100) + 1000)/100; //Number() converts string into number, String() converts number into string
  } else if (initialCostElement.value >= 40) { 
    finalCostElement.innerHTML = '$' + initialCostElement.value;
  } else {
    finalCostElement.innerHTML = 'cart is empty';
  }
}

const randomElement = document.querySelector('.js-random');
const randomOutputElement = document.querySelector('.js-random-output');
randomElement.addEventListener('keyup', function(event) {
    randomOutputElement.innerHTML = randomElement.value; 
})