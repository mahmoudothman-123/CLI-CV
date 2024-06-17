# CLI-CV

### Description

the project is CLI (Command line Interface) tool you can make CV , delete CV , save CV , read CV and list all cv

### Prerequisites

#### list all the dependencies :

1. commander: This helps us to build the CLI tool.
2. inquirer: This lets us ask the user for input.
3. sqlite3:database files are commonly used as containers to transfer rich content between systems
4. chalk: This makes messages in the terminal colorful and easy to read.
5. ora: This makes the terminal show nice spinning animations.

#### list what to install

nodejs v21.2.0

#### The usage  
Usage: CV [options] [command]

CLI can make CV ,delete,save,read,list and update

Options:
  -V, --version    output the version number
  -h, --help       display help for command

Commands:
  add              Create a new CV.
  list             list all cv
  search           search for cv by id
  delete           delete cv by id
  update-fullName  Update your fullName
  help [command]   display help for command
