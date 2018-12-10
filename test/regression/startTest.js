const spawn = require('cross-spawn');

function startTest() {
  const storybookServer = spawn('npm', ['run', 'storybook'], { detached: true, stdio: 'ignore' });
  try {
    spawn.sync('npm', ['run', 'regression-suite'], {
      detached: false,
      stdio: 'inherit',
    });
    storybookServer.kill();
  } catch (e) {
    storybookServer.kill();
    throw e;
  }
}

// Start storybook server and test against it
startTest();
