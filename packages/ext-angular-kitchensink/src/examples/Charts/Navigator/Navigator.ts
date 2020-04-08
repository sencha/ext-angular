declare var Ext: any;
import { Component } from '@angular/core';
import { createData } from './createData';

Ext.require([
  'Ext.chart.series.Line',
  'Ext.chart.axis.Numeric',
  'Ext.chart.axis.Time',
  'Ext.chart.navigator.Container'
]);

@Component({
  selector: 'Navigator-component',
  templateUrl: './Navigator.html',
  styles: [``]
})
export class NavigatorComponent {

  constructor() {
  }

  store = Ext.create('Ext.data.Store', {
    fields: ['x', 'sin', 'cos'],
    data: createData()
  });


  theme: string = 'default';
  zoom: boolean = false;

  isPhone: boolean = Ext.os.is.Phone;

  chart: any;

  changeTheme = (themeParam) => {
    this.theme = themeParam;
    this.getChart().setTheme(this.theme);
  };

  chartNavReady = function (event) {
    this.chart = event.cmp.getChart();
  };

  toggleZoomOnPan = (zoomOnPan) => {
    this.getChart().getInteraction('panzoom').setZoomOnPan(zoomOnPan);
    this.zoom = zoomOnPan;
  };

  getChart() {
    return this.chart;
  }

  categoryRenderer = (axis, value) => {
    return Math.round(value * 180 / Math.PI);
  };

  chartNavChart = {
    xtype: 'cartesian',
    downloadServerUrl: 'http://svg.sencha.io',
    reference: 'chart',
    insetPadding: '20 10 10 10',
    platformConfig: {
      phone: {
        insetPadding: '10 5 0 0'
      }
    },
    interactions: {
      type: 'panzoom',
      zoomOnPanGesture: false,
      axes: {
        left: {
          allowPan: false,
          allowZoom: false
        }
      }
    },
    legend: {
      type: 'sprite'
    },
    store: this.store,
    axes: [{
      type: 'numeric',
      position: 'left',
      grid: true
    }, {
      id: 'bottom',
      type: 'category',
      position: 'bottom',
      grid: true,
      renderer: this.categoryRenderer,
      label: {
        rotation: {
          degrees: -90
        }
      }
    }],
    series: [{
      type: 'line',
      title: 'sin',
      xField: 'x',
      yField: 'sin',
      marker: {
        type: 'triangle',
        fx: {
          duration: 200,
          easing: 'backOut'
        }
      },
      highlight: {
        scaling: 2
      }
    }, {
      type: 'line',
      title: 'cos',
      xField: 'x',
      yField: 'cos',
      marker: {
        type: 'cross',
        fx: {
          duration: 200,
          easing: 'backOut'
        }
      },
      highlight: {
        scaling: 2
      }
    }],
  };

}