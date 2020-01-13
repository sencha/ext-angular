
ExtAngular

## Steps to create a new theme

In root of new app - Generate new theme
```
npx ext-angular generate theme --name my-theme
```

in webpack.config.js
```javascript
new ExtWebpackPlugin({
  framework: 'angular',
  toolkit: 'modern',
  theme: 'my-theme'
})
```

Go to newly created theme folder
```
cd ext-angular/packages/my-theme
```

Create a theme file and add a variable
```
cd sass/src
mkdir Ext
cd Ext
touch Component.scss
```
in Component.scss (save the file after editing)
```
$base-color: blue;
```

at the root of the app, start application in development mode

```
npm start
```

make a change in Component.scss (save the file after editing)
```
$base-color: red;
```

app should now have red titlebar