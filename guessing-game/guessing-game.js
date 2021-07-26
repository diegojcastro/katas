
let prompt = require("prompt-sync")();

let target = Math.floor(Math.random()*100);

// code below (replace this example)
let answer = prompt("Guess a number: ");
let history = [];
let tries = 1;

while(answer != target) {
  if (history.includes(answer)) {
    answer = prompt("You already tried "+answer+". Try again: ")
  } else {
    history.push(answer);
    if (answer < target) {
      answer = prompt("Too low, try again: ");
      tries += 1;
    } else {
      answer = prompt("Too high, try again: ");
      tries+= 1;
    }
  }
}

console.log("You win! The answer was " + answer + "! That took " + tries + " tries.");