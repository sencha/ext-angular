declare var Ext: any;
import { Component } from '@angular/core';
import { createData } from './createData';

Ext.require([
  'Ext.chart.*',
  'Ext.chart.series.Scatter',
  'Ext.chart.axis.Numeric',
  'Ext.chart.axis.Category'
]);

@Component({
  selector: 'BasicScatter-component',
  templateUrl: './BasicScatter.html',
  styles: [``]
})

export class BasicScatterComponent {

  constructor() {
    this.refresh();
  }

  store = Ext.create('Ext.data.Store', {
    fields: ['id', 'g0', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
  });

  chart: any;

  chartNavReady = function (event) {
    this.chart = event.cmp;
  };

  theme: string = 'default';
  zoom: boolean = false;

  refresh = () => {
    this.store.loadData(createData(25));
  };

  changeTheme = (theme) => {
    this.theme = theme;
  };

  toggleZoomOnPan = (zoomOnPan) => {
    this.chart.getInteraction('panzoom').setZoomOnPan(zoomOnPan);
    this.zoom = zoomOnPan;
  };

  isPhone = Ext.os.is.Phone;

  cartesianSeries = [{
    type: 'scatter',
    xField: 'id',
    yField: 'g1',
    title: 'Group 1',
    highlightCfg: {
      strokeStyle: 'red',
      lineWidth: 5
    },
    marker: {
      type: 'path',
      path: [
        ['M', 0, 1],
        ['L', 1, 0],
        ['L', 0, -1],
        ['L', -1, 0],
        ['Z']
      ],
      scale: 10,
      lineWidth: 2
    }
  }, {
    type: 'scatter',
    xField: 'id',
    yField: 'g2',
    title: 'Group 2',
    highlightCfg: {
      strokeStyle: 'red',
      lineWidth: 5
    },
    marker: {
      type: 'circle',
      radius: 10,
      lineWidth: 2
    }
  }];

  cartesianAxes = [{
    type: 'numeric',
    position: 'left',
    fields: ['g1', 'g2', 'g3', 'g4'],
    visibleRange: [0, 1],
    style: {
      estStepSize: 20
    },
    label: {
      rotate: {
        degrees: -30
      }
    }
  }, {
    type: 'category',
    position: 'bottom',
    visibleRange: [0, 0.5],
    fields: 'id'
  }];


}