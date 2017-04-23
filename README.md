# <a name="z-grid"></a> z-grid

[![Greenkeeper badge](https://badges.greenkeeper.io/z-kit/z-grid.svg)](https://greenkeeper.io/)

[![Build]](https://travis-ci.org/z-kit/z-grid) [![SemVer]](http://semver.org/) [![License]](LICENSE)

A 12-column grid system for your web application. The package is intended to be used in a web page.

## <a name="toc"></a> Table of contents

- [z-grid](#z-grid)
- [Table of contents](#toc)
- [Install](#install)
  - [Import as HTML/CSS component](#import-css)
  - [Import as Stateless Functional Component (SFC)](#import-sfc)
- [How to use](#howto)
  - [CSS component](#css)
  - [Stateless Functional Component](#sfc)
- [License](#license)

## <a name="install"></a> Install

The package is available to download through [npm](https://npmjs.com):

```bash
npm install z-grid --save
```

### <a name="import-css"></a> Import as HTML/CSS component

### The simple case

The package will be located inside the `node_modules` folder, you can import it into the HTML document as follows:

```html
<link rel="stylesheet" href="node_modules/z-grid/dist/style.css">
```

### When bundling an web app

**For bundlers that support CSS, like [Webpack](https://webpack.github.io/), you can use it like this:**

```javascript
require('z-grid/dist/style.css');
```

### <a name="import-sfc"></a> Import as a Stateless Functional Component (SFC)

The package does not include the renderer, you can use any renderer that supports SFCs. You could use React, Preact, Inferno, etc.

**Notice: This package contains CSS styling, you may need a bundler that's capable of requiring CSS files like Webpack with [css-loader](https://github.com/webpack/css-loader).**

Once you have chosen the renderer you can include the package in your project as follows:

```jsx
// Assuming the React renderer is being used
const React = require('react');
const render = require('react-dom').render;

// Passing the render function when importing
const ZGrid = require('z-grid').ZGrid(React.createElement);
const ZColumn = require('z-grid').ZColumn(React.createElement);

// Render it on page, using JSX here :)
render(<ZGrid><ZColumn>Hello!</ZColumn></ZGrid>, document.body);
```

## <a name="howto"></a> How to use

### <a name="css"></a> CSS component

Just add the HTML structure and CSS classes to reproduce the UI component.

### Class hierarchy

| Recommended HTML tags                         | Parent    | Class                     | Description                                                                             | Type     |
| --------------------------------------------- | --------- | ------------------------- | --------------------------------------------------------------------------------------- | -------- |
| `div`, `section`, `main`, `article`, `nav`    | `root`    | `.z-grid`                 | Root container                                                                          | Block    |
| Any containing `z.grid`                       | `root`    | `.z-grid--vertical`       | Makes the grid vertical instead of horizontal                                           | Modifier |
| Any containing `z.grid`                       | `root`    | `.z-grid--reverse`        | Reverses the grid start direction, starts it on the right for LTR and left for RTL      | Modifier |
| Any containing `z.grid`                       | `root`    | `.z-grid--center`         | Centers the grid horizontally within the outer element                                  | Modifier |
| Any containing `z.grid`                       | `root`    | `.z-grid--cross-center`   | Centers the grid vertically within the parent element                                   | Modifier |
| Any containing `z.grid`                       | `root`    | `.z-grid--stretch`        | Stretch the columns to fill all the available vertical space                            | Modifier |
| Any containing `z.grid`                       | `root`    | `.z-grid--gutter`         | Enables the grid gutters, adds spacing between columns                                  | Modifier |
| `div`, `section`, `article`, `ul`, `ol`, `li` | `.z-grid` | `.z-grid__col`            | A grid column                                                                           | Element  |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--1-12`      | One grid unit, column will occupy 1/12 of the grid space                                | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--2-12`      | This column will occupy 2/12 of the grid space                                          | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--3-12`      | This column will occupy 3/12 (quarter) of the grid space                                | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--4-12`      | This column will occupy 4/12 of the grid space                                          | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--5-12`      | This column will occupy 5/12 of the grid space                                          | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--6-12`      | This column will occupy 6/12 (half) of the grid space                                   | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--7-12`      | This column will occupy 7/12 of the grid space                                          | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--8-12`      | This column will occupy 8/12 of the grid space                                          | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--9-12`      | This column will occupy 9/12 of the grid space                                          | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--10-12`     | This column will occupy 10/12 of the grid space                                         | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--11-12`     | This column will occupy 11/12 of the grid space                                         | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--12-12`     | This column will occupy 12/12 (all) of the grid space                                   | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--sm-*-12`   | Same as `.z-grid__col--*-12` classes, but only effective for screens wider than 35.5rem | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--md-*-12`   | Same as `.z-grid__col--*-12` classes, but only effective for screens wider than 48rem   | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--lg-*-12`   | Same as `.z-grid__col--*-12` classes, but only effective for screens wider than 64rem   | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--xl-*-12`   | Same as `.z-grid__col--*-12` classes, but only effective for screens wider than 80rem   | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--fit`       | Special column that will stretch to fit the remaining space available                   | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--center`    | Center this column within the grid                                                      | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--end`       | Put this column at the end of the grid                                                  | Modifier |
| Any containing `.z-grid__col`                 | `.z-grid` | `.z-grid__col--important` | Overrides the order of the grid, put this column first                                  | Modifier |

#### Full working example:

```html
<div class="z-grid z-grid--gutter">
  <div class="z-grid__col--6-12">Half</div>
  <div class="z-grid__col--6-12">Half</div>
</div>
```

### <a name="sfc"></a> Stateless Functional Component

Render the HTML by using the SFCs and passing props.

#### ZGrid

##### Supported Props

| Prop name     | Expected Type         | Description                                                                        |
| ------------- | --------------------- | ---------------------------------------------------------------------------------- |
| `element`     | `string`              | The name of the HTML tag the grid should render as root element, defaults to `div` |
| `children`    | One or more `ZColumn` | The columns to render                                                              |
| `gutter`      | `boolean`             | Set to true to enable the gutters                                                  |
| `center`      | `boolean`             | Set to true to center the grid within the parent element                           |
| `crossCenter` | `boolean`             | Set to true to center the grid vertically within the parent element                |
| `reverse`     | `boolean`             | Set to true to start the grid from the end, right in LTR and left in RTL           |
| `stretch`     | `boolean`             | Set to true to stretch the columns to fill the remaining space in the grid         |


#### ZColumn

##### Supported Props

| Prop name   | Expected Type | Description                                                                        |
| ----------- | ------------- | ---------------------------------------------------------------------------------- |
| `element`   | `string`      | The name of the HTML tag the grid should render as root element, defaults to `div` |
| `children`  | `HTMLElement` | The column content                                                                 |
| `fill`      | `number`      | Number of grid units this column should occupy, max 12                             |
| `sm`        | `number`      | Number of grid units this column should occupy when grid width > 35.5rem           |
| `md`        | `number`      | Number of grid units this column should occupy when grid width > 48rem             |
| `lg`        | `number`      | Number of grid units this column should occupy when grid width > 64rem             |
| `xl`        | `number`      | Number of grid units this column should occupy when grid width > 80rem             |
| `fit`       | `boolean`     | Set to true to make this column fill the rest of the grid space                    |
| `center`    | `boolean`     | Set to true to center this column within the grid                                  |
| `end`       | `boolean`     | Set to true to make this column appear in the end of the grid                      |
| `important` | `boolean`     | Set to true to make this column override the grid order and appear first           |

#### Full example (JSX):

```jsx
<ZGrid gutter>
  <ZColumn fill={6}>Half</ZColumn>
  <ZColumn fill={6}>Half</ZColumn>
</ZGrid>
```

## <a name="license"></a> LICENSE

[MIT](LICENSE)

[Build]: https://img.shields.io/travis/z-kit/z-grid.svg
[SemVer]: https://img.shields.io/:semver-%E2%9C%93-brightgreen.svg
[License]: https://img.shields.io/npm/l/z-grid.svg