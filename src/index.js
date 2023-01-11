// const order = {
//     total: 5.00,
//     lemonades: [{
//             lemonJuice: 4,
//             water: 2,
//             sugar: 3,
//             iceCubes: 7,
//             price: 5
//         },
//         {
//             lemonJuice: 1,
//             water: 2,
//             sugar: 5,
//             iceCubes: 7,
//             price: 10
//         },
//         {
//             lemonJuice: 6,
//             water: 2,
//             sugar: 3,
//             iceCubes: 7,
//             price: 1
//         },
//         {
//             lemonJuice: 4,
//             water: 3,
//             sugar: 5,
//             iceCubes: 2,
//             price: 5
//         }
//     ],
//     lemonadeStand: {
//         name: "CookSys Lemonade Stand"
//     },
//     customer: {
//         name: 'Antonio',
//         phoneNumber: '77777777'
//     }
// }

// import Vorpal from 'vorpal'
// const vorpal = Vorpal()
const vorpal = require('vorpal')()

vorpal
    .command('hello', 'Prints hellow to the console')
    .action(function(args, callback) {
        this.log('Hello World')
        callback()
    })

vorpal.show()