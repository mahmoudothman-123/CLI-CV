import addCV from "./commands/addCV.js";

import { Command } from "commander";
const program = new Command();




// Defining a command called 'add' 
program
.name('CV')
.description('CLI can make CV ,delete,save,read')
.version('0.0.1')

// Defining a command called 'add'
program
.command('add')
.description('Create a new CV.')
.action(addCV)


program.parse();