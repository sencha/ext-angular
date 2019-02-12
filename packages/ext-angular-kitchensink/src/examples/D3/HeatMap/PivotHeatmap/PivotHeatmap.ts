declare var Ext: any;
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {refreshRandomData} from './createData';

@Component({
  selector: 'PivotHeatmap-component',
  templateUrl: './PivotHeatmap.html',
  styles: [``]
})
export class PivotHeatmapComponent implements OnInit {

  constructor() { 
    this.refreshData();
  }

 legendVar = {}

  ngOnInit() {
      if(Ext.platformTags.phone) {
          this.legendVar = {
            docked: 'right',
            padding: 50,
            items: {
                count: 10,
                slice: [1],
                reverse: true,
                size: {
                    x: 60,
                    y: 30
                }
            }
        }
      }
   }

   isPhone = Ext.platformTags.phone ;

   store = Ext.create('Ext.data.Store', {
    fields: [
        {name: 'employee', type: 'string'},
        {name: 'dayNumber', type: 'int'},
        {name: 'day', type: 'string'},
        {name: 'sales', type: 'number'}
    ]
  })

  refreshData = () => {
      this.store.loadData(refreshRandomData());
  }

  onTooltip = (component, tooltip, datum) => {
      const d = datum.data,
          x = component.getXAxis().getField(),
          y = component.getYAxis().getField(),
          z = component.getColorAxis().getField();

      tooltip.setHtml(
          '<div>X: ' + d[x] + '</div>' +
          '<div>Y: ' + d[y] + '</div>' +
          '<div>Z: ' + d[z] + '</div>' +
          '<div>Records: ' + d.records + '</div>'
      );
  }

  theme:string= 'default';

  changeTheme = (select, choice) => {
      this.theme = choice.get('value')
  }

  matrixVar = {
      store: this.store,
      leftAxis: {
          dataIndex: 'employee',
          header: !Ext.platformTags.phone?  'Employee' : '',
          sortable: false
      },
      topAxis: {
          dataIndex: 'day',
          sortIndex: 'dayNumber',
          header: 'Day'
      },
      aggregate: {
          dataIndex: 'sales',
          aggregator: 'sum'
      }
  };





}