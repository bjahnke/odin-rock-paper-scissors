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

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));