const Computer = require('./Computer.js');


function Game(computer = new Computer()) {
    this.rules = { rock: "scissors",
                   paper: "rock",
                   scissors: "paper" };
    this.computer = computer;
}

Game.prototype.play = function (playerChoice) {
  this.playerChoice = playerChoice;
  this.computerChoice = this.computer.selectWeapon();
};

Game.prototype.result = function () {
  if (this.playerChoice == this.computerChoice) {
    return "Draw!"
  } else {
    return this.rules[this.playerChoice] == [this.computerChoice] ? "Player Wins!" : "Computer Wins!"
  }
};

module.exports = Game;
