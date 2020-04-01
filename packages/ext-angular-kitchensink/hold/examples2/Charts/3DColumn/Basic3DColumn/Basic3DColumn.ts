declare var Ext: any;
import { Component } from '@angular/core';
import {createData} from './createData';

Ext.require([
  'Ext.chart.interactions.PanZoom',
  'Ext.chart.axis.Numeric',
  'Ext.chart.axis.Category',
  'Ext.chart.axis.Numeric3D',
  'Ext.chart.grid.HorizontalGrid3D',
  'Ext.chart.series.Bar3D',
  'Ext.chart.axis.Category3D'
]);

@Component({
  selector: 'Basic3DColumn-component',
  templateUrl: './Basic3DColumn.html',
  styles: [``]
})
export class Basic3DColumnComponent {

  isPhone = Ext.os.is.Phone;
  store = Ext.create('Ext.data.Store', {
    fields: ['id', 'g0', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
  });
  theme:string= 'default';

  constructor() {
    this.refresh();
   }

  refresh = () => {
    this.store.loadData(createData(15));
  }

  changeTheme = theme => this.theme = theme;

  cartesianAxes = [{
    type: 'numeric3d',
    position: 'left',
    fields: ['g1', 'g2', 'g3'],
    grid: true,
    label: {
        rotate: {
            degrees: -30
        }
    }
  }, {
    type: 'category3d',
    position: 'bottom',
    fields: 'name'
  }];

  cartesianSeries = {
    type: 'bar3d',
    xField: 'name',
    yField: ['g1', 'g2', 'g3']
  };

}