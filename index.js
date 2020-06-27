const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the filename of your README?",
        name: "fileName"
    },
    {
        type: "input",
        message: "What is the title of your README.md?",
        name: "title"
    },
    {
        type: "input",
        message: "Enter the text for the README description.",
        name: "description"
    },
    {
        type: "input",
        message: "Enter the instructions for the README installation.",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter the instructions for the project's usage.",
        name: "usage"
    },
    {
        type: "list",
        message: "Select a license for the project.",
        name: "license",
        choices: ["MIT", "Unlicense", "BSL-1.0", "Apache-2.0", "MPL-2.0", "LGPL-3.0-or-later", "GPL-3.0-or-later", "AGPL-3.0-or-later"]
    },
    {
        type: "input",
        message: "Enter the instructions for contributing to project.",
        name: "contributing"
    },
    {
        type: "input",
        message: "Enter instructions for running tests on this project.",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);

    let markdown = generateMarkdown(data);
    fs.writeFile(fileName, markdown, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Sucess! Your README has been generated in " + fileName);
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => writeToFile(data.fileName + ".md", data));
}

// function call to initialize program
init();
