const selenium = require('selenium-standalone');
const seleniumConfig = require('./config');

// Grab selenium for local visual regression testing
module.exports = cb => selenium.install(seleniumConfig, cb);
