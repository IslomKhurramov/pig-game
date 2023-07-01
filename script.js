"use strict";
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
//starting conditions
score0El.textContent = 0; 
score1El.textContent = 0;
diceEl.classList.add("hidden");

//Rolling dice functionality
btnRoll.addEventListener("click", function () {
  //Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `pics/dice-${dice}.png`;

  //check for rolled 1
  if (dice !== 1) {
    //Add dice to the current score
    currentScore += dice; //currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //Switch to next player
    switchPlayer();
  }
});

btnHold.addEventListener("click", function () {
  //Add current score to active player's score
  scores[activePlayer] += currentScore; 
  //scores[1]=scores[1]+currentscore
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  switchPlayer();
});
