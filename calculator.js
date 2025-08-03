let calculation = JSON.parse(localStorage.getItem('calculation')) || '';
console.log(calculation);
const displayElement = document.querySelector('.js-display');
displayElement.innerHTML = calculation

function add(input) {
  switch (input) {
    case ' = ':
      calculation = eval(calculation).toString();
      break;
    case 'clear':
      calculation = '';
      break;
    default:
      calculation += input;
      break;
  }
  displayElement.innerHTML = calculation;
  saveCalculation();
}
function saveCalculation() {
  localStorage.setItem('calculation', JSON.stringify(calculation));
} 