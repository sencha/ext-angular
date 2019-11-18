declare var Ext: any;
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'NegativeValues-component',
  templateUrl: './NegativeValues.html',
  styles: [``]
})
export class NegativeValuesComponent {

  store = Ext.create('Ext.data.Store', {
    fields: ['quarter', 'consumer', 'gaming', 'phone', 'corporate'],
    data: [
      { quarter: 'Q1 2012', consumer: 7,  gaming: 3,  phone: 5,  corporate: -7},
      { quarter: 'Q2 2012', consumer: 7,  gaming: 4,  phone: 6,  corporate: -4},
      { quarter: 'Q3 2012', consumer: 8,  gaming: 5,  phone: 7,  corporate: -3},
      { quarter: 'Q4 2012', consumer: 10,  gaming: 3,  phone: 8,  corporate: -1},
      { quarter: 'Q1 2013', consumer: 6,  gaming: 1,  phone: 7,  corporate: -2},
      { quarter: 'Q2 2013', consumer: 7,  gaming: -4, phone: 8,  corporate: -1},
      { quarter: 'Q3 2013', consumer: 8,  gaming: -6, phone: 9,  corporate: 0 },
      { quarter: 'Q4 2013', consumer: 10, gaming: -3,  phone: 11, corporate: 2 },
      { quarter: 'Q1 2014', consumer: 6,  gaming: 2,  phone: 9,  corporate: -1},
      { quarter: 'Q2 2014', consumer: 6,  gaming: 6,  phone: 10, corporate: -6},
      { quarter: 'Q3 2014', consumer: 8,  gaming: 9,  phone: 12, corporate: -7},
      { quarter: 'Q4 2014', consumer: 9,  gaming: 11, phone: 11, corporate: -4}
    ]
  })
  isPhone = Ext.os.is.Phone;
  chart:any;

  constructor(private cdref: ChangeDetectorRef) { }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  chartNavReady = function(event) {
    this.chart = event.cmp;
  }

  onSeriesRender = (sprite, config, data, index) => {
    const isNegative = data.store.getAt(index).get('gaming') < 0;
    if (isNegative) {
      return {
        fillStyle: '#974144' // dark red
      };
    }
  }

  cartesianSeries = [{
    type: 'bar3d',
    xField: 'quarter',
    yField: 'gaming',
    highlight: true,
    renderer: this.onSeriesRender
  }];


  cartesianAxes = [{
    type: 'numeric3d',
    position: 'left',
    fields: 'gaming',
    grid: {
      odd: {
        fillStyle: 'rgba(255, 255, 255, 0.06)'
      },
      even: {
        fillStyle: 'rgba(0, 0, 0, 0.05)'
      }
    }
  }, {
    type: 'category3d',
    position: 'bottom',
    fields: 'quarter',
    grid: true,
    label: {
      rotate: {
        degrees: -60
      }
    }
  }];

}