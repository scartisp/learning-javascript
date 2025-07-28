let calculation = JSON.parse(localStorage.getItem('calculation')) || '';
console.log(calculation);

function add(input) {
  switch (input) {
    case ' = ':
      console.log(calculation += input + eval(calculation));
      break;
    case 'clear':
      calculation = '';
      break;
    default:
      if (calculation.includes(' = ')) {
        calculation = calculation.split(' = ')[1];
      }
      console.log(calculation += input);
      break;
  }
  saveCalculation();
}

function saveCalculation() {
  localStorage.setItem('calculation', JSON.stringify(calculation));
} 