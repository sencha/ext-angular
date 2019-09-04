declare var Ext: any;
import { Component } from '@angular/core';
import { seriesG1Renderer, seriesG2Renderer } from './renderer';
import { createData } from './createData';

@Component({
  selector: 'ColumnWithRenderer-component',
  templateUrl: './ColumnWithRenderer.html',
  styles: [``]
})
export class ColumnWithRendererComponent {

  constructor() {
    this.refreshData();
  }

  isPhone = Ext.os.is.Phone;

  store = Ext.create('Ext.data.Store', {
    fields: ['id', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
  });

  numRecords: number = 10;

  refreshData = () => {
    this.store.loadData(createData(this.numRecords));
  };

  cartesianAxes = [{
    type: 'numeric',
    position: 'left',
    fields: ['g1', 'g2'],
    minimum: 0
  }, {
    type: 'category',
    position: 'bottom',
    fields: 'name'
  }];

  cartesianSeries = [{
    type: 'bar',
    xField: 'name',
    yField: 'g1',
    renderer: seriesG1Renderer,
    style: {
      lineWidth: 2,
      maxBarWidth: 30,
      stroke: 'dodgerblue',
      fill: 'palegreen',
      opacity: 0.6
    }
  }, {
    type: 'bar',
    xField: 'name',
    yField: ['g2'],
    renderer: seriesG2Renderer,
    style: {
      lineWidth: 2,
      maxBarWidth: 12,
      stroke: 'tomato',
      fill: 'lightyellow',
      radius: 20
    }
  }];

}