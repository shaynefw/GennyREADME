// This file contains the function that generates the README.md file
function generateREADME(data) {
  return `# ${data.repoName}
      
## Description

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

- [Project repo](https://github.com/${data.githubUsername}/${data.repoName})
- [Project deployed link](https://${data.githubUsername}.github.io/${data.repoName}/)
- [Project Video Demo]()

## Usage

![screenShot]()

## Credits

## License

## Badges

![HTML](https://img.shields.io/badge/HTML-NUMBER%25-orange)
![CSS](https://img.shields.io/badge/CSS-NUMBER%25-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-NUMBER%25-yellow)

## Features

## How to Contribute

## Tests

## Questions
  
If you have any questions you can reach me through my [github profile](https://github.com/${data.githubUsername}).
  `;
}

// Export the function so it can be used in other files
window.generateREADME = generateREADME;
