const inquirer = require('inquirer');


// Function to generate a welcome screen in the command line interface
function welcomeScreen() {

    const welcomeMessage = `
    
    ***************************************************
    |                                                 |
    |                 Dev Team Builder                |
    |                                                 |
    ***************************************************
    
    *  This command-line application will generate an *
    *  html page with the information of each of your *
    *  team members, for easy reference.              *

    `

    console.clear();
    console.log("\n");
    console.log(welcomeMessage);
    console.log("\n");
};


// Function to prompt for employee details 
function getEmployeeDetails() {

    const employeeQuestionArray = [
        {
            name: "role",
            type: "list",
            message: "Choose the team member's role:",
            choices: ["Engineer", "Intern", "Manager"]
        },
        {
            name: "name",
            type: "input",
            message: "Enter the team member's name:",
            validate: val => (val.trim() !== ""),
        },
        {
            name: "email",
            type: "input",
            message: "Enter the team member's email address:",
            validate: val => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
        },
        {
            name: "github",
            type: "input",
            message: "Enter the team member's github username:",
            when: (answers) => answers.role === "Engineer",
            validate: val => (val.trim() !== ""),
        },
        {
            name: "school",
            type: "input",
            message: "Enter the team member's school:",
            when: (answers) => answers.role === "Intern",
            validate: val => (val.trim() !== ""),
        },
        {
            name: "officeNumber",
            type: "input",
            message: "Enter the team member's office phone number:",
            when: (answers) => answers.role === "Manager",
            validate: val => /[0-9]+/gi.test(val),
        }

    ]

    console.log("\n");

    return inquirer.prompt(employeeQuestionArray);
};

// Function to let user add another employee
function newEmployeeDetails() {
    return inquirer.prompt([
        {
            name: "addEmployee",
            type: "confirm",
            message: "Would you like to add another employee?",
            default: true
        }
    ]).then(function (answer) {
        return answer.addEmployee;
    });
};

module.exports = {welcomeScreen, getEmployeeDetails, newEmployeeDetails};
