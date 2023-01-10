let lemonJuice = 3
let water = 3
let sugar = 1.5
let iceCubes = 10

const lemonade = {
    lemonJuice,
    water,
    sugar,
    iceCubes,
    calculatePrice() {
        return (
            this.lemonJuice * .3 +
            this.water * .01 +
            this.sugar * .25 +
            this.iceCubes * .05 +
            .75)
    }
}

console.log(lemonade.calculatePrice())

lemonade.water = 6
lemonade.lemonJuice = 4

console.log(lemonade.calculatePrice())