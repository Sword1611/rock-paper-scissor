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
  } 
  else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
    console.log("You WIN! ROCK beats SCISSORS!");
  } 
  // paper
  else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
    console.log("You LOSE! SCISSORS beats PAPER!");
  } 
  else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
    console.log("You WIN! PAPER beats ROCK!");
  }
  // scissors 
  else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
    console.log("You LOSE! ROCK beats SCISSORS!");
  } 
  else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
    console.log("You WIN! SCISSORS beats PAPER!");
  } 

}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log("Human choice: " + humanChoice);
console.log("Computer choice: " + computerChoice);

playRound(humanChoice, computerChoice);

// if (getHumanChoice(userInput) == "Error!"){
//     window.alert("Error! Invalid input!");
// }

// document.getElementById("cpu-choice").textContent = "Computer choice: " + computerChoice;
