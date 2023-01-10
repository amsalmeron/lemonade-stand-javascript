console.log('Running Module A');

require('./moduleB')

const moduleBimports = require('./moduleB')

moduleBimports.internalFunction()
console.log(moduleBimports.internalVar)

console.log("Finished Running Module A");