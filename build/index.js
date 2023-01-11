"use strict";

var _lib = require("./lib");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// import Vorpal from 'vorpal'
// const vorpal = Vorpal()
var vorpal = require('vorpal')();
vorpal.command('hello <name>', 'Prints hellow to the console').action(function (args, callback) {
  this.log("Hello ".concat(args.name));
  callback();
});
vorpal.command('createOrder <name> <phoneNumber>', 'Create order and save as JSON file').action(function (args, callback) {
  var _this = this;
  var order = {
    total: 0,
    lemonades: [],
    customer: {
      name: args.name,
      phoneNumber: args.phoneNumber
    },
    lemonadeStand: {
      name: 'CookSys Lemonade Stand'
    }
  };

  // Prompt user for how many lemonades they want
  this.prompt({
    type: 'number',
    name: 'numLemonades',
    "default": 1,
    message: 'How many lemonades would you like to order?'
  }, function (_ref) {
    var numLemonades = _ref.numLemonades;
    var questions = [];
    for (var i = 1; i <= Number.parseInt(numLemonades); i++) {
      questions.push({
        type: 'number',
        name: 'lemonJuice' + i,
        message: "How much lemon juice do you want in lemonade ".concat(i, "?")
      });
      questions.push({
        type: 'number',
        name: 'water' + i,
        message: "How many cups of water do you want in lemonade ".concat(i, "?")
      });
      questions.push({
        type: 'number',
        name: 'sugar' + i,
        message: "How many cups of sugar you want in lemonade ".concat(i, "?")
      });
      questions.push({
        type: 'number',
        name: 'iceCubes' + i,
        message: "How many ice cubes you want in lemonade ".concat(i, "?")
      });
    }
    _this.prompt(questions, function (response) {
      // Create lemoande object for each lemonade
      for (var _i = 1; _i <= numLemonades; _i++) {
        order.lemonades.push({
          lemonJuice: Number.parseInt(response['lemonJuice' + _i]),
          water: Number.parseInt(response['water' + _i]),
          sugar: Number.parseInt(response['sugar' + _i]),
          iceCubes: Number.parseInt(response['iceCubes' + _i])
        });
      }

      // set price for each lemoande in order
      var _iterator = _createForOfIteratorHelper(order.lemonades),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var lemonade = _step.value;
          lemonade.price = (0, _lib.calculateLemonadePrice)(lemonade);
        }

        // set total order price
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      order.total = (0, _lib.calcualteOrderTotal)(order);
      (0, _lib.writeFileSync)(order.lemonadeStand.name + '/' + order.customer.name + '.json', order);
      callback();
    });
  });
});
vorpal.delimiter('lemonade-stand$').show();