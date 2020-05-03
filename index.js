var inquirer = require("inquirer");
var fs = require('fs');
const generateMarkdown = require("./generateMarkdown")
const questions = [

];


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
            name: "projectName",
            message: "What is your project's name?"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project"
        },
        {
            type: "list",
            name: "badge",
            message: "What badge do you want to use?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },

    ]).then(function (data) {

        // if (data.badge == "MIT") {
        //     data.badge = 
        // }
        // Pass data into generateMarkdown function
        // Pas returned data into fs.writeFile
        fs.writeFile("Readme.md", data, (err) => {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

    })

}
init();
