// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '(https://img.shields.io/badge/License-GPL%203.0-blue.svg)';
  } else if (license === 'BSD 2-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]';
  } else if (license === 'BSD 3-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
  } else {
    return '';
  }}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license){
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '(https://img.shields.io/badge/License-GPL%203.0-blue.svg)';
  } else if (license === 'BSD 2-Clause') {
    return '(https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'BSD 3-Clause') {
    return '(https://opensource.org/licenses/BSD-3-Clause)';
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