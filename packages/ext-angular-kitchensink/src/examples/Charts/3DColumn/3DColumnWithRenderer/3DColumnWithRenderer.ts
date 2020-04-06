declare var Ext: any;
import { Component, ChangeDetectorRef } from '@angular/core';
import {colors, storeData} from './data';

@Component({
  selector: 'ThreeDColumnWithRenderer-component',
  templateUrl: './3DColumnWithRenderer.html',
  styles: [``]
})
export class ThreeDColumnWithRendererComponent {

  constructor(private cdref: ChangeDetectorRef) { }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  isPhone = Ext.os.is.Phone;
  store = Ext.create('Ext.data.Store', {
    fields: ['month', 'data1', 'data2', 'data3', 'data4', 'other'],
    data: storeData
  })

  chart:any;
  chartNavReady = function(event) {
    this.chart = event.cmp;
  }

  cartesianSeries = [
    {
      type: 'bar3d',
      xField: 'month',
      yField: 'data3',
      label: {
        field: 'data3',
        display: 'over'
      },
      highlight: {
        fillStyle: 'rgba(43, 130, 186, 1.0)',
        strokeStyle: 'rgba(0, 0, 0, .2)',
        showStroke: true,
        lineWidth: 2
      },
      tooltip: {
        trackMouse: true,
        showDelay: 0,
        dismissDelay: 0,
        hideDelay: 0,
        renderer: (tooltip, record, item) => { tooltip.setHtml(record.get('month') + ': ' + record.get('data3') + '%'); }
      },
      renderer: (sprite, config, data, index) => {
        return {
          fillStyle: colors[index],
          strokeStyle: index % 2 ? 'none' : 'black',
          opacity: index % 2 ? 1 : 0.5
        };
      }
    }
  ];

  cartesianAxes= [
    {
      type: 'numeric3d',
      fields: 'data3',
      position: 'left',
      grid: true,
      renderer: (axis, label, layoutContext) => layoutContext.renderer(label) + '%'
    },
    {
      type: 'category3d',
      fields: 'month',
      position: 'bottom',
      grid: true,
      label: {
        rotate: {
          degrees: -60
        }
      }
    }
  ];

}