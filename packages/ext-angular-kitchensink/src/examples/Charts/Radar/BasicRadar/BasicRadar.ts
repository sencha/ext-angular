declare var Ext: any;
import { Component } from '@angular/core';
import { data } from './data';

Ext.require([
  'Ext.chart.series.Scatter',
  'Ext.chart.axis.Numeric',
  'Ext.chart.axis.Category'
]);


@Component({
  selector: 'BasicRadar-component',
  templateUrl: './BasicRadar.html',
  styles: [``]
})
export class BasicRadarComponent {

  constructor() {
  }

  store = Ext.create('Ext.data.Store', {
    data
  });

  theme: string = 'default';

  changeTheme = theme => this.theme = theme;

  isPhone = Ext.os.is.Phone;


  polarAxes = [{
    type: 'numeric',
    position: 'radial',
    fields: 'data1',
    renderer: (axis, label, layoutContext) => layoutContext.renderer(label) + '%',
    grid: true,
    minimum: 0,
    maximum: 25,
    majorTickSteps: 4
  }, {
    type: 'category',
    position: 'angular',
    grid: true
  }];

  polarSeries = [{
    type: 'radar',
    angleField: 'month',
    radiusField: 'data1',
    style: {
      opacity: 0.80
    },
    highlight: {
      fillStyle: '#000',
      lineWidth: 2,
      strokeStyle: '#fff'
    }
  }];


}