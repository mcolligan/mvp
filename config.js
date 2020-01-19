const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  api: process.env.KEY,
  loc: process.env.LOC
};