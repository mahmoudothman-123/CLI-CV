import addCV from "./commands/addCV.js";
import openDb from './schema/schemaCv.js'
import { Command } from "commander";
const program = new Command();


(async()=>{
await openDb;

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

})(); 