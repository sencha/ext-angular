
ExtAngular

## Steps to create a new theme

In root of new app - Generate new theme
```npx ext-react generate theme --name my-theme
```

in webpack.config.js
```javascript
new ExtReactWebpackPlugin({
  theme: 'mt-theme' 
})
```

```npm start
```

Go to newly created theme folder
```cd ext-angular/packages/my-theme
```

Create a theme file and add a variable
```cd /sass/src
mkdir Ext
cd Ext
touch Component.scss
```
in Component.scss
```
$base-color: blue;
```