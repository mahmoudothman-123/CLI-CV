import inquirer from "inquirer";
import { db } from "../schema/schemaCv.js";
import Chalk from "chalk";

const deleteCV = [
  {
    type: "input",
    message: "enter id cv to delete ?",
    name: "id",
  },
];

export default async function deleteCvById() {
  console.log(Chalk.blue.bold("welcome to delete cv by id"));
  const answers = await inquirer.prompt(deleteCV);
  const id = parseInt(answers.id);
  db.run(`DELETE FROM cv WHERE id=?`, id, function (err) {
    if (err) {
      console.log(err.message);
    }
    console.log(Chalk.yellow.bold(`thank you for delete cv id: ${id}`));
  });
}
