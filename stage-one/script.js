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

// Game variables
let targetColor = "";
let correctCount = 0;
let wrongCount = 0;
let allowGuess = true; // flag to prevent multiple clicks during transition

// DOM Elements
const colorBox = document.getElementById("colorBox");
const colorOptionButtons = document.querySelectorAll(".colorOption");
const gameStatus = document.getElementById("gameStatus");
const correctScoreDisplay = document.getElementById("correctScore");
const wrongScoreDisplay = document.getElementById("wrongScore");
const newGameButton = document.getElementById("newGameButton");

// Utility function to get random integer in range [min, max)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Setup a new round of the game (without resetting scores)
function setupGame() {
  // Clear status message and reset colorBox opacity
  gameStatus.textContent = "";
  colorBox.style.opacity = 1;

  // Randomly choose 6 unique colors from the predefined set
  const shuffledColors = colors.sort(() => 0.5 - Math.random());
  const gameColors = shuffledColors.slice(0, 6);

  // Randomly select one of these as the target color
  targetColor = gameColors[getRandomInt(0, gameColors.length)];

  // Set the target color box background
  colorBox.style.backgroundColor = targetColor;

  // Assign each option button a color from gameColors and clear previous styles
  colorOptionButtons.forEach((button, index) => {
    button.style.backgroundColor = gameColors[index];
    button.style.border = "none";
  });

  // Re-enable guesses
  allowGuess = true;
}

// Handle player's guess
function handleGuess(event) {
  // Prevent multiple rapid clicks
  if (!allowGuess) return;
  allowGuess = false;

  const selectedColor = event.target.style.backgroundColor;

  if (selectedColor === targetColor) {
    gameStatus.textContent = "Correct!";
    correctCount++;
    correctScoreDisplay.textContent = "Correct: " + correctCount;
    // Visual feedback: add a limegreen border to the selected button
    event.target.style.border = "5px solid limegreen";
  } else {
    gameStatus.textContent = "Wrong!";
    wrongCount++;
    wrongScoreDisplay.textContent = "Wrong: " + wrongCount;
    // Visual feedback: add a red border to the selected button
    event.target.style.border = "5px solid red";
    // Fade-out effect on the color box to indicate a wrong guess
    colorBox.style.opacity = 0.5;
  }

  // Automatically set up a new round after a short delay so the user sees the result
  setTimeout(setupGame, 800);
}

// Add event listeners for color option buttons
colorOptionButtons.forEach((button) => {
  button.addEventListener("click", handleGuess);
});

// New game button: resets the entire game including scores
newGameButton.addEventListener("click", () => {
  correctCount = 0;
  wrongCount = 0;
  correctScoreDisplay.textContent = "Correct: 0";
  wrongScoreDisplay.textContent = "Wrong: 0";
  setupGame();
});

// Initialize the game on page load
setupGame();
