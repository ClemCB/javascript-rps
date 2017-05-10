const Weapon = require("./Weapon");

function Computer(weapon = new Weapon()) {
  this.weapons = weapon.weapons;
}

Computer.prototype.selectWeapon = function () {
  return this.weapons[Math.floor(Math.random() * this.weapons.length)];
};

module.exports = Computer;
