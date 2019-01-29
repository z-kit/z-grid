/**
 * Copyright (c) 2017 z-kit contributors.
 * @license MIT LICENSE
 * https://github.com/z-kit/z-grid
 */

import styles from './style.css';

const NUMBER_OF_COLUMNS = 12;

// Global to local style mappings, works even if using CSS modules
const classes = {
  grid: styles['z-grid'] || 'z-grid',
  gridVertical: styles['z-grid--vertical'] || 'z-grid--vertical',
  gridReverse: styles['z-grid--reverse'] || 'z-grid--reverse',
  gridCenter: styles['z-grid--center'] || 'z-grid--center',
  gridCrossCenter: styles['z-grid--cross-center'] || 'z-grid--cross-center',
  gridStretch: styles['z-grid--stretch'] || 'z-grid--stretch',
  gridGutter: styles['z-grid--gutter'] || 'z-grid--gutter',
  column: styles['z-grid__col'] || 'z-grid__col',
  columnFit: styles['z-grid__col--fit'] || 'z-grid__col--fit',
  columnCenter: styles['z-grid__col--center'] || 'z-grid__col--center',
  columnEnd: styles['z-grid__col--end'] || 'z-grid__col--end',
  columnImportant: styles['z-grid__col--important'] || 'z-grid__col--important',
  columns: (function generateColumns() {
    const fill = [];
    const sm = [];
    const md = [];
    const lg = [];
    const xl = [];
    for (let i = 1; i <= NUMBER_OF_COLUMNS; i += 1) {
      fill[i] = styles[`z-grid__col--${i}-12`] || `z-grid__col--${i}-12`;
      sm[i] = styles[`z-grid__col--sm-${i}-12`] || `z-grid__col--sm-${i}-12`;
      md[i] = styles[`z-grid__col--md-${i}-12`] || `z-grid__col--md-${i}-12`;
      lg[i] = styles[`z-grid__col--lg-${i}-12`] || `z-grid__col--lg-${i}-12`;
      xl[i] = styles[`z-grid__col--xl-${i}-12`] || `z-grid__col--xl-${i}-12`;
    }
    return {
      fill, sm, md, lg, xl,
    };
  }()),
};

export function ZGrid(e) {
  return (props) => {
    const block = [classes.grid];
    const modifiers = [];
    if (props.vertical) modifiers.push(classes.gridVertical);
    if (props.reverse) modifiers.push(classes.gridReverse);
    if (props.center) modifiers.push(classes.gridCenter);
    if (props.crossCenter) modifiers.push(classes.gridCrossCenter);
    if (props.stretch) modifiers.push(classes.gridStretch);
    if (props.gutter) modifiers.push(classes.gridGutter);
    const className = block.concat(modifiers).join(' ');
    const style = props.style || undefined;
    return e(props.element || 'div', { className, style }, props.children);
  };
}

export function ZColumn(e) {
  return (props) => {
    const block = [classes.column];
    const modifiers = [];
    if (props.fill) modifiers.push(classes.columns.fill[props.fill]);
    if (props.sm) modifiers.push(classes.columns.sm[props.sm]);
    if (props.md) modifiers.push(classes.columns.md[props.md]);
    if (props.lg) modifiers.push(classes.columns.lg[props.lg]);
    if (props.xl) modifiers.push(classes.columns.xl[props.xl]);
    if (props.fit) modifiers.push(classes.columnFit);
    if (props.center) modifiers.push(classes.columnCenter);
    if (props.end) modifiers.push(classes.columnEnd);
    if (props.important) modifiers.push(classes.columnImportant);
    const className = block.concat(modifiers).join(' ');
    const style = props.style || undefined;
    return e(props.element || 'div', { className, style }, props.children);
  };
}

export default {
  ZGrid,
  ZColumn,
};
