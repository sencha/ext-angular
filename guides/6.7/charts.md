# Introduction to Charting

The Chart package consists of a hierarchy of classes that provide data visualization 
functionality. These include series, axes, interactions, and mechanisms for implementing 
markers and legends. This guide provides an overview on how these classes are tied 
together and what functionality is included in each class. The following sections cover 
the specific axes, series, and interactions.

## The Chart Component Class

All types of Chart components are extended from the AbstractChart class, which extends 
[[ext:Ext.draw.Container]]. A Chart component is the container for managing series and
axes. It is responsible for laying out the series and axes every time the size is 
changed.  An implementation of the abstract class must override the `performLayout` 
method. For example, a Chart needs to respond to the changes of the thickness of the 
axes and recalculate the series area.

There are three types of charts:

+ **cartesian/chart** - Creates a Chart for series implementations that plot values 
    using cartesian coordinates.  Examples of this include Bar, Area, Scatter, and Line 
    charts.
+ **polar** - Creates a chart for series implementations that plot values using polar 
    coordinates.  Examples of this include Pie and Radial charts.
+ **spacefilling** - Creates a chart that fills the entire area of the chart.

Cartesian Charts are the most commonly used and are mapped to the xtype of **'chart'**.  Setting an `xtype` of 
**'chart'** makes the assumption that you want a **Bar**, **Line**, **Scatter**, or 
**Area** Chart.  Other types of Charts can be specified as **'polar'** or **'spacefilling'**.

###Chart Component Management

A Chart component manages the following items:

+ **Axes** - These are accessed through [[ext:Ext.chart.axis.Axis]] and represent all 
    the axes being defined and drawn for this visualization. This is a mixed collection.
+ **Series** - These are accessed through [[ext:Ext.chart.series.Series]] and represent 
    all the series being drawn for the chart. This could be line, bar, scatter, and so 
    on.  This is also a mixed collection.
+ **Interactions** - These are controllers that directly manipulate the series and axes 
    when certain events are recognized.
+ **Legend Store** - This represents the legend information collected from the series. 
    Normally you can attach a data list to this store and get automatically updated on 
    the legend information changes.

###Axes
We provide [[ext:Ext.chart.axis.Axis]] to represent all kinds of axes. The axis object 
works differently according to the its docking position. 

+ **left/right** - The axis is vertical.
+ **top/bottom** - The axis is horizontal.

Axes help series to map data values into coordinates. They are bound to the type of data 
that needs to be represented. 

+ **numeric** - the data attached to this axis is numeric and continuous.
+ **time** - the data attached to this axis is (or gets converted into) a date/time 
    value; it is continuous.
+ **category** - the data attached to this axis belongs to a finite set. The data points 
    are evenly placed along the axis.

