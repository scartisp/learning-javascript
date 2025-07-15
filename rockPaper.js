let player;
let computer;
const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};    // YOU CAN USE THE || GUARD OPERATOR IN CASE THERE IS NO PREVIOUS INSTANCE OF SCORE 

function result() {
  if ((player === 'rock' && computer === 'scissor') || (player === 'scissor' && computer === 'paper') || (player === 'paper' && computer === 'rock')) {
    ++score.wins;
    return 'you won';
  } else if ((player === 'scissor' && computer === 'rock') || (player === 'paper' && computer === 'scissor') || (player === 'rock' && computer === 'paper')) {
    ++score.losses;
    return 'you lost';
  } else {
    ++score.ties;
    return "it's a tie";
  }
}

function check() {
  computer = Math.random(); // math.random produces a random number >= 0 && < 1
  if (computer >= 0 && computer < 1 / 3) {
    computer = 'rock';
  } else if (computer >= 1 / 3 && computer < 2 / 3) {
    computer = 'scissor';
  } else {
    computer = 'paper';
  }

  alert('you chose ' + player + ' the computer chose ' + computer + ' '+ result() + '\n wins: ' + score.wins + ', losses: ' + score.losses + ', ties: ' + score.ties);
  localStorage.setItem('score', JSON.stringify(score))
}

function reset() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  alert('your scores have been reset \nwins: ' + score.wins + ', losses: ' + score.losses + ', ties: ' + score.ties);
  localStorage.removeItem('score'); //this is how you remove something from local storage
}

//objects in js, use const when declaring them unless you plan to reasign the variable to something else later on
const product = {
  name: 'socks',
  price: 1090,
  function1() {
    console.log('this is how you add functions to objects');
  }
};
product.function1();

//converting javascript to and from JSON
console.log(JSON.stringify(product));
console.log(JSON.parse(JSON.stringify(product)));

const thing = {
  a: 'hi',
  b: 'hello'
};
const thing2 = {
  a: 'hi',
  b: 'hello'
};
console.log(thing == thing2);
// both == and === return false here because the objects are simply references (like pointers) and since they are pointing to two different places in memory, they are not equal to each other
console.log(JSON.stringify(thing) === JSON.stringify(thing2));
const {a, b} = thing2;
console.log(a + ' ' + b); 
//this is called destructing. you are extracting the a property from an object and putting it into a stand alone value

//you can add values to an object
product.newValue = 5;
//and can delete values of an object
delete product.name;

console.log(JSON.parse(JSON.stringify(thing)));
// && can be used as a 'guard operator'. you can do something like false && console.log() and console.log won't do anything unless the thing before the and is true.
//same can be done with ||
//ex: const currency = someVar || 'USD". If someVar is a truthy value, currency will be someVar, if it is a falsy value, currency will be USD.