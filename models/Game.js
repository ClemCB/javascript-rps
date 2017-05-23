const Computer = require('./Computer.js');


function Game(computer = new Computer()) {
    this.rules = { rock: "scissors",
                   paper: "rock",
                   scissors: "paper",
                   lizard: "hello",
                   spock: "hello" };
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
      return "Player!";
    } else {
      this.computerScore += 1;
      return "Computer!";
  }
};

Game.prototype.isThereAWinner = function() {
  if (this.computerScore + this.playerScore >= 3) {
    return this.computerScore > this.playerScore ? "Computer Wins!" : "Player Wins!"
  }
}

Game.prototype.restartGame = function() {
  this.computerScore = 0
  this.playerScore = 0
}

module.exports = Game;
