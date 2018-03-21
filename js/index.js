// variables
var rock = document.querySelector('#rock');
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");



// EVEN LISTENERS
rock.addEventListener('click', () => alert(playRound('rock')));






function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function playRound(player, computer) {
    let computer = computerPlay();
    let win = 'You win.';
    let lost = 'You lost.';
    if (player === 'rock' && computer === 'scissors') {
        return win;
    } else if (player === 'paper' && computer === 'rock') {
        return win;
    } else if (player === 'scissors' && computer === 'paper') {
        return win;
    } else if (player === 'rock' && computer === 'paper') {
        return lost;
    } else if (player === 'paper' && computer === 'scissors') {
        return lost;
    } else if (player === 'scissors' && computer === 'rock') {
        return lost;
    } else {
        return 'It is a tie ';
    }
}

function game() {
    let count = 0;
    let playerScore = 0;
    let computerScore = 0;
    let result = 0;
    let computer = computerPlay().toLowerCase();
    let playerResponse;
    while (count < 5) {
        playerResponse = window.prompt('Please enter your selection').toLowerCase();
        result = playRound(playerResponse, computer);


        if (playerResponse !== 'rock' && playerResponse !== 'scissors' && playerResponse !== 'paper') {

            window.alert("Please enter [rock]");
        }
        if (result === 'You win') {
            playerScore++;
            console.log(result + ' Player score is: ' + playerScore);
        } else if (result === 'You lost') {
            computerScore++;
            console.log(result + ' Computer score is: ' + computerScore);
        } else if (result === 'It is a tie ') {
            console.log('It is a tie');
        }

        count++;
    }
    return playerScore > computerScore ? "Player score: " + playerScore : "Computer score: " + computerScore;



}
