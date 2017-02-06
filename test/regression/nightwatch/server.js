const spawn = require('cross-spawn');

module.exports = (function serve() {
  const child = spawn('npm', ['run', 'storybook'], { detached: true, stdio: 'ignore' });
  child.unref();
}());
