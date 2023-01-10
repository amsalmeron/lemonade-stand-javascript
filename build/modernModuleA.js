"use strict";

var _modernModuleB = _interopRequireDefault(require("./modernModuleB.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
console.log("Running Module A");
console.log(_modernModuleB["default"].c());
console.log("Finished Running Module A");