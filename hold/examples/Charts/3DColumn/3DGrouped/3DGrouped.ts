declare var Ext: any;
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'ThreeDGrouped-component',
  templateUrl: './3DGrouped.html',
  styles: [``]
})
export class ThreeDGroupedComponent {

  constructor(private cdref: ChangeDetectorRef) { }

  ngAfterContentChecked() {
  this.cdref.detectChanges();
  }

  isPhone = Ext.os.is.Phone;

  store = Ext.create('Ext.data.Store', {
    fields: ['quarter', '2013', '2014'],
    data: [
        { quarter: 'Q1', 2013: 42000, 2014: 68000},
        { quarter: 'Q2', 2013: 50000, 2014: 85000},
        { quarter: 'Q3', 2013: 53000, 2014: 72000},
        { quarter: 'Q4', 2013: 63000, 2014: 89000}
    ]
  })

  onAxisLabelRender = (axis, label, layoutContext) => {
      // Custom renderer overrides the native axis label renderer.
      // Since we don't want to do anything fancy with the value
      // ourselves except adding a thousands separator, but at the same time
      // don't want to loose the formatting done by the native renderer,
      // we let the native renderer process the value first.
      const value = layoutContext.renderer(label) / 1000;
      return value === 0 ? '$0' : Ext.util.Format.number(value, '$0K');
  }

  chart:any;

  chartNavReady = function(event) {
      this.chart = event.cmp;
  }


  cartesianSeries = [{
    type: 'bar3d',
    stacked: false,
    title: ['Previous Year', 'Current Year'],
    xField: 'quarter',
    yField: ['2013', '2014'],
    label: {
        field: ['2013', '2014'],
        display: 'insideEnd',
        renderer: value => Ext.util.Format.number(value / 1000, '$0K')
    },
    highlight: true
  }]

  cartesianAxes = [{
    type: 'numeric3d',
    position: 'left',
    fields: ['2013', '2014'],
    grid: true,
    title: 'Sales in USD',
    renderer: this.onAxisLabelRender
  }, {
    type: 'category3d',
    position: 'bottom',
    fields: 'quarter',
    title: 'Quarter',
    grid: true
  }];

  cartesianCaptions = {
    title: {
        text: 'Sales in Last Two Years'
    },
    subtitle: {
        text: 'Quarter-wise comparison',
    }
  };

}