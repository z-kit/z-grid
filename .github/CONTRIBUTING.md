# <a name="contributing-guide"></a> Contributing guide

Hello fellow developer!

Contributions are welcome. This guide will help you understand how the project is structured and how it works. Please take a time to read it before issuing contributions.

## <a name="toc"></a> Table of contents

- [Contributing guide](#contributing-guide)
- [Table of contents](#toc)
- [What is z-kit](#what-is)
- [Structure](#structure)
- [Building](#building)
- [Running the local demo](#demo)
- [Testing](#testing)
  - [Unit tests](#unit)
  - [Regressiont tests](#regression)
  - [CI](#ci)
- [The dist directory](#dist)
- [Publishing](#publishing)
- [Finding bugs](#bugs)
- [Filing pull requests](#pull-requests)

## <a name="what-is"></a> What is z-kit?

z-kit is a collection of simple UI components for the web and react-native.

Each `z-*` component has it's own repository and functionality. This way people can require only what they need and easily understand what's included in the package.

Components are simple and reusable UI parts that you can use in your project.

z-components are intended to be simple and pure, which means they aren't stateful and don't produce side-effects. You can create complex components by combining multiple z-components into a bigger component in your application.

To know more about the philosophy behind z-components please take a look at the general [guide](https://github.com/z-kit/guide).

## <a name="structure"></a> Structure

Each z-components exports three types of components. The developer should choose one to use depending on their application structure.

- **CSS component**: A simple collection of CSS classes that style an HTML element to reproduce the expected behavior. Easy to use, most browsers support it, zero dependencies required.
- **Stateless Functional Component (SFC)**: For a lack of a better name. It represents a component that is compatible with a JS render function such as React's.
It turns out there are many libraries compatible with this kind of component such as Preact, Inferno, React Lite and so on. The render function need to be injected in this case, no dependencies are assumed, the developer must provide it.
There is a caveat: to load the CSS styling you must use a bundler that supports the `requiring` of CSS, such as Webpack.
- **Web component**: The Web component per [spec](https://www.w3.org/standards/techs/components#w3c_all). This one depends on modern browsers but is very easy to use as, once imported, it behaves just like any other HTML tag.

The developer working in the source code should look for the `src` folder:

- The `style.module.css` file contains all the CSS styling that one need to render the component.
- The `component.js` file exports the SFC.
- The `webcomponent` subdirectory contains code that ultimately represent the Web Component.

## <a name="building"></a> Building

To build the project you need basically two dependencies pre-installed:

- [Node.js](https://nodejs.org/)
- [NPM](https://npmjs.com) - Comes included with most node.js bundles.

Then you are ready to clone this repo and run `npm install` to get every dependency installed.

Installing the dependencies should automatically run the build steps, to run it manually always use:

```bash
npm run build
```

## <a name="demo"></a> Running the local demo

A local demo is available to run with [storybook](https://getstorybook.io/).

To check it out run:

```bash
npm start 
```

The server should be up. The address is `http://localhost:6006/`.

## <a name="testing"></a> Testing

We strive to maintain a good level of testability and coverage of the source code.

To run all the tests simply run `npm test`.

It is recommended to add and/or check tests when modifying the source code. Tests are located inside the `test` directory.

We basically have to types of tests: unit tests and regression tests.

### <a name="unit"></a> Unit tests

Test basic rendering of the SFC, using React as the test renderer.

Run the unit tests with:

```bash
npm run unit-test
```

### <a name="regression"></a> Regression tests

Test the component from the browser perspective, to see if they render correctly and comply with the [guide](https://github.com/z-kit/guide).

We use [selenium](https://github.com/SeleniumHQ/selenium) here, so you may need Java installed on your computer to run the regression tests.
Selenium dependencies are downloaded automatically by the package scripts.

Run the regression tests with:

```bash
npm run regression-test
```

### <a name="ci"></a> CI

We use [Travis CI](https://travis-ci.org/) in this project to keep track of builds and run tests before releasing.

The current build status is available [here](https://travis-ci.org/z-kit/z-grid).

## <a name="dist"></a> The dist directory

It is not available when cloning, you must build the project to create the `dist` directory.

Inside this directory are the production-ready files that application developer import/require.

Source maps are available to make easier to debug the package in production.

## <a name="publishing"></a> Publishing

The package is available on npm. To publish run:

```bash
npm publish
```

Please make sure the package is passing all the tests, builds correctly and follows [semver](http://semver.org/) before publishing.

Note that you need to be an authorized user to do this.

## <a name="bugs"></a> Finding bugs

Oh snap! You found a bug? No problem, you can open the issue on GitHub.

There is a template issue available, we suggest you to use it so we can keep a pattern to find and reproduce bugs faster.

## <a name="pull-requests"></a> Filing pull requests

Wanna send some code? Open a pull request! There is a template to get you started.