const readline = require('readline');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  const secretNumber = getRandomNumber(1, 100);
  let attempts = 0;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log('Welcome to the Guess the Number game!');
  console.log('Try to guess the secret number between 1 and 100.');

  function askUser() {
    rl.question('Enter your guess: ', (input) => {
      const guess = parseInt(input);

      if (isNaN(guess)) {
        console.log('Please enter a valid number.');
      } else {
        attempts++;

        if (guess === secretNumber) {
          console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
          rl.close();
        } else if (guess < secretNumber) {
          console.log('Too low! Try again.');
          askUser();
        } else {
          console.log('Too high! Try again.');
          askUser();
        }
      }
    });
  }

  askUser();
}

module.exports = { startGame };
