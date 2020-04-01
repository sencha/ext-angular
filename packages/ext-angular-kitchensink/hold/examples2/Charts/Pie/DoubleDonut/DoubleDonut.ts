declare var Ext: any;
import { Component } from '@angular/core';
import { innerData, outerData } from './createData';

@Component({
  selector: 'DoubleDonut-component',
  templateUrl: './DoubleDonut.html',
  styles: [``]
})
export class DoubleDonutComponent {

  constructor() {
  }

  isPhone = Ext.os.is.Phone;

  outerStore = Ext.create('Ext.data.Store', {
    data: outerData
  });

  innerStore = Ext.create('Ext.data.Store', {
    data: innerData
  });

  theme: string = 'default';

  changeTheme = theme => this.theme = theme;

  polarSeries = [{
    type: 'pie',
    angleField: 'usage',
    label: {
      field: 'type',
      display: 'inside'
    },
    store: this.innerStore,
    radiusFactor: 70,
    donut: 20,
    tooltip: {
      trackMouse: true,
      renderer: (tooltip, record) => {
        tooltip.setHtml(Ext.String.capitalize(record.get('type')) + ' sector: ' + record.get('usage'));
      }
    }
  }, {
    type: 'pie',
    angleField: 'usage',
    donut: 80,
    highlight: true,
    label: {field: 'provider'},
    tooltip: {
      trackMouse: true,
      renderer: (tooltip, record) => {
        tooltip.setHtml(record.get('provider') + ': ' + record.get('usage'));
      }
    }
  }];


}