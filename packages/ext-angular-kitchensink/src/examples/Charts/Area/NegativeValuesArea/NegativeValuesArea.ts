declare var Ext: any;
import { Component } from '@angular/core';

@Component({
  selector: 'NegativeValuesArea-component',
  templateUrl: './NegativeValuesArea.html',
  styles: [``]
})
export class NegativeValuesAreaComponent {

  isPhone = Ext.os.is.Phone;

  constructor() {
  }

  theme: string = 'default';

  store = Ext.create('Ext.data.Store', {
    fields: ['quarter', 'consumer', 'gaming', 'phone', 'corporate'],
    data: [
      {quarter: 'Q1 2012', consumer: 7, gaming: 3, phone: 5, corporate: -7},
      {quarter: 'Q2 2012', consumer: 7, gaming: 4, phone: 6, corporate: -4},
      {quarter: 'Q3 2012', consumer: 8, gaming: 5, phone: 7, corporate: -3},
      {quarter: 'Q4 2012', consumer: 10, gaming: 3, phone: 8, corporate: -1},
      {quarter: 'Q1 2013', consumer: 6, gaming: 1, phone: 7, corporate: -2},
      {quarter: 'Q2 2013', consumer: 7, gaming: -4, phone: 8, corporate: -1},
      {quarter: 'Q3 2013', consumer: 8, gaming: -6, phone: 9, corporate: 0},
      {quarter: 'Q4 2013', consumer: 10, gaming: -3, phone: 11, corporate: 2},
      {quarter: 'Q1 2014', consumer: 6, gaming: 2, phone: 9, corporate: -1},
      {quarter: 'Q2 2014', consumer: 6, gaming: 6, phone: 10, corporate: -6},
      {quarter: 'Q3 2014', consumer: 8, gaming: 9, phone: 12, corporate: -7},
      {quarter: 'Q4 2014', consumer: 9, gaming: 11, phone: 11, corporate: -4}
    ]
  });

  tooltipRenderer = (tooltip, record, item) => {
    let name = '';
    switch (item.field) {
      case 'consumer':
        name = 'Consumer Licensing';
        break;
      case 'gaming':
        name = 'Gaming Hardware';
        break;
      case 'phone':
        name = 'Phone Hardware';
        break;
      case 'corporate':
        name = 'Corporate and others';
        break;
    }
    tooltip.setTitle(name);
    tooltip.setHtml(`${record.get('quarter')}: ${record.get(item.field)}`);
  };

  changeTheme = theme => this.theme = theme;

  cartesianSeries = [{
    type: 'area',
    xField: 'quarter',
    yField: ['gaming', 'consumer', 'phone', 'corporate'],
    title: ['Gaming Hardware', 'Consumer Licensing', 'Phone Hardware', 'Corporate and Other'],
    style: {
      opacity: 0.60
    },
    marker: {
      opacity: 0,
      scaling: 0.01,
      animation: {
        duration: 200,
        easing: 'easeOut'
      }
    },
    highlightCfg: {
      opacity: 1,
      scaling: 1.5
    },
    tooltip: {
      trackMouse: true,
      renderer: this.tooltipRenderer
    }
  }];

  cartesianAxes = [{
    type: 'numeric',
    adjustByMajorUnit: true,
    position: 'left',
    fields: ['consumer', 'gaming', 'phone', 'corporate'],
    grid: true,
    label: {
      fontSize: 14
    }
  }, {
    type: 'category',
    position: 'bottom',
    fields: 'quarter',
    label: {
      fontSize: 14,
      rotate: {
        degrees: -90
      }
    }
  }];

}