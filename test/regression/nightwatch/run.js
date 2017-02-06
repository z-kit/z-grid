require('./server');
const installSelenium = require('../selenium/install');

function startNightwatch() {
  require('nightwatch/bin/runner.js');
}

installSelenium((err) => {
  if (err) throw err;
  startNightwatch();
});
