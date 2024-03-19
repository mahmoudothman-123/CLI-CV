import addQuestion from "./commands/addCV.js";
import { db } from "./schema/schemaCv.js";
import { Command } from "commander";
const program = new Command();


(async()=>{
await db;

// Defining a command called 'add' 
program
.name('CV')
.description('CLI can make CV ,delete,save,read')
.version('0.0.1')

// Defining a command called 'add'
program
  .command("add")
  .description("Create a new CV.")
  .action(addQuestion);


program.parse();

})(); 