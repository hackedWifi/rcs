// variables
var rock = document.querySelector('#rock');
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");
var divPlayerScore = document.querySelector(".pl-score");
var divPcScore = document.querySelector(".pc-score");
var divTieScore = document.querySelector(".tie-score");
var rounds = 4;
var playerScore = 0;
var computerScore = 0;
var tieScore = 0;


// EVEN LISTENERkS
rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click',  () => playRound('scissors'));




function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function playRound(player) {
  let computer = computerPlay();
  if((playerScore === rounds)
   || (computerScore === rounds)
    ||(tieScore === rounds)){
    gameOver();
    resetGame();
  }
  if ((player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')) {
    playerScore++;
    divPlayerScore.textContent = `Player score: ${playerScore}`;
    return 'win';
  } else if ((player === 'rock' && computer === 'paper') ||
    (player === 'paper' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'rock')) {
    computerScore++;
    divPcScore.textContent = `Computer Score: ${computerScore}`;
    return 'lost';
  } else {
    tieScore++;
    divTieScore.textContent = `Tie score: ${tieScore}`;
    return 'tie';
  }
}
function resetGame(){
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
  divPcScore.textContent =`Computer score: ${computerScore}`;
  divPlayerScore.textContent = `Player score: ${playerScore}`;
  divTieScore.textContent = `Tie score: ${tieScore}`;
}
function gameOver(){
  if(playerScore > computerScore){
    alert('You win');

  }
  else if(computerScore > playerScore){
    alert('Computer has won!!')
  }
  else {
    alert('It is a tie');
  }
}
