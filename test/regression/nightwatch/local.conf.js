const path = require('path');

const seleniumDir = path.resolve(__dirname, '../selenium/bin');

const seleniumServerPath = `${seleniumDir}/selenium-server/3.0.1-server.jar`;
const geckoDriverPath = `${seleniumDir}/geckodriver/0.11.1-x64-geckodriver`;
const chromeDriverPath = `${seleniumDir}/chromedriver/2.25-x64-chromedriver`;

module.exports = {
  src_folders: [path.resolve(__dirname, '../suite')],

  globals_path: path.resolve(__dirname, './globals.js'),

  output_folder: './test/regression/nightwatch/reports',

  selenium: {
    start_process: true,
    server_path: seleniumServerPath,
    log_path: '',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromeDriverPath,
      'webdriver.gecko.driver': geckoDriverPath,
      'webdriver.edge.driver': '',
    },
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost:3000',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['no-sandbox'],
        },
      },
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        marionette: true,
      },
    },

    edge: {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
      },
    },

    safari: {
      desiredCapabilities: {
        browserName: 'safari',
      },
    },
  },
};
