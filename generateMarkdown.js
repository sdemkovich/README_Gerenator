function generateMarkdown(data) {
    return `
  # ${data.projectTitle}

  ![alt text](https://img.shields.io/badge/license-${data.license}-blue) 

  ## Description
  ${data.description}

  ![Demo-Gif](https://giphy.com/gifs/YmPXTojReJhXgxxGzk/html5)


  ## Installation
  To install necessary dependencies, run the following command:

  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licenced under the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  To run tests, run the following command:

  ${data.tests}

  ## Questions
  If you have any questions about the repo, open an issue or contact [sdemkovich](https://github.com/sdemkovich) directly at ${data.email}

  `;
  }
  
  module.exports = generateMarkdown;
  