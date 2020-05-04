function generateMarkdown(data) {
    return `
    
  # ${data.projectTitle}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ## License
  ${data.license}
  ## Contributing
  ## Tests
  ${data.tests}
  ## Questions
    * User GitHub profile picture
    * User GitHub email

  ${data.username}
  ## At least one badge
  ${data.badge}
  
  
  
  
    
  
  `;
  }
  
  module.exports = generateMarkdown;
  