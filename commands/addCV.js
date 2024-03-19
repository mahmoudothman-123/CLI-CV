import inquirer from "inquirer";
import { db } from "../schema/schemaCv.js";
import Chalk from "chalk";

const addYourCv = [
  {
    type: "input",
    message: "what`s your name ?",
    name: "fullName",
  },
  {
    type: "number",
    message: "how age are you ?",
    name: "age",
  },
  {
    type: "input",
    message: "what is your current address ?",
    name: "currentAddress",
  },
  {
    type: "input",
    message: "what is your Email Address ?",
    name: "email",
  },
  {
    type: "number",
    message: "what is your Phone Number ?",
    name: "Phone",
  },
  {
    type: "input",
    message: "what is your current job ?",
    name: "job",
  },
];

export default async function addQuestion() {
  console.log(Chalk.blue.bold("welcome"));
  const answers = await inquirer.prompt(addYourCv);
  const id = +1;
  const fullName = answers.fullName;
  const age = parseInt(answers.age);
  const currentAddress = answers.currentAddress;
  const email = answers.email;
  const Phone = answers.Phone;
  const job = answers.job;
  console.log(Chalk.green.bold("Thank you for add us your CV"));

  db.run(
    "INSERT INTO cv (id,fullName,age,currentAddress,email,Phone,job) VALUES(?,?,?,?,?,?,?)",
    [id, fullName, age, currentAddress, email, Phone, job],
    function (err) {
      if (err) {
        console.log(err.message);
      }
      console.log(
        Chalk.yellow.bold(
          `Your cv details have been saved with ID ${id}`
        )
      );
    }
  );
}
