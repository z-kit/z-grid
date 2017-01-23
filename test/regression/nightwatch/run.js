const serve = require('./server');
const installSelenium = require('../selenium/install');
const startSelenium = require('../selenium/start');

function startNightwatch() {
  serve(3000);
  require('nightwatch/bin/runner.js');
}

function test() {
  startSelenium((err) => {
    if (err) throw err;
    startNightwatch();
  });
}

installSelenium((err) => {
  if (err) throw err;
  test();
});
