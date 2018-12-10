import test from 'ava';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { ZGrid, ZColumn } from '../../../src/component';

configure({ adapter: new Adapter() });

const NUMBER_OF_COLUMNS = 12;

const Grid = ZGrid(React.createElement);
const Column = ZColumn(React.createElement);

test('Grid component', (t) => {
  const msg = 'should render';
  const actual = shallow(<Grid>Hello!</Grid>).html();
  const expected = shallow(
    <div className="z-grid">Hello!</div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Grid custom element', (t) => {
  const msg = 'should render other HTML tags';
  const actual = shallow(<Grid element="nav">Hello!</Grid>).html();
  const expected = shallow(
    <nav className="z-grid">Hello!</nav>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Grid gutters', (t) => {
  const msg = 'should render';
  const actual = shallow(<Grid gutter>Hello!</Grid>).html();
  const expected = shallow(
    <div className="z-grid z-grid--gutter">Hello!</div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Grid center', (t) => {
  const msg = 'should render';
  const actual = shallow(<Grid center>Hello!</Grid>).html();
  const expected = shallow(
    <div className="z-grid z-grid--center">Hello!</div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Grid reverse', (t) => {
  const msg = 'should render';
  const actual = shallow(<Grid reverse>Hello!</Grid>).html();
  const expected = shallow(
    <div className="z-grid z-grid--reverse">Hello!</div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Grid vertical', (t) => {
  const msg = 'should render';
  const actual = shallow(<Grid vertical>Hello!</Grid>).html();
  const expected = shallow(
    <div className="z-grid z-grid--vertical">Hello!</div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Grid cross center', (t) => {
  const msg = 'should render';
  const actual = shallow(<Grid crossCenter>Hello!</Grid>).html();
  const expected = shallow(
    <div className="z-grid z-grid--cross-center">Hello!</div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Grid stretch', (t) => {
  const msg = 'should render';
  const actual = shallow(<Grid stretch>Hello!</Grid>).html();
  const expected = shallow(
    <div className="z-grid z-grid--stretch">Hello!</div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Column component', (t) => {
  const msg = 'should render';
  const actual = shallow(<Column>Hello!</Column>).html();
  const expected = shallow(
    <div className="z-grid__col">Hello!</div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Column units (normal)', (t) => {
  t.plan(NUMBER_OF_COLUMNS);
  const msg = 'should render';
  for (let i = 1; i <= NUMBER_OF_COLUMNS; i += 1) {
    const actual = shallow(<Column fill={i}>Hello!</Column>).html();
    const expected = shallow(
      <div className={`z-grid__col z-grid__col--${i}-12`}>Hello!</div>,
    ).html();
    t.deepEqual(actual, expected, msg);
  }
});

test('Column units (sm)', (t) => {
  t.plan(NUMBER_OF_COLUMNS);
  const msg = 'should render';
  for (let i = 1; i <= NUMBER_OF_COLUMNS; i += 1) {
    const actual = shallow(<Column sm={i}>Hello!</Column>).html();
    const expected = shallow(
      <div className={`z-grid__col z-grid__col--sm-${i}-12`}>Hello!</div>,
    ).html();
    t.deepEqual(actual, expected, msg);
  }
});

test('Column units (md)', (t) => {
  t.plan(NUMBER_OF_COLUMNS);
  const msg = 'should render';
  for (let i = 1; i <= NUMBER_OF_COLUMNS; i += 1) {
    const actual = shallow(<Column md={i}>Hello!</Column>).html();
    const expected = shallow(
      <div className={`z-grid__col z-grid__col--md-${i}-12`}>Hello!</div>,
    ).html();
    t.deepEqual(actual, expected, msg);
  }
});

test('Column units (lg)', (t) => {
  t.plan(NUMBER_OF_COLUMNS);
  const msg = 'should render';
  for (let i = 1; i <= NUMBER_OF_COLUMNS; i += 1) {
    const actual = shallow(<Column lg={i}>Hello!</Column>).html();
    const expected = shallow(
      <div className={`z-grid__col z-grid__col--lg-${i}-12`}>Hello!</div>,
    ).html();
    t.deepEqual(actual, expected, msg);
  }
});

test('Column units (xl)', (t) => {
  t.plan(NUMBER_OF_COLUMNS);
  const msg = 'should render';
  for (let i = 1; i <= NUMBER_OF_COLUMNS; i += 1) {
    const actual = shallow(<Column xl={i}>Hello!</Column>).html();
    const expected = shallow(
      <div className={`z-grid__col z-grid__col--xl-${i}-12`}>Hello!</div>,
    ).html();
    t.deepEqual(actual, expected, msg);
  }
});

test('Column fit', (t) => {
  const msg = 'should render';
  const actual = shallow(<Column fit>Hello!</Column>).html();
  const expected = shallow(
    <div className="z-grid__col z-grid__col--fit">Hello!</div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Column center', (t) => {
  const msg = 'should render';
  const actual = shallow(<Column center>Hello!</Column>).html();
  const expected = shallow(
    <div className="z-grid__col z-grid__col--center">Hello!</div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Column end', (t) => {
  const msg = 'should render';
  const actual = shallow(<Column end>Hello!</Column>).html();
  const expected = shallow(
    <div className="z-grid__col z-grid__col--end">Hello!</div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Column important', (t) => {
  const msg = 'should render';
  const actual = shallow(<Column important>Hello!</Column>).html();
  const expected = shallow(
    <div className="z-grid__col z-grid__col--important">Hello!</div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});
