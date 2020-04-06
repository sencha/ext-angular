declare var Ext: any;
import { Component } from '@angular/core';
import { storeData } from './storeData';

@Component({
  selector: 'SplineMarkers-component',
  templateUrl: './SplineMarkers.html',
  styles: [``]
})
export class SplineMarkersComponent {

  constructor() {
  }

  isPhone: boolean = Ext.os.is.Phone;

  store = Ext.create('Ext.data.Store', {
    fields: ['theta', 'sin', 'cos', 'tan'],
    data: storeData
  });

  theme: string = 'default';

  changeTheme = theme => this.theme = theme;

  cartesianAxes = [{
    type: 'numeric',
    fields: ['sin', 'cos', 'tan'],
    position: 'left',
    grid: true,
    renderer: (axis, label) => Ext.util.Format.number(label, '0.0')
  }, {
    type: 'category',
    title: 'Theta',
    fields: 'theta',
    position: 'bottom',
    style: {
      textPadding: 0 // remove extra padding between labels to make sure no labels are skipped
    },
    grid: true,
    label: {
      rotate: {
        degrees: -45
      }
    }
  }];

  cartesianSeries = [{
    type: 'line',
    xField: 'theta',
    yField: 'sin',
    smooth: true,
    style: {
      lineWidth: 2
    },
    marker: {
      radius: 4
    },
    highlight: {
      fillStyle: '#000',
      radius: 5,
      lineWidth: 2,
      strokeStyle: '#fff'
    }
  }, {
    type: 'line',
    xField: 'theta',
    yField: 'cos',
    smooth: true,
    style: {
      lineWidth: 2
    },
    marker: {
      radius: 4
    },
    highlight: {
      fillStyle: '#000',
      radius: 5,
      lineWidth: 2,
      strokeStyle: '#fff'
    }
  }, {
    type: 'line',
    xField: 'theta',
    yField: 'tan',
    smooth: true,
    style: {
      lineWidth: 2
    },
    marker: {
      radius: 4
    },
    highlight: {
      fillStyle: '#000',
      radius: 5,
      lineWidth: 2,
      strokeStyle: '#fff'
    }
  }];

}