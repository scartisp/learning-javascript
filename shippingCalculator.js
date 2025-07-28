function calculateFinalPrice() {
  const initialCostElement = document.querySelector('.js-order-price');
  const finalCostElement = document.querySelector('.js-final-cost');

  if (initialCostElement.value < 40 && initialCostElement.value > 0) {
    finalCostElement.innerHTML = '$' + (Number(initialCostElement.value) + 10);
  } else if (initialCostElement.value >= 40) {
    finalCostElement.innerHTML = '$' + initialCostElement.value;
  } else {
    finalCostElement.innerHTML = 'cart is empty';
  }
}