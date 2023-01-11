// import Vorpal from 'vorpal'
// const vorpal = Vorpal()
const vorpal = require('vorpal')()

import {
  calculateLemonadePrice,
  calcualteOrderTotal,
  writeFileSync,
  readAllFiles
} from './lib'

vorpal
  .command('hello <name>', 'Prints hellow to the console')
  .action(function (args, callback) {
    this.log(`Hello ${args.name}`)
    callback()
  })
vorpal
  .command(
    'createOrder <name> <phoneNumber>',
    'Create order and save as JSON file'
  )
  .action(function (args, callback) {
    const order = {
      total: 0,
      lemonades: [],
      customer: {
        name: args.name,
        phoneNumber: args.phoneNumber
      },
      lemonadeStand: {
        name: 'CookSys Lemonade Stand'
      }
    }

    // Prompt user for how many lemonades they want
    this.prompt(
      {
        type: 'number',
        name: 'numLemonades',
        default: 1,
        message: 'How many lemonades would you like to order?'
      },
      ({ numLemonades }) => {
        const questions = []
        for (let i = 1; i <= Number.parseInt(numLemonades); i++) {
          questions.push({
            type: 'number',
            name: 'lemonJuice' + i,
            message: `How much lemon juice do you want in lemonade ${i}?`
          })
          questions.push({
            type: 'number',
            name: 'water' + i,
            message: `How many cups of water do you want in lemonade ${i}?`
          })
          questions.push({
            type: 'number',
            name: 'sugar' + i,
            message: `How many cups of sugar you want in lemonade ${i}?`
          })
          questions.push({
            type: 'number',
            name: 'iceCubes' + i,
            message: `How many ice cubes you want in lemonade ${i}?`
          })
        }
        this.prompt(questions, response => {
          // Create lemoande object for each lemonade
          for (let i = 1; i <= numLemonades; i++) {
            order.lemonades.push({
              lemonJuice: Number.parseInt(response['lemonJuice' + i]),
              water: Number.parseInt(response['water' + i]),
              sugar: Number.parseInt(response['sugar' + i]),
              iceCubes: Number.parseInt(response['iceCubes' + i])
            })
          }

          // set price for each lemoande in order
          for (let lemonade of order.lemonades) {
            lemonade.price = calculateLemonadePrice(lemonade)
          }

          // set total order price
          order.total = calcualteOrderTotal(order)

          writeFileSync(
            order.lemonadeStand.name + '/' + order.customer.name + '.json',
            order
          )
          callback()
        })
      }
    )
  })

vorpal
  .command('getOrders <lemonadeStand>', 'Get all orders for the given lemonade stand')
  .action(function({ lemonadeStand }, callback) {
    const orders = readAllFiles(lemonadeStand)
    for (let [index,order] of orders.entries()) {
      this.log(`Order ${index + 1}:`)
      this.log(`Total price: ${order.total}`)
      this.log('Lemonades:')
      this.log(order.lemonades)
      this.log('Customer:')
      this.log(order.customer)
    }
    callback()
  })

vorpal.delimiter('lemonade-stand$').show()
