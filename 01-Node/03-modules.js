// MODULES

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./04-names');
const greeting = require('./05-utils');
const data = require('./06-alternative-flavor');
require('./07-mind-grenade'); // when you require, you invoke the function

// console.log(data)

greeting('susan');
greeting(names.peter);
greeting(names.john);