const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const inquirer = require("inquirer")
const path = require("path");
const fs = require("fs");
const DIST_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(DIST_DIR, "myTeam.html");
const generateTeam = require("./src/template.js")

teamArray = [];

//start of inquiries
function startApp() {

    function renderTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'position',
                choices: ['Engineer', 'Intern', 'Manager', 'N/A']
            }
        ]).then(function (userInput) {
            switch (userInput.position) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "Manager":
                    addManager();
                    break;

                    default:
                        htmlGenerator();
            }
        })
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the name of the Intern?"
            },
            {
                type: "input",
                name: "internId",
                message: "What is the Intern's ID number?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the Intern's email address?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the name of the school the Intern attends?"
            },
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internIdNumber, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            renderTeam();
        });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the name of the Engineer?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the Engineer's ID number?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the Engineer's email address?"
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the Engineer's GitHub ID?"
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            renderTeam();
        });
    }
    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "mangerName",
                message: "What is the name of the Manager?"
            },
            {
                type: "input",
                name: "managerIdNumber",
                message: "What is the Manager's ID number?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the Manager's email address?"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the Manager's office number?"
            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            renderTeam();
        });
    }

    function htmlGenerator() {
        console.log("Team successfully created!")

        fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")
    }

    renderTeam();

}

startApp();