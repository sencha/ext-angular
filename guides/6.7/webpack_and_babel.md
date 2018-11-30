# Configuring Webpack and Babel

Sencha recommends using [Webpack 4+](https://webpack.github.io/) to build your ExtReact application.  ExtReact includes a webpack plugin that bundles and optimizes the ExtReact components used in your application.  This guide documents the configuration options for that plugin.

## Installation

First, install the ExtReact webpack plugins from Sencha's NPM registry:

```
npm install --save-dev @sencha/ext-react-webpack-plugin
```

Then, import it into your webpack configuration:

```javascript
const ExtReactWebpackPlugin = require('@sencha/ext-react-webpack-plugin');

module.exports = {
  ...
  plugins: [
    ...
    new ExtReactWebpackPlugin({
      port:port,
    }),
    ...
  ]
  ...
}
```

## Webpack Plugin Configuration

ExtReactWebpackPlugin's constructor accepts a configuration object with several settings.  

### Common Options

#### production

*default: false*

Set to true when creating a production build to compress and optimize the ExtReact bundle.  Defaults to `false`.

#### theme

*default: "theme-material"*

The name of one of the built-in ExtReact themes:

* theme-material
* theme-ios
* theme-triton
* theme-neptune

You can also specify the name of a custom theme located in `ext-react/packages` or the path to a custom theme.  For example, to use a custom theme located at `ext-react/packages/custom-theme`:

```javascript
new ExtReactWebpackPlugin({
  theme: 'custom-theme'
})
```

#### overrides

An array of directories containing Ext JS overrides to include in the bundle. For example:

```javascript
new ExtReactWebpackPlugin({
  overrides: ['./ext-react/overrides']
})
```

#### output

*default: "ext-react"*

The path to the directory where bundle should be written relative the build directory.

    
# Configuring Babel

In order to build your application, `@sencha/ext-react-babel-plugin` must be included in your babel configuration and __ES6 module transpilation must be turned off__.  Here is an example .babelrc:

```javascript
{
  "presets": [
    [ "es2015", { "modules": false } ],
    "stage-2",
    "react"
  ],
  "plugins": [
    "@sencha/ext-react-babel-plugin"
  ]
}
```

# Configuring TypeScript

Apps that use TypeScript should also use `@sencha/ext-react-babel-plugin`.  In your webpack config, add `babel-loader` to your rule for ts|tsx files:

```javascript
{
  test: /\.(ts|tsx)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        "plugins": [
          "@sencha/ext-react-babel-plugin"
        ]
      }
    },
    {
      loader: 'awesome-typescript-loader'
    }
  ]
}
```

Then, in your tsconfig.json, set the "module" config to "es2015".  Here is an example tsconfig.json 

```javascript
{
  "compilerOptions": {
    "sourceMap": true,
    "target": "es5",
    "jsx": "react",
    "module": "es2015",
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "declaration": false,
    "noImplicitAny": false,
    "noImplicitReturns": false,
    "removeComments": true,
    "strictNullChecks": false,
    "outDir": "build",
    "lib": [
      "es6",
      "es7",
      "dom"
    ]
  },
  "exclude": [
    "dist",
    "build",
    "node_modules"
  ]
}
```
