//CommonJS, every file in node is a module (by default)
//modules - Encapsulated code (only share minimum)

const names = require('./4-names')
// or const {john} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')


// console.log(data);
// console.log(names);


// sayHi('alfredo')
// sayHi(names.kalu)
// sayHi(names.orie)
