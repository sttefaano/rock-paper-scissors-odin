// global variables
let computerOptions = [0, 1, 2];
let playerScore = 0;
let computerScore = 0;
let buttonsEl;
let resultEl;
let playerSignEl;
let computerSignEl;
let playerScoreEl;
let computerScoreEl;
let playerPick;
let computerPick;
let resetBtn;
let mainEl;

function $ (query){
  return document.querySelector(query);
}

function $all (query){
  return document.querySelectorAll(query);
}

//Sets functions for DOM elements
function setElements(){
  buttonsEl = $all('.playerPick button');
  resultEl = $('.scoreboard .result');
  playerSignEl = $('#playerSign');
  computerSignEl = $('#computerSign');
  playerScoreEl = $('#playerScore');
  computerScoreEl = $('#computerScore');

  resetBtn = document.createElement('button');
  resetBtn.innerText = 'Play Again';
  resetBtn.addEventListener('click', resetGame)
  mainEl = $('.main')

  resetBtn.className = 'reset';
  
  buttonsEl.forEach(button => 
    button.addEventListener('click', getPlayerPick));
}

function resetGame(){
  playerScore = 0;
  computerScore = 0;
  buttonsEl.forEach(button => button.disabled = false);
  playerScoreEl.textContent = 'Player: ' + playerScore;
  computerScoreEl.textContent = 'Computer: ' + computerScore;
  resultEl.textContent = 'Choose your weapon';
  resetBtn.style.display = 'none';
}

function getPlayerPick(e){
  playerPick = e.target.className;
  computerPick = computerPlay();
  playRound(playerPick, computerPick);
}

function isGameOver(){
  if(playerScore == 5 || computerScore == 5){
    buttonsEl.forEach(button => button.disabled = true);
    mainEl.appendChild(resetBtn);
    resetBtn.style.display = 'inline-block';
    return true
  } else{
    return false;
  }
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
  } else if(tieComb.includes(playComb)){
    updateRes(0);
  } else {
    updateRes(-1);
  }
}

function updateRes(res){
  playerSignEl.textContent = getEmojis(playerPick);
  computerSignEl.textContent = getEmojis(computerPick);
  switch(res){
    case 1:  
      resultEl.textContent = 'Player wins the round!'
      playerScore += 1;
      playerScoreEl.textContent = 'Player: ' + playerScore;
      break;
    case 0:
      resultEl.textContent = 'Tie!'
      break;
    case -1:
      resultEl.textContent = 'Computer wins the round!'
      computerScore += 1;
      computerScoreEl.textContent = 'Computer: ' + computerScore;
  }

  isGameOver();
}

function getEmojis(n){
  switch(Number(n)){
    case 0:
      return '✊';
      break;
    case 1:
      return '✋';
      break;
    case 2:
      return '✌';
      break;
  }
}

setElements();