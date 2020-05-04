function generateMarkdown(data) {
    return `
  # ${data.projectTitle}
    ${data.badge}

  ## Description
  ${data.description}

  ## Installation
  To install necessary dependencies, run the following command:
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
    * User GitHub profile picture
    * User GitHub email

  ${data.username}
  ## At least one badge
  
  
  
  
  
    
  
  `;
  }
  
  module.exports = generateMarkdown;
  