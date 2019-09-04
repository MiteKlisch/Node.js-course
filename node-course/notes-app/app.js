// const FirstName = require('./utils.js');

// console.log(FirstName);

//const validator = require('validator');

const getNotes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

//Customize yargs version
yargs.version('1.1.0')


//Create add command

yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true, 
            type: 'string'
         }
    },
    
    handler: function(argv){
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
        
    }
})

//Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note');
    }
})


// add, remove, read, list

yargs.parse();
