declare var Ext: any;
import { Component } from '@angular/core';
import { createData } from './createData';

Ext.require([
  'Ext.chart.theme.Midnight',
  'Ext.chart.theme.Green',
  'Ext.chart.theme.Muted',
  'Ext.chart.theme.Purple',
  'Ext.chart.theme.Sky',
  'Ext.chart.series.Area',
  'Ext.chart.axis.Numeric',
  'Ext.chart.axis.Category'
]);

@Component({
  selector: 'BasicArea-component',
  templateUrl: './BasicArea.html',
  styles: [``]
})
export class BasicAreaComponent {

  constructor() {
    this.refresh();
  }

  isPhone = Ext.os.is.Phone;

  store = Ext.create('Ext.data.Store', {
    fields: ['id', 'g0', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name'],
  });

  theme: string = 'default';

  refresh = () => {
    this.store.loadData(createData(25));
  };

  changeTheme = (theme) => {
    this.theme = theme;
  };

  cartesianSeries = [{
    type: 'area',
    xField: 'name',
    yField: ['g1', 'g2', 'g3', 'g4', 'g5'],
    title: ['G1', 'G2', 'G3', 'G4', 'G5'],
    style: {
      stroke: 'black',
      lineWidth: 2,
      fillOpacity: 0.8
    }
  }];

  cartesianAxes = [
    {
      type: 'numeric',
      position: 'left',
      fields: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6'],
      label: {
        rotate: {
          degrees: -30
        }
      },
      grid: {
        odd: {
          fill: '#e8e8e8'
        }
      },
      title: {
        text: 'Summation of Data',
        fontSize: 20
      }
    },
    {
      type: 'category',
      position: 'bottom',
      fields: 'name',
      grid: true,
      visibleRange: [0, 0.25],
      title: {
        text: this.theme,
        fontSize: 20
      }
    }];

}