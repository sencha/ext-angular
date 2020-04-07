declare var Ext: any;
import { Component } from '@angular/core';
import { generateData } from './generateData';

@Component({
  selector: 'BasicMarkers-component',
  templateUrl: './BasicMarkers.html',
  styles: [``]
})
export class BasicMarkersComponent {

  store = Ext.create('Ext.data.Store', {
    fields: ['id', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
  });


  constructor() {
    this.refreshData();
  }

  theme: string = 'default';
  numRecords: number = 10;

  changeTheme = theme => {
    this.theme = theme;
  };

  refreshData = () => {
    this.store.loadData(generateData(this.numRecords));
  };

  isPhone: boolean = Ext.os.is.Phone;

  cartesianSeries = [{
    type: 'line',
    xField: 'name',
    yField: 'g1',
    fill: true,
    title: 'Square',
    style: {
      smooth: true,
      miterLimit: 3,
      lineCap: 'miter',
      opacity: 0.7,
      lineWidth: 8
    },
    highlight: {
      scale: 0.9
    },
    marker: {
      type: 'image',
      src: 'assets/resources/images/square.png',
      width: 46,
      height: 46,
      x: -23,
      y: -23,
      scale: 0.7,
      fx: {
        duration: 200
      }
    }
  }, {
    type: 'line',
    xField: 'name',
    yField: 'g2',
    title: 'Circle',
    style: {
      opacity: 0.7,
      lineWidth: 8
    },
    highlight: {
      scale: 0.9
    },
    marker: {
      type: 'image',
      src: 'assets/resources/images/circle.png',
      width: 46,
      height: 46,
      x: -23,
      y: -23,
      scale: 0.7,
      fx: {
        duration: 200
      }
    }
  }, {
    type: 'line',
    xField: 'name',
    yField: 'g3',
    title: 'Polygon',
    style: {
      opacity: 0.7,
      lineWidth: 8
    },
    highlight: {
      scale: 0.9
    },
    marker: {
      type: 'image',
      src: 'assets/resources/images/pentagon.png',
      width: 48,
      height: 48,
      x: -24,
      y: -24,
      scale: 0.7,
      fx: {
        duration: 200
      }
    }
  }];


  cartesianAxes = [{
    type: 'numeric',
    position: 'left',
    fields: ['g1', 'g2', 'g3'],
    minimum: 0
  }, {
    type: 'category',
    position: 'bottom',
    visibleRange: [0, 0.5],
    fields: 'name'
  }];

  cartesianInteractions = [{
    type: 'panzoom',
  }, 'itemhighlight'];

}