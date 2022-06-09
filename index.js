// global variables
let optionBtn;
let computerOptions = [0, 1, 2];
let playerScore = 0;
let computerScore = 0;
let result;
let resultEl;
let resetBtn;
let playerScoreEl;
let computerScoreEl;

//Sets functions for DOM elements
function setElements(){
  optionBtn = document.querySelectorAll('.playerPick button');
  resultEl = document.querySelector('.result');
  playerScoreEl = document.querySelector('.playerScore');
  computerScoreEl = document.querySelector('.computerScore');
  resetBtn = document.createElement('button');

  console.log(resultEl);

  optionBtn.forEach(button => button.addEventListener('click', getPlayerPick));
  // resetBtn.addEventListener('click', setDefault()); 
}

//Generates computer's play
function computerPlay (){
  return computerOptions[
    Math.floor(Math.random() * computerOptions.length)];
}

function playRound(playerSelection, computerSelection){
  let playComb = `${playerSelection}-${computerSelection}`;
  let playerWinComb = ['0-2', '1-0', '2-1'];
  let tieComb = ['0-0', '1-1', '2-2'];

  if(playerWinComb.includes(playComb)){
    updateRes(1);
    updatePoints(1);
  } else if(tieComb.includes(playComb)){
    updateRes(0);
  } else {
    updateRes(-1);
    updatePoints(-1);
  }
}

function updateRes(res){
  switch(res){
    case 1:
      resultEl.textContent = 'Player wins the round!';
      break;
    case 0: 
      resultEl.textContent = 'Tie!';
      break;
    case -1:
      resultEl.textContent = 'Computer wins the round!';
      break;
  }
}

function updatePoints(res){
  if(res == 1){
    playerScore += 1;
    playerScoreEl.textContent = 'player: ' + playerScore;
  } else {
    computerScore += 1;
    computerScoreEl.textContent = 'computer : ' + computerScore;
  }
}

function checkWinner(){
  if (playerScore >= 5 || computerScore >= 5){
    return true;
  } else{
    return false;
  }
}

function getPlayerPick(e){
  playRound(e.target.className, computerPlay());
}

setElements();