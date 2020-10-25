const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const { getEmployeeDetails, newEmployeeDetails } = require("./CLI");


class teamBuilder {
    constructor() {

        // Sets the team to an empty array to which new members will be added
        this.team = [];

        // Sets the ID to 0 - each new member will have a consecutively higher ID
        this.id = 0;
    };

    // Function to create a new employee object from the appropriate class
    createEmployee(employee) {

        let newEmployee;

        const { name, email } = employee;

        const employeeID = { role }.concat(this.id);

        switch (employee.role) {
            case "Engineer":
                const { github } = employee;
                newEmployee = new Engineer(name, employeeID, email, github);
                break;
            case "Intern":
                const { school } = employee;
                newEmployee = new Manager(name, employeeID, email, school);
                break;
            case "Manager":
                const { officeNumber } = employee;
                newEmployee = new Manager(name, employeeID, email, officeNumber);
                break;
        }

        return newEmployee;
    }
};

