import inquirer from "inquirer";
import { db } from "../schema/schemaCv.js";
import Chalk from "chalk";

const updateFullNameInput = [
  {
    type: "input",
    message: "enter your new fullName ?",
    name: "fullName",
  },
  {
    type: "input",
    message: "enter your old id ?",
    name: "id",
  },
];

export default async function updateFullName() {
  console.log(Chalk.blue.bold("welcome to update you fullName "));
  const answers = await inquirer.prompt(updateFullNameInput);
  const newFullName = answers.fullName;
  const oldId = parseInt(answers.id);
  db.run(
    "UPDATE cv SET fullName = ? WHERE id = ?",
    [newFullName,oldId],
    function (err) {
      if (err) {
        console.log(err.message);
      }
      console.log(
        Chalk.yellow.bold(`thank you for update your fullName`)
      );
    }
  );
}
