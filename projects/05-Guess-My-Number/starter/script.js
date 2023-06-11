'use strict';
/*
// Selecting an element content and printing to the console
console.log(document.querySelector('.message').textContent);

// Selectin an element and changing its content
console.log(document.querySelector('.message').textContent = 'Correct Number!');
// console.log(document.querySelector('.message').textContent);

// Manipulando o conteúdo de um elemento
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10

// Manipulando o conteúdo de um <input>
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Refactoring: Function to display messages based on the conditions of the guessing
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '🚫 No number!';
        displayMessage('🚫 No number!');

        // When player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // Updates the 'Highscore' if it is greater than the previous one
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // Refactoring the code from lines ?? to ??
        // When guess is different
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            //     guess > secretNumber ? '📈 Too high!' : '📉 Too low!'; // Used the ternary operator (condition ? true : false;)
            displayMessage(
                guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
            );
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');

            document.querySelector('.score').textContent = 0;
        }
    }

    // - Reference Code before refactoring
    // // When gues is too high
    //  else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent =
    //             '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     // When guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent =
    //             '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

// My solution:
document.querySelector('.again').addEventListener('click', function () {
    score = 20; // important. see next two lines
    secretNumber = Math.trunc(Math.random() * 20) + 1; // also important

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

//////////////////////////////////////////////////////////////
// The instructor's:
/*
document.querySelector('.again').addEventListener('click', function () {
    // reassign the initial value of the score
    score = 20;
    // starts a new random number
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}
*/
//////////////////////////////////////////////////////////////

/*
76. CHALLENGE #1

Implement a game rest functionality, so that the player can make a new guess!
Here is how:

1. Select the element with the 'again' class and attach a click event handler;
2. In the handler function, restore initial values of the score and number variables;
3. Restore the initial conditions of the message, number, score and guess input field;
4. Also restore the original background-color (#222) and number width (15rem)

GOOD LUCK 🙂
*/
