const selenium = require('selenium-standalone');
const seleniumConfig = require('./config');

module.exports = cb => selenium.start(seleniumConfig, cb);
