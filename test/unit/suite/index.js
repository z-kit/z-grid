import test from 'ava';
import React from 'react';
import { renderJSX, JSX } from 'jsx-test-helpers';
import { ZGrid, ZColumn } from '../../../src/component';

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

test('Column component', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<Column>Hello!</Column>);
  const expected = JSX(
    <div className="z-grid__col">Hello!</div>
  );
  return t.deepEqual(actual, expected, msg);
});
