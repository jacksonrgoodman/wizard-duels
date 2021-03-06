
let playerPoints = 0;
let computerPoints = 0;

const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
};

export const startDuel = () => {
    const options = document.querySelectorAll(".options button");
    const playerSpell = document.querySelector(".player-hand");
    const computerSpell = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");
    hands.forEach(hand => {
        hand.addEventListener("animationend", function(){
            this.style.animation = "";
        })
    })
    const computerOptions = ["rock", "paper", "scissors"];
    options.forEach( option => {
        option.addEventListener("click", function(){
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            
            setTimeout(()=> {
                compareSpells(this.textContent, computerChoice);
                playerSpell.src = `assets/${this.textContent}.png`;
                computerSpell.src = `assets/${computerChoice}.png`;
            }, 2000);
            playerSpell.style.animation = "shakePlayer 2s ease";
            computerSpell.style.animation = "shakeComputer 2s ease";
        });
    });
};
const compareSpells = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
        winner.textContent = "Tie!";
        return;
    }
    if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            winner.textContent = "Player Wins";
            playerPoints++;
            updateScore();
            return;
        }else {
            winner.textContent = "Computer Wins";
            computerPoints++;;
            updateScore();
            return;
        };
    };
    if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            winner.textContent = "Player Wins";
            playerPoints++;
            updateScore();
            return;
        }else {
            winner.textContent = "Computer Wins";
            computerPoints++;
            updateScore();
            return;
        };
    };
    if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            winner.textContent = "Player Wins";
            playerPoints++;
            updateScore();
            return;
        }else {
            winner.textContent = "Computer Wins";
            computerPoints++;
            updateScore();
            return;
        };
    };
};
