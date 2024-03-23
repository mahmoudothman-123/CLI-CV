import addQuestion from "./commands/addCV.js";
import searchCv from "./commands/searchCV.js";
import updateFullName from "./commands/updateCV.js";
import { db } from "./schema/schemaCv.js";
import { Command } from "commander";
const program = new Command();


(async()=>{
  await db;

  // Defining a command called 'add'
  program
    .name("CV")
    .description("CLI can make CV ,delete,save,read")
    .version("0.0.1");

  // Defining a command called 'add'
  program
    .command("add")
    .description("Create a new CV.")
    .action(addQuestion);
  // Defining a command called 'search Cv By Id'
  program
    .command("search")
    .description("search for cv by id")
    .action(searchCv);
// update your fullName
     program
       .command("update-fullName")
       .description("Update your fullName")
       .action(updateFullName);

  program.parse();
})(); 