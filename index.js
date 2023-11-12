const fs = require('fs');
const inquirer = require('inquirer');
const { generate } = require('rxjs');
const generateMarkdown = require('./utils/generateMarkdown');
// const { generate } = require('rxjs');

const questions = [
  {
    type: "input",
    name: "title",
    message: "Please name your Project.",
  },
  {
    type: "input",
    name: "description",
    message: "Please descibe the purpose and functionality of this project.",
  },
  {
    type: "input",
    name: "table of contents",
    message: "Please select a license applicable to this project.",
    choice: ["MIT", "Apache-2.0", "GPL-3.0", "BSD-2-Clause", "BSD-3-Clause", "BSD-4-Clause", "None"],
  },
  {
    type: "input",
    name: "full-name",
    message: "Please enter your full name.",
  }, {
    type: "input",
    name: "email",
    message: "Please enter your email address.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please input steps on how to install your porject.",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the languages or technologies associated with this project.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD-2-Clause", "BSD-3-Clause", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Please name any contributors. (Use GitHub Usernames).",
    default: "",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide walkthrough of required test if applicable.",
  },
  {
    type: "input",
    name: "questions",
    message: "If you have any questions please input your email here so ",
  }
]

function init() {
  inquirer.prompt(questions).then((answers) => {
    const badge = generateMarkdown.renderLicenseBadge(answers.license);
    const readmeContent = generateREADME(answers, badge);
    const filename = "README.md";

    fs.writeFile(filename, readmeContent, (err) => {
      err ? console.error(err) : console.log("README.md generated successfully!");
    });
  });
}

function generateREADME(answers, badge) {
  return `
  # ${answers.title}  ${badge}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test Instructions](#test-instructions)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Test Instructions
  ${answers.test}
  
  ## License
  This project is licensed under the ${answers.license} license.
  
  ## Questions
  You can find me on GitHub: [${answers.github}](https://github.com/${answers.github})
  
  For any questions or inquiries, please email me at ${answers.email}.
  `;
}

init();