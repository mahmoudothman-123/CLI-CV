import inquirer from "inquirer";

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

export default async function addCV() {
  const answers = await inquirer.prompt(addYourCv);
  console.table(answers);
  return answers;
}
