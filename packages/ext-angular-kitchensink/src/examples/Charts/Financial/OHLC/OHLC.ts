declare var Ext: any;
import { Component } from '@angular/core';
import {createData} from './createData';

Ext.require([
    'Ext.chart.axis.Numeric',
    'Ext.chart.axis.Time',
    'Ext.chart.series.CandleStick',
    'Ext.chart.interactions.Crosshair'
]);
@Component({
  selector: 'OHLC-component',
  templateUrl: './OHLC.html',
  styles: [``]
})
export class OHLCComponent {

  constructor() {
    this.refresh();
   }

   isPhone = Ext.os.is.Phone;
   store = Ext.create('Ext.data.Store', {
    fields: ['time', 'open', 'high', 'low', 'close']
  });

  theme:string= 'default';
  zoom:boolean= false;

  panzoom:any;
  crosshair:any;

  chart:any;

  chartNavReady = function(event) {
      this.chart = event.cmp;
      this.panzoom = this.chart.getInteraction('panzoom');
      this.crosshair = this.chart.getInteraction('crosshair');
  }


  refresh = () => {
      this.store.loadData(createData(1000));
  }

  changeTheme = theme => this.theme = theme;

  toggleZoomOnPan = (zoomOnPan) => {
      this.toggleCrosshair(false);
      this.panzoom.setZoomOnPan(zoomOnPan);
      this.zoom = zoomOnPan;
  }

  toggleCrosshair = (crosshair) => {
      this.panzoom.setEnabled(!crosshair);
      this.crosshair.setEnabled(crosshair);
      if(crosshair){
          this.crosshair = crosshair;
      }
  }


  cartesianAxes = [{
      type: 'numeric',
      fields: ['open', 'high', 'low', 'close'],
      position: 'left',
      maximum: 1000,
      minimum: 0
  }, {
      type: 'time',
      fields: ['time'],
      position: 'bottom',
      visibleRange: [0, 0.3],
      style: {
          axisLine: false
      }
  }];

  cartesianSeries = {
      type: 'candlestick',
      xField: 'time',
      openField: 'open',
      highField: 'high',
      lowField: 'low',
      closeField: 'close',
      style: {
          ohlcType: 'ohlc',
          barWidth: 10,
          opacity: 0.9,
          dropStyle: {
              fill: 'rgb(237,123,43)',
              stroke: 'rgb(237,123,43)'
          },
          raiseStyle: {
              fill: 'rgb(55,153,19)',
              stroke: 'rgb(55,153,19)'
          }
      },
      aggregator: {
          strategy: 'time'
      }
  };


  cartesianInteractions = [{
      type: 'panzoom',
      axes: {
          left: {
              allowPan: false,
              allowZoom: false
          },
          bottom: {
              allowPan: true,
              allowZoom: true
          }
      }
  }, {
      type: 'crosshair',
      axes: {
          label: {
              fillStyle: 'white'
          },
          rect: {
              fillStyle: '#344459',
              opacity: 0.7,
              radius: 5
          }
      }
  }];

}