const validator = require('validator');
const getNotes = require('./notes.js');

const data = getNotes();
console.log("======", validator.isEmail("hasrs@sasacom"))



// const fs  = require('fs');
// fs.writeFileSync('notes.txt', "I am hasrh sharma");
// fs.appendFileSync('notes.txt', "Haha I won")