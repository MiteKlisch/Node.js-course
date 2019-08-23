// const FirstName = require('./utils.js');

// console.log(FirstName);

const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

const massage = getNotes;
console.log(massage);

//Example of using 'Validator'
console.log(validator.isURL('https://www.youtube.com/?hl=uk&gl=UA'));
//Example of using 'Chalk'
console.log(chalk.green.inverse.bold('Success'));