The behavior of an axis can be easily changed by setting different types of axis 
[[ext:Ext.chart.axis.Axis#cfg-layout layout]] and axis 
[[ext:Ext.chart.axis.Axis#cfg-segmenter segmenter]] to the axis.

###Series
[[ext:Ext.chart.series.Series Series]] is an abstract class extended by concrete 
visualizations, such as Line Series, Bar Series, or Scatter Series.

The Series class itself contains code that is common to all of these series, such as 
event handling, highlighting, markers, labels, and so on.

The following sections describe available series types. It also shows a complete series 
configuration example, including the Chart, Axis, and Series options. For more specific 
information, see the Series documentation.

####Area
The [[ext:Ext.chart.series.Area Area]] series creates a stacked area Chart, which is 
typically used to display multiple aggregated layers of information. Similar to other 
series, the Area series must be added into the 
[[ext:Ext.chart.AbstractChart#cfg-series series]] config of the Chart.

You can specify multiple **y** fields on a stacked series such as Area series and Bar 
series.

    @example packages=[charts,reactor]
    import React, { Component } from 'react';
    import { Cartesian } from '@sencha/ext-charts';
    import { ExtReact } from '@sencha/ext-react';

    export default class MyExample extends Component {

       store = Ext.create('Ext.data.Store', {
            fields: ['name', 'data1', 'data2', 'data3'],
            data: [
             { 'name': 'metric one', 'data1': 10, 'data2': 12, 'data3': 14 },
             { 'name': 'metric two', 'data1': 7, 'data2': 8, 'data3': 16 },
             { 'name': 'metric three', 'data1': 5, 'data2': 2, 'data3': 14 },
             { 'name': 'metric four', 'data1': 2, 'data2': 14, 'data3': 6 },
             { 'name': 'metric five', 'data1': 27, 'data2': 38, 'data3': 36 }
            ]
       })

       render() {
           return (
                <ExtReact>
                    <Cartesian
                        store={this.store}
                        series={[{
                        type: 'area',
                        xField: 'name',
                        yField: ['data1', 'data2', 'data3']
                        }]}
                        axes={[{
                        type: 'category',
                        position: 'bottom',
                        fields: ['name'],
                        title: {
                            text: 'Sample Values',
                            fontSize: 15
                        }
                    }]}
                    />
                </ExtReact>
           )
       }
    }

####Bar

The [[ext:Ext.chart.series.Bar Bar]] series creates a stackable or group-able bar Chart, 
which is typically used to display categorized numeric data that shows progression or 
regression. Note that opposed to the old chart package, a Bar series refers to a 
vertical bar series, or a column series. You can obtain the horizontal configuration by 
setting [[ext:Ext.chart.CartesianChart#cfg-flipXY flipXY]] to **true** the Chart.

A Bar series can either be stacked or grouped. You can set the 
[[ext:Ext.chart.series.Bar-cfg-stacked stacked]] config on the series to **false** in 
order to switch the series to the grouped mode.

    @example packages=[charts,reactor]
    import React, { Component } from 'react';
    import { ExtReact } from '@sencha/ext-react';
    import { Cartesian } from '@sencha/ext-charts';
    
    export default class MyExample extends Component {
    
       store = Ext.create('Ext.data.Store', {
            fields: ['name', 'data1', 'data2', 'data3'],
            data: [
             { 'name': 'metric one', 'data1': 10  },
             { 'name': 'metric two', 'data1': 7   },
             { 'name': 'metric three', 'data1': 5 },
             { 'name': 'metric four', 'data1': 2  },
             { 'name': 'metric five', 'data1': 2  }
            ]
       })
    
       render() {
           return (
              <ExtReact>
                    <Cartesian
                        store={this.store}
                        series={[{
                        type: 'bar',
                        xField: 'name',
                        yField: 'data1'
                        }]}
                        axes={[{
                        type: 'category',
                        position: 'bottom',
                        fields: ['name'],
                        title: {
                            text: 'Sample Values',
                            fontSize: 15
                        }
                    },{
                        type: 'numeric',
                        position: 'left',
                        fields: 'data1'
                    }]}
                    />
              </ExtReact>
           )
       }
    }

####Line
The [[ext:Ext.chart.series.Line Line]] series creates a line Chart, an alternative to a 
bar Chart, for showing categorized numeric data that shows progression or regression. 

    @example packages=[charts,reactor]
    import React, { Component } from 'react';
    import { ExtReact } from '@sencha/ext-react';
    import { Cartesian } from '@sencha/ext-charts';
    
    export default class MyExample extends Component {
    
       store = Ext.create('Ext.data.Store', {
            fields: ['name', 'data1', 'data2', 'data3'],
            data: [
                { name: 'metric one', data1: 14, data2: 19 },
                { name: 'metric two', data1: 16, data2: 7 },
                { name: 'metric three', data1: 11, data2: 25 },
                { name: 'metric four', data1: 6, data2: 4 },
                { name: 'metric five', data1: 36, data2: 12 }
            ]
       })
    
       render() {
           return (
               <ExtReact>
                    <Cartesian
                        store={this.store}
                        interactions={['rotate']}
                        axes={[{
                        type: 'numeric',
                        position: 'left',
                        fields: ['data1'],
                        title: {
                            text: 'Sample Values',
                            fontSize: 15
                        },
                        grid: true,
                        minimum: 0
                        }, {
                        type: 'category',
                        position: 'bottom',
                        fields: ['name'],
                        title: {
                            text: 'Sample Values',
                            fontSize: 15
                        }
                    }]}
                    series={[{
                        type: 'line',
                        style: {
                            stroke: '#30BDA7',
                            lineWidth: 2
                        },
                        xField: 'name',
                        yField: 'data1',
                        marker: {
                            type: 'path',
                            path: ['M', - 4, 0, 0, 4, 4, 0, 0, - 4, 'Z'],
                            stroke: '#30BDA7',
                            lineWidth: 2,
                            fill: 'white'
                        }
                        }, {
                        type: 'line',
                        fill: true,
                        style: {
                            fill: '#96D4C6',
                            fillOpacity: .6,
                            stroke: '#0A3F50',
                            strokeOpacity: .6,
                        },
                        xField: 'name',
                        yField: 'data2',
                        marker: {
                            type: 'circle',
                            radius: 4,
                            lineWidth: 2,
                            fill: 'white'
                        }
                    }]}
                    />
                </ExtReact>
           )
       }
    }

####Pie

The [[ext:Ext.chart.series.Pie Pie]] series creates a pie Chart, a great way to display 
quantitative information for a number of categories that also have a meaning as a whole, 
for example, all 12 months of a given year.

    @example packages=[charts,reactor]
    import React, { Component } from 'react';
    import { ExtReact } from '@sencha/ext-react';
    import { Polar } from '@sencha/ext-charts';
     
    export default class MyExample extends Component {
     
        store = Ext.create('Ext.data.Store', {
            fields: ['name', 'data1'],
            data: [
                 { name: 'metric one', data1: 14 },
                 { name: 'metric two', data1: 16 },
                 { name: 'metric three', data1: 14 },
                 { name: 'metric four', data1: 6 },
                 { name: 'metric five', data1: 36 }
            ]
       })
     
       render() {
           return (
               <ExtReact>
                    <Polar
                        store={this.store}
                        theme="green"
                        interactions={['rotate']}
                        series={[{
                        type: 'pie',
                        angleField: 'data1',
                        donut: 30,
                        label: {
                            field: 'name',
                            display: 'rotate'
                        },
                        }]}
                    />
                </ExtReact>
           )
       }
    }

####Radar

The [[ext:Ext.chart.series.Radar Radar]] series creates a radar Chart, a great way to 
display a comparison of different quantitative values for a constrained number of 
categories. 

    @example packages=[charts,reactor]
    import React, { Component } from 'react';
    import { ExtReact } from '@sencha/ext-react';
    import { Polar } from '@sencha/ext-charts';
     
    export default class MyExample extends Component {
     
       store = Ext.create('Ext.data.Store', {
            fields: ['name', 'data1'],
            data: [
                 { name: 'metric one', data1: 14 },
                 { name: 'metric two', data1: 16 },
                 { name: 'metric three', data1: 14 },
                 { name: 'metric four', data1: 6 },
                 { name: 'metric five', data1: 36 }
            ]
       })
     
       render() {
           return (
               <ExtReact>
                    <Polar
                        store={this.store}
                        theme="green"
                        interactions={['rotate']}
                        series={[{
                        type: 'radar',
                        angleField: 'name',
                        radiusField: 'data1',
                        style: {
                            fillStyle: '#388FAD',
                            fillOpacity: .1,
                            strokeStyle: '#388FAD',
                            strokeOpacity: .8,
                            lineWidth: 1
                        }
                        }]}
                        axes={[{
                        type: 'numeric',
                        position: 'radial',
                        fields: 'data1',
                        style: {
                            estStepSize: 10
                        },
                        grid: true
                        }, {
                        type: 'category',
                        position: 'angular',
                        fields: 'name',
                        style: {
                            estStepSize: 1
                        },
                        grid: true
                    }]}
                    />
                </ExtReact>
           )
       }
    }

####Scatter

The [[ext:Ext.chart.series.Scatter Scatter]] series creates a scatter Chart, which 
enables an application to display more than two variables in the same visualization. 
These variables can be mapped onto **x**, **y** coordinates and also to an element's 
properties, such as radius, size, color, and so on.

    @example packages=[charts,reactor]
    import React, { Component } from 'react';
    import { ExtReact } from '@sencha/ext-react';
    import { Cartesian } from '@sencha/ext-charts';
     
    export default class MyExample extends Component {
     
       store = Ext.create('Ext.data.Store', {
            fields: ['name', 'data1', 'data2', 'data3'],
            data: [
                { name: 'metric one', data1: 14, data2: 19 },
                { name: 'metric two', data1: 16, data2: 7 },
                { name: 'metric three', data1: 11, data2: 25 },
                { name: 'metric four', data1: 6, data2: 4 },
                { name: 'metric five', data1: 36, data2: 12 }
            ]
       })
     
       render() {
           return (
               <ExtReact>
                    <Cartesian
                        store={this.store}
                        interactions={['rotate']}
                        axes={[{
                        type: 'numeric',
                        position: 'left',
                        fields: ['data1'],
                        title: {
                            text: 'Sample Values',
                            fontSize: 15
                        },
                        grid: true,
                        minimum: 0
                        }, {
                        type: 'category',
                        position: 'bottom',
                        fields: ['name'],
                        title: {
                            text: 'Sample Values',
                            fontSize: 15
                        }
                    }]}
                    series={[{
                        type: 'scatter',
                        highlight: {
                            size: 12,
                            radius: 12,
                            fill: '#96D4C6',
                            stroke: '#30BDA7'
                        },
                        fill: true,
                        xField: 'name',
                        yField: 'data2',
                        marker: {
                            type: 'circle',
                            fill: '#30BDA7',
                            radius: 10,
                            lineWidth: 0
                        }
                    }]}
                    />
                </ExtReact>
           )
       }
    }

####Gauge

The [[ext:Ext.chart.series.Gauge Gauge]] series creates a gauge Chart, typically used to 
show progress in a certain variable. In addition to using [[ext:Ext.data.Store stores]], 
you can also set a [[ext:Ext.chart.series.Gauge#cfg-value value]] of the gauge series to 
show the value.     
	
	@example packages=[charts,reactor]
    import React, { Component } from 'react';
    import { ExtReact } from '@sencha/ext-react';
    import { Polar } from '@sencha/ext-charts';
     
    export default class MyExample extends Component {
     
       store = Ext.create('Ext.data.Store', {
            fields: ['name', 'data1', 'data2', 'data3'],
            data: [{
                mph: 65,
                fuel: 50,
                temp: 150,
                rpm: 6000
            }]
       })
     
       render() {
           return (
               <ExtReact>
                    <Polar
                        store={this.store}
                        series={[{
                        type: 'gauge',
                        angleField: 'mph',
                        needle: true,
                        donut: 30
                        }]}
                    />
                </ExtReact>
           )
       }
    }
	
###Interactions

This section introduces the interaction features in the Sencha Charts package. By taking 
advantage of these features, you can create highly interactive Charts that enable users 
to visualize and navigate complex data sets.

####Adding Interactions
To add interactions to a Chart, set the 
[[ext:Ext.chart.AbstractChart#cfg-interactions interactions]] config of the Chart to an 
array of interaction config objects. Each object must be a string or must contain a type 
property matching one of the interaction types described in the subsequent sections. 
Each object may also contain additional config options that are appropriate for a 
particular interaction.

You can define your own interaction by extending the 
[[ext:Ext.chart.interactions.Abstract]] class and registering the name using an alias 
with the **"interaction"** prefix. For example, if you want to create an interaction 
called **"remove"**, create an alias of the class named **"interaction.remove"**, then 
set the `type: 'remove'` in the interaction config.

Here are a couple of examples of basic interactions.

####Item Highlighting

The **"itemhighlight"** interaction enables you to highlight individual data point items 
on the chart.

This interaction is implemented by the [[ext:Ext.chart.interactions.ItemHighlight]] 
class.  See the class documentation for detailed configuration options.

####Rotate
The **"rotate"** interaction enables users to rotate a pie or a radar Chart, by default 
the rotation being performed using a drag gesture. The following code snippet is an 
example of how simple it is to add the **rotate** interaction to your pie or radar 
Charts:

  interactions: ['rotate']

This interaction is implemented by the [[ext:Ext.chart.interactions.Rotate]] class. See 
the class documentation for detailed configuration options.

###Legend Store

The Chart exposes a store to represent legend information collected from series. 
Technically, you can do anything with this store. Again, this architecture can help you 
decouple the legend information from the legend component, so you can use any technology 
and customization for showing the legend at any desired place.

For you convenience, we also provide a default [[ext:Ext.chart.legend.Legend Legend]] component 
that already implements some common and basic functionality for displaying legends. The 
Chart configuration object accepts a `legend` section to enable the default Legend 
component and dock it in the Chart. The default Legend component contains a 
[[ext:Ext.chart.legend.Legend#cfg-dock dock]] config and it is docked on that side.
