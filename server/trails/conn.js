const { api, loc } = require('../../config.js');
const request = require('request');

const getLatLon = (location, cb) => {
  request.get(`${loc + location}`, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(res.body);
    }
  })
}

const getTrails = (place, cb) => {
  // request MTB api -- don't make them mad
  console.log(place)
}

module.exports = { getLatLon, getTrails };

