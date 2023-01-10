console.log('Running Module B')
const internalVar = 'Hey from Mod B'

function internalFunction(){
    console.log('Running inside internalFunction Mod B');
}

module.exports = {
    internalFunction: internalFunction,
    internalVar: internalVar
}
console.log("Finsihed running Module B");