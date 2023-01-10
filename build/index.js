"use strict";

var lemonJuice = 3;
var water = 3;
var sugar = 1.5;
var iceCubes = 10;
var lemonade = {
  lemonJuice: lemonJuice,
  water: water,
  sugar: sugar,
  iceCubes: iceCubes,
  calculatePrice: function calculatePrice() {
    return this.lemonJuice * .3 + this.water * .01 + this.sugar * .25 + this.iceCubes * .05 + .75;
  }
};
console.log(lemonade.calculatePrice());
lemonade.water = 6;
lemonade.lemonJuice = 4;
console.log(lemonade.calculatePrice());