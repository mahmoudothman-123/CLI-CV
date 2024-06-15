import addQuestion from "./commands/addCV.js";
import searchCv from "./commands/searchCV.js";
import updateFullName from "./commands/updateCV.js";
import listCv from "./commands/listCv.js";
import deleteCvById from "./commands/deleteCv.js";
import { db } from "./schema/schemaCv.js";
import { Command } from "commander";
const program = new Command();

(async () => {
  await db;

  // Defining a command called 'add'
  program
    .name("CV")
    .description("CLI can make CV ,delete,save,read")
    .version("0.0.1");

  // Defining a command called 'add'
  program.command("add").description("Create a new CV.").action(addQuestion);
  // list all cv
  program.command("list").description("list all cv").action(listCv);

  // Defining a command called 'search Cv By Id'
  program.command("search").description("search for cv by id").action(searchCv);
  // delete cv by id
  program.command("delete").description("delete cv by id").action(deleteCvById);
  // update your fullName
  program
    .command("update-fullName")
    .description("Update your fullName")
    .action(updateFullName);

  program.parse();
})();
