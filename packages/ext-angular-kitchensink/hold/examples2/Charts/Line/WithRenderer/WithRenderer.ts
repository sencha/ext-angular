declare var Ext: any;
import { Component } from '@angular/core';
import { createData } from './createData';

@Component({
  selector: 'WithRenderer-component',
  templateUrl: './WithRenderer.html',
  styles: [``]
})
export class WithRendererComponent {

  constructor() {
    this.refreshData();
  }

  isPhone: boolean = Ext.os.is.Phone;

  store = Ext.create('Ext.data.Store', {
    fields: ['id', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
  });

  theme: string = 'default';

  changeTheme = theme => this.theme = theme;

  refreshData = () => {
    this.store.loadData(createData());
  };

  onSeriesRender = (sprite, config, rendererData, index) => {
    const currentRecord = this.store.getAt(index),
      previousRecord = this.store.getAt(index - 1) || currentRecord,
      isUp = currentRecord.get('g1') >= previousRecord.get('g1');

    switch (config.type) {
      case 'marker':
        return {
          strokeStyle: isUp ? 'cornflowerblue' : 'tomato',
          fillStyle: isUp ? 'aliceblue' : 'lightpink'
        };
      case 'line':
        return {
          strokeStyle: isUp ? 'cornflowerblue' : 'tomato',
          fillStyle: isUp ? 'rgba(100, 149, 237, 0.4)' : 'rgba(255, 99, 71, 0.4)'
        };
    }
  };

  cartesianAxes = [{
    type: 'numeric',
    position: 'left',
    fields: ['g1'],
    minimum: 0
  }, {
    type: 'category',
    position: 'bottom',
    fields: 'name'
  }];

  cartesianSeries = [{
    type: 'line',
    xField: 'name',
    yField: 'g1',
    smooth: true,
    style: {
      strokeStyle: 'powderblue',
      fillStyle: 'aliceblue',
      lineWidth: 4
    },
    marker: {
      type: 'circle',
      radius: 10,
      lineWidth: 2
    },
    renderer: this.onSeriesRender
  }];

}