"use strict";

const assert = require("assert"),
      expect = require("chai").expect,
      Computer = require('../models/Computer.js'),
      computer = new Computer();

describe("Computer", () => {
  it("selects a weapon to play", () => {
    expect(computer.selectWeapon()).to.be.a('string');
  });
})
