import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ZGrid, ZColumn } from '../src/component';

const Grid = ZGrid(React.createElement);
const Column = ZColumn(React.createElement);

const style = {
  margin: 0,
  padding: 0,
  display: 'block',
  color: 'white',
  background: 'darkgray',
  textAlign: 'center',
};

storiesOf('CSS component', module)
  .add('default', () => (
    <div className="z-grid">
      <div className="z-grid__col z-grid__col--12-12">
        <h1 style={style}>12-12</h1>
      </div>
      <div className="z-grid__col z-grid__col--6-12">
        <h1 style={style}>6-12</h1>
      </div>
      <div className="z-grid__col z-grid__col--6-12">
        <h1 style={style}>6-12</h1>
      </div>
      <div className="z-grid__col z-grid__col--4-12">
        <h1 style={style}>4-12</h1>
      </div>
      <div className="z-grid__col z-grid__col--4-12">
        <h1 style={style}>4-12</h1>
      </div>
      <div className="z-grid__col z-grid__col--4-12">
        <h1 style={style}>4-12</h1>
      </div>
    </div>
  ));

storiesOf('CSS component', module)
  .add('gutters', () => (
    <div className="z-grid z-grid--gutter">
      <div className="z-grid__col z-grid__col--12-12">
        <h1 style={style}>12-12</h1>
      </div>
      <div className="z-grid__col z-grid__col--6-12">
        <h1 style={style}>6-12</h1>
      </div>
      <div className="z-grid__col z-grid__col--6-12">
        <h1 style={style}>6-12</h1>
      </div>
      <div className="z-grid__col z-grid__col--4-12">
        <h1 style={style}>4-12</h1>
      </div>
      <div className="z-grid__col z-grid__col--4-12">
        <h1 style={style}>4-12</h1>
      </div>
      <div className="z-grid__col z-grid__col--4-12">
        <h1 style={style}>4-12</h1>
      </div>
    </div>
  ));

storiesOf('CSS component', module)
  .add('gutters', () => (
    <div className="z-grid z-grid--gutter">
      <div className="z-grid__col z-grid__col--12-12">
        <h1 style={style}>12-12</h1>
      </div>
      <div className="z-grid__col z-grid__col--6-12">
        <h1 style={style}>6-12</h1>
      </div>
      <div className="z-grid__col z-grid__col--6-12">
        <h1 style={style}>6-12</h1>
      </div>
      <div className="z-grid__col z-grid__col--4-12">
        <h1 style={style}>4-12</h1>
      </div>
      <div className="z-grid__col z-grid__col--4-12">
        <h1 style={style}>4-12</h1>
      </div>
      <div className="z-grid__col z-grid__col--4-12">
        <h1 style={style}>4-12</h1>
      </div>
    </div>
  ));

storiesOf('CSS component', module)
  .add('fit', () => (
    <div className="z-grid">
      <div className="z-grid__col z-grid__col--1-12">
        <h1 style={style}>1-12</h1>
      </div>
      <div className="z-grid__col z-grid__col--fit">
        <h1 style={style}>Fit</h1>
      </div>
    </div>
  ));

storiesOf('CSS component', module)
  .add('reverse grid', () => (
    <div className="z-grid z-grid--reverse">
      <div className="z-grid__col z-grid__col--3-12">
        <h1 style={style}>3-12</h1>
      </div>
      <div className="z-grid__col z-grid__col--3-12">
        <h1 style={style}>3-12</h1>
      </div>
    </div>
  ));

storiesOf('CSS component', module)
  .add('center grid', () => (
    <div className="z-grid z-grid--center">
      <div className="z-grid__col z-grid__col--3-12">
        <h1 style={style}>3-12</h1>
      </div>
      <div className="z-grid__col z-grid__col--3-12">
        <h1 style={style}>3-12</h1>
      </div>
    </div>
  ));

storiesOf('CSS component', module)
  .add('important column example', () => (
    <div className="z-grid">
      <div className="z-grid__col z-grid__col--3-12">
        <h1 style={style}>First</h1>
      </div>
      <div className="z-grid__col z-grid__col--3-12">
        <h1 style={style}>Second</h1>
      </div>
      <div className="z-grid__col z-grid__col--3-12 z-grid__col--important">
        <h1 style={style}>Third</h1>
      </div>
      <div className="z-grid__col z-grid__col--3-12">
        <h1 style={style}>Fourth</h1>
      </div>
    </div>
  ));

