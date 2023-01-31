let words = ["Hong Kong", "Hungary", "Iceland", "Israel", "Albania", "Andorra", "Australia", "Canada", "Venezuela", "India","Chicken", "Dolphin", "Elephant", "Hedgehog", "Parrot", "Eagle", "Goldfish", "Squirrel", "Panther", "Swordfish", "apple", "banana", "watermelon", "orange", "pineapple", "papaya", "raspberry", "cherry", "lemon", "strawberry"];

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = words[Math.floor(Math.random() * category.length)];
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}
