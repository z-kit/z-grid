import test from 'ava';
import React from 'react';
import { renderJSX, JSX } from 'jsx-test-helpers';
import { ZGrid, ZColumn } from '../../../src/component';

const NUMBER_OF_COLUMNS = 12;

const Grid = ZGrid(React.createElement);
const Column = ZColumn(React.createElement);

test('Grid component', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<Grid>Hello!</Grid>);
  const expected = JSX(
    <div className="z-grid">Hello!</div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Grid custom element', (t) => {
  const msg = 'should render other HTML tags';
  const actual = renderJSX(<Grid element={'nav'}>Hello!</Grid>);
  const expected = JSX(
    <nav className="z-grid">Hello!</nav>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Grid gutters', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<Grid gutter>Hello!</Grid>);
  const expected = JSX(
    <div className="z-grid z-grid--gutter">Hello!</div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Grid center', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<Grid center>Hello!</Grid>);
  const expected = JSX(
    <div className="z-grid z-grid--center">Hello!</div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Grid reverse', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<Grid reverse>Hello!</Grid>);
  const expected = JSX(
    <div className="z-grid z-grid--reverse">Hello!</div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Grid vertical', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<Grid vertical>Hello!</Grid>);
  const expected = JSX(
    <div className="z-grid z-grid--vertical">Hello!</div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Grid cross center', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<Grid crossCenter>Hello!</Grid>);
  const expected = JSX(
    <div className="z-grid z-grid--cross-center">Hello!</div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Grid stretch', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<Grid stretch>Hello!</Grid>);
  const expected = JSX(
    <div className="z-grid z-grid--stretch">Hello!</div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Column component', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<Column>Hello!</Column>);
  const expected = JSX(
    <div className="z-grid__col">Hello!</div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Column units (normal)', (t) => {
  const msg = 'should render';
  for (let i = 1; i <= NUMBER_OF_COLUMNS; i += 1) {
    const actual = renderJSX(<Column fill={i}>Hello!</Column>);
    const expected = JSX(
      <div className={`z-grid__col z-grid__col--${i}-12`}>Hello!</div>
    );
    t.deepEqual(actual, expected, msg);
  }
});

test('Column units (sm)', (t) => {
  const msg = 'should render';
  for (let i = 1; i <= NUMBER_OF_COLUMNS; i += 1) {
    const actual = renderJSX(<Column sm={i}>Hello!</Column>);
    const expected = JSX(
      <div className={`z-grid__col z-grid__col--sm-${i}-12`}>Hello!</div>
    );
    t.deepEqual(actual, expected, msg);
  }
});

test('Column units (md)', (t) => {
  const msg = 'should render';
  for (let i = 1; i <= NUMBER_OF_COLUMNS; i += 1) {
    const actual = renderJSX(<Column md={i}>Hello!</Column>);
    const expected = JSX(
      <div className={`z-grid__col z-grid__col--md-${i}-12`}>Hello!</div>
    );
    t.deepEqual(actual, expected, msg);
  }
});

test('Column units (lg)', (t) => {
  const msg = 'should render';
  for (let i = 1; i <= NUMBER_OF_COLUMNS; i += 1) {
    const actual = renderJSX(<Column lg={i}>Hello!</Column>);
    const expected = JSX(
      <div className={`z-grid__col z-grid__col--lg-${i}-12`}>Hello!</div>
    );
    t.deepEqual(actual, expected, msg);
  }
});

test('Column units (xl)', (t) => {
  const msg = 'should render';
  for (let i = 1; i <= NUMBER_OF_COLUMNS; i += 1) {
    const actual = renderJSX(<Column xl={i}>Hello!</Column>);
    const expected = JSX(
      <div className={`z-grid__col z-grid__col--xl-${i}-12`}>Hello!</div>
    );
    t.deepEqual(actual, expected, msg);
  }
});

test('Column fit', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<Column fit>Hello!</Column>);
  const expected = JSX(
    <div className="z-grid__col z-grid__col--fit">Hello!</div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Column center', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<Column center>Hello!</Column>);
  const expected = JSX(
    <div className="z-grid__col z-grid__col--center">Hello!</div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Column end', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<Column end>Hello!</Column>);
  const expected = JSX(
    <div className="z-grid__col z-grid__col--end">Hello!</div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Column important', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<Column important>Hello!</Column>);
  const expected = JSX(
    <div className="z-grid__col z-grid__col--important">Hello!</div>
  );
  return t.deepEqual(actual, expected, msg);
});
