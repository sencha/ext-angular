# Upgrade to ExtReact 6.6

This guide walks you through steps needed to update an ExtReact 6.5.3 generated app to ExtReact 6.6

## Update Package.json

### Step 1 - Update ExtReact to 6.6

In package.json, update 

```javascript
"dependencies": {
  "@extjs/ext-react": "^6.5.1",
  "@extjs/reactor": "^1.1.1",
...
```

with

```javascript
"dependencies": {
  "@sencha/ext": "~6.6.0", 
  "@sencha/ext-modern": "~6.6.0", 
  "@sencha/ext-react-transition": "~6.6.0",
  "@sencha/ext-modern-theme-material": "~6.6.0", 
  "@sencha/ext-react": "~6.6.0", 
...
```

### Step 2 - Update Babel and Webpack Plugins to 6.6

In package.json Update plugins babel, webpack 

```javascript
"devDependencies": {
  "@extjs/reactor-babel-plugin": "^1.1.1",
  "@extjs/reactor-webpack-plugin": "^1.1.1",
...
```

with

```javascript
"devDependencies": {
  "@sencha/ext-react-babel-plugin": "~6.6.0",
  "@sencha/ext-react-webpack-plugin": "~6.6.0",
...
```

### Step 3 - Update to React to 16


Update package.json

```javascript
"dependencies": {
  "react": "^15.5.4",
  "react-dom": "^15.5.4",
  "react-router-dom": "^4.1.1",
...
```

with

```javascript
"dependencies": {
  "react": "^16.4.2",
  "react-dom": "^16.4.2",
  "react-router-dom": "^4.3.1",
...
```

### Step 4 - Upgrade from webpack 2.0 to webpack 4.0

Update Package.json, with version numbers for following

```javascript
"devDependencies": {
  "webpack": "^2.5.1",
  "webpack-dev-server": "^2.4.1",

  "html-webpack-plugin": "^2.24.1",
...
```

to

```javascript
"devDependencies": {
  "webpack": "^4.17.1",
  "webpack-cli": "^3.1.0",
  "webpack-dev-server": "^3.1.7",

  "copy-webpack-plugin": "^4.5.2",
  "html-webpack-plugin": "^3.2.0",
  "webpack-shell-plugin": "^0.5.0",
  "portfinder": "^1.0.16",
...
```
Note: add webpack-cli as dependency (if not present) as shown

## Update Webpack config 

### Step 5 - Update webpack.config.js with port

Add a line to ExtReactWebpackPlugin with port
```javascript
const plugins = [
  new ExtReactWebpackPlugin({
    production: isProd,
    ...
  })
...
```

with

```
const plugins = [
  new HtmlWebpackPlugin({
    template: 'index.html',
    hash: true
  }), 
  new ExtReactWebpackPlugin({
    port: port,
    production: isProd,
    ...
  }),
...
```
Also Change

```javascript
const ExtReactWebpackPlugin = require('@extjs/reactor-webpack-plugin');
```

to

```javascript
const ExtReactWebpackPlugin = require('@sencha/ext-react-webpack-plugin');
```

### Step 6 - Upgrade webpack.config.js to add development mode

Update

```javascript
return {
  devtool: isProd ? 'source-map' : 'cheap-module-source-map',
  ...
```

with

```javascript
return {
  mode:"development",
  devtool: isProd ? 'source-map' : 'cheap-module-source-map',
  ...
```

### Step 7 - Remove OpenBrowserPlugin from webpack.config.js

Remove OpenBrowserPlugin from
```javascript
plugins.push(
  new HtmlWebpackPlugin({
    template: 'index.html',
    hash: true
  }), 
  new OpenBrowserPlugin({ 
    url: `http://localhost:${port}`
  })
...
);
```
so it will look as below
           
```javascript
plugins.push(
  new HtmlWebpackPlugin({
    template: 'index.html',
    hash: true
  }), 
...
);
```

## Update index.js 

### Step 8 - Update Index.js

add

```javascript
import { ExtReact } from '@sencha/ext-react';
```

modify

```javascript
import { launch } from '@extjs/reactor';
```

to

```javascript
import { launch } from '@sencha/ext-react';
```

and Update following

```javascript
const render = (Component, target) => {
  ReactDOM.render(
    <App>,
    target
  )
}
```

with

```javascript
const render = (Component, target) => {
  ReactDOM.render(
    <ExtReact>
      <App>
    </ExtReact>,
    target
  )
}
```

## Update .babelrc

### Step 9 - Update .babelrc

change

```javascript
"@extjs/reactor-babel-plugin",
```

to

```javascript
"@sencha/ext-react-babel-plugin",
````

Steps 10-13 are optional - depending on your application.

## Update About.js


### Step 10 - Update About.js


Change

```javascript
import { Container } from '@extjs/ext-react';
```

to

```javascript
import { Container } from '@sencha/ext-modern';
````

## Update Layout.js

### Step 11 - Update Layout.js

Update following

```javascript
import { Transition, Container, TitleBar, Button, Sheet, Panel } from '@extjs/ext-react';
```

With

```javascript
import { Container, TitleBar, Button, Sheet, Panel } from '@sencha/ext-modern';
import { Transition } from '@sencha/ext-react-transition';
````

## Update Home.js

### Step 12 - Update Home.js

Change

```javascript
import { Grid, Toolbar, Button, Column, SearchField } from '@extjs/ext-react';
```

to

```javascript
import { Grid, Toolbar, Button, Column, SearchField } from '@sencha/ext-modern';
````

## Update NavMenu.js

### Step 13 - Update NavMenu.js

Change

```javascript
import { TreeList } from '@extjs/ext-react';
```

to

```javascript
import { TreeList } from '@sencha/ext-modern';
````


### Step 14 - Install dependencies

```javascript
npm install
```


### Step 15 - Start the app

```javascript
npm start
```

Now you have upgraded your React application to use ExtReact 6.6, React 16, and Webpack 4. 
