function generateMarkdown(data) {
    return `# ${data.title}
## Description
* ${data.description}

## Table of Contents
* [License](#license)
* [Installation](#installation)
* [Contributing](#contributing)
* [Technologies](#Technologies)
* [Questions](#Questions)

## License
* ${data.license}
## Installation 
* ${data.installation}
## Contributing
* ${data.collaboration}
## Technologies
### Languages
* ${data.languages}
### Frameworks
* ${data.frameworks}
## Questions
* ${data.developer}
* ${data.gitHub}
* ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;