"use strict";

const assert = require("assert"),
      expect = require("chai").expect,
      Weapon = require('../models/Weapon.js');

describe("Weapon", () => {
  it("holds rock, paper and scissors", () => {
    var weapon = new Weapon()
    expect(weapon.weapons).to.eql([ 'rock', 'paper', 'scissors', 'lizard', 'spock' ]);
  });
})
