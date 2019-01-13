import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {generateData} from './generateData';

declare var Ext: any;

@Component({
  selector: 'ThreeDPie-component',
  templateUrl: './3DPie.html',
  styles: [``]
})
export class ThreeDPieComponent implements OnInit {

  constructor() { 
      this.refreshData();
  }

  store = Ext.create('Ext.data.Store', {
    fields: ['id', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
});

theme:string= 'default';
numRecords:number= 9;

refreshData = () => {
    this.store.loadData(generateData(this.numRecords));
}

changeTheme = theme => this.theme = theme;



isPhone = Ext.os.is.Phone;


  ngOnInit() {
  }

  polarSeries = [{
    type: 'pie3d',
    angleField: 'g1',
    donut: 10,
    distortion: 0.6,
    highlight: {
        margin: 40
    },
    thickness: 60,
    platformConfig: {
        phone: {
            thickness: 40
        }
    },
    label: {
        field: 'name',
        calloutColor: 'rgba(0,0,0,0)',
        calloutLine: {
            length: 1
        }
    },
    style: {
        strokeStyle: 'none'
    }
}];

}


