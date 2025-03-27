console.log("Hello world!")

function getComputerChoice() {

    //let choices = ["rock", "paper", "scissors"]
    let result = Math.floor(Math.random()*3)+1;

    if (result == 1) {
        //return choices.at(0)
        return "rock"
        
    } else 
    if (result == 2) {
       // return choices.at(1)
        return "paper"
    } else
    if (result == 3 ) {
        //return choices.at(2)
       return "scissors"
    } else
    {console.log("Someone messed up")}

}

function getHumanChoice() {
    //Ask for a number between one and 3

    let textEntry = prompt("Enter 'rock', 'paper' or 'scissors'")

    //Check what the number is

   
/*if (chosenNumber == 1) {
    return "rock"
} else if 
     (chosenNumber == 2) {
        return "paper"
    } else if 
         (chosenNumber == 3) {
            return "scissors"
        } else {
            console.log("looks like someone doesn't know how to count very well, huh?")
    } 
            */
           
           console.log(textEntry)
          // return textEntry.toLowerCase();
          return textEntry
}

//console.log('After getHumanChoice function: '+getHumanChoice())

let humanScore = 0
let computerScore = 0

function playRound(humanSelection , computerSelection ) {

    let humanChoice = getHumanChoice()
   
    let computerChoice = getComputerChoice();
   
   


    //function humanWins() {
      //  console.log (`${humanChoice} beats ${computerChoice}. You get a point!`)
       // humanScore = humanScore++
  //  }

   // function computerWins() {
   //     console.log(`${computerChoice} beats ${humanChoice}. You lose!`)
   //     computerScore = computerScore++
   // }

   console.log(`Your choice: ${humanChoice}, Computer's choice: ${computerChoice}`)

if (humanChoice == computerChoice) {
    console.log("It's a tie. No points")
} else if ((humanChoice == "rock" && computerChoice =="paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
    console.log(`${computerChoice} beats ${humanChoice}. You lose!`)
        computerScore = computerScore+1
       
} else if ((humanChoice == "rock" && computerChoice == "scissors")|| (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
    console.log (`${humanChoice} beats ${computerChoice}. You get a point!`)
    humanScore = humanScore+1
    
    return humanScore
} else {console.log('Hmmm. something went wrong')}


}

const humanInput = getHumanChoice()  
const computerInput = getComputerChoice()

function playGame() {
   //for (let i = 0; i < 5; i++) {
   // console.log(`ROUND ${i+1}! LET'S GO!!!`)
    playRound(humanInput, computerInput);
   // console.log(`Round ${i+1}- You: ${humanScore} | Computer: ${computerScore}`)
  // }

   if (computerScore > humanScore) {
    console.log("Bad luck. You lost the game")
   } else 
   if (computerScore < humanScore) {
    console.log("Congratulations! You won!")
   } else {
    console.log("Well would you look at that! It's a tie")
   }
computerScore = 0
humanScore = 0



}

//DOM Stuff

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");

const humanWinsMessage ='Congratulations! You won!';
const computerWinsMessage = 'Bad luck. You lose';
const tieMessage = "Ooooh. It's a tie...";

switch(resultMessage) {
    case (computerScore > humanScore):
        resultPara.textContent = computerWinsMessage;
        break;
    
    case (computerScore <humanScore):
        resultPara.textContent = humanWinsMessage
        
}

const resultPara = document.createElement("p")


rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

