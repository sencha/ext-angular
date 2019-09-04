declare var Ext: any;
import { Component } from '@angular/core';
import { createData } from './createData';

Ext.require([
  'Ext.chart.series.Pie'
]);

@Component({
  selector: 'BasicPie-component',
  templateUrl: './BasicPie.html',
  styles: [``]
})
export class BasicPieComponent {

  constructor() {
    this.refresh();
  }

  isPhone = Ext.os.is.Phone;
  isDesktop = Ext.os.is.Desktop;

  store = Ext.create('Ext.data.Store', {
    fields: ['id', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name'],
  });

  theme: string = 'default';

  changeTheme = theme => this.theme = theme;

  refresh = () => {
    this.store.loadData(createData(5));
  };

}