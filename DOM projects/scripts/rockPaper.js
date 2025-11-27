// player/coimputer choices (rock,paper, or scissors)
let player;
let computer;

//things for autoplay
let isAutoPlay = false;
let intervalIdForAuto;
//DOM things
const controlPrompt = document.querySelector('.js-prompt-for-controls');
const controls = document.querySelector('.js-control-div')
const autoPlayButton = document.querySelector('.js-auto-play-button');
const resetButton = document.querySelector('.js-reset-button');
const resetDiv = document.querySelector('.js-reset-div');
const resetYes = document.querySelector('.js-reset-yes');
const resetNo = document.querySelector('.js-reset-no');
const scoreElement = document.querySelector('.js-score');
//score
const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};    // YOU CAN USE THE || GUARD OPERATOR IN CASE THERE IS NO PREVIOUS INSTANCE OF SCORE
displayScore();

//for using keyboard
document.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    player = 'rock';
    update();
  } else if (event.key === 'p') {
    player = 'paper';
    update();
  } else if (event.key === 's') {
    player = 'scissor';
    update();
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === ' ') {
    resetDiv.classList.remove('hide-reset-div');
    /*
    ! known bug: if you press any other button and then space, the button pressed has 
    ! "keyboard focus", meaning space will also act as a click
    */
  }
})

//shows div for controls
controlPrompt.addEventListener('click', () => {
  if (controls.style.display === "none")
    controls.style.display = "block";
   else
    controls.style.display ="none";
})

//shows reset div on clicking reset button
resetButton.addEventListener('click', () => {
  resetDiv.classList.remove('hide-reset-div');
});
//resets score and hides reset div on clicking "yes" for reset option
resetYes.addEventListener('click', () => {
  resetDiv.classList.add('hide-reset-div');
  reset();
});
//hides reset div on cliking "no" for reset option
resetNo.addEventListener('click', () => {
  resetDiv.classList.add('hide-reset-div');
})
//starts autoplay on clicking autoplay option
autoPlayButton.addEventListener('click', () => {
  autoPlay();
})

// helper method for updating score
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

//for displaying any change
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

//resets the score
function reset() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  displayScore();
  localStorage.removeItem('score'); //this is how you remove something from local storage
}

// helper method for displayihg score
function displayScore() {
  scoreElement.innerHTML = 'wins: ' + score.wins + ', losses: ' + score.losses + ', ties: ' + score.ties;
}


//picks a choice for the computer
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


//autoplay feature

function autoPlay() {
  toggleAutoPlayText();
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

function toggleAutoPlayText() {
  if (autoPlayButton.innerHTML === 'Auto Play')
    autoPlayButton.innerHTML = 'Stop Playing';
  else
    autoPlayButton.innerHTML = 'Auto Play'
}