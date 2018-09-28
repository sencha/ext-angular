# ext-webpack-plugin

A [Webpack](https://webpack.js.org/) plugin for [Sencha EXTJS](https://www.sencha.com/products/extjs) applications to watch the file changes during development.

## Installation

Install [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install --save-dev @extjs/ext-webpack-plugin
```

## Usage

In your webpack configuration, 

```js
const ExtWebpackPlugin = require('@extjs/ext-webpack-plugin');

...

module.exports = function (env) {
  return {
    ...

    plugins: [
      new ExtWebpackPlugin
      ...
    ]
  }
}

```

This will be included in your webpack configuration if you generate the application using [@extjs/ext-gen](https://github.com/sencha/extjs-reactor/tree/2.0.x-dev/packages/ext-gen)
