declare var Ext: any;
import { Component } from '@angular/core';
import { createData } from './createData';

Ext.require([
  'Ext.chart.series.Bar',
  'Ext.chart.axis.Numeric',
  'Ext.chart.axis.Category'
]);

@Component({
  selector: 'BasicColumn-component',
  templateUrl: './BasicColumn.html',
  styles: [``]
})
export class BasicColumnComponent {

  constructor() {
    this.refresh();
  }

  isPhone = Ext.os.is.Phone;

  store = Ext.create('Ext.data.Store', {
    fields: [
      'month',
      'high',
      'low',
      {
        name: 'highF',
        calculate: function (data) {
          return data.high * 1.8 + 32;
        }
      },
      {
        name: 'lowF',
        calculate: function (data) {
          return data.low * 1.8 + 32;
        }
      }
    ]
  });

  theme: string = 'default';

  refresh = () => {
    this.store.loadData(createData());
  };

  changeTheme = theme => this.theme = theme;

  cartesianSeries = [{
    type: 'bar',
    xField: 'month',
    yField: 'highF'
  }];

  cartesianAxes = [{
    type: 'numeric',
    position: 'left',
    minimum: 30,
    title: 'Temperature in °F'
  }, {
    type: 'category',
    position: 'bottom'
  }];

}