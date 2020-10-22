const inquirer = require("inquirer");

const questions = [

    inquirer.prompt(
        {
            type: "input",
            message: "What is what?",
            name:"test",
        }
    )

]