storiesOf('CSS component', module)
  .add('resizing example', () => (
    <div className="z-grid z-grid--gutter">
      <div className="z-grid__col z-grid__col--12-12 z-grid__col--sm-6-12 z-grid__col--lg-3-12">
        <h1 style={style}>First</h1>
      </div>
      <div className="z-grid__col z-grid__col--12-12 z-grid__col--sm-6-12 z-grid__col--lg-3-12">
        <h1 style={style}>Second</h1>
      </div>
      <div className="z-grid__col z-grid__col--12-12 z-grid__col--sm-6-12 z-grid__col--lg-3-12">
        <h1 style={style}>Third</h1>
      </div>
      <div className="z-grid__col z-grid__col--12-12 z-grid__col--sm-6-12 z-grid__col--lg-3-12">
        <h1 style={style}>Fourth</h1>
      </div>
    </div>
  ));

storiesOf('Stateless functional component', module)
  .add('default', () => (
    <Grid>
      <Column fill={12}>
        <h1 style={style}>12-12</h1>
      </Column>
      <Column fill={6}>
        <h1 style={style}>6-12</h1>
      </Column>
      <Column fill={6}>
        <h1 style={style}>6-12</h1>
      </Column>
      <Column fill={4}>
        <h1 style={style}>4-12</h1>
      </Column>
      <Column fill={4}>
        <h1 style={style}>4-12</h1>
      </Column>
      <Column fill={4}>
        <h1 style={style}>4-12</h1>
      </Column>
    </Grid>
  ));

storiesOf('Stateless functional component', module)
  .add('gutters', () => (
    <Grid gutter>
      <Column fill={12}>
        <h1 style={style}>12-12</h1>
      </Column>
      <Column fill={6}>
        <h1 style={style}>6-12</h1>
      </Column>
      <Column fill={6}>
        <h1 style={style}>6-12</h1>
      </Column>
      <Column fill={4}>
        <h1 style={style}>4-12</h1>
      </Column>
      <Column fill={4}>
        <h1 style={style}>4-12</h1>
      </Column>
      <Column fill={4}>
        <h1 style={style}>4-12</h1>
      </Column>
    </Grid>
  ));

storiesOf('Stateless functional component', module)
  .add('fit', () => (
    <Grid>
      <Column fill={1}>
        <h1 style={style}>1-12</h1>
      </Column>
      <Column fit>
        <h1 style={style}>Fit</h1>
      </Column>
    </Grid>
  ));

storiesOf('Stateless functional component', module)
  .add('reverse grid', () => (
    <Grid reverse>
      <Column fill={3}>
        <h1 style={style}>3-12</h1>
      </Column>
      <Column fill={3}>
        <h1 style={style}>3-12</h1>
      </Column>
    </Grid>
  ));

storiesOf('Stateless functional component', module)
  .add('center grid', () => (
    <Grid center>
      <Column fill={3}>
        <h1 style={style}>3-12</h1>
      </Column>
      <Column fill={3}>
        <h1 style={style}>3-12</h1>
      </Column>
    </Grid>
  ));

storiesOf('Stateless functional component', module)
  .add('important column example', () => (
    <Grid>
      <Column fill={3}>
        <h1 style={style}>First</h1>
      </Column>
      <Column fill={3}>
        <h1 style={style}>Second</h1>
      </Column>
      <Column fill={3} important>
        <h1 style={style}>Third</h1>
      </Column>
      <Column fill={3}>
        <h1 style={style}>Fourth</h1>
      </Column>
    </Grid>
  ));

storiesOf('Stateless functional component', module)
  .add('resizing example', () => (
    <Grid gutter>
      <Column fill={12} sm={6} lg={3}>
        <h1 style={style}>First</h1>
      </Column>
      <Column fill={12} sm={6} lg={3}>
        <h1 style={style}>Second</h1>
      </Column>
      <Column fill={12} sm={6} lg={3}>
        <h1 style={style}>Third</h1>
      </Column>
      <Column fill={12} sm={6} lg={3}>
        <h1 style={style}>Fourth</h1>
      </Column>
    </Grid>
  ));
