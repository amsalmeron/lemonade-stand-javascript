"use strict";

setTimeout(function () {
  console.log("I waited 5 seconds.");
}, 5000);
console.log("Did not wait, too eager!");
setTimeout(function () {
  console.log("I waited 2 seconds.");
}, 2000);