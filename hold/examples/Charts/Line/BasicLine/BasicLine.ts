declare var Ext: any;
import { Component } from '@angular/core';
import { data } from './data';

Ext.require([
  'Ext.chart.series.Line',
  'Ext.chart.axis.Numeric',
  'Ext.chart.axis.Time'
]);

@Component({
  selector: 'BasicLine-component',
  templateUrl: './BasicLine.html',
  styles: [``]
})
export class BasicLineComponent {

  constructor() {
  }

  store = Ext.create('Ext.data.Store', {
    data
  });


  theme: string = 'default';

  changeTheme = theme => {
    this.theme = theme;
  };

  isPhone = Ext.os.is.Phone;

  cartesianAxes = [{
    type: 'numeric',
    position: 'left',
    fields: 'value',
    title: 'USD to Euro'
  }, {
    type: 'time',
    dateFormat: 'Y-m-d',
    position: 'bottom',
    fields: 'time',
    title: 'Date'
  }];

  cartesianSeries = {
    type: 'line',
    xField: 'time',
    yField: 'value'
  };

}