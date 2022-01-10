const statusDisplay = document.querySelector('.game-status');

let gameActive = true;
let currentPlayer = "O";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `PLAYER ${currentPlayer} WINS!!!`;
const drawMessage = () => `IT'S A TIE`;
const currentPlayerTurn = () => `PLAYER ${currentPlayer}'S TURN`;

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        console.log(`checking win conditions for spaces ${winCondition[0]}, ${winCondition[1]}, ${winCondition[2]}`);
        if (a === '' || b === '' || c === '') {
            console.log('no winner found for this line');
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            console.log('winner found');
            break;

        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleStartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

function handleEndGame() {
   gameActive = false;
   currentPlayer = "";
   gameState = ["", "", "", "", "", "", "", "", ""];
   statusDisplay.innerHTML = 'End Game';
   document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");

}
    
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.start-button').addEventListener('click', handleStartGame);
document.querySelector('.end-button').addEventListener('click', handleEndGame);