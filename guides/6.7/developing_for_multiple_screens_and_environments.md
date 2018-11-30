# Developing for Multiple Environments and Screens

ExtReact helps developers provide a great user experience across all devices and screen sizes.  This guide explains how you can implement responsive and adaptive designs using ExtReact to create the right ui for every environment.

## The `fullscreen` config

Most apps that use ExtReact are single-page applications that occupy the full height and width of the browser window.  To acheive this, the root ExtReact component in your app should be configured with the `fullscreen` prop set to `true`.  For example:

```javascript
import { Container } from '@sencha/ext-modern';

export default function App() {
  return (
    <Container fullscreen>
      ...
    </Container>
  )
}
```

## Flexible Layouts

ExtReact provides the following layouts that automatically adjust the size of child elements based on the available space:

* `fit` - Sizes a single child element so that it fills 100% of the height and width of the parent.
* `box` - Children are sized  proportionally based on the relative values of their `flex` props.
* `hbox` - A subclass of box layout with horizontal alignment.
* `vbox` - A subclass of box layout with vertical alignment.

For example, to divide the available horizontal space between two components evenly: 

```jsx
import { Container } from '@sencha/ext-modern';

function App() {
  return (
    <Container layout="hbox">
      <Panel title="Left" flex={1}>...</Panel>
      <Panel title="Right" flex={1}>...</Panel>
    </Container>
  )
}
```

You can also fix the size of some children while allowing the others to fill the remaining space:

```jsx
<Container layout="hbox">
  <Panel title="Left" width={300}>...</Panel>
  <Panel title="Right" flex={1}>...</Panel>
</Container>
```
 
Or, allow a child to grow or shrink to a specific size and no further:

```jsx
<Container layout="hbox">
  <Panel title="Left" maxWidth={500} flex={1}>...</Panel>
  <Panel title="Right" flex={1}>...</Panel>
</Container>
```

Use relative flex values to designate a proportional amount of space for each child.  For example, to give 1/3 of the horizontal space to the left panel and 2/3 to the right panel:

```jsx
<Container layout="hbox">
  <Panel title="Left" flex={1}>...</Panel>
  <Panel title="Right" flex={2}>...</Panel>
</Container>
```

## Platform Queries

ExtReact lets you adapt your UI to the user's device type and platform:

### `Ext.platformTags`

You can use [`Ext.platformTags`](../modern/Ext.html#property-platformTags) to check the platform on which your app is running.  Here is an example that displays separate UI components when running on phones:

```jsx
function App(props) {
  if (Ext.platformTags.phone) {
    return <PhoneUI/>
  } else {
    return <DesktopUI/>
  }
}
```

You can also check for specific browsers, for example: `Ext.platformTags.safari`, or operating systems: `Ext.platformTags.android`.

To check for a specific os version, use [`Ext.os.version`](../modern/Ext.os.html#property-version).

### The `platformConfig` prop

You can specify different props for different environments using the `platformConfig` prop.  Here is an example that uses a vertical layout on a phone and a horizontal layout on all other environments:

```jsx
import { Container } from '@sencha/ext-modern';

function App() {
  return (
    <Container 
      layout="hbox"
      platformConfig={{
        "phone": {
          layout: 'vbox'
        }
      }}
    >
      ...
    </Container>
  )
}
```

You can use negation ("!") to target all environments except a specific one.  The `Container` in the example above could also be written as:

```jsx
<Container 
  layout="vbox"
  platformConfig={{
    "!phone": {
      layout: 'hbox'
    }
  }}
>
  ...
</Container>
```

or 

```jsx
<Container 
  platformConfig={{
    "phone": {
      layout: 'vbox'
    },
    "!phone": {
      layout: 'hbox'
    }
  }}
>
  ...
</Container>
```

or, using `Ext.platformTags`: 

```jsx
<Container layout={Ext.platformTags.phone ? 'vbox' : 'hbox'}>
  ...
</Container>
```

## Responsive Props

You can provide different props based on screen size using the [`responsiveConfig`](http://docs.sencha.com/extreact/6.5.1/modern/Ext.mixin.Responsive.html#cfg-responsiveConfig) prop. When using `responsiveConfig`, the UI is automatically updated when the user rotates or resizes the browser window.

For example, to abbreviate the title of a panel when the screen is less than 600 pixels wide:

```jsx
import { Panel } from '@sencha/ext-modern';

function App() {
  return (
    <Panel 
      responsiveConfig={{
        'width >= 600': {
          title: 'Manufacturing Summary'
        },
        'width < 600': {
          title: 'Mfg Summary'
        }
      }}
    >
      ...
    </Panel>
  )
}
```

To make use of the `responsiveConfig` prop, make sure it is required somewhere in your app with `Ext.require`:

```jsx
// App.js

Ext.require('Ext.plugin.Responsive');
```

You can also set different props for landscape and portrait.  Here is an example that abbreviates the panel title when the device is in portrait orientation.

```jsx
<Container 
  responsiveConfig={{
    landscape: {
      title: 'Manufacturing Summary'
    },
    portrait: {
      title: 'Mfg Summary'
    }
  }}
>
	...
</Container>
```

The `responsiveConfig` prop also accepts platformTags.  For example:

```jsx
<Container 
  platformConfig={{
    "phone": {
      layout: 'vbox'
    },
    "!phone": {
      layout: 'hbox'
    }
  }}
>
	...
</Container>
```

You can share responsive formulas between all of your components by defining them in a separate module:

```jsx
// responsiveFormulas.js
export const xsmall = "width <= 576";
export const small = "width <= 768";
export const medium = "width <= 992";
export const large = "width <= 1200";
export const xlarge = "width > 1200";
```

And importing them into your responsive components:

```jsx
// MyComponent.js
import { small, xsmall } from './responsiveFormulas';

export default function MyComponent(props) {
  return (
    <Panel 
      responsiveConfig={{
        true: {
          title: 'Summary of Manufacturing'
        }
        [small]: {
          title: 'Manufacturing Summary'
        },
        [xsmall]: {
          title: 'Mfg Summary'
        }
      }}
    >
      ...
    </Panel>
  )
}
```

Here we use a value of `true` for the first key to provide a default title.

You can also define your own custom formulas as functions.  For example, we can define a responsive formula for weekend days:

```jsx
// responsiveFormulas.js
...
export const weekends = (context) => {
  const today = new Date().getDay();
  return today === 0 || today === 6
} 
```

When defining your own responsive formula functions, import them as an object and assign them to the component's `responsiveFormulas` prop.  Then refer to each formula by name in the `responsiveConfig` prop:

```jsx
// MyComponent.js
import * as responsiveFormulas from './responsiveFormulas';

export default function MyComponent(props) {
  return (
    <Panel 
      responsiveFormulas={responsiveFormulas}
      responsiveConfig={{
        true: {
          title: 'Summary of Manufacturing'
        }
        small: {
          title: 'Manufacturing Summary'
        },
        weekends: {
          title: "Go home, it's a weekend!"
        }
      }}
    >
      ...
    </Panel>
  )
}
```

The `responsiveConfig` prop is provided by the [responsive plugin](http://docs.sencha.com/extreact/6.6.0/modern/Ext.plugin.Responsive.html), which is automatically added to any ExtReact component with a `responsiveConfig` prop.
