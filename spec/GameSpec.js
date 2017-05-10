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

  it("returns a win if the player wins", () => {
    game.computerChoice = "scissors";
    game.playerChoice = "rock";
    expect(game.result()).to.equal("Player Wins!");
  });

  it("returns a win if the player wins", () => {
    game.computerChoice = "paper";
    game.playerChoice = "rock";
    expect(game.result()).to.equal("Computer Wins!");
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

})
