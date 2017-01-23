const path = require('path');
const http = require('http');
const serveStatic = require('serve-static');
const finalhandler = require('finalhandler');

const projectRoot = path.resolve(__dirname, '../../../storybook-static');

const serve = serveStatic(projectRoot, { index: ['index.html'] });

const server = http.createServer((req, res) => {
  serve(req, res, finalhandler(req, res));
});

module.exports = port => server.listen(port);
