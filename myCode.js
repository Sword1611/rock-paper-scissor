function getComputerChoice() {
  const x = Math.floor(Math.random() * 3) + 1;

  if (x == 1) {
    return "ROCK";
  } else if (x == 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function getHumanChoice() {
  let userInput = window.prompt("Enter your move");
  userInput = userInput.trim().toUpperCase();
  return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("TIE!");
  }
  // rock
  else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
    console.log("You LOSE! PAPER beats ROCK!");
    computerScore++;
  } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
    console.log("You WIN! ROCK beats SCISSORS!");
    humanScore++;
  }
  // paper
  else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
    console.log("You LOSE! SCISSORS beats PAPER!");
    computerScore++;
  } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
    console.log("You WIN! PAPER beats ROCK!");
    humanScore++;
  }
  // scissors
  else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
    console.log("You LOSE! ROCK beats SCISSORS!");
    computerScore++;
  } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
    console.log("You WIN! SCISSORS beats PAPER!");
    humanScore++;
  }
}

function playGame() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  console.log("Human choice: " + humanChoice);
  console.log("Computer choice: " + computerChoice);
  playRound(humanChoice, computerChoice);
}

for (let i = 1; i <= 5; i++) {
  playGame();
  console.log("------------------");
}

console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);

// if (getHumanChoice(userInput) == "Error!"){
//     window.alert("Error! Invalid input!");
// }

// document.getElementById("cpu-choice").textContent = "Computer choice: " + computerChoice;
