console.log("Running Module B");

export const moduleBVariable = 'Names Variable from Module B'

export const moduleBVariable2 = 50

export function moduleBFunction(){
    console.log("Running from Module B");
}

export default {
    a: moduleBVariable,
    b: moduleBVariable2,
    c: moduleBFunction
}

console.log("Finish running Module B");