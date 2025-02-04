const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "teal",
  "magenta",
];

let targetColor = "";
let correctCount = 0;
let wrongCount = 0;
let allowGuess = true;

const colorBox = document.getElementById("colorBox");
const colorOptionButtons = document.querySelectorAll(".colorOption");
const gameStatus = document.getElementById("gameStatus");
const correctScoreDisplay = document.getElementById("correctScore");
const wrongScoreDisplay = document.getElementById("wrongScore");
const newGameButton = document.getElementById("newGameButton");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function setupGame() {
  gameStatus.textContent = "";
  colorBox.style.opacity = 1;

  const shuffledColors = colors.sort(() => 0.5 - Math.random());
  const gameColors = shuffledColors.slice(0, 6);

  targetColor = gameColors[getRandomInt(0, gameColors.length)];

  colorBox.style.backgroundColor = targetColor;

  colorOptionButtons.forEach((button, index) => {
    button.style.backgroundColor = gameColors[index];
    button.style.border = "none";
  });

  allowGuess = true;
}

function handleGuess(event) {
  if (!allowGuess) return;
  allowGuess = false;

  const selectedColor = event.target.style.backgroundColor;

  if (selectedColor === targetColor) {
    gameStatus.textContent = "Correct! 🎉🎉🎉";
    correctCount++;
    correctScoreDisplay.textContent = "Correct: " + correctCount;
    event.target.style.border = "5px solid limegreen";
  } else {
    gameStatus.textContent = "Wrong! ❌";
    wrongCount++;
    wrongScoreDisplay.textContent = "Wrong: " + wrongCount;
    event.target.style.border = "5px solid red";
    colorBox.style.opacity = 0.5;
  }

  setTimeout(setupGame, 800);
}

colorOptionButtons.forEach((button) => {
  button.addEventListener("click", handleGuess);
});

newGameButton.addEventListener("click", () => {
  correctCount = 0;
  wrongCount = 0;
  correctScoreDisplay.textContent = "Correct: 0";
  wrongScoreDisplay.textContent = "Wrong: 0";
  setupGame();
});

setupGame();
