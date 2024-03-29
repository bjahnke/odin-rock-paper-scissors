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

playGame();