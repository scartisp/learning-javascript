let calculation = '';

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
}