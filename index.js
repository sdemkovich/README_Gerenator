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
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
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
        },

    ]).then(answers => {
        // var result = "";
        // const mrkd = generateMarkdown(data)
        // if (data.badge == "MIT") {
        //     data.badge = 
        // }
        // Pass data into generateMarkdown function
        // Pas returned data into fs.writeFile
        // console.log(answers.length)
        // const keys = Object.keys(answers)
        // for (i = 0; i < keys.length; i++) {
        //     var key = keys[i]
        //     var val = answers[key]
        //     result +=  key + " : " + val;
        //     result += "\n";
            
        // }
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
