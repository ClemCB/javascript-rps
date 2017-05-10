"use strict";

const assert = require("assert"),
      expect = require("chai").expect,
      Game = require('../models/Game.js');

describe("Game", () => {
  it("holds rules", () => {
    var game = new Game()
    expect(game.rules).to.have.property('paper')
  });
})
