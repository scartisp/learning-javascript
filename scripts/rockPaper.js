let player;
let computer;
let isAutoPlay = false;
let intervalIdForAuto;
const scoreElement = document.querySelector('.js-score');
const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};    // YOU CAN USE THE || GUARD OPERATOR IN CASE THERE IS NO PREVIOUS INSTANCE OF SCORE
displayScore();


function getResult() {
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

function update() {
  computer = randomChoice();
  document.querySelector('.js-result').innerHTML = getResult();
  document.querySelector('.js-moves').innerHTML = ` You 
    <img class="move-icon" src="../images/${player}-emoji.png">
    <img class= "move-icon" src="../images/${computer}-emoji.png">
    computer`;
  displayScore();
  localStorage.setItem('score', JSON.stringify(score));
}

function reset() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  displayScore();
  localStorage.removeItem('score'); //this is how you remove something from local storage
}

function displayScore() {
  scoreElement.innerHTML = 'wins: ' + score.wins + ', losses: ' + score.losses + ', ties: ' + score.ties;
}

function randomChoice() {
  chooser = Math.random(); // math.random produces a random number >= 0 && < 1
  if (chooser >= 0 && chooser < 1 / 3) {
    return 'rock';
  } else if (chooser >= 1 / 3 && chooser < 2 / 3) {
    return 'scissor';
  } else {
    return 'paper';
  }
}

function autoPlay() {
  isAutoPlay = !isAutoPlay;
  if (isAutoPlay) {
    intervalIdForAuto = setInterval(function () {
      player = randomChoice();
      update();
    }, 1000)
  } else {
    clearInterval(intervalIdForAuto);
  }
}

//OTHER THINGS

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

//this returns true because it is comparing the actual values
console.log(JSON.stringify(thing) === JSON.stringify(thing2));
const { a, b } = thing2;
console.log(a + ' ' + b);
//this is called destructing. you are extracting the property from an object and putting it into a stand alone value

// a is now it's own thing seperate from thing1/2, I can reference it in thing3s definition.
const thing3 = {
  a
};
console.log('this is thing3 ' + thing3.a);

//you can add values to an object
product.newValue = 5;
//and can delete values of an object
delete product.name;

console.log(JSON.parse(JSON.stringify(thing)));
// && can be used as a 'guard operator'. you can do something like false && console.log() and console.log won't do anything unless the thing before the and is true.
//same can be done with ||
//ex: const currency = someVar || 'USD". If someVar is a truthy value, currency will be someVar, if it is a falsy value, currency will be USD.



// DOM
//you can add html elements into javascript code,
//giving control of the webpage to javascript
// it is converted into a javascript object

console.log(document.body.innerHTML);// all of the HTML in the body
console.log(document.querySelector('button')); //this retrieves anything from the page and puts it inside js
// in this case, it is getting the first button.
console.log(document.querySelector('button').innerHTML); // you can retrieve the inner html of objects
console.log(document.querySelector('.js-paper-button')); // this is how you can get a specific instace of an object
//that isn't the first (by giving the objects class properties within the html)
//common practice is to use js-dash to show it is being used in js

const buttonElement = document.querySelector('.js-scissor-button'); // can add these things to js objects
// convention is to use the word element in the name