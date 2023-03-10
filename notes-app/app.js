import _yargs from 'yargs'
import { hideBin } from 'yargs/helpers';
import {addNotes, removeNote, listNotes, readNote} from './notes.js';
// const notes = require('./notes.js')
const yargs = _yargs(hideBin(process.argv));


yargs.command(
    "add",
    "Add a note",
    {
      title:{
        describe:"This is title",
        demandOption:true,
        type:"string"
      },
      body:{
        describe:"This is Body",
        demandOption:true,
        type:"string"
      }
    },
    function (argv) {
      console.log("=======add=======", argv.title, argv.body );
      addNotes(argv.title, argv.body)
    }
)


yargs.command(
    "remove",
    "Remove a note",
    {
      title:{
        describe:"This is title",
        demandOption:true,
        type:"string"
      }
    },
    function (argv) {
      console.log("=======remove=======");
      removeNote(argv.title)
    }
)

yargs.command(
    "list",
    "showing list",
    {

    },
    function (argv) {
      console.log("=======list=======");
      listNotes()
    }
)

yargs.command(
    "read",
    "Read a note",
    {
      title:{
        describe:"This is title",
        demandOption:true,
        type:"string"
      }
    },
    function (argv) {
      console.log("=======read=======");
      readNote(argv.title)
    }
)

// console.log(yargs.argv); //or use yargs.parse()
yargs.parse()

// const fs  = require('fs');
// fs.writeFileSync('notes.txt', "I am hasrh sharma");
// fs.appendFileSync('notes.txt', "Haha I won")

// const getNotes = require('./notes.js');
// const data = getNotes();

// import chalk from 'chalk';
// const msg = chalk.bold.yellow.inverse.red('Success!');
