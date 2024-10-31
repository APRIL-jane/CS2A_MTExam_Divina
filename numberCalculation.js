let theFavNumber = 7;
let guess = parseInt(prompt("Guess my favorite number:"));
while (guess !== theFavNumber) {
    if (guess > theFavNumber) {
        console.log("Too high! Try again.");
    } else if (guess < theFavNumber) {
        console.log("Too low! Try again:");
    }
    guess = parseInt(prompt("Guess again:"));
}
console.log("Correct! You've guessed my favorite number.");