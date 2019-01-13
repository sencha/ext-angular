import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {generateData} from './generateData';

declare var Ext: any;

@Component({
  selector: 'Multiaxis-component',
  templateUrl: './Multiaxis.html',
  styles: [``]
})
export class MultiaxisComponent implements OnInit {

    isPhone = Ext.os.is.Phone;

  constructor() {

    this.refreshData();
   }



  ngOnInit() {
  }

  store = Ext.create('Ext.data.Store', {
    fields: [
        'month',
        'high',
        'low',
        {
            name: 'highF',
            calculate: function (data) {
                return data.high * 1.8 + 32;
            }
        },
        {
            name: 'lowF',
            calculate: function (data) {
                return data.low * 1.8 + 32;
            }
        }
    ]
})

theme:string= 'default';

refreshData = () => {
    this.store.loadData(generateData());
}

changeTheme = theme => this.theme=theme;

onMultiAxisLabelRender = (axis, label, layoutContext) => {
     return label === 'Jan' ? '' : label;
}


polarSeries = [{
    type: 'radar',
    angleField: 'month',
    radiusField: 'high',
    style: {
        globalAlpha: 0.7
    }
}];

polarAxes = [{
    type: 'category',
    position: 'angular',
    id: 'main-angular-axis',
    grid: true,
    style: {
        majorTickSize: 20,
        strokeStyle: 'rgb(73,112,142)'
    }
}, {
    type: 'category',
    position: 'angular',
    linkedTo: 'main-angular-axis',
    renderer: this.onMultiAxisLabelRender,
    floating: {
        value: 20,
        alongAxis: 'radial-axis'
    }
}, {
    type: 'numeric',
    id: 'radial-axis',
    position: 'radial',
    label: {
        fontWeight: 'bold'
    },
    floating: {
        value: 'Jan',
        alongAxis: 'main-angular-axis'
    }
}];



}