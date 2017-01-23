const os = require('os');
const path = require('path');

const config = {
  version: '3.0.1',
  basePath: path.resolve(__dirname, './bin'),
  baseURL: 'https://selenium-release.storage.googleapis.com',
  drivers: {},
};

config.drivers.chrome = {
  version: '2.25',
  arch: process.arch,
  baseURL: 'https://chromedriver.storage.googleapis.com',
};

config.drivers.firefox = {
  version: '0.11.1',
  arch: process.arch,
  baseURL: 'https://github.com/mozilla/geckodriver/releases/download',
};

if (os.platform() === 'win32') {
  config.drivers.ie = {
    version: '2.53.1',
    arch: process.arch,
    baseURL: 'https://selenium-release.storage.googleapis.com',
  };
}

module.exports = config;
