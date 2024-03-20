import inquirer from "inquirer";
import { db } from "../schema/schemaCv.js";
import Chalk from "chalk";
const addYourCv = [
  {
    type: "input",
    message: "enter your id cv ? ",
    name: "id",
  },
];
export default async function searchCv() {
  console.log(Chalk.blue.bold("welcome"));
  const answers = await inquirer.prompt(addYourCv);
  db.get(
    "select * from cv where id = ?",
    [answers.id],
    (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.table(data);
      }
    }
  );
}
