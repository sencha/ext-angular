declare var Ext: any;
import { Component } from '@angular/core';
import { storeData } from './storeData';

@Component({
  selector: 'Spline-component',
  templateUrl: './Spline.html',
  styles: [``]
})
export class SplineComponent {

  store = Ext.create('Ext.data.Store', {
    fields: ['theta', 'sin', 'cos', 'tan'],
    data: storeData
  });

  theme: string = 'default';

  changeTheme = theme => this.theme = theme;

  isPhone: boolean = Ext.os.is.Phone;

  constructor() {
  }

  cartesianSeries = [{
    type: 'line',
    xField: 'theta',
    yField: 'sin',
    smooth: true,
    highlight: true,
    showMarkers: false
  }];

  cartesianAxes = [{
    type: 'numeric',
    position: 'left',
    title: 'Sin (Theta)',
    grid: true,
    fields: 'sin',
    label: {
      renderer: (axis, label) => Ext.util.Format.number(label, '0.00')
    }
  }, {
    type: 'numeric',
    position: 'bottom',
    title: 'Theta',
    grid: true,
    fields: 'theta',
    label: {
      textPadding: 0,
      rotate: {
        degrees: -45
      }
    }
  }];

}