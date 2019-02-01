declare var Ext: any;
import { Component, OnInit, Input } from '@angular/core';

Ext.require([
  'Ext.chart.theme.Blue',
  'Ext.chart.theme.Green',
  'Ext.chart.theme.Muted',
  'Ext.chart.theme.Red',
  'Ext.chart.theme.Sky',
  'Ext.chart.theme.Yellow'
]);

@Component({
    selector: 'chart-toolbar',
    templateUrl: './ChartToolbar.html',
    styles: [``]
})
export class ChartToolbarComponent implements OnInit {

  @Input() theme: any;
  @Input() stacked: any;
  @Input() zoom: any;
  @Input() onlyMidnight: boolean = false;
  @Input() onThemeChange: any;
  @Input() onToggleZoomOnPan: any;
  @Input() onToggleCrosshair: any;
  @Input() onRefreshClick: any;
  @Input() downloadChartRef: any;
  @Input() onStackGroup: any;

  downloadChart = (chart) => {
    if (Ext.is.Desktop) {
      chart.download({ filename: 'Chart' });
    } else {
      chart.preview();
    }
  }

  show: boolean = false;
  isPhone: boolean;
  supportsTouch: boolean = Ext.supports.Touch;

  ngOnInit() {
    if (Ext.os.is.Phone == true) {this.isPhone = true} else {this.isPhone = false}
  }

  onThemeChangeDefault = () => {this.onThemeChange('default')}
  onThemeChangeMidnight = () => {this.onThemeChange('midnight')}
  onThemeChangeGreen = () => {this.onThemeChange('green')}
  onThemeChangeRed = () => {this.onThemeChange('red')}
  onThemeChangeMuted = () => {this.onThemeChange('muted')}
  onThemeChangeSky = () => {this.onThemeChange('sky')}
  onThemeChangeYellow = () => {this.onThemeChange('yellow')}
  onToggleZoomOnPanPan = () => {this.onToggleZoomOnPan(false)}
  onToggleZoomOnPanZoom = () => {this.onToggleZoomOnPan(true)}
  onToggleCrosshairLocal = () => {this.onToggleCrosshair(true)}

}