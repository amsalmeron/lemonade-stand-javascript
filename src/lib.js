 export const calculateLemonadePrice = lemonade => {
    let result = 0.75
    for (let key in lemonade) {
        switch (key) {
            case 'lemonJuice':
                result += lemonade[key] * .3
                break
            case 'water':
                result += lemonade[key] * .01
                break
            case 'sugar':
                result += lemonade[key] * .2
                break
            case 'iceCubes':
                result += lemonade[key] * .05
                break
            default:
                break;
        }
    }
    return result
 }

 export const calcualteOrderTotal = ({lemoandes}) => {
    let result = 0
    for (let lemonade of lemoandes) {
        result += lemonade.price
    }
    return result
 }