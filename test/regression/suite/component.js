import test from 'ava';
import Nightmare from 'nightmare';

test('SFC component - default', (t) => {
  t.plan(1);
  const msg = 'should render column content';
  const expected = '12-12';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--default')
    .wait('.z-grid')
    .evaluate(() => document.querySelector('.z-grid__col--12-12 > h1').textContent)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - half gutters', (t) => {
  t.plan(1);
  const msg = 'should render column gutters with half the size';
  const expected = 0;
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--half-gutters')
    .wait('.z-grid')
    .evaluate(() => document.querySelector('.z-grid').getBoundingClientRect().left)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - gutters', (t) => {
  t.plan(1);
  const msg = 'should render column gutters';
  const expected = -8;
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--gutters')
    .wait('.z-grid')
    .evaluate(() => document.querySelector('.z-grid').getBoundingClientRect().left)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - larger gutters', (t) => {
  t.plan(1);
  const msg = 'should render column gutters with 1.5x the size';
  const expected = -16;
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--larger-gutters')
    .wait('.z-grid')
    .evaluate(() => document.querySelector('.z-grid').getBoundingClientRect().left)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - double gutters', (t) => {
  t.plan(1);
  const msg = 'should render column gutters with 2x the size';
  const expected = -24;
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--double-gutters')
    .wait('.z-grid')
    .evaluate(() => document.querySelector('.z-grid').getBoundingClientRect().left)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - reverse grid', (t) => {
  t.plan(1);
  const msg = 'should render a reverse grid column';
  const expected = true;
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--reverse-grid')
    .wait('.z-grid')
    .evaluate(() => {
      const gridRight = document.querySelector('.z-grid').getBoundingClientRect().right;
      const columnRight = document.querySelector('.z-grid__col:nth-child(2)').getBoundingClientRect().right;
      return gridRight === columnRight;
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - center grid', (t) => {
  t.plan(1);
  const msg = 'should render a center grid column';
  const expected = true;
  return Nightmare()
    .viewport(640, 480)
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--center-grid')
    .wait('.z-grid')
    .evaluate(() => {
      const grid = document.querySelector('.z-grid');
      const gridX = grid.getBoundingClientRect().left;
      const gridWidth = parseInt(getComputedStyle(grid).width, 10);
      const expectedX = Math.floor((gridWidth / 4) + gridX);
      const column = document.querySelector('.z-grid__col:nth-child(1)');
      const columnX = Math.floor(column.getBoundingClientRect().left);
      return expectedX === columnX;
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - fit', (t) => {
  t.plan(1);
  const msg = 'should render a column that fits the grid viewport';
  const expected = true;
  return Nightmare()
    .viewport(640, 480)
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--fit')
    .wait('.z-grid')
    .evaluate(() => {
      const grid = document.querySelector('.z-grid');
      const gridWidth = parseInt(getComputedStyle(grid).width, 10);
      const expectedWidth = Math.floor((gridWidth / 12) * 11);
      const column = document.querySelector('.z-grid__col:nth-child(2)');
      const columnWidth = parseInt(getComputedStyle(column).width, 10);
      return expectedWidth === columnWidth;
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - important column example', (t) => {
  t.plan(1);
  const msg = 'should render important columns first';
  const expected = 0;
  return Nightmare()
    .viewport(640, 480)
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--important-column-example')
    .wait('.z-grid')
    .evaluate(() => {
      document.body.style.margin = '0';
    })
    .evaluate(() => {
      const column = document.querySelector('.z-grid__col--important');
      return column.getBoundingClientRect().left;
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - resizing example', (t) => {
  t.plan(2);
  const msg = 'should handle viewport resizing';
  const before = Nightmare()
    .viewport(640, 768)
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--resizing-example')
    .wait('.z-grid')
    .evaluate(() => {
      const grid = document.querySelector('.z-grid');
      const gridX = grid.getBoundingClientRect().left;
      const gridWidth = parseInt(getComputedStyle(grid).width, 10);
      const expectedX = Math.floor((gridWidth / 2) + gridX);
      const column = document.querySelector('.z-grid__col:nth-child(2)');
      const columnX = Math.floor(column.getBoundingClientRect().left);
      return expectedX === columnX;
    })
    .end()
    .then(actual => t.deepEqual(true, actual, msg));
  const after = Nightmare()
    .viewport(400, 768)
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--resizing-example')
    .wait('.z-grid')
    .evaluate(() => {
      document.body.style.margin = '0';
    })
    .evaluate(() => {
      const column = document.querySelector('.z-grid__col:nth-child(2)');
      return Math.floor(column.getBoundingClientRect().left);
    })
    .end()
    .then(actual => t.deepEqual(0, actual, msg));
  return Promise.all([before, after]);
});
