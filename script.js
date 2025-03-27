console.log("Hello world!");

let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
const choicePara = document.createElement("p");
const selection = document.createElement("p");
const roundResult = document.createElement("p");
const scoreUpdate = document.createElement("p");
//const gameOverMessage = document.createElement("p");

const humanWinsMessage = "Congratulations! You won!";
const computerWinsMessage = "Bad luck. You lose";
const tieMessage = "Ooooh. It's a tie...";



const resultPara = document.createElement("p");





//human choice
//function getHumanChoice() {
  //  return humanChoice;
   //}

// Computer choice: Rock/Paper/Scissors
function getComputerChoice() {
    let result = Math.floor(Math.random() * 3) + 1;

  if (result == 1) {
    //return choices.at(0)
    selection.textContent = "Computer selects Rock!";
    return "rock";
    
  } else if (result == 2) {
    // return choices.at(1)
    selection.textContent = "Computer selects Paper!";
    return "paper";
    
  } else if (result == 3) {
    //return choices.at(2)
    selection.textContent = "Computer selects Scissors!";
    return "scissors";
    
  } else {
    console.log("Someone messed up");
  }
  selection.textContent = "something went wrong...";
}

while (computerScore < 5 || humanScore < 5) {


rock.addEventListener("click", () => {
    humanChoice = "rock";
   
    playRound();
    
});
paper.addEventListener("click", ()  => {
    humanChoice = "paper";
   
    playRound();
    console.log(humanChoice);
});
scissors.addEventListener("click", () => {
    humanChoice = "scissors"
    
    playRound();
    console.log(humanChoice);
});

}

function playRound() {
  //let humanChoice = getHumanChoice();


  let computerChoice = getComputerChoice();
  console.log(computerChoice);


  selection.textContent = `Your choice: ${humanChoice}, Computer's choice: ${computerChoice}`;
  results.appendChild(selection);
  results.appendChild(roundResult);
  results.appendChild(scoreUpdate);
  if (humanChoice == computerChoice) {
    roundResult.textContent = `You both picked ${humanChoice}. It's a tie. No points`
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    roundResult.textContent = `${computerChoice} beats ${humanChoice}. You lose!`;
    computerScore = computerScore + 1;
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    roundResult.textContent = `${humanChoice} beats ${computerChoice}. You get a point!`;
    humanScore = humanScore + 1;

    
  } else {
    console.log("Hmmm. something went wrong");
  }
  scoreUpdate.textContent = `You: ${humanScore} | Computer: ${computerScore}`
}



function playGame() {

    humanScore = 0;
    computerScore = 0;
  
    //for (let i = 0; i < 5; i++) {
    // console.log(`ROUND ${i+1}! LET'S GO!!!`)
    playRound();
   
    console.log(`Round ${i+1}- You: ${humanScore} | Computer: ${computerScore}`)
    
  

  if (computerScore > humanScore) {
    resultPara.textContent = computerWinsMessage;
    console.log("Bad luck. You lost the game");
    results.appendChild(resultPara)
  } else if (computerScore < humanScore) {
    resultPara.textContent = humanWinsMessage;
    console.log("Congratulations! You won!");
    results.appendChild(resultPara)
  } else {
    resultPara.textContent = tieMessage;
    console.log("Well would you look at that! It's a tie");
    results.appendChild(resultPara)
  }

}

//DOM Stuff


