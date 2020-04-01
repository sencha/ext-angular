declare var Ext: any;
import { Component } from '@angular/core';
import { generateData } from './generateData';

Ext.require('Ext.chart.interactions.ItemEdit');

@Component({
  selector: 'CustomIcons-component',
  templateUrl: './CustomIcons.html',
  styles: [``]
})
export class CustomIconsComponent {

  constructor() {
    this.refreshData();
  }

  store = Ext.create('Ext.data.Store', {
    fields: ['id', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
  });


  numRecords: number = 25;
  theme: string = 'default';

  refreshData = () => {
    this.store.loadData(generateData(this.numRecords));
  };

  changeTheme = themep => {
    this.theme = themep;
  };

  cartesianSeries = [{
    type: 'scatter',
    xField: 'id',
    yField: 'g1',
    title: 'Group 1',
    highlight: true,
    marker: {
      type: 'path',
      scale: 10,
      lineWidth: 2,
      path: [
        ['M', 0, 1],
        ['L', 1, 0],
        ['L', 0, -1],
        ['L', -1, 0],
        ['Z']
      ]
    }
  }, {
    type: 'scatter',
    xField: 'id',
    yField: 'g2',
    title: 'Group 2',
    highlight: true,
    marker: {
      type: 'path',
      scalingX: 0.1,
      scalingY: -0.1,
      path: [
        ['M', 0, -145],
        ['L', 48, -50],
        ['L', 153, -36],
        ['L', 76, 39],
        ['L', 93, 143],
        ['L', 0, 95],
        ['L', -93, 143],
        ['L', -76, 39],
        ['L', -153, -36],
        ['L', -48, -50],
        ['Z']
      ]
    }
  }];

  isPhone: boolean = Ext.os.is.Phone;

  cartesianAxes = [{
    type: 'numeric',
    position: 'left',
    fields: ['g1', 'g2', 'g3', 'g4'],
    label: {
      rotate: {
        degrees: -30
      }
    }
  }, {
    type: 'category',
    position: 'bottom',
    fields: 'id'
  }];


}