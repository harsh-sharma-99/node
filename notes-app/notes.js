// const fs = require('fs');
import fs from 'fs';
import chalk from 'chalk';


const getNotes = function() {
    return "getting notes ..."
}

 const addNotes = function(title, body) {

    const notes = loadNotes();
    const duplicateNotes = notes?.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push({ 
            title: title, 
            body: body
        });
        saveNote(notes);
        console.log("===notes added======")
    }else{
        console.log("===duplicate======")
    }
}

const removeNote = (title) => {
    console.log("=========remove======", title);
    const notes = loadNotes();
    let updatedData = notes.filter(note => note.title != title);

    if(updatedData.length === notes.length ) {
        console.log(chalk.white.bgRed.bold('No Note Found'));
    }else{
        saveNote(updatedData);
        console.log(chalk.white.bgGreen.bold('Note Removed'));
        
    }
}

const saveNote = function(notes){
    let dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = function() {
    try{
        const bufferData = fs.readFileSync('notes.json');
        const stringData = bufferData.toString();
        const mainData = JSON.parse(stringData);
        return mainData;
    }catch(e){
        return [];
    }
}

export  {
    getNotes ,
    addNotes ,
    removeNote
};