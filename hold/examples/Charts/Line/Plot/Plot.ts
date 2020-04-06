declare var Ext: any;
import { Component } from '@angular/core';
import { createData } from './createData';

@Component({
  selector: 'Plot-component',
  templateUrl: './Plot.html',
  styles: [``]
})
export class PlotComponent {

  store = Ext.create('Ext.data.Store', {
    fields: ['x', 'y']
  });

  refreshData = () => {
    this.store.loadData(createData());
  };

  theme: string = 'default';

  isPhone: boolean = Ext.os.is.Phone;

  constructor() {
    this.refreshData();
  }

  changeTheme = theme => {
    this.theme = theme;
  };

  chart: any;

  chartNavReady = function (event) {
    this.chart = event.cmp;
  };

  toggleZoomOnPan = (zoomOnPan) => {
    this.chart.getInteraction('panzoom').setZoomOnPan(zoomOnPan);
  };

  cartesianSeries = [{
    type: 'line',
    xField: 'x',
    yField: 'y',
    style: {
      lineWidth: 2,
      strokeStyle: 'rgb(0, 119, 204)'
    }
  }];

  cartesianAxes = [{
    type: 'numeric',
    position: 'left',
    fields: 'y',
    grid: true,
    minimum: -4,
    maximum: 4,
    title: {
      text: 'f(x)',
      fontSize: 16,
      fillStyle: 'rgb(255, 0, 136)'
    },
    floating: {
      value: 0,
      alongAxis: 1
    }
  }, {
    type: 'numeric',
    position: 'bottom',
    fields: 'x',
    grid: true,
    title: {
      text: 'x',
      fontSize: 16,
      fillStyle: 'rgb(255, 0, 136)'
    },
    floating: {
      value: 0,
      alongAxis: 0
    }
  }];

}