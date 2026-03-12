const userChoicePara = document.getElementById("user-choice-para");
const computerChoicePara = document.getElementById("compute-choice-par");
const Final_Result = document.getElementById("FinalResult");

const choices = ["rock","paper","scissors"];

function playGame(userChoice){

    let random = Math.floor(Math.random() * 3);
    let computerChoice = choices[random];

    console.log("User Choice is", userChoice);
    console.log("Computer Choice is", computerChoice);

    // updating choices
    userChoicePara.innerHTML = "Your Choice: " + userChoice;
    computerChoicePara.innerHTML = "Computer's Choice: " + computerChoice;

    let result = "";

    if (userChoice === computerChoice){
        result = "Draw";
    }

    else if(
        userChoice === "rock" && computerChoice === "scissors" ||
        userChoice === "paper" && computerChoice === "rock" ||
        userChoice === "scissors" && computerChoice === "paper"
    ){
        result = "You Win 🎉";
    }

    else{
        result = "Computer Wins 🤖";
    }

    Final_Result.innerHTML = "Result: " + result;
}

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));