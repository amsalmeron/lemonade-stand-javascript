"use strict";

console.log('Running Module A');
require('./moduleB');
var moduleBimports = require('./moduleB');
moduleBimports.internalFunction();
console.log(moduleBimports.internalVar);
console.log("Finished Running Module A");