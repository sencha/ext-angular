# Using ExtReact with create-react-app

While we recommend using ext-react-gen to create new ExtReact applications (see [Getting Started](getting_started.html#getting_started_-_creating_a_new_application)), some developers prefer to use [create-react-app](https://github.com/facebookincubator/create-react-app).  The guide covers the steps needed to do add ExtReact to an application created with create-react-app. (node: this is tested with version 1.5.2 of create-react-app)

## Ejecting

There is no way to add webpack or babel plugins to create-react-app.  Since ExtReact requires both, we must first [eject](https://github.com/facebookincubator/create-react-app#converting-to-a-custom-setup) to copy the default configuration into your project so it can be modified.  To eject, run the following in the root directory of your app.

```
npm run eject
```

## Adding ExtReact

Follow these steps to add ExtReact to your ejected app.  For reference, all of the changes needed to get ExtReact working after ejecting from create-react-app are captured in [this diff](https://github.com/sencha/ext-react-cra-eject/compare/after-eject...with-ext-react).

### 1. Install ExtReact Packages using npm

* Note, you must be signed into the Sencha NPM registry to access the ExtReact packages. See [Authenticating to Sencha's npm Registry](getting_started.html#getting_started_-_authenticating_to_sencha_s_npm_registry) for more information.

```
npm install --save @sencha/ext-react
npm install --save-dev babel-polyfill babel-preset-es2015 babel-preset-stage-2
npm install --save @sencha/ext @sencha/ext-modern @sencha/ext-modern-theme-material
npm install --save-dev @sencha/ext-react-webpack-plugin @sencha/ext-react-babel-plugin html-webpack-plugin
```

### 2. Configure Babel

In package.json, change the babel configuration to:

```json
"babel": {
  "presets": [
    [ "es2015", { "modules": false } ],
    "stage-2",
    "react"
  ],
  "plugins": [
    "@sencha/ext-react-babel-plugin"
  ]
},
```

### 3. Add ext-react-webpack-plugin to webpack config files

#### config/webpack.config.dev.js

Add the following to the top of config/webpack.config.dev.js:

```JavaScript
const ExtReactWebpackPlugin = require('@sencha/ext-react-webpack-plugin');
``` 

Then, add the following as the first entry under `plugins`:

```JavaScript
  new HtmlWebpackPlugin({
    template: 'index.html',
    hash: true
  }), 
  new ExtReactWebpackPlugin({
    port:port,
  }),
```

#### config/webpack.config.prod.js

Add the following to the top of config/webpack.config.prod.js:

```JavaScript
const ExtReactWebpackPlugin = require('@sencha/ext-react-webpack-plugin');
``` 

Then, add the following as the first entry under `plugins`:

```JavaScript

  new HtmlWebpackPlugin({
    template: 'index.html',
    hash: true
  }), 
  new ExtReactWebpackPlugin({
    port:'1962',
    production: true
  }),

```

### 4. Alter webpack dev server config

In webpackDevServer.config.js, change the `contentBase` value to:

```JavaScript
contentBase: [paths.appPublic, paths.appBuild],
```

### 5. Use Ext-React's `launch` function

In, src/index.js replace:

```JavaScript
import ReactDOM from 'react-dom';
```

with:

```JavaScript
import { launch } from '@sencha/ext-react';
import { ExtReact } from '@sencha/ext-react';
```

and replace

```JavaScript
ReactDOM.render(<App />, document.getElementById('root'))
```

with:

```JavaScript
launch(<ExtReact><App /></ExtReact>);
```

### 6. Remove the root div from index.html

Since Ext-React's launch function makes it's own viewport div, you can remove this line from src/index.html:

```HTML
<div id="root"></div>
```

### 7. Add .ext-reactrc to the root of your project

Since create-react-app uses separate webpack config files for development and production, we recommend putting
shared config options for ExtReactWebpackPlugin in a `.ext-reactrc` file in the root of your project.  For example, the following sets the output path for the ExtReact bundle to static/js/ext-react, to match the default output path set by create-react-app.

```json
{
    "output": "static/js/ext-react"
}
```

### 8. Add Ext as a global to the ESLint config

In package.json, add Ext as a global by changing the eslintConfig to:

```
"eslintConfig": {
  "extends": "react-app",
  "globals": {
    "Ext": true
  }
}
```

