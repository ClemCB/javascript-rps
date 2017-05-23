"use strict";

const assert = require("assert"),
      expect = require("chai").expect,
      Computer = require('../models/Computer.js'),
      Game = require('../models/Game.js');

var game;

describe("Game", () => {

  beforeEach(function() {
    game = new Game();
   });

  it("holds rules", () => {
    expect(game.rules).to.have.property('paper')
    expect(game.rules).to.have.property('rock')
    expect(game.rules).to.have.property('scissors')
    expect(game.rules).to.have.property('lizard')
    expect(game.rules).to.have.property('spock')
  });

  it("is aware of its players", () => {
    expect(game.computer).to.be.an.instanceof(Computer);
  });

  it("has a play function which accepts the player choice of weapon", () => {
    game.play('rock')
    expect(game.playerChoice).to.exist;
    expect(game.playerChoice).to.equal('rock');
  });

  it("has a play function which asks the computer to make a choice of weapon", () => {
    game.play('scissors')
    expect(game.computerChoice).to.exist;
  });

  it("returns draw if both players chose same weapon", () => {
    game.computerChoice = "rock";
    game.playerChoice = "rock";
    expect(game.result()).to.equal("Draw!");
  });

  describe("round wins", () => {
    it("returns a win if the player wins", () => {
      game.computerChoice = "scissors";
      game.playerChoice = "rock";
      expect(game.result()).to.equal("Player!");
    });

    it("returns a win if the computer wins", () => {
      game.computerChoice = "paper";
      game.playerChoice = "rock";
      expect(game.result()).to.equal("Computer!");
    });

    it("returns a win if the computer wins", () => {
      game.computerChoice = "lizard";
      game.playerChoice = "rock";
      expect(game.result()).to.equal("Player!");
    });

    it("keeps track of the computer score", () => {
      game.computerChoice = "rock";
      game.playerChoice = "scissors";
      game.result()
      expect(game.computerScore).to.eq(1);
    });

    it("keeps track of the player score", () => {
      game.computerChoice = "scissors";
      game.playerChoice = "rock";
      game.result()
      expect(game.playerScore).to.eq(1);
    });
  });

  describe("overall win", () => {

    it("no winner yet scenario: game continues until the computer or player has won more than two games", () => {
      game.playerScore = 1
      game.computerScore = 1
      expect(game.isThereAWinner()).to.eq(undefined);
    });

    it("player wins scenario: game continues until the computer or player has won more than two games", () => {
      game.playerScore = 2
      game.computerScore = 1
      expect(game.isThereAWinner()).to.eq("Player Wins!");
    });

    it("computer wins scenario: game continues until the computer or player has won more than two games", () => {
      game.playerScore = 0
      game.computerScore = 3
      expect(game.isThereAWinner()).to.eq("Computer Wins!");
    });
  });

  describe("restart game", () => {

    it("player can start the game again for a rematch", () => {
      game.playerScore = 2
      game.computerScore = 1
      game.restartGame()
      expect(game.playerScore).to.eq(0);
      expect(game.computerScore).to.eq(0);
    });
  });

})
