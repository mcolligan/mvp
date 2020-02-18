const { api, loc, mtb } = require('../../config.js');
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
  request.get(`${mtb}lat=${place.latitude}&lon=${place.longitude}&maxDistance=50&key=${api}`, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(res.body);
    }
  })
}

module.exports = { getLatLon, getTrails };

