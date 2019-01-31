declare var Ext: any;
import { Component } from '@angular/core';
import { createData } from './createData';

Ext.require([
  'Ext.chart.interactions.PanZoom',
  'Ext.chart.series.Bar',
  'Ext.chart.axis.Numeric',
  'Ext.chart.axis.Category'
]);

@Component({
  selector: 'StackedBar-component',
  templateUrl: './StackedBar.html',
  styles: [``]
})
export class StackedBarComponent {

  constructor() {
    this.refresh();
  }

  isPhone = Ext.os.is.Phone;

  store = Ext.create('Ext.data.Store', {
    fields: ['id', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
  });

  theme: 'default';

  refresh = () => {
    this.store.loadData(createData(15));
  };

  changeTheme = theme => this.theme = theme;

  cartesianAxes = [{
    type: 'numeric',
    position: 'bottom',
    fields: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6'],
    grid: {
      even: {
        lineWidth: 1
      },
      odd: {
        stroke: '#fff'
      }
    },
    label: {
      rotate: {
        degrees: -90
      }
    },
    maxZoom: 1
  }, {
    type: 'category',
    position: 'left',
    fields: 'name',
    maxZoom: 4
  }];

  cartesianSeries = [{
    type: 'bar',
    xField: 'name',
    yField: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6']
  }];

}