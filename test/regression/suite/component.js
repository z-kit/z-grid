import { test } from 'ava';
import Nightmare from 'nightmare';

test('SFC component - default', (t) => {
  t.plan(1);
  const msg = 'should render column content';
  const expected = '12-12';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=default')
    .wait('.z-grid')
    .evaluate(() => document.querySelector('.z-grid__col--12-12 > h1').textContent)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - gutters', (t) => {
  t.plan(1);
  const msg = 'should render column gutters';
  const expected = -8;
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=gutters')
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
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=reverse%20grid')
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
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=center%20grid')
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
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=fit')
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
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=important%20column%20example')
    .wait('.z-grid')
    .evaluate(() => {
      document.body.style.margin = '0';
      return;
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
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=resizing%20example')
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
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=resizing%20example')
    .wait('.z-grid')
    .evaluate(() => {
      document.body.style.margin = '0';
      return;
    })
    .evaluate(() => {
      const column = document.querySelector('.z-grid__col:nth-child(2)');
      return Math.floor(column.getBoundingClientRect().left);
    })
    .end()
    .then(actual => t.deepEqual(0, actual, msg));
  return Promise.all([before, after]);
});
