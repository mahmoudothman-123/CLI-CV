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
    name: "Current address",
  },
  {
    type: "input",
    message: "what is your Email Address ?",
    name: "Email Address",
  },
  {
    type: "number",
    message: "what is your Phone Number ?",
    name: "Phone Number",
  },
  {
    type: "input",
    message: "what is your current job ?",
    name: "Current Job",
  },
];

export default async function addCV() {
  const answers = await inquirer.prompt(addYourCv);
  console.table(answers);
  return answers;
}
