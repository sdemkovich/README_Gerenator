function generateMarkdown(data) {
    return `
    
  # ${data.username}
  # At least one badge
  ${data.badge}
  # Project title
  ${data.title}
  # Description
  # Table of Contents
  # Installation
  # Usage
  # License
  # Contributing
  # Tests
  # Questions
    ## User GitHub profile picture
    ## User GitHub email
  
  `;
  }
  
  module.exports = generateMarkdown;
  