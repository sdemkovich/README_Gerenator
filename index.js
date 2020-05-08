const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generateMarkdown = require("./generateMarkdown")

function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "URL",
            message: "What is the URL to your project?"
        },
        {
            type: "input",
            name: "projectTitle",
            message: "What is your project's name?"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project"
        },
        {
            type: "list",
            name: "license",
            message: "What badge do you want to use?",
            choices: ["MIT", "APACHE2", "GPL", "BSD", "None"]
        },
        {
            type: "input",
            name: "installation",
            message: "What command should be run to install dependencies?",
            default: "npm i"
        },
        {
            type: "input",
            name: "tests",
            message: "What command should be run to run tests?",
            default: "npm test"
        },
        {
            type: "input",
            name: "usage",
            message: "What does the user need to know about using the repo?"
        },
        {
            type: "input",
            name: "contributing",
            message: "What does the user need to know about contributing to the repo?"
        }
    ]).then(answers => {

        const queryUrl = `https://api.github.com/users/${answers.username}/repos?per_page=100"`;

        axios.get(queryUrl).then(function (res) {
            const repoNames = res.data.map(function (repo) {
                return repo.name;

                // console.log(repo.name);
            });
        });

        const result = generateMarkdown(answers)

        fs.writeFile("Readme.md", result, (err) => {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });
    })
}

init();
