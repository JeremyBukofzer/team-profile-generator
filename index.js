const Intern = require("./lib/intern.js");
const Engineer = require("./lib/engineer.js");
const Manager = require("./lib/manager.js");
const inquirer = require("inquirer");
const 

//start of inquiries
function startApp() {

    function renderTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'position',
                choices: ['Engineer', 'Intern', 'Manager']
            }
        ]).then(function (positionChoice) {
            switch (positionChoice.employeeQueries) {
                case "Engineer":
                    generateEngineer();
                    break;
                case "Intern":
                    generateIntern();
                    break;
                case "Manager":
                    generateManager();
                    break;
            }
        })
    }

    function generateIntern() {
        inquirer.prompt ([
            {
                type:"input",
                name:"internName",
                message:"What is the name of the Intern?"
            },
            {
                type:"input",
                name:"internIdNumber",
                message:"What is the Intern's ID number?"
            },
            {
                type:"input",
                name:"internEmail",
                message:"What is the Intern's email address?"
            },
            {
                type:"input",
                name:"internSchool",
                message:"What is the name of the school the Intern attends?"
            },
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internIdNumber, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            renderTeam();
        });
    }

    function generateEngineer() {
        inquirer.prompt ([
            {
                type:"input",
                name:"engineerName",
                message:"What is the name of the Engineer?"
            },
            {
                type:"input",
                name:"engineerIdNumber",
                message:"What is the Engineer's ID number?"
            },
            {
                type:"input",
                name:"engineerEmail",
                message:"What is the Engineer's email address?"
            },
            {
                type:"input",
                name:"engineerGitHub",
                message:"What is the Engineer's GitHub ID?"
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerIdNumber, answers.engineerEmail, answers.engineerGitHub);
            teamArray.push(engineer);
            renderTeam();
        });
    }
    function generateManager() {
        inquirer.prompt ([
            {
                type:"input",
                name:"mangerName",
                message:"What is the name of the Manager?"
            },
            {
                type:"input",
                name:"managerIdNumber",
                message:"What is the Manager's ID number?"
            },
            {
                type:"input",
                name:"managerEmail",
                message:"What is the Manager's email address?"
            },
            {
                type:"input",
                name:"managerOffice",
                message:"What is the Manager's office number?"
            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerIdNumber, answers.managerEmail, answers.managerOffice);
            teamArray.push(manager);
            renderTeam();
        });
    }
}