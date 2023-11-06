// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '(https://img.shields.io/badge/License-GPL%203.0-blue.svg)';
  } else if (license === 'BSD 3-Clause') {
    return '(https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
  } else {
    return '';
  }}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license){
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '(https://img.shields.io/badge/License-GPL%203.0-blue.svg)';
  } else if (license === 'BSD 3-Clause') {
    return '(https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
  } else {
    return '';
  }}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {
renderLicenseBadge
};