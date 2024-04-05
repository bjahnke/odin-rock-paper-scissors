/**
 * Randomly returns 'rock', 'paper' or 'scissors'
 */
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function createResultMessage(result, winnerSelection, loserSelection) {
    return `${result} ${winnerSelection} beats ${loserSelection}`;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return `It's a tie!`;
    }

    let win = () => {
        return createResultMessage('You win!', playerSelection, computerSelection);
    };

    let lose = (p, c) => {
        return createResultMessage('You lose!', computerSelection, playerSelection);
    };
    let res;

    if (playerSelection === 'rock') {
        res = computerSelection === 'scissors' ? win() : lose();
    } else if (playerSelection === 'paper') {
        res = computerSelection === 'rock' ? win() : lose();
    } else if (playerSelection === 'scissors') {
        res = computerSelection === 'paper' ? win() : lose();
    }

    return res;
}

/**
 * Plays a 5 round game of Rock Paper Scissors
 */
function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter rock, paper, or scissors');
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes('win')) {
            playerWins++;
        } else if (result.includes('lose')) {
            computerWins++;
        }
    }
}

const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const resultDiv = document.createElement('div');
const scoreBoard = document.createElement('div');


rockBtn.textContent = "rock";
paperBtn.textContent = "paper";
scissorsBtn.textContent = "scissors";

let playerWins = 0;
let computerWins = 0;

function declareWinner(pWinCount, cWinCount, winningPoints) {
    let res = "";
    if (pWinCount >= winningPoints) {
        res = " *Player has won the match!* ";
    } else if (cWinCount >= winningPoints) {
        res = " *Computer has won the match!* ";
    }
    return res;
}

function gameCaller (e) {
    if (scoreBoard.textContent.includes('won')) {
        playerWins = 0;
        computerWins = 0;
    }

    result = playRound(e.target.textContent, getComputerChoice());
    resultDiv.textContent = result;
    if (result.includes('win')) {
        playerWins++;
    } else if (result.includes('lose')) {
        computerWins++;
    }
    const declaredWinner = declareWinner(playerWins, computerWins, 5);
    scoreBoard.textContent = (
        `Player Wins: ${playerWins}, Computer Wins: ${computerWins}` + declaredWinner
    )
}

rockBtn.addEventListener('click', gameCaller);
paperBtn.addEventListener('click', gameCaller);
scissorsBtn.addEventListener('click', gameCaller);



const body = document.querySelector('body');
body.append(rockBtn, paperBtn, scissorsBtn, resultDiv, scoreBoard);


