const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamBuilder = require("./lib/teamBuilder")
const { welcomeScreen } = require("./lib/CLI");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const init = async () => {

    try {

        // Welcome the user
        welcomeScreen();

        // Start the teamBuilder
        const newTeam = new teamBuilder; 
        await newTeam.addEmployee();

        // Render the new team to html and preview it
        const html = render(newTeam.team);

        // Create team.html
        if (!fs.existsSync(outputPath)) {
            fs.mkdirSync(OUTPUT_DIR);
        }
        fs.writeFileSync(outputPath, html, "utf8");
        console.log("*******************************");
        console.log("| Process complete! Your file |");
        console.log("| can be found here:          |");
        console.log("| ./output/team.html          |");
        console.log("*******************************");
    }
    catch(err) {
        console.log(`The application has encountered an error: ${err}`);
    }
}

init();
