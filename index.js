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
