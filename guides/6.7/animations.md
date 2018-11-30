# Animations

This guide shows you how to animate view transitions using ExtReact.

## The `Transition` Component

When using a client-side router like [react-router](https://github.com/ReactTraining/react-router), it's common to animate transitions between routes.  You can use the Transition component for this purpose.  When the child element of a `Transition` is swapped, the old child is animated out while the new child is animated in.  For example:

```jsx
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Transition } from '@sencha/ext-react-transition';
import Events from './Steps';
import Speakers from '/Speakers';

export default function Routes() {
  return (
    <Transition>
      <Switch>
        <Route path="/speakers" component={Speakers}/>
        <Route path="/events" component={Events}/>
      </Switch>
    </Transition>
  )
}
```

By default, `Transition` uses a slide animation.  Other animations can be used by setting the `type` prop to one of the following:

* slide - incoming component slides in while outgoing slides out
* cover - incoming component slides in over the outgoing component
* reveal - outgoing component slides out to reveal the incoming component
* fade - incoming and outgoing components cross-fade
* pop - incoming component expands as the outgoing component collapses

The `duration`, `direction`, and `easing` can also be configured.  Here is an example which cross-fades the transition over 500ms using ease-in:

```jsx
<Transition type="fade" duration={500} easing="ease-in">
  <Switch>
    <Route path="/speakers" component={Speakers}/>
    <Route path="/events" component={Events}/>
  </Switch>
</Transition>
```
### Direction

By default, `Transition` determines the direction of animation based on the current and previous routes. This helps create a drill-down effect when using a master-detail design.  For example, when animating the following transition, the new component will slide in from the right:

```
/events => /events/1
```

When navigating in reverse, the new component will slide in from the right:

```
/events/1 => /events
```

This behavior can be turned off by setting the `bindDirectionToLocation` prop to `false`.

## Card Layout

`Container` components configured with `layout="card"` will animate when switching cards.  For example:

```jsx
<Container layout="card" activeItem="step-1">
  <Panel title="Step 1" itemId="step-1">...</Panel>
  <Panel title="Step 2" itemId="step-2">...</Panel>
</Container>
```

By default, card layout uses a slide animation and determines the direction based on the relative indexes of the incoming and outgoing cards.  The animation can be configured by providing an `animation` config in the value of the `layout` prop.  Here is an example that uses a fade animation over 500ms with ease-in:

```jsx
<Container
  layout={{
    type: 'card',
    animation: {
      type: 'fade',
      duration: 500,
      easing: 'ease-in'
    }
  }}
  activeItem="step-1"
>
  <Panel title="Step 1" itemId="step-1">...</Panel>
  <Panel title="Step 2" itemId="step-2">...</Panel>
</Container>
```
