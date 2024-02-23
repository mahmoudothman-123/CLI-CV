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

// programAddCv
//   .name("job-form")
//   .description("Save Data for information person and search")
//   .version("0.0.1");

// programAddCv
//   .command("add-cv")
//   .description("Simple Job Application Form")
//   .action(() => {
//     inquirer.prompt(addYourCv).then((answers) => {
//       console.log(answers);
//     });
//   });

// programAddCv.parse();

// export default programAddCv;

export default async function addCV() {
  const answers = await inquirer.prompt(addYourCv);
  return answers;
}
