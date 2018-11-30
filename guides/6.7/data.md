# The ExtReact Data Package

Many of the components in ExtReact that handle large volumes of data such as grids and charts use classes from the ExtReact data package to load, sort, filter, and prepare data for display.  This guide explains the basics of using the ExtReact data package.

## `Ext.data.Store`

The `Ext.data.Store` class is used to load data into grids, trees, lists, charts, D3 visualizations and more.  This example shows the typical usage of `Ext.data.Store` with `Grid`:

```jsx
import React, { Component } from 'react';
import { ExtReact } from '@sencha/ext-react';
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
      <ExtReact>
        <Grid title="Users" store={this.store}>
          <Column text="Name" dataIndex="name"/>
          <Column text="Email" dataIndex="email"/>
        </Grid>
      </ExtReact>	
    )
  }

}
```

A store can either be configured with `fields` array or a `model`.  The example above uses inline data via the `data` config.  In most real-world applications, you'll configure your store with a `proxy` to fetch data from the server.

## `Ext.data.Proxy`

A store can fetch data from the server by setting the `proxy` config, which takes config options for a subclass of `Ext.data.proxy.Proxy`.  We can modify the store in the previous example to fetch data from `users.json` using `Ext.data.proxy.Ajax`:

```jsx
store = Ext.create('Ext.data.Store', {
  fields: ['name', 'email'],
  autoLoad: true,
  proxy: {
    type: 'ajax', // refers to the alias "proxy.ajax" on Ext.data.proxy.Ajax
    url: 'users.json'
  }
})
```

Here we've set the `autoLoad` config to true to fetch data immediately as soon as the store is created.  We could also set `autoLoad: false` and fetch the data later by calling:

```jsx
this.store.load();
```

### Sorting

You can sort the data in a store by specifying a `sorters` config:

```jsx
store = Ext.create('Ext.data.Store', {
  fields: ['name', 'email'],
  autoLoad: true,
  proxy: {
    type: 'ajax', // refers to the alias "proxy.ajax" on Ext.data.proxy.Ajax
    url: 'users.json'
  },
  sorters: [{
    property: 'email',
    direction: 'ASC'
  }]
})
```

Or by calling the sort method:

```jsx
this.store.sort([{
  property: 'email',
  direction: 'ASC'
}])
```

By default, sorting is done on the client.  You can configure server-side sorting by setting `remoteSort: true` on the store. When `remoteSort` is set to `true`, the proxy will send the sorters config as a parameter with each request.  For example:

```
users.json?sort=[{"property":"email","direction":"ASC"}]
```

### Filtering

You can filter the data in a store by specifying a `filters` config:

```jsx
store = Ext.create('Ext.data.Store', {
  fields: ['name', 'email'],
  autoLoad: true,
  proxy: {
    type: 'ajax', // refers to the alias "proxy.ajax" on Ext.data.proxy.Ajax
    url: 'users.json'
  },
  filters: [{
    property: 'email',
    value: /@sencha.com$/
  }]
})
```

Or use a custom filter function:

```jsx
filters: [{
  filterFn: record => record.get('email').match(/@sencha.com$/i)
}]
```

We can also filter the data in the store by calling the `filterBy` method:

```jsx
this.store.filterBy(record => record.get('email').match(/@sencha.com$/i));
```

We can remove any existing filters by calling:

```jsx
this.store.clearFilters();
```

As with sorting, filtering is, by default, done on the client.  We can set `remoteFilter: true` to filter on the server.  When `remoteFilter` is set to `true`, the `filters` config will be sent as a parameter with each request.  For example:

```
users.json?filter=[{"property":"email","value":"@sencha.com"}]
```

## Chaining Stores

When a store is filtered or sorted, all components that use it refresh automatically.  Sometimes we want to show all of the data in one component, while showing a subset of the data in another component.  We can do that by using `Ext.data.ChainedStore`.

For example, we could display all users in one grid, and only users in a particular domain in another:

```jsx
const allUsers = Ext.create('Ext.data.Store', {
  autoLoad: true,
  proxy: {
    type: 'ajax',
    url: 'users.json'
  }
});

const senchaUsers = Ext.create('Ext.data.ChainedStore', { 
  source: allUsers, 
  filters: [{ 
    property: 'email', 
    value: '@sencha.com' 
  }] 
});

function MyView() {
  return (
    <Container layout="vbox">
      <Grid title="All Users" store={allUsers}>
        ...
      </Grid>
      <Grid title="Sencha Users" store={senchaUsers}>
        ...
      </Grid>
    </Container>
  )
}
```

## `Ext.data.Model`

A store can either be configured with a `fields` array or a `model`.  In fact, specifying a `fields` array creates an implicit model.  Models allow you to reuse a set of fields across multiple stores.  Models also give us a way to define reusable logic for interpreting data.  Here's an example that defines a model:

```jsx
Ext.define('MyApp.model.User', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'email', type: 'string' },
    { name: 'age', type: 'integer' },
    { name: 'active', type: 'boolean', defaultValue: true, convert: value => value == 'Yes' }
  ]
});
```

In the example above, we use the `convert` config to handle a custom data format, in this case converting "Yes" to `true` and all other values to `false`.

Note that the first argument to `Ext.define` (in this case "MyApp.model.User") is the name of the class we want to create.  It will be exported as a global. If we don't want to export a global we can simply specify `null` as the first argument.  For example:

```jsx
export default Ext.define(null, {
  extend: 'Ext.data.Model',
  ...
})
```

### Calculated Fields

Models can defined fields whose values are calculated from other fields.  For example:

```jsx
Ext.define('MyApp.model.Substance', {
  fields: [{
    name: 'volume',
    type: 'float'
  }, {
    name: 'mass',
    type: 'float'
  }, { 
    name: 'density',
    calculate: ({ volume, mass }) => volume / mass
  }]
})
```

### Accessing Field Data

We can access the value of a model field using the get method:

```jsx
record.get('email');
```

All of the concrete (non-calculated) fields are available via the `data` property:

```jsx
const { name, email } = record.data;
```
