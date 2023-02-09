import _yargs from 'yargs'
import { hideBin } from 'yargs/helpers';
const yargs = _yargs(hideBin(process.argv));

yargs.version('2.2.0');

yargs.command(
    "add",
    "Add a note",
    {

    },
    function (argv) {
      console.log("=======add=======");
    }
)


yargs.command(
    "remove",
    "Remove a note",
    {

    },
    function (argv) {
      console.log("=======remove=======");
    }
)

yargs.command(
    "list",
    "showing list",
    {

    },
    function (argv) {
      console.log("=======list=======");
    }
)

yargs.command(
    "read",
    "Read a note",
    {

    },
    function (argv) {
      console.log("=======read=======");
    }
)

console.log(yargs.argv);


// const fs  = require('fs');
// fs.writeFileSync('notes.txt', "I am hasrh sharma");
// fs.appendFileSync('notes.txt', "Haha I won")

// const getNotes = require('./notes.js');
// const data = getNotes();

// import chalk from 'chalk';
// const msg = chalk.bold.yellow.inverse.red('Success!');
