// const fs = require('fs');
import fs from 'fs';

const getNotes = function() {
    return "getting notes ..."
}

 const addNotes = function(title, body) {
    const notes = loadNotes();
    console.log("==========notes=====", notes, title, body)
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
    addNotes 
};