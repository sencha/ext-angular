# Release Notes

## Release Notes ExtAngular 6.7

### Support Angular 7.x

ExtAngular 6.7 supports Angular 7.x which is ...

******************


When updating to React16, ExtReact developers need to update dependencies to 

```
"dependencies": {
	"@sencha/ext-react": "^6.6.0",
	"react": "^16.4.2",
	"react-dom": "^16.4.2",
	"react-router-dom": "^4.3.1"
```

When using with React v16 and above, developers need to add a new component called ExtReact at the root before using Ext JS component. Best way is to add it at the application’s entry point or launch method and then ExtJS Component can be used anywhere throughout application.

```
import { ExtReact } from '@sencha/ext-react';

const render = (Component, target) => {
  ReactDOM.render(
    <ExtReact>
      <App/>
    </ExtReact>,
    target
  )
}
```

### CMP Atrribute

Component refs can now accessed using .cmp attribute of the component. 

For example
```
this.refs.chart.cmp.getInteraction('panzoom').setZoomOnPan(zoomOnPan);
```

### Widget Cells
Widget Cells can are now used to include Ext JS widgets like button, progress bar, sparkline etc. in grid rows instead of using complex renderer methods. Renderer method can still be used to return html components.

For example
```
<Column text="Actions" flex={1} minWidth={210}>
  <WidgetCell>
    ...
  </WidgetCell>
</Column>
```
           
### Defaults

‘Defaults’ config used to set configs in child components is currently not available and developers need to provide the default values to each child component exclusively as their configs

### Updates to ExtReact Packages
The ExtReact packages are updated to support both Modern and Classic for 6.6 and the list is available on ExtReact docs. The ExtReact 6.6 allows to use both Modern and Classic components and hence package names will need to be updated to specify use of modern or classic components or themes. For example to update ExtReact 6.5 app, update dependencies

```
From
"dependencies": {
	"@extjs/ext-react": "^6.5.1",
...
With 
"dependencies": {
  "@sencha/ext": "~6.6.0", 
  "@sencha/ext-react-modern": "~6.6.0", 
  "@sencha/ext-react-modern-theme-material": "~6.6.0",
  "@sencha/ext-react": "~6.6.0",
```

### Support for Webpack 4

ExtReact 6.6 supports Webpack 4, a static module bundler for modern JavaScript applications. It helps to bundle all of the different modules and it packages them into one bundle or more bundles. Using webpack 4, now provides you up to a 98% decrease in build time for your projects thanks to performance improvements. Webpack 4 ships with a property called "mode" which allows you to easily set which environment you're working on, development and production
```
"devDependencies": {
  …
  "html-webpack-plugin": "^3.2.0",
  "webpack": "^4.17.1",
  "webpack-cli": "^3.1.0",
  "webpack-dev-server": "^3.1.7"
```

### New ext-react-gen

If you are new to React, or do not have an existing application, we recommend using ext-react-gen to create a new ExtReact app:

```
npm install -g  @sencha/ext-react-gen
ext-react-gen app your-app-name-here -i
```

The ext-react-gen generator will ask if you'd like to include some example code in your app.  If this is your first time using ExtReact, we suggest to you include the example code so that you can see how some of the more common components work.

### New UI Components

ExtReact 6.6 provides you new components time panel, time field and gauges components with needles. With every new component, you have access to all of the component configs as React props, respond to events, and use one of the handy dockable flexible layouts.

### Time Panel

Time Panel is a new component that provides a very easy way of selecting time using the analog clock face. The component will automatically advance to minutes after selecting an hour value. There are multiple configuration options to set the alignment and mode of the analog clock. Time panel will reposition the time header based on the orientation of the device.
```
render() {
  return (
    <Container padding={Ext.os.is.Phone ? 0 : 10} layout="fit">
      <TimePanel shadow/>
    </Container>
  )
}
```

### Time Field

Time Field is a new modern component that provides a time input field with automatic time validation. The component supports multiple time formats and the default depends on the chosen locale. Time field can use time picker to provide an easy way to select time.
```
render() {
  return (
  ...
  <FieldSet ref="personal" title="Time Field Example defaults={{labelAlign: "placeholder"}}>
    <TimeField required label="Time Field" value="3:42 PM" name="time" disabled={disabled}/>
  </FieldSet>
  )
}
...
```

### Gauges components with Needles

Gauges components are very useful to show interval values and now support the ability to enhance gauges with various needle types. The common needle type uses in applications are wedge, diamond, spike, and arrow.  

```
render() {
  return (
    <Gauge flex={1} value={value} 
      needle={{
        type: 'arrow',
        innerRadius: 0
      }} 
      textOffset={ {
        dy: 45
      }}
    />
  )
}
```

### Support for Classic Components 
ExtReact 6.6 provides you option to use Classic components in your React applications. You can import classic components by

```
import { Panel, Button } from '@sencha/ext-classic';
```

You can install Classic accessibility Graphite theme by

``` 
npm install --save @sencha/ext-classic-theme-graphite
```

### Support for Latest Component Enhancements

ExtReact 6.6 includes material design changes to multiple components, enhancements to Charts, Forms, Menus, Tree, Calendar, Pivot grid, and Grid. Grid in particular has more than 24+ performance improvements and has a better way of handing selection events and classic grid has improvements in store bindings. 

