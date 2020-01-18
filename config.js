const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  thing: process.env.THING
};