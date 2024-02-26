const secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');

    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        alert('Please enter a valid number between 1 and 10');
        return;
    }

    attempts++;

    if (userGuess === secretNumber) {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        message.style.color = 'green';
        disableInputAndButton();
    } else {
        message.textContent = 'Wrong guess. Try again!';
        message.style.color = 'red';
    }
}

function disableInputAndButton() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
}
