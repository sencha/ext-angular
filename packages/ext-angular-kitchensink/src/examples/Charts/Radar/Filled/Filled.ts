declare var Ext: any;
import { Component } from '@angular/core';
import { generateData } from './generateData';

@Component({
  selector: 'Filled-component',
  templateUrl: './Filled.html',
  styles: [``]
})
export class FilledComponent {

  constructor() {
    this.refreshData();
  }

  store = Ext.create('Ext.data.Store', {
    fields: ['id', 'g0', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
  });

  numRecords: number = 15;
  theme: string = 'default';

  refreshData = () => {
    this.store.loadData(generateData(this.numRecords));
  };

  changeTheme = theme => this.theme = theme;

  isPhone = Ext.os.is.Phone;

  polarSeries = [{
    type: 'radar',
    title: 'G1',
    xField: 'id',
    yField: 'g1',
    style: {
      lineWidth: 4,
      fillOpacity: 0.3
    }
  }, {
    type: 'radar',
    title: 'G2',
    xField: 'id',
    yField: 'g2',
    style: {
      lineWidth: 4,
      fillOpacity: 0.3
    }
  }];

  polarAxes = [{
    type: 'numeric',
    position: 'radial',
    fields: ['g1', 'g2'],
    grid: true,
    style: {
      estStepSize: 20
    },
    limits: {
      value: 500,
      line: {
        strokeStyle: 'red',
        lineDash: [6, 3],
        title: {
          text: 'Limit #1'
        }
      }
    }
  }, {
    type: 'category',
    position: 'angular',
    margin: 20,
    fields: 'id',
    grid: true,
    style: {
      estStepSize: 2
    },
    limits: [{
      value: 12,
      line: {
        strokeStyle: 'green',
        lineWidth: 3,
        lineDash: [6, 3],
        title: {
          text: 'Limit #2',
          fontSize: 14
        }
      }
    }, {
      value: 7,
      line: {
        strokeStyle: 'green',
        lineWidth: 3
      }
    }]
  }];

}