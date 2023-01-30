//
const categoryContainer = document.getElementById('options-container');
const letterContainer = document.getElementById('letter-container');
const userInputSection = document.getElementById('user-input-section');
const newGameContainer = document.getElementById('new-game-container');
const newGameButton = document.getElementById('new-game-button');
const result = document.getElementById('result-text');
const canvas = document.getElementById('canvas');

//Options for buttons and related words for the options
let category = {
  countries: ["Hong Kong", "Hungary", "Iceland", "Israel", "Albania", "Andorra", "Australia", "Canada", "Venezuela", "India",],

  animals: ["Chicken", "Dolphin", "Elephant", "Hedgehog", "Parrot", "Eagle", "Goldfish", "Squirrel", "Panther", "Swordfish",],

  fruits: ["apple", "banana", "watermelon", "orange", "pineapple", "papaya", "raspberry", "cherry", "lemon", "strawberry"],
};

//Start New Game
newGameButton.addEventListener('click', function () {
  init('reset');
});
