var player = "X";
var gameBoard = document.getElementById("game-board");
var cells = document.querySelectorAll(".cell");

function checkForWinner() {
  var winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (var i = 0; i < winningCombos.length; i++) {
    var combo = winningCombos[i];
    if (cells[combo[0]].innerHTML === player &&
        cells[combo[1]].innerHTML === player &&
        cells[combo[2]].innerHTML === player) {
      return true;
    }
  }
  return false;
}

function handleCellClick(event) {
  if (event.target.innerHTML === "") {
    event.target.innerHTML = player;
    if (checkForWinner()) {
      displayWinner(player);
    } else if (checkForTie()) {
      displayTie();
    } else {
      player = player === "X" ? "O" : "X";
    }
  }
}

function checkForTie() {
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML === "") {
      return false;
    }
  }
  return true;
}

function displayWinner(player) {
  alert(player + " wins!");
  resetGame();
}

function displayTie() {
  alert("It's a tie!");
  resetGame();
}

function resetGame() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  player = "X";
}

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", handleCellClick);
}
