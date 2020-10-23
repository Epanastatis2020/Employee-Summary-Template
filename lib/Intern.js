// Class for Intern

//Must use the Employee class as this will extend it
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    };

    getSchool() {
        return this.school;
    };
};

module.exports = Intern;