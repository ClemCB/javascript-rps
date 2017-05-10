const Computer = require('./Computer.js');


function Game(computer = new Computer()) {
    this.rules = { rock: "scissors",
                   paper: "rock",
                   scissors: "paper" };
    this.computer = computer;
    this.computerScore = 0;
    this.playerScore = 0;
}

Game.prototype.play = function (playerChoice) {
  this.playerChoice = playerChoice;
  this.computerChoice = this.computer.selectWeapon();
};

Game.prototype.result = function () {
  if (this.playerChoice == this.computerChoice) {
      return "Draw!"
  } else if (this.rules[this.playerChoice] == [this.computerChoice]) {
      this.playerScore += 1;
      return "Player Wins!";
    } else {
      this.computerScore += 1;
      return "Computer Wins!";
  }
};

module.exports = Game;
