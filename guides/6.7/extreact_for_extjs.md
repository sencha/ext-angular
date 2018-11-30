# ExtReact for Ext JS Developers

ExtReact is built on top of the Ext JS modern toolkit.  This guide aims to help developers with Ext JS experience convert their knowledge to ExtReact.

## Importing Components

The `@sencha/ext-react` package makes all Ext JS classes with xtypes available as React components.  Component names are derived from the capitalized, camel-cased form of the xtype.  For example, `Ext.grid.Grid` has an xtype of `grid`, and can be imported thusly:

```jsx
import { Grid } from '@sencha/ext-modern';
```

Dashes in xtypes are be converted to underscores.  For example:

```jsx
import { D3_HeatMap } from '@sencha/ext-d3';
```

## Configuring Components

React props are converted to Ext JS configs.  Here's a typical use of `Ext.grid.Grid`:

```jsx
import React, { Component } from 'react';
import { Grid, Column } from '@sencha/ext-modern';

export default class UsersGrid extends Component {

  store = Ext.create('Ext.data.Store', {
    fields: ['name', 'email'],
    data: [
      { name: 'Tim Smith', email: 'tim101@gmail.com' },
      { name: 'Jill Lindsey', email: 'jlindsey890@gmail.com' }
    ]
  })

  render() {        
    return (
      <Grid title="Users" store={this.store}>
        <Column text="Name" dataIndex="name"/>
        <Column text="Email" dataIndex="email"/>
      </Grid>
    )
  }

}
```

In the example above, we set the Grid's `title` and `store` configs using props. We set the `columns` config using `Column` child elements instead of using the `columns` prop.  Both forms are acceptible, but we think that using child elements is more intuitive for React developers, so this is the form you'll see in all of our examples. ExtReact automatically knows to map certain child elements like `Column` to configs on the parent component.  Another example of this is `Menu`:

```jsx
<Button text="Options">
  <Menu>
    <MenuItem text="Options 1"/>
    <MenuItem text="Options 2"/>
    <MenuItem text="Options 3"/>
  </Menu>
</Button>
```

Which can also be written as:

```jsx
<Button 
  text="Options"
  menu={[
    { text: 'Option 1' },
    { text: 'Option 2' },
    { text: 'Option 3' }
  ]}
/>
```

## Handling Events

Any prop starting with "on" followed by a capital letter is automatically converted to an Ext JS event listener.  Since Ext JS events are all lower-case, case is not preserved.  You're free to use camel-case, which is common in React.

```jsx
import React, { Component } from 'react';
import { SliderField } from '@sencha/ext-modern';

export default function MyComponent() {
  return (
    <SliderField
      minValue={0}
      maxValue={100}
      onChange={(slider, value) => console.log(`Value set to ${value}`)}
    />
  )
}
```

Event handler props can also take an object with additional options:

```jsx
<Button 
  onPaint={{
    single: true, // handler will only be called once
    fn: () => {...}
  }}
/>
```

You can also use a listeners object as is common in traditional Ext JS:

```jsx
import React, { Component } from 'react';
import { SliderField } from '@sencha/ext-modern';

export default function MyComponent() {
  return (
    <SliderField
      minValue={0}
      maxValue={100}
      listeners={{
        change: (slider, value) => console.log(`Value set to ${value}`)
      }}
    />
  )
}
```

## Special Props

### `rel`

Any prop that takes a subclass of `Ext.Widget` can be replaced with a child element. To use a child element to replace a prop, 
set the child's `rel` prop to the name of the prop being replaced. For example, the `menu` prop on Button can be replaced with a child `<Menu>` element:

```jsx
<Button text="Theme">
  <Menu rel="menu">
    <MenuItem text="Triton"/>
    <MenuItem text="iOS"/>
    <MenuItem text="Material"/>
  </Menu>
</Button>
```

## The `ref` Prop

Refs point to Ext JS component instances:

```jsx
import React, { Component } from 'react';
import { SliderField } from '@sencha/ext-modern';

export default class MyComponent {
  render() {
    return (
      <SliderField
        ref={ slider => this.slider = slider }
        minValue={0}
        maxValue={100}
        onChange={() => this.onChange()}
      />
    )
  }

  onChange() {
    console.log('Slider value', this.slider.getValue()); // this.slider is an Ext.field.Slider
  }
}
```

### Using HTML Elements and Non-ExtReact Components Inside of ExtReact Components

HTML elements are wrapped in an `Ext.Component` instance when they appear within an ExtReact Component.  This is allows ExtReact layouts to correctly position non-ExtReact components.  For example...

```jsx
<Panel layout="hbox">
  <div>left</div>
  <div>right</div>
</Panel>
```
... will result in two divs side-by-side.  The component structure created is equivalent to:

```javascript
Ext.create({
  xtype: 'panel',
  layout: 'hbox'
  items: [{
    xtype: 'component',
    html: '<div>left</div>'
  }, {
    xtype: 'component',
    html: '<div>right</div>'
  }]
});
```

### Extending Ext JS Components

You can extend Ext JS component using Ext.define, just as you would in traditional Ext JS code.  Use the `reactify` function from `@sencha/ext-react` to convert a custom Ext JS component to a React component. For example:

```javascript
import { reactify } from '@sencha/ext-react';

const MyGrid = Ext.define('MyPackage.view.MyGrid', {
  extend: 'Ext.grid.Grid',
  ...
})

export default reactify(MyGrid);
```
