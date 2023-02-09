const getNotes = require('./notes.js');

const data = getNotes();
console.log("======", data)



// const fs  = require('fs');
// fs.writeFileSync('notes.txt', "I am hasrh sharma");
// fs.appendFileSync('notes.txt', "Haha I won")