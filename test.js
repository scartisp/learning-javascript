let calculation = '';

function add1() {
  console.log(calculation += '1');
}


function add2() {
  console.log(calculation += '2');
}


function add3() {
  console.log(calculation += '3');
}


function Plus() {
  console.log(calculation += ' + ');
}

function Equals() {
  console.log(calculation + ' = ' + eval(calculation));
  calculation = '';
}