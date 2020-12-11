const inquirer = require('inquirer');
const fs = require(`fs`)
const markdown = require("./utils/generateMarkdown")

var response = [
    {
        type: 'input ',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input ',
        message: 'Give a brief description of your project.(What was your motivation?)',
        name: 'description',
    },
    {
        type: 'input ',
        message: 'What is the title of your project?',
        name: 'username',
    },
    {
        type: 'confirm',
        message: 'Do you want a table of contents',
        name: "username",
    },
    {
        type: 'password',
        message: 'What is your password?',
        name: 'password',
    },
    {
        type: 'password',
        message: 'Re-enter password to confirm:',
        name: 'confirm',
    },
]

inquirer.prompt(response).then(function (answers) {
// console.log(answers)
    fs.writeFile("Ferd.md", markdown(answers), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
 
});


