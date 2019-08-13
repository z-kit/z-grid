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

test('Grid half gutters', (t) => {
  const msg = 'should render';
  const actual = shallow(<Grid gutter="half">Hello!</Grid>).html();
  const expected = shallow(
    <div className="z-grid z-grid--half-gutter">Hello!</div>,
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

test('Grid larger gutters', (t) => {
  const msg = 'should render';
  const actual = shallow(<Grid gutter="larger">Hello!</Grid>).html();
  const expected = shallow(
    <div className="z-grid z-grid--larger-gutter">Hello!</div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Grid double gutters', (t) => {
  const msg = 'should render';
  const actual = shallow(<Grid gutter="double">Hello!</Grid>).html();
  const expected = shallow(
    <div className="z-grid z-grid--double-gutter">Hello!</div>,
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

test('Grid style passthrough', (t) => {
  const msg = 'should render style content';
  const actual = shallow(<Grid style={{ width: '100px' }}>Hello!</Grid>).html();
  const expected = shallow(
    <div className="z-grid" style={{ width: '100px' }}>Hello!</div>,
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

test('Column style passthrough', (t) => {
  const msg = 'should render style content';
  const actual = shallow(<Column style={{ width: '100px' }}>Hello!</Column>).html();
  const expected = shallow(
    <div className="z-grid__col" style={{ width: '100px' }}>Hello!</div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Responsive fit columns', (t) => {
  const msg = 'should render fit columns for different sizes';
  const actual = shallow(
    <Grid>
      <Column fit="sm">SM</Column>
      <Column fit="md">MD</Column>
      <Column fit="lg">LG</Column>
      <Column fit="xl">XL</Column>
    </Grid>,
  ).html();
  const expected = shallow(
    <div className="z-grid">
      <div className="z-grid__col z-grid__col--sm-fit">SM</div>
      <div className="z-grid__col z-grid__col--md-fit">MD</div>
      <div className="z-grid__col z-grid__col--lg-fit">LG</div>
      <div className="z-grid__col z-grid__col--xl-fit">XL</div>
    </div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Invisible columns', (t) => {
  const msg = 'should render invisible columns';
  const actual = shallow(
    <Grid>
      <Column invisible>My invisible column</Column>
      <Column invisible="sm">SM</Column>
      <Column invisible="md">MD</Column>
      <Column invisible="lg">LG</Column>
      <Column invisible="xl">XL</Column>
    </Grid>,
  ).html();
  const expected = shallow(
    <div className="z-grid">
      <div className="z-grid__col z-grid__col--invisible">My invisible column</div>
      <div className="z-grid__col z-grid__col--sm-invisible">SM</div>
      <div className="z-grid__col z-grid__col--md-invisible">MD</div>
      <div className="z-grid__col z-grid__col--lg-invisible">LG</div>
      <div className="z-grid__col z-grid__col--xl-invisible">XL</div>
    </div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});
