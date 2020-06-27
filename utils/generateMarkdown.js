// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  let badgeURL;
  let licenseURL;
  switch(data.license) {
    case "MIT":
      badgeURL = "https://img.shields.io/badge/License-MIT-yellow.svg";
      licenseURL = "https://opensource.org/licenses/MIT";
      break;
    case "Unlicense":
      badgeURL = "https://img.shields.io/badge/license-Unlicense-blue.svg";
      licenseURL = "http://unlicense.org/";
      break;
    case "BSL-1.0":
      badeURL = "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
      licenseURL = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "Apache-2.0":
      badgeURL = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      licenseURL = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "MPL-2.0":
      badgeURL = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";
      licenseURL = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "LGPL-3.0-or-later":
      badgeURL = "https://img.shields.io/badge/License-LGPL%20v3-blue.svg";
      licenseURL = "https://www.gnu.org/licenses/lgpl-3.0";
      break;
    case "GPL-3.0-or-later":
      badgeURL = "https://img.shields.io/badge/License-GPLv3-blue.svg";
      licenseURL = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "AGPL-3.0-or-later":
      badgeURL = "https://img.shields.io/badge/License-AGPL%20v3-blue.svg";
      licenseURL = "https://www.gnu.org/licenses/agpl-3.0";
      break;
    default:
      badgeURL = "https://img.shields.io/badge/license-Unlicense-blue.svg";
      licenseURL = "http://unlicense.org/";
  }

  return `# ${data.title}

  [![license](${badgeURL})](${licenseURL})

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
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
  Please contact me with any questions through my GitHub profile [${data.username}](https://github.com/${data.username}) or [email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
