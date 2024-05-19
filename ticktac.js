let currentPlayer = 'X';
let moves = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(index) {
    if (moves[index] === '') {
        moves[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].textContent = currentPlayer;
        checkWinner();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
            document.getElementById('result').textContent = `${currentPlayer} wins!`;
            disableBoard();
            return;
        }
    }
    if (!moves.includes('')) {
        document.getElementById('result').textContent = "It's a draw!";
    }
}

function reset() {
    currentPlayer = 'X';
    moves = ['', '', '', '', '', '', '', '', ''];
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.textContent = '';
    }
    document.getElementById('result').textContent = '';
    enableBoard();
}

function disableBoard() {
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.onclick = null;
    }
}

function enableBoard() {
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        if (moves[i] === '') {
            cells[i].onclick = function() { makeMove(i); };
        }
    }
}
