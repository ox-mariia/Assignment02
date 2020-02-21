let coinFlip = Math.floor(Math.random() * 10);
window.document.write(coinFlip);
let choice = prompt("Heads or Tails");
if (choice === "Heads") {
    choice = true;
} else {
    choice = false;
}
if (coinFlip <= 4 && choice === true) {
    alert("The flip was heads and you chose heads...you win!");
} else if (coinFlip <= 4 && choice === false) {
    alert("The flip was heads but you chose tails...you lose!")
} else if (coinFlip >= 5 && choice === true) {
    alert("The flip was tails but you chose heads...you lose!");
} else if (coinFlip >= 5 && choice === false) {
    alert("The flip was tails and you chose tails...you win!");
} else {
    alert("Select Heads or Tails only!");
}

