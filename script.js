/* store our game status element here to allow us to more easily use it later on */
const gameStatus = document.querySelector('game-status');

/* Here we declare some variables that we will use to track the game state throught the game. */
/* We will use gameActive to pause the game in case of an end scenario */
let gameActive = true;

// store current player here
let currentPlayer = 'X'

// store the current game state
// the form of empty strings in an array will allow us to easily track played cells and validate the game state later on
let gameState = ['','','','','','','','','',];

//
const winningMessage = () => `Player ${currentPlayer} wins`;
const drawMessage = () => `IT'S A DRAW`;
const currentPlayerTurn = () => `${currentPlayer}'s turn`

// We set the inital message to let the players know whose turn it is
statusDisplay.innerHTML = currentPlayer();

function handleCellPlayed() {

}

function handlePlayerChange() {

}

function handleResultValidation() {

}

function handleCellClick(){

}

function handleStartGame() {

}

// And finally we add our event listeners to the actual game cells, as well as our start button
const cells = document.querySelectorAll(".cell");

cells.addEventListener('click', e => {
    console.log(e)
})