### Support for ExtReact 6.6 in Fiddle

[Sencha Fiddle](https://fiddle.sencha.com/?extreact#home) is updated so you can try ExtReact 6.6 code in your browser without downloading or installing anything. You can easily share your ExtReact code by saving and sharing fiddle URLs.

### Themer 1.3.3 Support

ExtReact components are themable without having to write any code, which is great for React developers. Material theme is popular amongst React developers and all ExtReact components have full support for Material theme. You can use Themer 1.3.3 to visually create uniquely themed components for your React application.
<br><br>




### Release Notes ExtReact 6.5.3 


Support for Ext JS 6.5.3 enhancements and new component - SplitButton 

### reactor-kitchensink

* Added  examples of the `SplitButton` component


### reactor 1.1.2

This release contains the following bug fixes:

* Function props are now properly rebound when updated during rendering. This fixes the issue posted [here in the ExtReact forum](http://www.sencha.com/forum/showthread.php?368632).
* Bug: "Variable isDelete undefined in ExtJSComponent#_mergeConfig." This caused an error when attempting to add or remove columns from a grid when rerendering.
* Bug: "TypeError: Object doesn't support property or method 'forEach' at Anonymous function". This error would show up in the debugger when using ExtReact in Edge or Internet Explorer.

Of these changes, the first has the most potential to impact existing code. ExtReact previously ignored updates to props whose values are functions (typically event handlers) when rerendering. While defining event handler functions inside of the render function is generally discouraged in react, it is still supported. 

Here is an example that illustrates the bug: 

```javascript
class Counter extends Component {
    state = { count: 0 };

    render() {
        const count = this.state.count

        return (
            <div>
                <p>{count}</p>
                <Button text="Go" handler={() => {
                    this.setState({count: count + 1})
                }}/>
            </div>
        )
    }
}
```

In this example, clicking the button should increment the displayed count each time. Each time render is called, the button's handler function should be updated. This was not the case in reactor 1.1.0. The count would get stuck at 1 due to the handler function not being updated. This is fixed in reactor 1.1.1.

This fix may cause your app to behave differently if it relies on handler functions not being updated during rerendering. Fixing this bug actually exposed a few issues in the ExtReact KitchenSink, which we've also fixed. We suggest you review your code to see if it inadvertently relies on this behavior. We also suggest defining handler functions using ES7 property initializers instead of defining them in the render function. For example, the example would be better written as:

```javascript
class Counter extends Component {
    state = {count: 0};

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        const count = this.state.count

        return (
            <div>
                <p>{count}</p>
                <Button text="Go" handler={this.incrementCount} />
            </div>
        )
    }
}
```

Finally, while reactor-webpack-plugin and reactor-babel-plugin have been updated to version 1.1.1 as well, no changes were made. We aim to keep the version numbers in sync for all reactor packages to avoid confusion about compatibility.


# Release Notes for ExtReact 6.5.1

Support for Ext JS 6.5.1 component enhancements

### reactor 1.1.0

* You can now render React components inside Grid cells using the `Column` component's 
`renderer` prop or the new `RendererCell` component. 
* The responsive plugin is automatically added to any ExtReact component with a 
`responsiveConfig` prop.
* The `launch` function now passes the viewport DOM element as a parameter to the 
callback function.  This makes it easier to use react-hot-loader.  See updated 
reactor-boilerplate for an example of this in action.
* New `renderWhenReady` higher-order component makes it easier to build libraries based 
on ExtReact.  When root ExtReact components are wrapped in `renderWhenReady`, the launch 
function is not needed as long as your app does not set the `fullscreen` prop to `true` 
on any components.
* Added support for react-test-renderer and jest. Boilerplate projects now use jest for 
the npm test script.
* You can now use component names in selectors when using Sencha Test
* Fixed a bug that caused new children added to the first position in an existing 
container to be rendered in the wrong position.
* Fixed a bug that prevented updates to the `className` prop from being applied to 
the DOM.
* Fixed a bug that caused incorrect component names to be rendered in React dev tools' 
virtual DOM view.
* Fixed a bug that prevented componentWillUnmount from being called on children of 
ExtReact components
* Fixed a bug that prevented componentWillUnmount from being called on components 
rendered by `tpl` prop callbacks

### reactor-webpack-plugin

* New `treeShaking` options allows you to disable tree shaking in development builds to 
improve build times.  When `treeShaking` is set to false, all ExtReact components are 
included in the build.

### generator-ext-react (Yeoman Generator)

* Typescript is now supported
* Jest is now supported when using JavaScript
* react-hot loader is now supported when using JavaScript
* You can omit example code to create a minimal starter app.
* Fixed a bug that prevented new projects from being created when `yo` is not 
installed globally
* The generated README.md is now customized based on yeoman input parameters.

### reactor-kitchensink

* Added more examples of the `Panel` component
* Added an example of a multi-step Wizard.
* All grid examples have been updated to use Column's `renderer` prop and `RendererCell` 
where applicable.

### Boilerplates

* Added react-hot-loader to reactor-boilerplate and reactor-modern-boilerplate
* All boilerplates now automatically find an open port starting with 8080.
* npm "prod" script now uses static-server instead of webpack-dev-server.
