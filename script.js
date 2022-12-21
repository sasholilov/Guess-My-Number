'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Please type a number';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high ↑';
    score--;

    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent = 'You lose the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low ↓';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent = 'You lose the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.message').textContent = 'Winner ❤';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.fontSize = '7rem';
    document.querySelector('.highscore').textContent = highScore;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.fontSize = '6rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
