const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSORS";
        break;
    }
}
function checkWinner(){
    if(player == computer){
      return "Draw!Try Again";
    }
    else if(computer == "ROCK"){
      return (player == "PAPER") ? "Congratulation!You win." : "You Lose! Better luck next time."
    }
    else if(computer == "PAPER"){
      return (player == "SCISSORS") ? "Congratulation!You win." : "You Lose! Better luck next time."
    }
    else if(computer == "SCISSORS"){
      return (player == "ROCK") ? "Congratulation!You win." : "You Lose! Better luck next time."
    }
}