const playerOne = document.querySelector("#playerOne");
const playerOneScore = document.querySelector("#playerOneScore");

const playerTwo = document.querySelector("#playerTwo");
const playerTwoScore = document.querySelector("#playerTwoScore");

const resetButton = document.querySelector("#reset");
const finalScore = document.querySelectorAll("select");
let playingToValue = finalScore.value;
resetButton.onclick = function () {
  playerTwoScore.innerHTML = 0;
  playerOneScore.innerHTML = 0;
};
playerOne.onclick = function () {
  let currentScore = playerOneScore.innerHTML;
  let scoreNumber = parseInt(currentScore, 10);
  if (scoreNumber < playingToValue) {
    scoreNumber += 1;
    playerOneScore.innerHTML = scoreNumber;
  } else {
    alert("Player One is the Winner!!");
    playerTwoScore.innerHTML = 0;
    playerOneScore.innerHTML = 0;
  }
};

playerTwo.onclick = function () {
  let currentScore = playerTwoScore.innerHTML;
  let scoreNumber = parseInt(currentScore, 10);
  if (scoreNumber < playingToValue) {
    scoreNumber += 1;
    playerTwoScore.innerHTML = scoreNumber;
  } else {
    alert("Player Two Is The Winner!!");
    playerTwoScore.innerHTML = 0;
    playerOneScore.innerHTML = 0;
  }
};
