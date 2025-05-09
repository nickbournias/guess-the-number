
let upperRange = 0;
let randomNum = 0;


document.getElementById('rangeInput').addEventListener('input', function() {
    upperRange = document.getElementById('rangeInput').value
    if (upperRange < 2){
        document.getElementById('rangeText').innerText = "Pick a larger number";
    } else {
        document.getElementById('rangeText').innerText = "[  Range: 1 to " + upperRange + "]";
    }
});

function postRange() {
    upperRange = document.getElementById('rangeInput').value;
    console.log("Input value is:", upperRange);  // <-- Debug log

    if (upperRange < 2){
        document.getElementById('rangeText').innerText = "Pick a larger number";
    } else {
        document.getElementById('rangeText').innerText = "[  Range: 1 to " + upperRange + "]";
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomize() {
    randomNum = getRandomInt(upperRange) + 1;
    document.getElementById('guessOutput').innerText = "";
    document.getElementById('resultsText').innerText = "";
    console.log("updated number");  // <-- Debug log
}

function postResults() {
    userGuess = document.getElementById('guessInput').value;
    console.log("User guessed: ", userGuess);  // <-- Debug log
    console.log("randomNum: ", randomNum);  // <-- Debug log

    if (userGuess == randomNum) {
        document.getElementById('guessOutput').innerText = "Last guess: " + userGuess;
        document.getElementById('resultsText').innerText = "Correct!";
        document.getElementById('resultsText').style.color = 'green';
    } else if (userGuess - randomNum < 5) {
        document.getElementById('guessOutput').innerText = "Last guess: " + userGuess;
        document.getElementById('resultsText').innerText = "You're close!";
        document.getElementById('resultsText').style.color = 'blue';
    } else {
        document.getElementById('guessOutput').innerText = "Last guess: " + userGuess;
        document.getElementById('resultsText').innerText = "Try again";
        document.getElementById('resultsText').style.color = 'red';
    }

}

function fadeAway() {
    let msg = document.getElementById('statusMessage');
    msg.classList.remove('hidden');  // Reset first

    // Set text & color
    msg.innerText = "(number updated)";
    msg.style.color = 'blue';

    // Force reflow (important!)
    void msg.offsetWidth;

    // Trigger fade
    msg.classList.add('hidden');

    // OPTIONAL: clear text after fade
    setTimeout(() => {
        msg.innerText = "";
    }, 2000);
}



