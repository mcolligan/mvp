const { api, loc } = require('../../config.js');

// http://www.datasciencetoolkit.org/street2coordinates/Boulder%2c+CO
const getLatLon = (location) => {
  console.log(loc + location)
}

module.exports = { getLatLon };

