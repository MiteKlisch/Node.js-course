const fs = require('fs');
const chalk = require('chalk');



function getNotes() {
    return 'Your Notes...';
}
//Creating of adding command to add data to JSON file 'notes.json'
const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    })

    if(duplicateNotes.length === 0 ){
    notes.push({
        title: title,
        body: body
    });
    console.log(chalk.green.inverse('New note added!'));
    saveNotes(notes);
    } else { 
        console.log(chalk.red.inverse('Note title taken!'));
    }
}


const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}


const loadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } 
    catch (e) {
        return [];
    } 
}


//Creating of adding command to add data to JSON file 'notes.json'
const removeNotes = function(title){
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note){
        
        return note.title !== title;
        
    })

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed'));
        saveNotes(notesToKeep);
    }else{
        console.log(chalk.red.inverse('Not note found'));
    }

    
}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes
}
