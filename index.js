const inquirer = require('inquirer');
const fs = require(`fs`)
const markdown = require("./utils/generateMarkdown")
                            

const response = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a brief description of your project.(What was your motivation?)',
        name: 'description',
    },

    {
        type: 'list',
        message: 'Which license did you use for your project?',
        name: 'license',
        choices: ["MIT","GPL","Apache", ""]
       
    },
    {
        type: 'input',
        message: 'What are some steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'collaboration',
        default: "n/a",
    },

    {
        type: 'input',
        message: 'List all languages',
        name: 'languages',
    },
    {
        type: 'list',
        message: 'What frameworks did you use?',
        name: 'frameworks',
        choices: ["Visual Studio Code","Nodepad++","UltraEdit", ""]
    },
    {
        type: 'input',
        message: 'Developers Name:',
        name: 'developer',
    },
    {
        type: 'input',
        message: "Github Username:",
        name: 'gitHub',
    },
    {
        type: 'input',
        message: "Email:",
        name: 'email',
    },

]

inquirer.prompt(response).then(function (answers) {
// console.log(answers)
    fs.writeFile("ReadMe.md", markdown(answers), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

});


