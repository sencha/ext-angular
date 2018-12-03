import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {createData} from './createData';

declare var Ext: any;

@Component({
  selector: 'Stacked-component',
  templateUrl: './Stacked.html',
  styles: [``]
})
export class StackedComponent implements OnInit {

  constructor() {
      this.refreshData();
   }



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

   store = Ext.create('Ext.data.Store', {
    fields: ['id', 'g0', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
})

theme:string= 'default';
stacked:number= 0;
zoom:boolean= false;
numRecords:number= 7;

changeTheme = theme => this.theme = theme;

refreshData = () => {
    this.store.loadData(createData(this.numRecords));
}



chart:any;

chartNavReady = function(event) {
    console.log("chartNavReady");
    this.chart = event.ext;
    this.panzoom = this.chart.getInteraction('panzoom');
    this.crosshair = this.chart.getInteraction('crosshair');
}

toggleZoomOnPan = (zoomOnPan) => {
    //Added cmp to access component attributes in ext-react16 [revisit]
    this.chart.getInteraction('panzoom').setZoomOnPan(zoomOnPan);
    this.zoom = zoomOnPan;
}

onStackedToggle = event => {
    //Added cmp to access component attributes in ext-react16 [revisit]
    console.log("onStackedToggle.");
    if(event.value ==  0) {
        this.stacked = 1;
    }
    else {
        this.stacked = 0;
    }
    this.chart.getSeries()[0].setStacked(this.stacked);
    this.chart.redraw();

}


cartesianAxes = [{
    type: 'numeric',
    position: 'left',
    fields: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6']
}, {
    type: 'category',
    position: 'bottom',
    fields: 'name'
}];

cartesianSeries = [{
    type: 'bar',
    xField: 'name',
    yField: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6'],
    title: ['Apples', 'Oranges', 'Bananas', 'Plums', 'Mangos', 'Pears'],
    stacked: true,
    style: {
        minGapWidth: 15
    }
}];

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
}];




}