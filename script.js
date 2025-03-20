console.log("Hello world!")

function getComputerChoice() {

    //let choices = ["rock", "paper", "scissors"]
    let result = Math.floor(Math.random()*3)+1;
console.log(result)
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

    let chosenNumber = prompt("Choose a number between 1 and 3")

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
           return chosenNumber;
}

let humanScore = 0
let computerScore = 0

function playRound() {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let humanChoiceLowerCase = humanChoice.toLowerCase

}
  ();