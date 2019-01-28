declare var Ext: any;
import { Component, OnInit } from '@angular/core';
import {createData} from './createData'

Ext.require([
    'Ext.chart.axis.Numeric',
    'Ext.chart.axis.Time',
    'Ext.chart.series.CandleStick',
    'Ext.chart.interactions.Crosshair'
]);
@Component({
  selector: 'Candlestick-component',
  templateUrl: './Candlestick.html',
  styles: [``]
})
export class CandlestickComponent implements OnInit {

  isPhone = Ext.os.is.Phone;
  store = Ext.create('Ext.data.Store', {
    fields: ['time', 'open', 'high', 'low', 'close']
  });
  //show: boolean = false;
  //supportsTouch: boolean = Ext.supports.Touch;
  //onStackGroup: any

  constructor() {
    this.refresh();
  }

  onRefresh = () => {
    this.refresh();
  }

  refresh = () => {
    this.store.loadData(createData(1000));
  }

  ngOnInit() {
    console.log("isPhone : " + this.isPhone);
    //console.log("supportsTouch : " + this.supportsTouch);
    //console.log("show : " + this.show);
    //console.log("onStackGroup : " + this.onStackGroup);
  
  
    // console.log("downloadChartRef : " + this.downloadChartRef);
    // if(this.onToggleZoomOnPan) {
    //     console.log("this.onToggleZoomOnPan true: " + this.onToggleZoomOnPan);
    // }
    // else {
    //     console.log("this.onToggleZoomOnPan false: " + this.onToggleZoomOnPan);
    //     console.log(!this.show && !this.onToggleZoomOnPan && this.supportsTouch)
    // }
  }

  theme:string= 'default';
  zoom:boolean= false;

  panzoom:any;
  crosshair:any;

  chart:any;

  chartNavReady = function(event) {
      console.log("chartNavReady");
      this.chart = event.ext;
      this.panzoom = this.chart.getInteraction('panzoom');
      this.crosshair = this.chart.getInteraction('crosshair');
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

  toolbarItemDefaults = {
    margin: '0 10px 0 0'
  }

  downloadChart = (chart) => {
    console.log("In downloadChart. chart:  " + chart);
    if (Ext.is.Desktop) {
        chart.download({ filename: 'Chart' });
    } else {
        chart.preview();
    }
  }





  // onThemeChangeDefault = () => {
  //   this.onThemeChange('default');
  // }
  // onThemeChangeMidnight = () => {
  //   this.onThemeChange('midnight');
  // }
  // onThemeChangeGreen = () => {
  //   this.onThemeChange('green');
  // }
  // onThemeChangeRed = () => {
  //   this.onThemeChange('red');
  // }
  // onThemeChangeMuted = () => {
  //   this.onThemeChange('muted');
  // }
  // onThemeChangeSky = () => {
  //   this.onThemeChange('sky');
  // }
  // onThemeChangeYellow = () => {
  //   this.onThemeChange('yellow');
  // }

  // onToggleZoomOnPanPan = () => {
  //   this.ToggleZoomOnPan(false)
  // }
  // onToggleZoomOnPanZoom = () => {
  //   this.onToggleZoomOnPan(true)
  // }

  // onToggleCrosshairLocal = () => {
  //   this.onToggleCrosshair(true);
  // }

}

