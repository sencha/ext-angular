# Layouts

ExtReact offers a number of layouts to control the sizing and positioning of components in your app.  Assign a layout by setting the [[modern:Ext.Container#layout layout]] prop on components derived from [[modern:Ext.Container Container]].  The value of the layout prop can either be a string:

```jsx
<Container layout="vbox">
  ...
</Container>
```

... or an object with `type` and other configs:

```jsx
<Container layout={{ type: 'vbox', align: 'center', pack: 'space-between' }}>
  ...
</Container>
```

You can see all of the layouts in action in the [ExtReact Kitchensink](http://examples.sencha.com/extreact/6.6.0/examples/#/components/layouts)

## `hbox`

The hbox layout positions items horizontally.  Children are sized proportionally based on the relative values of their `flex` prop.

<img src="images/hbox.jpg"/>

To acheive the relative widths depicted above, with the child on the right occupying twice the space of the child on the left, your code would look like:

```jsx
<Container layout="hbox">
  <Container flex={1}/>
  <Container flex={2}/>
</Container>
```

You can also assign a `width` prop to either child:

```jsx
<Container layout="hbox">
  <Container width={200}/>
  <Container flex={1}/>
</Container>
```

... or use a combination of `minWidth`, `maxWidth`, and flex to allow a child to grow and shrink within a given size range when the parent container is resized:

```jsx
<Container layout="hbox">
  <Container minWidth={200} maxWidth={300} flex={1}/>
  <Container flex={2}/>
</Container>
```

If none of the children have a `flex` prop, or their maxWidths prevent them from filling the parent container, they will be positioned on the left side of the parent container by default.  You can change this behavior by setting the `pack` config.  Here is an example that spaces children evenly apart to fill the parent container:

```jsx
<Container layout={{ type: 'hbox', pack: 'space-between' }}>
  <Container flex={1}/>
  <Container flex={2}/>
</Container>
```

By default, each child fills the vertical space of the parent container. You can change this behavior by setting the `align` config: Here is an example that aligns children at the top of parent, each taking up the minimum height based on their content:

```jsx
<Container layout={{ type: 'hbox', align: 'top' }}>
  <Container flex={1}/>
  <Container flex={2}/>
</Container>
```

## `vbox`

The `vbox` layout is similar to the `hbox` layout.  With `vbox`, children are positioned vertically.  The `align` and `pack` configs control horizontal alignment and vertical spacing, respectively.

<img src="images/vbox.jpg"/>

```jsx
<Container layout="vbox">
  <Container flex={1}/>
  <Container flex={2}/>
</Container>
```

## `card`

A container with a `card` layout shows only one of its children at a time. Each child fills the full height and width of the parent container.

<img src="images/card.jpg"/>

Here the gray box is the Container and the blue box inside it is the currently active card. The three other cards are hidden from view, but can be swapped in later.

The card being shown is determined by the `activeItem` prop on the parent container.  Here is an example with 3 cards.  Only the second card is displayed:

```jsx
<Container layout="card" activeItem={1}>
  <Container/>
  <Container/>
  <Container/>
</Container>
```

The `activeItem` prop can either be a zero-based index or the `itemId` of a child.  The following is equivalent to the example above:

```jsx
<Container layout="card" activeItem="step-2">
  <Container itemId="step-1"/>
  <Container itemId="step-2"/>
  <Container itemId="step-3"/>
</Container>
```

### Animation

Transitions between cards can be animated by setting the `animation` config.  Here is an example that slides out the old card while sliding in the new one:

```jsx
<Container layout={{ type: 'card', animation: { type: 'slide' }}}>
  <Container/>
  <Container/>
  <Container/>
</Container>
```

The `duration` and `direction` of the animation are also configurable.

## `fit`

The `fit` layout fills the full height and width of the container with a single child component.

<img src="images/fit.jpg"/>

*_Note that if container with `layout="fit"` has more than one child, only the first child will be visible. If you want to switch between multiple items, use the `card` layout instead._

## Docking

Every layout is capable of docking children inside it. Docking enables you to place
additional components at the top, right, bottom, or left edges of the parent container,
resizing the other children as necessary.

For example, we can dock a component at the top of a container with an hbox layout:

<img src="images/docktop.jpg"/>

... using the following code ...

```jsx
<Container layout="hbox">
  <Toolbar docked="top">...</Toolbar>
  <Container flex={1}/>
  <Container flex={2}/>
</Container>
```

Children can be docked on any side, for example:

<img src="images/dockleft.jpg"/>

You can dock multiple children on each side. Docked children are ordered top to bottom or left to right depending on the side on which they are docked.

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
