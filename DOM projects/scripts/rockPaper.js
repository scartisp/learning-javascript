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
    intervalIdForAuto = setInterval(() => {
      player = randomChoice();
      update();
    }, 1000)
  } else {
    clearInterval(intervalIdForAuto);
  }
}